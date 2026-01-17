import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Layout, Smartphone } from "lucide-react"
import { Button } from "../components/ui/button"

const services = [
    {
        id: "01",
        title: "Product Design",
        description: "I design digital products that solve real problems. From wireframes to high-fidelity prototypes.",
        icon: Layout
    },
    {
        id: "02",
        title: "Frontend Development",
        description: "Bringing designs to life with clean, performant, and accessible code using modern frameworks.",
        icon: Code
    },
    {
        id: "03",
        title: "Mobile Solutions",
        description: "Native and cross-platform mobile application design and development.",
        icon: Smartphone
    },
    {
        id: "04",
        title: "Design Systems",
        description: "Creating scalable design systems that ensure consistency across all your products.",
        icon: Database
    }
]

export function Services() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-[#1A1A1A] text-[#F0F0E6]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
                        My<br />
                        <span className="text-[#7B61FF]">Services.</span>
                    </h1>
                    <p className="text-2xl opacity-60 max-w-2xl leading-relaxed">
                        A comprehensive suite of design and development services tailored to helping your business grow.
                    </p>
                </motion.div>

                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group py-12 border-t border-[#F0F0E6]/10 flex flex-col md:flex-row md:items-start gap-8 md:gap-20 cursor-default hover:bg-white/5 transition-colors px-4 -mx-4 rounded-3xl"
                        >
                            <span className="text-sm font-mono text-[#7B61FF] pt-2">{service.id}</span>

                            <div className="flex-1">
                                <h3 className="text-4xl md:text-5xl font-bold mb-4 group-hover:translate-x-4 transition-transform duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-lg opacity-60 max-w-xl">
                                    {service.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#F0F0E6]/20 text-[#F0F0E6] group-hover:bg-[#7B61FF] group-hover:border-[#7B61FF] transition-all duration-300">
                                <service.icon className="w-6 h-6" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 p-12 bg-[#7B61FF] rounded-[3rem] text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to start a project?</h2>
                    <Button className="bg-white text-[#7B61FF] hover:bg-[#F0F0E6] h-14 px-10 rounded-full text-lg font-semibold">
                        Let's Talk <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}
