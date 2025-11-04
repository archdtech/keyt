import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import ZAI from 'z-ai-web-dev-sdk';

export async function GET(request: NextRequest) {
  try {
    // REAL DATABASE: Fetch actual applications from database
    const applications = await db.application.findMany({
      orderBy: {
        submittedAt: 'desc'
      }
    });

    // Transform database records to match frontend interface
    const transformedApplications = applications.map(app => ({
      id: app.id,
      founderName: app.founderName,
      email: app.email,
      companyName: app.companyName,
      description: app.description,
      stage: app.stage,
      industry: app.industry,
      location: app.location,
      teamSize: app.teamSize,
      fundingGoal: app.fundingGoal,
      submittedAt: app.submittedAt.toISOString(),
      status: app.status,
      score: app.score,
      strengths: app.strengths ? JSON.parse(app.strengths) : [],
      concerns: app.concerns ? JSON.parse(app.concerns) : []
    }));

    return NextResponse.json(transformedApplications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { applicationData } = body;

    // Validate required fields
    const requiredFields = ['founderName', 'email', 'companyName', 'description', 'stage', 'industry', 'location', 'teamSize', 'fundingGoal'];
    for (const field of requiredFields) {
      if (!applicationData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Initialize ZAI SDK for automated scoring
    const zai = await ZAI.create();

    // Create scoring prompt
    const scoringPrompt = `
    You are an expert venture capital analyst. Score the following startup application on a scale of 0-100 based on:
    1. Team quality and experience (25%)
    2. Market opportunity (25%)
    3. Product/technology innovation (25%)
    4. Business model and traction (15%)
    5. Founder-market fit (10%)

    APPLICATION DATA:
    ${JSON.stringify(applicationData, null, 2)}

    Provide your response as JSON:
    {
      "overallScore": number,
      "teamScore": number,
      "marketScore": number,
      "productScore": number,
      "businessScore": number,
      "fitScore": number,
      "strengths": ["string"],
      "concerns": ["string"],
      "recommendation": "strong_yes|yes|maybe|no|strong_no",
      "reasoning": "string"
    }
    `;

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are an expert venture capital analyst providing objective startup evaluations.'
        },
        {
          role: 'user',
          content: scoringPrompt
        }
      ],
      temperature: 0.2,
      max_tokens: 1500
    });

    const scoringResult = JSON.parse(completion.choices[0].message.content);

    // Create new application record in REAL database
    const newApplication = await db.application.create({
      data: {
        founderName: applicationData.founderName,
        email: applicationData.email,
        companyName: applicationData.companyName,
        description: applicationData.description,
        stage: applicationData.stage,
        industry: applicationData.industry,
        location: applicationData.location,
        teamSize: parseInt(applicationData.teamSize),
        fundingGoal: parseInt(applicationData.fundingGoal),
        status: 'submitted',
        score: scoringResult.overallScore,
        strengths: JSON.stringify(scoringResult.strengths),
        concerns: JSON.stringify(scoringResult.concerns)
      }
    });

    return NextResponse.json({
      success: true,
      application: {
        id: newApplication.id,
        ...applicationData,
        submittedAt: newApplication.submittedAt.toISOString(),
        status: newApplication.status,
        score: newApplication.score,
        strengths: scoringResult.strengths,
        concerns: scoringResult.concerns
      },
      message: 'Application submitted successfully'
    });

  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}