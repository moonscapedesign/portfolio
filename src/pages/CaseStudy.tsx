import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { getCaseStudyBySlug } from "../lib/content"
import { Button } from "../components/ui/button"
import ReactMarkdown from "react-markdown"

export function CaseStudy() {
    const { id } = useParams()
    const project = id ? getCaseStudyBySlug(id) : undefined

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
            <div className={`pt-32 pb-20 px-6 bg-[#111111]`}>
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
                    <div className="flex gap-4 items-center">
                        <span className="bg-white/10 text-white px-4 py-1.5 rounded-full font-medium">{project.client}</span>
                        <span className="font-mono text-white/60">{new Date(project.date).getFullYear()}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <article className="prose prose-lg max-w-none prose-invert prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-p:text-white/60 prose-img:rounded-[2rem] prose-img:shadow-xl">
                    <ReactMarkdown components={{
                        img: ({ node, ...props }) => <img {...props} className="w-full h-auto object-cover rounded-[2rem] shadow-xl my-8" />
                    }}>
                        {project.content}
                    </ReactMarkdown>
                </article>
            </div>
        </div>
    )
}
