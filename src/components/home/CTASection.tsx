import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export function CTASection() {
    return (
        <section className="bg-[#1A1A1A] relative overflow-hidden">
            {/* Wireframe decoration */}
            <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[250px] pointer-events-none opacity-10">
                <svg className="w-full h-full text-white" viewBox="0 0 300 100">
                    <ellipse cx="150" cy="60" rx="140" ry="55" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    <ellipse cx="150" cy="60" rx="110" ry="42" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    <ellipse cx="150" cy="60" rx="80" ry="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </svg>
            </div>

            <div className="text-center relative z-10 py-20 md:py-28 px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-5">
                        Ready to start<br />
                        your project?
                    </h2>
                    
                    <p className="text-white/45 text-[15px] md:text-base max-w-md mx-auto mb-10 leading-[1.7]">
                        Let's discuss how we can bring your vision to life with thoughtful, impactful design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Button asChild className="bg-[#7B61FF] hover:bg-[#6A51E0] text-white rounded-none h-10 px-6 text-[13px] font-medium transition-all duration-200">
                            <Link to="/contact">Book a free consultation</Link>
                        </Button>
                        <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#1A1A1A] rounded-none h-10 px-6 text-[13px] font-medium transition-all duration-200">
                            <Link to="/works">View my work</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 py-10 px-6 md:px-12">
                <div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        {/* Logo & Copyright */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                                    <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
                                </svg>
                            </div>
                            <span className="text-white/40 text-sm">© 2026 All rights reserved</span>
                        </div>
                        
                        {/* Navigation */}
                        <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
                            <Link to="/" className="hover:text-white transition-colors">Home</Link>
                            <Link to="/about" className="hover:text-white transition-colors">About</Link>
                            <Link to="/works" className="hover:text-white transition-colors">Works</Link>
                            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                        </nav>
                        
                        {/* Social */}
                        <div className="flex gap-6 text-white/40">
                            <a href="#" className="hover:text-white transition-colors text-base">Twitter</a>
                            <a href="#" className="hover:text-white transition-colors text-base">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors text-base">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
