
import matter from 'gray-matter';

export interface CaseStudy {
    slug: string;
    title: string;
    description: string;
    date: string;
    coverImage?: string;
    content: string;
    gallery?: string[];
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
 * Get all case studies from src/content/case-studies
 */
export const getAllCaseStudies = (): CaseStudy[] => {
    // Import markdown files as raw strings eagerly
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
            ...data
        });
    }

    // Sort by date descending
    return caseStudies.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
    const all = getAllCaseStudies();
    return all.find(c => c.slug === slug);
};
