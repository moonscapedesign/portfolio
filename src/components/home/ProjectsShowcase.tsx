import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { MoveUpRight } from "lucide-react"

const projects = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        title: "Brand Identity"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800&auto=format&fit=crop",
        title: "Web Design"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        title: "App Design"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800&auto=format&fit=crop",
        title: "UI Systems"
    }
]

export function ProjectsShowcase() {
    return (
        <section className="py-24 px-6 bg-[#F0F0E6]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] leading-tight">
                        Here are some of<br />
                        <span className="text-[#7B61FF]">my past projects.</span>
                    </h2>
                </motion.div>

                {/* Projects Grid with Marquee Effect */}
                <div className="overflow-hidden mb-12">
                    <div className="flex gap-6 animate-scroll">
                        {[...projects, ...projects].map((project, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[300px] md:w-[400px] group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="relative overflow-hidden bg-white aspect-[4/3]">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#7B61FF]/0 group-hover:bg-[#7B61FF]/20 transition-colors duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trusted By */}
                <div className="text-center">
                    <p className="text-sm text-[#1A1A1A]/50 font-medium uppercase tracking-wider mb-6">
                        trusted by many, including:
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
                        {["ACME", "Apex", "Brilliance", "Command", "Echo"].map((logo, index) => (
                            <span key={index} className="text-xl md:text-2xl font-bold text-[#1A1A1A] font-mono tracking-wider">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>

                {/* View All Works Link */}
                <div className="text-center mt-12">
                    <Link 
                        to="/works" 
                        className="inline-flex items-center gap-2 text-[#7B61FF] font-bold hover:gap-4 transition-all"
                    >
                        View all works
                        <MoveUpRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
