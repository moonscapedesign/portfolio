import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { Clock, Sparkles, Target } from "lucide-react"

const features = [
    {
        icon: Clock,
        title: "Fast Turnaround",
        description: "Quality designs delivered in 1-2 business days. No endless revisions or delays."
    },
    {
        icon: Sparkles,
        title: "Pixel Perfect",
        description: "Every detail matters. Meticulous attention to design quality and consistency."
    },
    {
        icon: Target,
        title: "Results Driven",
        description: "Design decisions backed by research and focused on achieving your goals."
    }
]

export function FeaturesSection() {
    return (
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-[#7B61FF]">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-[13px] font-medium text-white/60 uppercase tracking-wider mb-3">
                        Why Choose Me
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.15] tracking-[-0.01em]">
                        A strategic approach to design
                    </h2>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/10 border border-white/20 p-6 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="w-11 h-11 bg-white rounded-none flex items-center justify-center mb-5">
                                <feature.icon className="w-5 h-5 text-[#7B61FF]" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-[13px] text-white/60 leading-[1.7]">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#7B61FF] rounded-none h-11 px-6 text-[13px] font-medium transition-all duration-200">
                        <Link to="/services">View all services</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
