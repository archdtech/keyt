import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Get real statistics from database
    const [
      totalApplications,
      pendingApplications,
      underReviewApplications,
      interviewingApplications,
      approvedApplications,
      rejectedApplications
    ] = await Promise.all([
      db.application.count(),
      db.application.count({ where: { status: 'pending' } }),
      db.application.count({ where: { status: 'under_review' } }),
      db.application.count({ where: { status: 'interviewing' } }),
      db.application.count({ where: { status: 'approved' } }),
      db.application.count({ where: { status: 'rejected' } })
    ]);

    const stats = {
      totalApplications,
      pendingApplications,
      underReviewApplications,
      interviewingApplications,
      approvedApplications,
      rejectedApplications
    };

    return NextResponse.json(stats);

  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}