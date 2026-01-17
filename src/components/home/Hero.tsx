import { Button } from "../ui/button"
import { MoveUpRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative pt-20 pb-0 overflow-hidden bg-[#F0F0E6]">
            {/* Main Hero Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row">
                    {/* Left Column: Text */}
                    <div className="w-full md:w-[45%] pt-8 md:pt-12 z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[#1A1A1A] mb-4">
                                I'm Matt.<br />
                                Product designer,<br />
                                UI/UX pro.
                            </h1>

                            <p className="text-xs text-[#1A1A1A]/50 max-w-[240px] leading-relaxed mb-5">
                                Building unique brands and visual experiences to bring out the best in what you offer.
                            </p>

                            <div className="flex items-center gap-3 mb-3">
                                <Button className="bg-[#7B61FF] hover:bg-[#6A51E0] text-white rounded-none h-8 px-4 text-xs font-semibold">
                                    book a free consult
                                </Button>
                                <svg width="30" height="20" viewBox="0 0 40 20" fill="none" className="text-[#1A1A1A]">
                                    <path d="M2 10 C 10 6, 25 14, 38 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
                                    <path d="M32 5 L 38 8 L 34 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                            </div>

                            <p className="text-[10px] text-[#1A1A1A]/40 font-medium">
                                designs you'll <span className="text-red-500">♥</span>, guaranteed.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Image with purple background */}
                    <div className="w-full md:w-[55%] relative mt-6 md:mt-0 min-h-[350px] md:min-h-[450px]">
                        {/* Purple background rectangle - positioned behind image */}
                        <div className="absolute top-0 right-0 w-[75%] h-[85%] bg-[#7B61FF] z-0" />
                        
                        {/* Wireframe circles - left side */}
                        <svg className="absolute -left-8 md:-left-20 top-[40%] -translate-y-1/2 w-[200px] md:w-[280px] h-[200px] md:h-[280px] text-[#7B61FF] z-[5] pointer-events-none" viewBox="0 0 200 200">
                            <ellipse cx="100" cy="100" rx="95" ry="70" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-20 100 100)" />
                            <ellipse cx="100" cy="100" rx="80" ry="55" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-20 100 100)" />
                            <ellipse cx="100" cy="100" rx="65" ry="40" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-20 100 100)" />
                            <ellipse cx="100" cy="100" rx="95" ry="70" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(40 100 100)" />
                            <ellipse cx="100" cy="100" rx="80" ry="55" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(40 100 100)" />
                        </svg>
                        
                        {/* Wireframe circles - right side */}
                        <svg className="absolute -right-10 top-[20%] w-[150px] h-[150px] text-[#7B61FF] z-[15] pointer-events-none" viewBox="0 0 200 200">
                            <ellipse cx="100" cy="100" rx="90" ry="60" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(20 100 100)" />
                            <ellipse cx="100" cy="100" rx="70" ry="45" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(20 100 100)" />
                        </svg>

                        {/* Person Image */}
                        <div className="relative z-10 ml-auto w-[70%] md:w-[60%] mr-4">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                alt="Matt - Product Designer"
                                className="w-full h-auto object-cover object-top grayscale"
                            />
                        </div>

                        {/* Floating "Let's discuss" Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-8 right-0 z-20"
                        >
                            <div className="bg-white p-3 w-[160px] shadow-md relative">
                                <div className="absolute -top-2 -right-2 bg-[#7B61FF] rounded-full p-1">
                                    <MoveUpRight className="w-2.5 h-2.5 text-white" />
                                </div>
                                <p className="text-[#1A1A1A] text-[10px] font-semibold leading-tight mb-2">
                                    Let's discuss upgrades, free of charge!
                                </p>
                                <Button className="w-full bg-[#1A1A1A] text-white hover:bg-[#333] rounded-none font-medium text-[8px] h-6 uppercase tracking-wide">
                                    get in touch
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
