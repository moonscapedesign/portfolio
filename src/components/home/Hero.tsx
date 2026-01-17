import { Button } from "../ui/button"
import { MoveUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { LogoMarquee } from "./LogoMarquee"

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-[#F0F0E6]">

            {/* Main Content Container */}
            <div className="container mx-auto flex flex-col md:flex-row w-full z-10 px-6 md:px-12 relative">

                {/* Left Column: Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center pt-32 md:pt-0 z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl w-full flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-[#1A1A1A]">
                                I'm Matt.
                            </h1>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1] tracking-tight text-[#1A1A1A] text-balance">
                                Product designer,<br />
                                UI/UX pro.
                            </h1>
                        </div>

                        <p className="text-lg text-[#1A1A1A]/70 max-w-sm leading-relaxed font-medium">
                            Building unique brands and visual experiences to bring out the best in what you offer.
                        </p>

                        <div className="flex flex-col items-start gap-4 pt-4 relative">
                            <div className="flex items-center gap-6">
                                <Button className="bg-[#7B61FF] hover:bg-[#6A51E0] text-white rounded-none h-14 px-8 text-base font-bold shadow-[8px_8px_0px_0px_rgba(123,97,255,0.3)] hover:translate-y-1 hover:shadow-none transition-all w-full sm:w-auto">
                                    book a free consult
                                </Button>
                                {/* Hand-drawn arrow */}
                                <svg width="80" height="50" viewBox="0 0 100 60" fill="none" className="text-[#7B61FF] hidden sm:block -rotate-12 transform origin-left">
                                    <path d="M10 30 C 30 15, 60 45, 90 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                                    <path d="M75 20 L 90 20 L 85 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                                </svg>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-sm font-bold tracking-tight text-[#1A1A1A]/60">
                            <span>designs you'll</span>
                            <span className="text-red-500 text-lg">♥</span>
                            <span>, guaranteed.</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Image & Abstract Shape */}
                <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-screen flex items-end justify-center md:justify-end pb-0">

                    {/* Purple Wireframe Shape (Loose scribbles) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none opacity-100 mix-blend-multiply z-0">
                        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#7B61FF] animate-[spin_60s_linear_infinite]">
                            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M187.3,86.4C229.4,94.9,261.2,143.2,263.3,190.4C265.4,237.6,237.8,283.6,197.6,302.3C157.4,321,104.6,312.4,72.4,277.6C40.2,242.8,28.6,181.8,45.8,136.6C63,91.4,109,62,154.2,56.1C165.5,54.6,176.8,84.3,187.3,86.4Z" transform="scale(1.2) translate(-20, -20)" />
                            <path fill="none" stroke="currentColor" strokeWidth="1" d="M150,100 C 250,50 350,250 200,350 C 50,250 150,50 150,100 Z" opacity="0.6" transform="rotate(45 200 200)" />
                        </svg>
                    </div>

                    {/* Person Image - Smaller (50% width on Desktop) */}
                    <div className="relative z-10 w-[80%] md:w-[50%] mr-0 md:mr-10 aspect-[3/4] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                            alt="Matt - Product Designer"
                            className="w-full h-full object-cover grayscale contrast-110"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                            }}
                        />
                    </div>

                    {/* Floating "Let's discuss" Card - Overlapping the image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-32 -left-6 md:left-auto md:-left-12 z-20"
                    >
                        <div className="bg-[#1A1A1A] p-6 w-[260px] shadow-2xl relative rotate-2 hover:rotate-0 transition-transform duration-300">
                            {/* Arrow decoration */}
                            <div className="absolute -top-3 -right-3 bg-white rounded-full p-2 border-2 border-[#1A1A1A] z-30">
                                <MoveUpRight className="w-4 h-4 text-black" />
                            </div>

                            <h3 className="text-white text-lg font-bold leading-tight mb-4">
                                Let's discuss upgrades, free of charge!
                            </h3>
                            <Button className="w-full bg-[#F0F0E6] text-[#1A1A1A] hover:bg-white rounded-none font-bold text-xs h-9 uppercase tracking-wide">
                                get in touch
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Section Container: Purple Box & Logos */}
            <div className="relative w-full z-10 pb-0 mt-auto">
                {/* Logo Marquee Strip (Background layer in bottom area) */}
                <div className="w-full bg-transparent absolute bottom-8 left-0 right-0 z-0 opacity-40 grayscale mix-blend-multiply pointer-events-none">
                    <LogoMarquee />
                </div>

                {/* Purple Box (Overlapping Logos) */}
                <div className="relative w-full md:w-[35%] bg-[#7B61FF] p-8 md:p-12 text-white z-10">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                        We make sure their first impression is memorable.
                    </h2>
                    <p className="text-white/80 text-sm mb-6 max-w-xs">
                        We've worked with hundreds of startups and established businesses in creating memorable digital experiences.
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#7B61FF] rounded-none px-6 h-10 font-medium">
                        book a free call
                    </Button>
                </div>
            </div>
        </section>
    )
}
