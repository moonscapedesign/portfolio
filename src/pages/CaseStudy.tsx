import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { projects } from "./Works"
import { Button } from "../components/ui/button"

export function CaseStudy() {
    const { id } = useParams()
    const project = projects.find(p => p.id === id)

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F0F0E6]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project not found</h1>
                    <Link to="/works">
                        <Button>Back to Works</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#F0F0E6]">
            {/* Hero Header */}
            <div className={`pt-32 pb-20 px-6 ${project.color}`}>
                <div className="max-w-4xl mx-auto">
                    <Link to="/works" className="inline-flex items-center gap-2 text-[#1A1A1A] hover:opacity-70 transition-opacity mb-8 font-medium">
                        <ArrowLeft className="w-5 h-5" /> Back to Works
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-[#1A1A1A] mb-6"
                    >
                        {project.title}
                    </motion.h1>
                    <div className="flex gap-4 items-center">
                        <span className="bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full font-medium">{project.category}</span>
                        <span className="font-mono">{project.year}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="prose prose-lg max-w-none">
                    <p className="text-2xl font-medium leading-relaxed mb-12">
                        {project.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-4">The Solution</h3>
                            <p className="text-gray-600">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>

                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover rounded-[2rem] shadow-xl mb-16"
                    />

                    <h2 className="text-3xl font-bold mb-6">Key Results</h2>
                    <ul className="grid sm:grid-cols-3 gap-6 not-prose mb-16">
                        {[1, 2, 3].map((i) => (
                            <li key={i} className="bg-[#1A1A1A] text-white p-6 rounded-2xl">
                                <p className="text-4xl font-bold text-[#7B61FF] mb-2">{i}00%</p>
                                <p className="text-sm opacity-70">Increase in user engagement metric</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
