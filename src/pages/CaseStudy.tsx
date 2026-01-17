import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Loader2 } from "lucide-react"
import { getCaseStudyBySlug, type CaseStudy as CaseStudyType } from "../lib/content"
import { getNotionPageContent } from "../lib/notion"
import { Button } from "../components/ui/button"
import { NotionRenderer } from "../components/notion/NotionRenderer"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"
import type { ExtendedRecordMap } from "notion-types"
import "../components/notion/notion-styles.css"

export function CaseStudy() {
    const { id } = useParams()
    const [project, setProject] = useState<CaseStudyType | null>(null)
    const [notionContent, setNotionContent] = useState<ExtendedRecordMap | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            if (!id) {
                setLoading(false)
                return
            }

            const study = await getCaseStudyBySlug(id)
            setProject(study || null)

            // If it's a Notion case study, fetch the page content
            if (study?.source === 'notion' && study.notionId) {
                try {
                    const content = await getNotionPageContent(study.notionId)
                    setNotionContent(content)
                } catch (err) {
                    console.error('Failed to fetch Notion content:', err)
                }
            }

            setLoading(false)
        }

        fetchData()
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
                <Loader2 className="w-8 h-8 text-[#9B8AFF] animate-spin" />
            </div>
        )
    }

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-white">Project not found</h1>
                    <Link to="/works">
                        <Button>Back to Works</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A]">
            {/* Hero Header */}
            <div className="pt-32 pb-20 px-6 bg-[#111111]">
                <div className="max-w-4xl mx-auto">
                    <Link to="/works" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 font-medium">
                        <ArrowLeft className="w-5 h-5" /> Back to Works
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
                    >
                        {project.title}
                    </motion.h1>
                    {project.description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/60 mb-8 max-w-2xl"
                        >
                            {project.description}
                        </motion.p>
                    )}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-4 items-center"
                    >
                        {project.client && (
                            <span className="bg-white/10 text-white px-4 py-1.5 rounded-full font-medium">
                                {project.client}
                            </span>
                        )}
                        {project.role && (
                            <span className="bg-[#9B8AFF]/10 text-[#9B8AFF] px-4 py-1.5 rounded-full font-medium">
                                {project.role}
                            </span>
                        )}
                        <span className="font-mono text-white/60">
                            {new Date(project.date).getFullYear()}
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* Cover Image */}
            {project.coverImage && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-6xl mx-auto px-6 -mt-10"
                >
                    <img 
                        src={project.coverImage} 
                        alt={project.title}
                        className="w-full h-auto rounded-[2rem] shadow-2xl"
                    />
                </motion.div>
            )}

            {/* Content */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-4xl mx-auto px-6 py-20"
            >
                {project.source === 'notion' && notionContent ? (
                    <NotionRenderer 
                        recordMap={notionContent} 
                        darkMode={true}
                    />
                ) : (
                    <article className="prose prose-lg max-w-none prose-invert prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-p:text-white/60 prose-img:rounded-[2rem] prose-img:shadow-xl">
                        <ReactMarkdown components={{
                            img: ({ ...props }) => <img {...props} className="w-full h-auto object-cover rounded-[2rem] shadow-xl my-8" />
                        }}>
                            {project.content}
                        </ReactMarkdown>
                    </article>
                )}
            </motion.div>
        </div>
    )
}
