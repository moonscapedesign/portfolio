import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export function CTASection() {
    return (
        <section className="bg-[#0A0A0A]">
            {/* CTA Content */}
            <div className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[13px] font-medium text-[#9B8AFF] uppercase tracking-wider mb-4">
                            Let's Work Together
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-5">
                            Ready to elevate your brand?
                        </h2>
                        
                        <p className="text-white/50 text-[15px] md:text-base max-w-lg mx-auto mb-10 leading-[1.7]">
                            Let's discuss how we can bring your vision to life with thoughtful, impactful design.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="bg-white hover:bg-white/90 text-[#0A0A0A] rounded-none h-11 px-6 text-[13px] font-medium transition-all duration-200">
                                <Link to="/contact">Start a project</Link>
                            </Button>
                            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#0A0A0A] rounded-none h-11 px-6 text-[13px] font-medium transition-all duration-200">
                                <Link to="/works">View my work</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 py-8 px-6 md:px-12 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Logo & Copyright */}
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-[15px] text-white">Moonscape Designs</span>
                            <span className="text-white/30">•</span>
                            <span className="text-white/40 text-[13px]">© 2026</span>
                        </div>
                        
                        {/* Navigation */}
                        <nav className="flex flex-wrap justify-center gap-6 text-[13px] text-white/50">
                            <Link to="/" className="hover:text-[#9B8AFF] transition-colors">Home</Link>
                            <Link to="/about" className="hover:text-[#9B8AFF] transition-colors">About</Link>
                            <Link to="/works" className="hover:text-[#9B8AFF] transition-colors">Works</Link>
                            <Link to="/services" className="hover:text-[#9B8AFF] transition-colors">Services</Link>
                            <Link to="/contact" className="hover:text-[#9B8AFF] transition-colors">Contact</Link>
                        </nav>
                        
                        {/* Social */}
                        <div className="flex gap-5 text-white/40 text-[13px]">
                            <a href="#" className="hover:text-[#9B8AFF] transition-colors">Twitter</a>
                            <a href="#" className="hover:text-[#9B8AFF] transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-[#9B8AFF] transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
