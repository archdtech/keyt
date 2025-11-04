import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { status } = body;

    // Validate status
    const validStatuses = ['pending', 'under_review', 'interviewing', 'approved', 'rejected'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    // Update application status in REAL database
    const updatedApplication = await db.application.update({
      where: { id: params.id },
      data: { status }
    });

    return NextResponse.json({
      success: true,
      application: {
        id: updatedApplication.id,
        status: updatedApplication.status
      }
    });

  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json(
      { error: 'Failed to update application' },
      { status: 500 }
    );
  }
}