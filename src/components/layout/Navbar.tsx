import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Film } from "lucide-react"
import { cn } from "../../lib/utils"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", path: "/", icon: Home },
        { name: "About", path: "/about", icon: User },
        { name: "Services", path: "/services", icon: Film },
        { name: "Works", path: "/works", icon: Briefcase },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
            <nav
                className={cn(
                    "pointer-events-auto flex items-center justify-between gap-2 px-2 py-2 transition-all duration-300",
                    "bg-[#F0F0E6]/80 backdrop-blur-md shadow-sm border border-primary/5 rounded-full"
                )}
            >
                <div className="flex items-center gap-1">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-primary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                            <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center gap-1 mx-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "p-3 rounded-full transition-colors hover:bg-black/5 relative group",
                                location.pathname === link.path ? "text-primary bg-white shadow-sm" : "text-primary/60"
                            )}
                            title={link.name}
                        >
                            <link.icon className="w-5 h-5" />
                            {location.pathname === link.path && (
                                <motion.div layoutId="nav-pill" className="absolute inset-0 bg-white rounded-full z-[-1] shadow-sm" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                            )}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}
