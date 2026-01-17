import { Link, useLocation } from "react-router-dom"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navbar() {
    const location = useLocation()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Works", path: "/works" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/5">
            <div className="px-6 md:px-12 py-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                            <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
                        </svg>
                    </div>
                    <span className="font-semibold text-[18px] text-white hidden sm:block tracking-[-0.01em]">Moonscape Designs</span>
                </Link>

                {/* Nav Links - Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-base font-medium transition-colors",
                                location.pathname === link.path
                                    ? "text-[#9B8AFF]"
                                    : "text-white/50 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button - Desktop */}
                <div className="hidden md:block">
                    <Button asChild className="bg-white hover:bg-white/90 text-[#0A0A0A] rounded-none h-11 px-7 text-[15px] font-medium transition-all duration-200">
                        <Link to="/contact">Book a call</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <Menu className="w-7 h-7 text-white" />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#0A0A0A] border-t border-white/5 px-6 py-6">
                    <nav className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                    "text-lg font-medium transition-colors py-2",
                                    location.pathname === link.path
                                        ? "text-[#9B8AFF]"
                                        : "text-white/50"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild className="bg-white text-[#0A0A0A] rounded-none h-12 text-base font-medium mt-2">
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Book a call</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
