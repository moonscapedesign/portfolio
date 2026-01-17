import { Link } from "react-router-dom"

export function Footer() {
    return (
        <footer>
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
        </footer>
    )
}
