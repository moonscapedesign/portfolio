import { Link, useLocation } from "react-router-dom"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"

export function Navbar() {
    const location = useLocation()

    const navLinks = [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "works", path: "/works" },
        { name: "services", path: "/services" },
        { name: "contact", path: "/contact" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F0F0E6]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <div className="w-7 h-7 border border-[#1A1A1A]/30 rounded-full flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#1A1A1A]">
                            <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
                        </svg>
                    </div>
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-[11px] font-medium transition-colors",
                                location.pathname === link.path 
                                    ? "text-[#1A1A1A]" 
                                    : "text-[#1A1A1A]/50 hover:text-[#1A1A1A]"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <Button className="bg-[#1A1A1A] hover:bg-[#333] text-white rounded-none h-7 px-4 text-[10px] font-semibold uppercase tracking-wide">
                    book a call
                </Button>
            </div>
        </header>
    )
}
