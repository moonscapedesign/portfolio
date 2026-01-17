import { Palette, Terminal, Search, LineChart } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"

const services = [
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful interfaces that users love to engage with."
    },
    {
        icon: Terminal,
        title: "Development",
        description: "Building robust and scalable web applications using modern technologies."
    },
    {
        icon: Search,
        title: "SEO Optimization",
        description: "Improving your visibility online to reach your target audience effectively."
    },
    {
        icon: LineChart,
        title: "Analytics",
        description: "Data-driven insights to measure success and optimize performance."
    }
]

export function Services() {
    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">What I do.</h2>
                        <p className="text-lg text-gray-500 max-w-lg">I solve problems through design and code, helping businesses reach their full potential.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
