import { Button } from "../ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent w-fit text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        <span>Available for new projects</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-primary">
                        Smarter <br />
                        <span className="text-accent/80">Digital</span> <br />
                        Products.
                    </h1>

                    <p className="text-lg text-primary/60 max-w-md leading-relaxed">
                        I help companies and startups build profitable web products that look good and convert better.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button size="lg" className="rounded-full h-12 px-8 text-base">
                            See my work
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base gap-2 group">
                            Contact me <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] w-full rounded-[32px] overflow-hidden bg-gray-100"
                >
                    {/* Placeholder for actual hero image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />

                    {/* Abstract Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />

                    {/* Floating 'Stats' Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Projects Completed</p>
                                <p className="text-3xl font-bold text-primary">120+</p>
                            </div>
                            <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center text-white">
                                <ArrowRight className="w-5 h-5 -rotate-45" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
