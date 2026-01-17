import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
        title: "Brand Identity",
        category: "Branding"
    },
    {
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
        title: "E-commerce Platform",
        category: "Web Design"
    },
    {
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=600&auto=format&fit=crop",
        title: "Mobile App",
        category: "UI/UX"
    },
    {
        image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=600&auto=format&fit=crop",
        title: "Marketing Site",
        category: "Web Design"
    }
]

export function ProjectsSection() {
    return (
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-[#F5F5F0]">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                >
                    <div>
                        <p className="text-[13px] font-medium text-[#7B61FF] uppercase tracking-wider mb-3">
                            Selected Work
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-[-0.01em] text-[#1A1A1A]">
                            Recent projects
                        </h2>
                    </div>
                    <Button asChild variant="outline" className="border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white rounded-none px-5 h-10 text-[13px] font-medium transition-all duration-200 w-fit">
                        <Link to="/works">View all projects</Link>
                    </Button>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative mb-4">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-[#1A1A1A]" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[11px] text-[#7B61FF] uppercase tracking-wider mb-1">{project.category}</p>
                                    <p className="text-[#1A1A1A] font-semibold text-base">{project.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
