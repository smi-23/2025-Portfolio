import { NextResponse } from 'next/server';
import { FetchNotionPage } from '@/lib/notionPage';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageId = searchParams.get('pageId');

    if (!pageId) {
      return NextResponse.json({ error: 'pageId is required' }, { status: 400 });
    }

    const recordMap = await FetchNotionPage({ pageId });
    return NextResponse.json(recordMap);
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    return NextResponse.json({ error: 'Failed to fetch Notion page' }, { status: 500 });
  }
}