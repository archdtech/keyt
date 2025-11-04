import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function GET(request: NextRequest) {
  try {
    // Mock campaigns data
    const campaigns = [
      {
        id: '1',
        name: 'Welcome Series',
        description: 'Automated welcome sequence for new founders',
        status: 'active',
        totalSent: 245,
        openRate: 68,
        clickRate: 32,
        replyRate: 12,
        createdAt: '2024-01-01T00:00:00Z',
        lastSent: '2024-01-15T14:30:00Z',
        triggers: ['new_signup'],
        templates: [
          {
            id: 'welcome-1',
            name: 'Welcome to Keyteller',
            subject: 'Welcome! Let\'s build something amazing together',
            delay: 0,
            status: 'active'
          },
          {
            id: 'welcome-2',
            name: 'Founder Resources',
            subject: 'Resources to accelerate your journey',
            delay: 2,
            status: 'active'
          }
        ]
      },
      {
        id: '2',
        name: 'Founder Matching',
        description: 'Notify founders about potential matches',
        status: 'active',
        totalSent: 189,
        openRate: 72,
        clickRate: 41,
        replyRate: 18,
        createdAt: '2024-01-05T00:00:00Z',
        lastSent: '2024-01-14T16:45:00Z',
        triggers: ['high_match_score'],
        templates: [
          {
            id: 'match-1',
            name: 'Potential Match Found',
            subject: 'Exciting match opportunity for {{companyName}}',
            delay: 0,
            status: 'active'
          }
        ]
      }
    ];

    return NextResponse.json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return NextResponse.json(
      { error: 'Failed to fetch campaigns' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { campaignData, action } = body;

    if (action === 'generate_content') {
      // Initialize ZAI SDK for content generation
      const zai = await ZAI.create();

      const contentPrompt = `
      You are an expert email marketing copywriter for a venture studio. 
      Generate personalized email content for the following campaign:

      CAMPAIGN DETAILS:
      ${JSON.stringify(campaignData, null, 2)}

      Create compelling email copy that:
      1. Speaks directly to founders' needs and aspirations
      2. Highlights the value proposition of our venture studio
      3. Encourages engagement and next steps
      4. Maintains a professional yet approachable tone

      Provide your response as JSON:
      {
        "subject": "Compelling email subject line",
        "body": "Full email body content with personalization placeholders",
        "callToAction": "Clear call-to-action text",
        "personalizationTips": ["string"]
      }
      `;

      const completion = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are an expert email marketing copywriter specializing in venture studio communications.'
          },
          {
            role: 'user',
            content: contentPrompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      });

      const generatedContent = JSON.parse(completion.choices[0].message.content);

      return NextResponse.json({
        success: true,
        content: generatedContent,
        message: 'Email content generated successfully'
      });
    }

    // Handle campaign creation/update
    const newCampaign = {
      id: Date.now().toString(),
      ...campaignData,
      createdAt: new Date().toISOString(),
      status: 'draft',
      totalSent: 0,
      openRate: 0,
      clickRate: 0,
      replyRate: 0
    };

    return NextResponse.json({
      success: true,
      campaign: newCampaign,
      message: 'Campaign created successfully'
    });

  } catch (error) {
    console.error('Error managing campaign:', error);
    return NextResponse.json(
      { error: 'Failed to manage campaign' },
      { status: 500 }
    );
  }
}