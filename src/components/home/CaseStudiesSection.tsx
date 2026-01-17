import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { getAllCaseStudies, type CaseStudy } from "../../lib/content"
import { useEffect, useState } from "react"

interface CaseStudiesSectionProps {
    limit?: number
}

export function CaseStudiesSection({ limit = 2 }: CaseStudiesSectionProps) {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])

    useEffect(() => {
        getAllCaseStudies().then(studies => {
            setCaseStudies(studies.slice(0, limit))
        })
    }, [limit])

    return (
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                >
                    <div>
                        <p className="text-[13px] font-medium text-[#9B8AFF] uppercase tracking-wider mb-3">
                            Case Studies
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-[-0.01em] text-white">
                            Featured work
                        </h2>
                    </div>
                    <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#0A0A0A] rounded-none px-5 h-10 text-[13px] font-medium transition-all duration-200 w-fit">
                        <Link to="/works">View all case studies</Link>
                    </Button>
                </motion.div>

                {/* Case Studies Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {caseStudies.map((study, index) => (
                        <motion.div 
                            key={study.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/works/${study.slug}`} className="group block cursor-pointer">
                                <div className="aspect-[4/3] overflow-hidden relative mb-4">
                                    {study.coverImage && (
                                        <img 
                                            src={study.coverImage} 
                                            alt={study.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-[#0A0A0A] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-[11px] text-[#9B8AFF] uppercase tracking-wider mb-1">{study.client}</p>
                                        <p className="text-white font-semibold text-base">{study.title}</p>
                                        <p className="text-white/60 text-sm mt-1 line-clamp-2">{study.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
