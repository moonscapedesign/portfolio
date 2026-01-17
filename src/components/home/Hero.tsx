import { Button } from "../ui/button"
import { MoveUpRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-[#F0F0E6]">

            {/* Right Side Background (Purple) */}
            {/* Mobile: Sits behind image area. Desktop: Fixed 50% Right split */}
            <div className="absolute top-[50%] left-0 right-0 bottom-0 md:top-0 md:left-auto md:right-0 md:w-1/2 md:h-full bg-[#7B61FF] z-0" />

            <div className="flex flex-col md:flex-row w-full z-10">
                {/* Left Column: Text */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20 pt-32 md:pt-0 bg-[#F0F0E6] md:bg-transparent">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl w-full flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-[#1A1A1A]">
                                I'm Bridie.
                            </h1>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1] tracking-tight text-[#1A1A1A]">
                                Product designer,<br />
                                UI/UX pro.
                            </h1>
                        </div>

                        <p className="text-lg text-[#1A1A1A]/80 max-w-md leading-relaxed font-medium">
                            Building unique brands and visual experiences to bring out the best in what you offer.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                            <Button className="bg-[#7B61FF] hover:bg-[#6A51E0] text-white rounded-none h-14 px-8 text-base font-semibold shadow-xl shadow-[#7B61FF]/20 hover:scale-105 transition-transform w-full sm:w-auto">
                                book a free consult
                            </Button>
                            <div className="text-[#7B61FF] hidden sm:block">
                                <svg width="60" height="40" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                    <path d="M10 20 C 30 10, 60 30, 90 20" />
                                    <path d="M70 20 L 90 20 L 80 35" />
                                    <circle cx="95" cy="18" r="3" fill="currentColor" stroke="none" />
                                </svg>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[#1A1A1A]/70">
                            <span>designs you'll</span>
                            <span className="text-red-500">♥</span>
                            <span>, guaranteed.</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Image & Floating Cards */}
                <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-screen flex items-center justify-center">

                    {/* Book A Call Floating Button */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute top-12 right-6 md:right-12 z-20"
                    >
                        <Button variant="secondary" className="bg-[#1A1A1A] hover:bg-black text-white hover:text-white rounded-none border-none h-12 px-6">
                            book a call <span className="ml-2 text-white">↗</span>
                        </Button>
                    </motion.div>

                    {/* Main Person Image */}
                    <div className="relative w-full h-full flex items-end justify-center pb-0 overflow-hidden pt-20 md:pt-0">
                        {/* Abstract Lines */}
                        <div className="absolute inset-0 opacity-30 pointer-events-none">
                            <svg className="w-full h-full text-[#5A41D0]" viewBox="0 0 400 800">
                                <circle cx="200" cy="400" r="300" fill="none" stroke="currentColor" strokeWidth="2" />
                                <ellipse cx="200" cy="400" rx="150" ry="350" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(30 200 400)" />
                            </svg>
                        </div>

                        {/* Grayscale Person Image Placeholder */}
                        <div className="relative z-10 w-[80%] md:w-[70%] aspect-[3/4] bg-gray-300 rounded-t-full mb-0 grayscale contrast-125 overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                                alt="Portrait"
                                className="w-full h-full object-cover mix-blend-multiply opacity-90"
                            />
                        </div>
                    </div>

                    {/* Floating Bottom Card */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-12 md:bottom-24 right-6 md:right-12 max-w-xs bg-[#1A1A1A] text-white p-6 shadow-2xl z-20"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold leading-tight">Let's discuss upgrades, free of charge!</h3>
                            <MoveUpRight className="w-5 h-5 text-white" />
                        </div>
                        <Button className="w-full bg-[#F0F0E6] text-[#1A1A1A] hover:bg-white hover:text-black rounded-none font-bold">
                            get in touch
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
