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
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F0]/95 backdrop-blur-sm border-b border-[#1A1A1A]/5">
            <div className="px-6 md:px-12 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-[#1A1A1A]/20 rounded-full flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#1A1A1A]">
                            <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
                        </svg>
                    </div>
                    <span className="font-semibold text-[15px] text-[#1A1A1A] hidden sm:block tracking-[-0.01em]">Moonscape Designs</span>
                </Link>

                {/* Nav Links - Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-[13px] font-medium transition-colors",
                                location.pathname === link.path
                                    ? "text-[#7B61FF]"
                                    : "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button - Desktop */}
                <div className="hidden md:block">
                    <Button asChild className="bg-[#1A1A1A] hover:bg-[#333] text-white rounded-none h-9 px-5 text-[13px] font-medium transition-all duration-200">
                        <Link to="/contact">Book a call</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <Menu className="w-7 h-7 text-[#1A1A1A]" />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#F5F5F0] border-t border-[#1A1A1A]/5 px-6 py-6">
                    <nav className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                    "text-lg font-medium transition-colors py-2",
                                    location.pathname === link.path
                                        ? "text-[#7B61FF]"
                                        : "text-[#1A1A1A]/60"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild className="bg-[#1A1A1A] text-white rounded-none h-12 text-base font-medium mt-2">
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Book a call</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
