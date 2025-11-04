import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Mock top matches data
    const topMatches = [
      {
        id: '1',
        founderName: 'Sarah Chen',
        companyName: 'HealthAI Solutions',
        matchScore: 92,
        keyStrengths: ['AI/ML', 'Healthcare', 'Leadership', 'Fundraising'],
        gaps: ['Sales', 'Marketing'],
        status: 'interviewing'
      },
      {
        id: '2',
        founderName: 'Michael Rodriguez',
        companyName: 'FinTech Innovations',
        matchScore: 88,
        keyStrengths: ['Blockchain', 'Finance', 'Product', 'Team Building'],
        gaps: ['Regulatory', 'Compliance'],
        status: 'contacted'
      },
      {
        id: '3',
        founderName: 'Emily Johnson',
        companyName: 'EduTech Platform',
        matchScore: 85,
        keyStrengths: ['Education', 'UX', 'Pedagogy', 'Research'],
        gaps: ['Business Model', 'Scaling'],
        status: 'reviewing'
      },
      {
        id: '4',
        founderName: 'David Kim',
        companyName: 'GreenTech Solutions',
        matchScore: 82,
        keyStrengths: ['Sustainability', 'Engineering', 'Innovation'],
        gaps: ['Marketing', 'Sales', 'Fundraising'],
        status: 'reviewing'
      },
      {
        id: '5',
        founderName: 'Lisa Thompson',
        companyName: 'RetailTech Plus',
        matchScore: 79,
        keyStrengths: ['Retail', 'Operations', 'Strategy'],
        gaps: ['Technology', 'Product Development'],
        status: 'accepted'
      }
    ];

    return NextResponse.json(topMatches);
  } catch (error) {
    console.error('Error fetching top matches:', error);
    return NextResponse.json(
      { error: 'Failed to fetch top matches' },
      { status: 500 }
    );
  }
}