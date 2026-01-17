import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

export const projects = [
    {
        id: "ecommerce-rebrand",
        title: "E-Commerce Rebrand",
        category: "Design & Development",
        year: "2025",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop",
        color: "bg-[#FFD4B8]",
        description: "A complete overhaul of the shopping experience for a leading fashion retailer."
    },
    {
        id: "fintech-dashboard",
        title: "Fintech Dashboard",
        category: "Product Design",
        year: "2024",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        color: "bg-[#B8D4FF]",
        description: "Simplifying complex financial data into meaningful insights."
    },
    {
        id: "travel-app",
        title: "Travel App",
        category: "Mobile App",
        year: "2024",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
        color: "bg-[#C5FFB8]",
        description: "Connecting travelers with authentic local experiences."
    },
    {
        id: "ai-marketing",
        title: "AI Marketing Tool",
        category: "SaaS Development",
        year: "2023",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        color: "bg-[#E2B8FF]",
        description: "Automating content creation for marketing teams using AI."
    }
]

export function Works() {
    const containerRef = useRef(null)

    return (
        <div ref={containerRef} className="min-h-screen pt-32 pb-20 px-6 bg-[#F0F0E6]">
            <div className="max-w-6xl mx-auto mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight text-[#1A1A1A] mb-8"
                >
                    Selected<br />
                    <span className="text-[#7B61FF]">Works.</span>
                </motion.h1>
            </div>

            <div className="flex flex-col gap-24 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <Link key={index} to={`/works/${project.id}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            {/* Project Image Container */}
                            <div className={`relative aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-[2rem] ${project.color} mb-8`}>
                                <img
                                    src={project.image}
                                    alt={`Preview of ${project.title}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-multiply grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 shadow-xl">
                                    <ArrowUpRight className="w-8 h-8 text-[#1A1A1A]" />
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1A1A1A]/10 pb-8">
                                <div>
                                    <div className="flex items-center gap-4 text-sm font-medium text-[#7B61FF] mb-2">
                                        <span className="px-3 py-1 rounded-full border border-[#7B61FF]/20 bg-white/50">{project.category}</span>
                                        <span aria-label={`Project year: ${project.year}`}>{project.year}</span>
                                    </div>
                                    <h2 className="text-4xl font-bold text-[#1A1A1A] group-hover:text-[#7B61FF] transition-colors">{project.title}</h2>
                                </div>
                                <div className="hidden md:block opacity-0 group-hover:opacity-60 transition-opacity text-lg font-medium">
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
