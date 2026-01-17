import { Hero } from "../components/home/Hero"
import { LogoMarquee } from "../components/home/LogoMarquee"
import { Services } from "../components/home/Services"

export function Home() {
    return (
        <main>
            <Hero />
            <LogoMarquee />
            <Services />
        </main>
    )
}
