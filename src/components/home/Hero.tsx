import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export function Hero() {
    return (
        <section className="relative pt-28 md:pt-32 pb-0 overflow-hidden bg-[#0A0A0A]">
            <div className="px-6 md:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-12">
                    {/* Left Column: Text */}
                    <div className="w-full lg:flex-1 pb-12 lg:pb-16 z-20 lg:max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.02em] text-white mb-5">
                                I'm <span className="text-[#9B8AFF]">Bridie.</span><br />
                                Product designer,<br />
                                UI/UX pro.
                            </h1>

                            <p className="text-[15px] text-white/50 max-w-sm leading-[1.7] mb-7">
                                Building unique brands and visual experiences to bring out the best in what you offer.
                            </p>

                            <div className="flex items-center gap-5 mb-5">
                                <Button asChild className="bg-white hover:bg-white/90 text-[#0A0A0A] rounded-none h-11 px-6 text-[13px] font-medium transition-all duration-200">
                                    <Link to="/contact">Book a free consult</Link>
                                </Button>
                                <Link to="/works" className="text-[13px] font-medium text-white/50 hover:text-[#9B8AFF] flex items-center gap-1.5 transition-colors group">
                                    View my work <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>

                            <p className="text-[12px] text-white/40 font-medium">
                                Designs you'll <span className="text-[#9B8AFF]">love</span>, guaranteed.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Image with purple background */}
                    <div className="w-full lg:w-[32%] relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Purple background */}
                            <div className="absolute top-0 right-0 bottom-0 w-[90%] bg-[#1A1A1A]" />
                            
                            {/* Person Image */}
                            <div className="relative z-10 ml-auto w-full max-w-[280px]">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                    alt="Bridie - Visual Communicator"
                                    className="w-full h-auto object-cover grayscale"
                                />
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute bottom-8 left-0 z-20"
                            >
                                <div className="bg-[#141414] p-5 shadow-lg border border-white/10 w-[200px]">
                                    <p className="text-white text-[13px] font-medium leading-snug mb-4">
                                        Let's discuss your project, free of charge!
                                    </p>
                                    <Button asChild className="w-full bg-white text-[#0A0A0A] hover:bg-white/90 rounded-none font-medium text-[12px] h-9">
                                        <Link to="/contact">Get in touch</Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
