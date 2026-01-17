import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';
import type { ExtendedRecordMap } from 'notion-types';

// Create clients lazily to avoid errors when env vars aren't set
let notionClient: Client | null = null;
let notionAPI: NotionAPI | null = null;

function getNotionClient(): Client {
    if (!notionClient) {
        notionClient = new Client({
            auth: import.meta.env.VITE_NOTION_API_KEY,
        });
    }
    return notionClient;
}

function getNotionAPI(): NotionAPI {
    if (!notionAPI) {
        notionAPI = new NotionAPI();
    }
    return notionAPI;
}

export interface NotionCaseStudy {
    id: string;
    slug: string;
    title: string;
    description: string;
    date: string;
    coverImage?: string;
    client?: string;
    role?: string;
    published: boolean;
}

/**
 * Get all case studies from the Notion database
 */
export async function getNotionCaseStudies(): Promise<NotionCaseStudy[]> {
    const databaseId = import.meta.env.VITE_NOTION_DATABASE_ID;
    
    if (!databaseId) {
        console.warn('VITE_NOTION_DATABASE_ID not set');
        return [];
    }

    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response = await (getNotionClient() as any).databases.query({
            database_id: databaseId,
            filter: {
                property: 'Published',
                checkbox: {
                    equals: true,
                },
            },
            sorts: [
                {
                    property: 'Date',
                    direction: 'descending',
                },
            ],
        });

        return response.results.map((page: any) => {
            const properties = page.properties;
            
            return {
                id: page.id,
                slug: properties.Slug?.rich_text?.[0]?.plain_text || page.id,
                title: properties.Name?.title?.[0]?.plain_text || 'Untitled',
                description: properties.Description?.rich_text?.[0]?.plain_text || '',
                date: properties.Date?.date?.start || new Date().toISOString(),
                coverImage: page.cover?.external?.url || page.cover?.file?.url || undefined,
                client: properties.Client?.rich_text?.[0]?.plain_text || undefined,
                role: properties.Role?.rich_text?.[0]?.plain_text || undefined,
                published: properties.Published?.checkbox || false,
            };
        });
    } catch (error) {
        console.error('Error fetching Notion case studies:', error);
        return [];
    }
}

/**
 * Get a single case study by slug
 */
export async function getNotionCaseStudyBySlug(slug: string): Promise<NotionCaseStudy | null> {
    const caseStudies = await getNotionCaseStudies();
    return caseStudies.find(cs => cs.slug === slug) || null;
}

/**
 * Get the full page content for rendering with react-notion-x
 */
export async function getNotionPageContent(pageId: string): Promise<ExtendedRecordMap> {
    return await getNotionAPI().getPage(pageId);
}

/**
 * Get case study with full page content
 */
export async function getNotionCaseStudyWithContent(slug: string): Promise<{
    metadata: NotionCaseStudy;
    content: ExtendedRecordMap;
} | null> {
    const metadata = await getNotionCaseStudyBySlug(slug);
    
    if (!metadata) {
        return null;
    }

    const content = await getNotionPageContent(metadata.id);
    
    return {
        metadata,
        content,
    };
}
