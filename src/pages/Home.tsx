import { Hero } from "../components/home/Hero"
import { LogoMarquee } from "../components/home/LogoMarquee"
import { ContentSection } from "../components/home/ContentSection"
import { CaseStudiesSection } from "../components/home/CaseStudiesSection"
import { FeaturesSection } from "../components/home/FeaturesSection"
import { CTASection } from "../components/home/CTASection"

export function Home() {
    return (
        <main>
            <Hero />
            <LogoMarquee />
            <CaseStudiesSection limit={2} />
            <FeaturesSection />
            <ContentSection />
            <CTASection />
        </main>
    )
}
