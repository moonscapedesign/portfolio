import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Home } from "./pages/Home"
import { Works } from "./pages/Works"
import { CaseStudy } from "./pages/CaseStudy"
import { Gallery } from "./pages/Gallery"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Services } from "./pages/Services"


function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/works/:id" element={<CaseStudy />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

function Layout() {
    const location = useLocation()
    const isHomePage = location.pathname === "/"

    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <ScrollToTop />
            <Navbar />
            <div className="flex-grow">
                <AnimatedRoutes />
            </div>
            {!isHomePage && <Footer />}
        </div>
    )
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    )
}

export default App