import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    
    // Security check - ensure filename is safe
    if (!filename || !filename.endsWith('.md') || filename.includes('..') || filename.includes('/')) {
      return NextResponse.json({ error: 'Invalid filename' }, { status: 400 });
    }
    
    const filePath = join(process.cwd(), 'one-pagers', filename);
    
    try {
      const fileContent = await readFile(filePath, 'utf-8');
      
      // Return the file content as markdown
      return new NextResponse(fileContent, {
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Content-Disposition': `inline; filename="${filename}"`,
        },
      });
    } catch (fileError) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error serving one-pager:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}