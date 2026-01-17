import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        title: "E-Commerce Rebrand",
        category: "Design & Development",
        description: "Complete overhaul of a fashion retailer's online presence, resulting in a 40% increase in conversions.",
        image: "bg-orange-100"
    },
    {
        title: "Fintech Dashboard",
        category: "Product Design",
        description: "Simplifying complex financial data for everyday users through intuitive UI design.",
        image: "bg-blue-100"
    },
    {
        title: "Travel App",
        category: "Mobile App",
        description: "A seamless booking experience for modern travelers, featured in the App Store.",
        image: "bg-green-100"
    },
    {
        title: "AI Marketing Tool",
        category: "SaaS Development",
        description: "Leveraging generative AI to help marketers create content 10x faster.",
        image: "bg-purple-100"
    }
]

export function Works() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
            <div className="mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Selected Works</h1>
                <p className="text-xl text-gray-500 max-w-2xl">A collection of projects that I've worked on recently.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="group overflow-hidden border-none shadow-none bg-transparent">
                        <div className={`aspect-[4/3] ${project.image} rounded-3xl mb-6 overflow-hidden relative`}>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                            <Button
                                variant="secondary"
                                size="icon"
                                className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </Button>
                        </div>
                        <CardHeader className="p-0 mb-2">
                            <span className="text-sm font-medium text-accent mb-2">{project.category}</span>
                            <CardTitle className="text-2xl md:text-3xl">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <CardDescription className="text-base text-gray-600">
                                {project.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
