import { motion } from "framer-motion"
import { Button } from "../ui/button"

export function FeaturesSection() {
    return (
        <section className="py-12 px-4 md:px-8 bg-[#F0F0E6]">
            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] leading-tight">
                        Calculated, Tailored<br />
                        Marketing.
                    </h2>
                </motion.div>

                {/* Feature Card with Wireframe */}
                <div className="relative max-w-xl mx-auto">
                    {/* Wireframe decoration - left */}
                    <svg className="absolute -left-16 md:-left-24 top-1/2 -translate-y-1/2 w-[100px] md:w-[140px] h-[100px] md:h-[140px] text-[#1A1A1A]/10 hidden md:block" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                    </svg>
                    
                    {/* Wireframe decoration - right */}
                    <svg className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 w-[100px] md:w-[140px] h-[100px] md:h-[140px] text-[#1A1A1A]/10 hidden md:block" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                    </svg>

                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#E8E4D9] p-6 md:p-10 text-center relative"
                    >
                        {/* Purple icon */}
                        <div className="w-8 h-8 bg-[#7B61FF] rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 6v6l4 2"/>
                            </svg>
                        </div>
                        
                        <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                            On time service.
                        </h3>
                        <p className="text-[#1A1A1A]/50 text-[11px] leading-relaxed mb-5 max-w-xs mx-auto">
                            We deliver fast. Often times design is slower than it needs to be. We deliver in 1-2 days.
                        </p>
                        
                        <p className="text-[#1A1A1A]/30 text-[10px] mb-4">
                            let me tell you more about how life-changing this is.
                        </p>
                        
                        <Button className="bg-[#7B61FF] hover:bg-[#6A51E0] text-white rounded-none h-7 px-5 text-[10px] font-semibold uppercase tracking-wide">
                            get started
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
