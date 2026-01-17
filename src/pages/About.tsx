import { motion } from "framer-motion"
import { Button } from "../components/ui/button"

export function About() {
    return (
        <div className="min-h-screen bg-[#0A0A0A]">

            {/* Header Section */}
            <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-end">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full md:w-1/3 aspect-[3/4] rounded-t-full bg-gray-300 overflow-hidden relative grayscale"
                >
                    <img
                        src="/src/assets/portrait.png"
                        alt="Portrait"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.9]">
                        More than<br />just <span className="text-[#9B8AFF]">Design.</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-xl leading-relaxed mb-8">
                        I’m a visual communicator based in the beautiful Yarra Valley, Victoria. I believe that great design is about problem-solving and bringing ideas to life.
                    </p>
                    <div className="flex gap-4">
                        <a href="/BridieMoon_Resume.pdf" download="BridieMoon_Resume.pdf">
                            <Button className="h-12 px-8 bg-white text-[#0A0A0A] hover:bg-[#9B8AFF] hover:text-white rounded-none">
                                Download CV
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Biography Section */}
            <section className="py-24 px-6 bg-[#111111]">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#9B8AFF] mb-6">The Story</h3>
                        <p className="text-lg leading-relaxed text-white/60 mb-6">
                            I’ve had a passion for all things art and design since I was very young, often planning out and crafting small ideas and projects. This led me to heavily study art and design throughout my schooling, eventually landing me a scholarship into Deakin University where I completed my Bachelors in Visual Communication in 2024.
                        </p>
                        <p className="text-lg leading-relaxed text-white/60">
                            Beyond my studies, I enjoy the outdoors, family, friends, and have a huge love for animals. Growing up on land with horses has taught me to enjoy the little moments and be adjustable to my environment. I enjoy learning new things and have a strong desire to consistently learn—even leading me to become a training chainsaw mechanic!
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#9B8AFF] mb-6">Experience</h3>
                        <ul className="space-y-6">
                            {[
                                { role: "Visual Communicator", company: "Moonscape Designs", year: "2024 - Present" },
                                { role: "Design & Social Media Lead", company: "Local Industry", year: "2023 - Present" },
                                { role: "Visual Communication Student", company: "Deakin University", year: "2021 - 2024" }
                            ].map((job, i) => (
                                <li key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <div>
                                        <p className="font-bold text-white">{job.role}</p>
                                        <p className="text-sm text-white/50">{job.company}</p>
                                    </div>
                                    <span className="text-sm font-mono text-[#9B8AFF]">{job.year}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}
