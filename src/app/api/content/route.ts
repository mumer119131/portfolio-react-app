import { createClient } from 'contentful';
import { NextResponse } from 'next/server';

const contentfulClient = createClient({
    space: process.env.CONTENT_FULL_SPACE_ID || '',
    accessToken: process.env.CDA_ACCESS_TOKEN || '',
    environment: process.env.ENVIRONMENT_ID || 'master',
});

export async function GET() {
    try {
        const entries = await contentfulClient.getEntries({ limit: 100 });
        return NextResponse.json(entries, { status: 200 });
    } catch (error) {
        console.error('Error fetching content:', error);
        return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
    }
}
