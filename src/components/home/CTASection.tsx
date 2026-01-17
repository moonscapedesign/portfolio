import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export function CTASection() {
    return (
        <section className="bg-[#2D2A26] relative overflow-hidden">
            {/* Wireframe decoration */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[400px] md:w-[500px] h-[150px] pointer-events-none opacity-15">
                <svg className="w-full h-full text-white" viewBox="0 0 300 100">
                    <ellipse cx="150" cy="60" rx="140" ry="55" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                    <ellipse cx="150" cy="60" rx="110" ry="42" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                    <ellipse cx="150" cy="60" rx="80" ry="30" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                    <ellipse cx="150" cy="60" rx="50" ry="18" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                </svg>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10 py-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
                        The best time<br />
                        is now.
                    </h2>
                    
                    <p className="text-white/40 text-[11px] max-w-[200px] mx-auto mb-6">
                        Let me tell you more about how life-changing this is.
                    </p>

                    <Button 
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white hover:text-[#2D2A26] rounded-none h-8 px-6 text-[10px] font-semibold uppercase tracking-wide"
                    >
                        book a free consult
                    </Button>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 py-6 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Logo */}
                    <div className="flex justify-center mb-5">
                        <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white text-[10px]">◇</span>
                        </div>
                    </div>
                    
                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[10px] text-white/40 mb-5">
                        <div className="flex flex-col gap-0.5 text-center">
                            <span className="text-white/20 uppercase tracking-wider text-[8px] mb-1">pages</span>
                            <Link to="/" className="hover:text-white">home</Link>
                            <Link to="/about" className="hover:text-white">about</Link>
                        </div>
                        <div className="flex flex-col gap-0.5 text-center">
                            <span className="text-white/20 uppercase tracking-wider text-[8px] mb-1">works</span>
                            <Link to="/works" className="hover:text-white">projects</Link>
                            <Link to="/services" className="hover:text-white">services</Link>
                        </div>
                        <div className="flex flex-col gap-0.5 text-center">
                            <span className="text-white/20 uppercase tracking-wider text-[8px] mb-1">contact</span>
                            <Link to="/contact" className="hover:text-white">get in touch</Link>
                        </div>
                    </div>
                    
                    {/* Social */}
                    <div className="flex justify-center gap-3 text-white/20 text-xs">
                        <a href="#" className="hover:text-white">𝕏</a>
                        <a href="#" className="hover:text-white">in</a>
                        <a href="#" className="hover:text-white">◉</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
