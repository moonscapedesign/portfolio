import { Hero } from "../components/home/Hero"
import { TestimonialsMarquee } from "../components/home/TestimonialsMarquee"
import { ProjectsShowcase } from "../components/home/ProjectsShowcase"
import { FeaturesSection } from "../components/home/FeaturesSection"
import { CTASection } from "../components/home/CTASection"

export function Home() {
    return (
        <main>
            <Hero />
            <TestimonialsMarquee />
            <ProjectsShowcase />
            <FeaturesSection />
            <CTASection />
        </main>
    )
}
