import { motion } from "framer-motion"
import { Button } from "../components/ui/button"

export function About() {
    return (
        <div className="min-h-screen bg-[#F0F0E6]">

            {/* Header Section */}
            <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-end">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full md:w-1/3 aspect-[3/4] rounded-t-full bg-gray-300 overflow-hidden relative grayscale"
                >
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                        alt="Portrait"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#1A1A1A] mb-8 leading-[0.9]">
                        More than<br />just <span className="text-[#7B61FF]">Design.</span>
                    </h1>
                    <p className="text-xl text-[#1A1A1A]/70 max-w-xl leading-relaxed mb-8">
                        I'm a multidisciplinary designer who believes that great products are built at the intersection of design, technology, and human psychology.
                    </p>
                    <div className="flex gap-4">
                        <Button className="h-12 px-8 bg-[#1A1A1A] text-white hover:bg-[#7B61FF] rounded-none">
                            Download CV
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* Biography Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#7B61FF] mb-6">The Story</h3>
                        <p className="text-lg leading-relaxed text-gray-600 mb-6">
                            My journey started with a love for fine arts, which eventually evolved into a passion for digital interfaces. I realized that the web is the ultimate canvas—dynamic, interactive, and accessible to everyone.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Over the last 5 years, I've helped startups raise funding, enterprises streamline their tools, and automated businesses to grow.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#7B61FF] mb-6">Experience</h3>
                        <ul className="space-y-6">
                            {[
                                { role: "Senior Product Designer", company: "TechFlow", year: "2023 - Present" },
                                { role: "UI/UX Designer", company: "Creative Agency", year: "2021 - 2023" },
                                { role: "Frontend Developer", company: "Startlab", year: "2019 - 2021" }
                            ].map((job, i) => (
                                <li key={i} className="flex justify-between items-center border-b border-gray-100 pb-4">
                                    <div>
                                        <p className="font-bold text-[#1A1A1A]">{job.role}</p>
                                        <p className="text-sm text-gray-500">{job.company}</p>
                                    </div>
                                    <span className="text-sm font-mono text-[#7B61FF]">{job.year}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}
