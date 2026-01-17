import { Hero } from "../components/home/Hero"
import { LogoMarquee } from "../components/home/LogoMarquee"
import { ContentSection } from "../components/home/ContentSection"
import { ProjectsSection } from "../components/home/ProjectsSection"
import { FeaturesSection } from "../components/home/FeaturesSection"
import { CTASection } from "../components/home/CTASection"

export function Home() {
    return (
        <main>
            <Hero />
            <LogoMarquee />
            <ContentSection />
            <ProjectsSection />
            <LogoMarquee />
            <FeaturesSection />
            <CTASection />
        </main>
    )
}
