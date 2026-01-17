import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export function Hero() {
    return (
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-[#F5F5F0]">
            <div className="px-6 md:px-12">
                <div className="flex flex-col md:flex-row">
                    {/* Left Column: Text */}
                    <div className="w-full md:w-[55%] pt-8 md:pt-16 z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] mb-5">
                                I'm <span className="text-[#7B61FF]">Bridie.</span><br />
                                Product designer,<br />
                                UI/UX pro.
                            </h1>

                            <p className="text-[15px] md:text-base text-[#1A1A1A]/55 max-w-sm leading-[1.7] mb-8">
                                Building unique brands and visual experiences to bring out the best in what you offer.
                            </p>

                            <div className="flex items-center gap-5 mb-6">
                                <Button asChild className="bg-[#7B61FF] hover:bg-[#6A51E0] text-white rounded-none h-10 px-5 text-[13px] font-medium transition-all duration-200">
                                    <Link to="/contact">Book a free consult</Link>
                                </Button>
                                <Link to="/works" className="text-[13px] font-medium text-[#1A1A1A]/60 hover:text-[#7B61FF] flex items-center gap-1.5 transition-colors group">
                                    View my work <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>

                            <p className="text-xs text-[#1A1A1A]/40 font-medium tracking-wide">
                                Designs you'll <span className="text-[#7B61FF]">love</span>, guaranteed.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Image with purple background */}
                    <div className="w-full md:w-[45%] relative mt-10 md:mt-0 min-h-[380px] md:min-h-[480px]">
                        {/* Purple background rectangle */}
                        <div className="absolute top-0 right-0 w-[75%] h-[85%] bg-[#7B61FF] z-0" />

                        {/* Wireframe circles - left side */}
                        <svg className="absolute -left-8 md:-left-16 top-[45%] -translate-y-1/2 w-[160px] md:w-[240px] h-[160px] md:h-[240px] text-[#7B61FF] z-[5] pointer-events-none opacity-60" viewBox="0 0 200 200">
                            <ellipse cx="100" cy="100" rx="95" ry="70" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-20 100 100)" />
                            <ellipse cx="100" cy="100" rx="80" ry="55" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-20 100 100)" />
                            <ellipse cx="100" cy="100" rx="65" ry="40" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-20 100 100)" />
                            <ellipse cx="100" cy="100" rx="95" ry="70" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(40 100 100)" />
                            <ellipse cx="100" cy="100" rx="80" ry="55" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(40 100 100)" />
                        </svg>

                        {/* Wireframe circles - right side */}
                        <svg className="absolute -right-8 top-[15%] w-[120px] h-[120px] text-[#7B61FF] z-[15] pointer-events-none opacity-40" viewBox="0 0 200 200">
                            <ellipse cx="100" cy="100" rx="90" ry="60" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(20 100 100)" />
                            <ellipse cx="100" cy="100" rx="70" ry="45" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(20 100 100)" />
                        </svg>

                        {/* Person Image */}
                        <div className="relative z-10 ml-auto w-[45%] md:w-[25%] mr-4">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                alt="Bridie - Visual Communicator"
                                className="w-full h-auto object-cover object-top grayscale contrast-105"
                            />
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute bottom-16 right-4 z-20"
                        >
                            <div className="bg-white p-4 w-[180px] shadow-lg">
                                <p className="text-[#1A1A1A] text-sm font-semibold leading-snug mb-4">
                                    Let's discuss your project, free of charge!
                                </p>
                                <Button asChild className="w-full bg-[#1A1A1A] text-white hover:bg-[#333] rounded-none font-medium text-xs h-9">
                                    <Link to="/contact">Get in touch</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
