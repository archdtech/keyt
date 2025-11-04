import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Mock activity data
    const activity = [
      {
        id: '1',
        type: 'application',
        title: 'New application from Sarah Chen',
        description: 'AI-powered healthcare startup seeking pre-seed funding',
        timestamp: '2024-01-15T10:30:00Z',
        status: 'pending'
      },
      {
        id: '2',
        type: 'match',
        title: 'High-potential match found',
        description: 'John Doe matches 92% with FinTech portfolio company',
        timestamp: '2024-01-15T09:15:00Z',
        status: 'success'
      },
      {
        id: '3',
        type: 'investment',
        title: 'Portfolio milestone reached',
        description: 'EduTech Platform achieved 1000 active users',
        timestamp: '2024-01-14T16:45:00Z',
        status: 'success'
      },
      {
        id: '4',
        type: 'email',
        title: 'Email campaign completed',
        description: 'Welcome series sent to 245 new subscribers',
        timestamp: '2024-01-14T14:20:00Z',
        status: 'success'
      }
    ];

    return NextResponse.json(activity);
  } catch (error) {
    console.error('Error fetching activity:', error);
    return NextResponse.json(
      { error: 'Failed to fetch activity' },
      { status: 500 }
    );
  }
}