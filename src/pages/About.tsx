import { Button } from "../components/ui/button"

export function About() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-12">About Me.</h1>

            <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed">
                <p>
                    I'm Brayden, a digital product designer and frontend developer based in Sydney.
                    I have a passion for creating clean, functional, and aesthetically pleasing interfaces.
                </p>
                <p>
                    With over 5 years of experience, I've had the privilege of working with startups
                    and established companies to bring their visions to life. My approach combines
                    technical expertise with a deep understanding of user psychology.
                </p>
                <p>
                    When I'm not coding, you can find me exploring new coffee shops, hiking, or
                    tinkering with the latest tech gadgets.
                </p>
            </div>

            <div className="mt-12 flex gap-4">
                <Button size="lg" className="rounded-full">Download CV</Button>
                <Button variant="outline" size="lg" className="rounded-full">Read my blog</Button>
            </div>
        </div>
    )
}
