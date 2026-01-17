import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

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
        <section className="bg-[#F5F5F0]">
            <div className="flex flex-col lg:flex-row">
                {/* Left Column - Purple Box */}
                <div className="w-full lg:w-[40%] relative">
                    <div className="bg-[#7B61FF] p-8 md:p-10 text-white h-full flex flex-col justify-center relative overflow-hidden min-h-[320px]">
                        {/* Wireframe decoration */}
                        <svg className="absolute bottom-8 left-8 right-8 h-[120px] text-white/20" viewBox="0 0 200 80" preserveAspectRatio="xMidYMid meet">
                            <path d="M0,40 Q30,15 60,40 T120,40 T180,40 T240,40" fill="none" stroke="currentColor" strokeWidth="1"/>
                            <path d="M0,50 Q30,25 60,50 T120,50 T180,50 T240,50" fill="none" stroke="currentColor" strokeWidth="1"/>
                            <ellipse cx="100" cy="45" rx="80" ry="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                        </svg>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-[1.2] tracking-[-0.01em] mb-5">
                                Selected work from recent projects.
                            </h2>
                            <Button asChild variant="outline" className="border-white/80 text-white hover:bg-white hover:text-[#7B61FF] rounded-none px-5 h-10 text-[13px] font-medium transition-all duration-200">
                                <Link to="/works">View all projects</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column - Project Images Grid */}
                <div className="w-full lg:w-[60%] grid grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-[4/3] overflow-hidden relative group cursor-pointer"
                        >
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/60 transition-colors duration-300 flex items-end p-8">
                                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="text-white/70 text-sm uppercase tracking-wider mb-2">{project.category}</p>
                                    <p className="text-white font-semibold text-lg">{project.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
