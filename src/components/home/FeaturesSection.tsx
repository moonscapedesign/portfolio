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
        <section className="py-20 md:py-28 px-6 md:px-12 bg-[#F5F5F0]">
            <div>
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 max-w-xl"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-[#1A1A1A] leading-[1.15] tracking-[-0.01em] mb-3">
                        Why work with me?
                    </h2>
                    <p className="text-[15px] md:text-base text-[#1A1A1A]/50 leading-[1.6]">
                        A strategic approach to design that delivers measurable results.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-5 mb-14">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#ECEADE] p-7 group hover:bg-[#7B61FF] transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-10 h-10 bg-[#7B61FF] group-hover:bg-white rounded-none flex items-center justify-center mb-5 transition-colors duration-300">
                                <feature.icon className="w-5 h-5 text-white group-hover:text-[#7B61FF] transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:text-white mb-2 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-[13px] text-[#1A1A1A]/50 group-hover:text-white/70 leading-[1.6] transition-colors duration-300">
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
                    className="text-center"
                >
                    <Button asChild className="bg-[#7B61FF] hover:bg-[#6A51E0] text-white rounded-none h-10 px-5 text-[13px] font-medium transition-all duration-200">
                        <Link to="/services">View all services</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
