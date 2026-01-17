import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Loader2 } from "lucide-react"
import { Link } from "react-router-dom"
import { getAllCaseStudies, type CaseStudy } from "../lib/content"

export function Works() {
    const containerRef = useRef(null)
    const [projects, setProjects] = useState<CaseStudy[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllCaseStudies().then(studies => {
            setProjects(studies)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
                <Loader2 className="w-8 h-8 text-[#9B8AFF] animate-spin" />
            </div>
        )
    }

    return (
        <div ref={containerRef} className="min-h-screen pt-32 pb-20 px-6 bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8"
                >
                    Selected<br />
                    <span className="text-[#9B8AFF]">Works.</span>
                </motion.h1>
            </div>

            <div className="flex flex-col gap-24 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <Link key={index} to={`/works/${project.slug}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            {/* Project Image Container */}
                            <div className={`relative aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-[2rem] bg-[#1A1A1A] mb-8`}>
                                {project.coverImage && (
                                    <img
                                        src={project.coverImage}
                                        alt={`Preview of ${project.title}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute top-6 right-6 w-16 h-16 bg-[#0A0A0A] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 shadow-xl">
                                    <ArrowUpRight className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
                                <div>
                                    <div className="flex items-center gap-4 text-sm font-medium text-[#9B8AFF] mb-2">
                                        <span className="px-3 py-1 rounded-full border border-[#9B8AFF]/20 bg-white/5">{project.client}</span>
                                        <span aria-label={`Project year: ${new Date(project.date).getFullYear()}`}>{new Date(project.date).getFullYear()}</span>
                                    </div>
                                    <h2 className="text-4xl font-bold text-white group-hover:text-[#9B8AFF] transition-colors">{project.title}</h2>
                                </div>
                                <div className="hidden md:block opacity-0 group-hover:opacity-60 transition-opacity text-lg font-medium text-white">
                                    Read Case Study
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
