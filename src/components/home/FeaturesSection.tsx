import { motion } from "framer-motion"
import { Sparkles, Clock, FlaskConical } from "lucide-react"

const features = [
    {
        icon: Sparkles,
        title: "Magical, fairy-tale results.",
        description: "Unbelievable track record that breaks records on the regular."
    },
    {
        icon: Clock,
        title: "On time service.",
        description: "We deliver fast. Often times design is slower than it needs to be. We deliver in 1-2 days."
    },
    {
        icon: FlaskConical,
        title: "Researched and tested.",
        description: "Unbelievable track record that breaks records on the regular."
    }
]

export function FeaturesSection() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] leading-tight mb-6">
                        Calculated, Tailored<br />
                        <span className="text-[#7B61FF]">Marketing.</span>
                    </h2>
                    <p className="text-[#1A1A1A]/60 text-lg max-w-xl mx-auto">
                        let me tell you more about how life-changing this is.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="bg-[#F0F0E6] p-8 h-full hover:bg-[#7B61FF] transition-colors duration-300 cursor-pointer">
                                <div className="w-14 h-14 bg-[#7B61FF] group-hover:bg-white flex items-center justify-center mb-6 transition-colors duration-300">
                                    <feature.icon className="w-7 h-7 text-white group-hover:text-[#7B61FF] transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-white mb-3 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-[#1A1A1A]/60 group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
