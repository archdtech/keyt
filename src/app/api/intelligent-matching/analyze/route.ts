import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { founderProfile, companyProfile } = body;

    // Initialize ZAI SDK
    const zai = await ZAI.create();

    // Create matching analysis prompt
    const matchingPrompt = `
    You are an expert venture capital analyst specializing in founder-company matching. 
    Analyze the compatibility between the following founder and company profiles:

    FOUNDER PROFILE:
    ${JSON.stringify(founderProfile, null, 2)}

    COMPANY PROFILE:
    ${JSON.stringify(companyProfile, null, 2)}

    Please provide a comprehensive analysis including:
    1. Overall compatibility score (0-100)
    2. Key strengths and alignment areas
    3. Potential skill gaps or risks
    4. Recommendations for success
    5. Market timing assessment

    Format your response as JSON with the following structure:
    {
      "overallScore": number,
      "strengths": ["string"],
      "gaps": ["string"],
      "recommendations": ["string"],
      "marketTiming": "excellent|good|moderate|poor",
      "riskFactors": ["string"],
      "successProbability": number
    }
    `;

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are an expert venture capital analyst providing data-driven founder-company compatibility analysis.'
        },
        {
          role: 'user',
          content: matchingPrompt
        }
      ],
      temperature: 0.3,
      max_tokens: 2000
    });

    const analysisResult = JSON.parse(completion.choices[0].message.content);

    return NextResponse.json({
      success: true,
      analysis: analysisResult,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in intelligent matching analysis:', error);
    return NextResponse.json(
      { error: 'Failed to perform matching analysis' },
      { status: 500 }
    );
  }
}