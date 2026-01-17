import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 px-6">
            <div className="max-w-5xl mx-auto flex flex-col gap-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold max-w-md leading-tight">
                        Let's work together.
                    </h2>
                    <Button variant="outline" size="lg" className="rounded-full gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white">
                        Get in touch <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="h-px bg-white/10 w-full my-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/50">
                    <p>© 2026 Moonscape Designs. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-white transition-colors">Twitter</Link>
                        <a href="https://www.linkedin.com/in/bridiemoon03/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://www.instagram.com/moonscape_design_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
