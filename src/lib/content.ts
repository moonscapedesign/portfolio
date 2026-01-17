
import matter from 'gray-matter';
import { getNotionCaseStudies, type NotionCaseStudy } from './notion';

export interface CaseStudy {
    slug: string;
    title: string;
    description: string;
    date: string;
    coverImage?: string;
    content: string;
    gallery?: string[];
    source: 'markdown' | 'notion';
    notionId?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

/**
 * Get all images from src/content/gallery
 */
export const getGalleryImages = () => {
    const glob = import.meta.glob('/src/content/gallery/*', { eager: true, as: 'url' });
    return Object.values(glob);
};

/**
 * Get markdown case studies from src/content/case-studies
 */
export const getMarkdownCaseStudies = (): CaseStudy[] => {
    const glob = import.meta.glob('/src/content/case-studies/*.md', { query: '?raw', import: 'default', eager: true });

    const caseStudies: CaseStudy[] = [];

    for (const path in glob) {
        const rawContent = glob[path] as string;
        const { data, content } = matter(rawContent);
        const slug = path.split('/').pop()?.replace('.md', '') || '';

        caseStudies.push({
            slug,
            title: data.title || 'Untitled',
            description: data.description || '',
            date: data.date || new Date().toISOString(),
            coverImage: data.coverImage,
            content,
            source: 'markdown',
            ...data
        });
    }

    return caseStudies;
};

/**
 * Convert Notion case studies to unified format
 */
const notionToCaseStudy = (notion: NotionCaseStudy): CaseStudy => ({
    slug: notion.slug,
    title: notion.title,
    description: notion.description,
    date: notion.date,
    coverImage: notion.coverImage,
    content: '', // Content is rendered via react-notion-x
    source: 'notion',
    notionId: notion.id,
    client: notion.client,
    role: notion.role,
});

/**
 * Get all case studies from both Notion and local markdown
 */
export const getAllCaseStudies = async (): Promise<CaseStudy[]> => {
    const markdownStudies = getMarkdownCaseStudies();
    
    let notionStudies: CaseStudy[] = [];
    try {
        const notionData = await getNotionCaseStudies();
        notionStudies = notionData.map(notionToCaseStudy);
    } catch (error) {
        console.warn('Could not fetch Notion case studies:', error);
    }

    const allStudies = [...markdownStudies, ...notionStudies];
    
    // Sort by date descending
    return allStudies.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

/**
 * Synchronous version for components that can't use async
 * Only returns markdown case studies
 */
export const getAllCaseStudiesSync = (): CaseStudy[] => {
    return getMarkdownCaseStudies().sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
};

export const getCaseStudyBySlug = async (slug: string): Promise<CaseStudy | undefined> => {
    const all = await getAllCaseStudies();
    return all.find(c => c.slug === slug);
};

export const getCaseStudyBySlugSync = (slug: string): CaseStudy | undefined => {
    const all = getAllCaseStudiesSync();
    return all.find(c => c.slug === slug);
};
