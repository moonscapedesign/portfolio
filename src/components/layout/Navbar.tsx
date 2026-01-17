import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Works", path: "/works" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
            <nav
                className={cn(
                    "flex items-center justify-between w-full max-w-5xl rounded-full px-6 py-3 transition-all duration-300",
                    scrolled || isOpen
                        ? "bg-white/80 backdrop-blur-md shadow-sm border border-black/5"
                        : "bg-transparent"
                )}
            >
                {/* Logo */}
                <Link to="/" className="text-xl font-bold tracking-tight z-50 relative">
                    BRAYDEN<span className="text-accent">.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-accent",
                                location.pathname === link.path ? "text-primary" : "text-primary/60"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Button size="sm" className="gap-2 rounded-full">
                        Book a call <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-1 relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-16 left-0 right-0 mx-4 p-6 bg-white rounded-2xl shadow-xl border border-black/5 md:hidden flex flex-col gap-4"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={cn(
                                        "text-lg font-medium py-2 border-b border-gray-100 last:border-0",
                                        location.pathname === link.path ? "text-accent" : "text-primary"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full justify-center mt-2 rounded-full">
                                Book a call
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}
