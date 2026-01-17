import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote: "Working with Bridie transformed our brand identity. Her attention to detail and understanding of our vision exceeded all expectations.",
        author: "Sarah Chen",
        role: "CEO",
        company: "TechStart Inc."
    },
    {
        quote: "Bridie has a remarkable ability to translate complex ideas into beautiful, functional designs. A true professional.",
        author: "James Miller",
        role: "Creative Director",
        company: "Design Co."
    },
    {
        quote: "The results speak for themselves. Our conversion rates improved by 40% after the redesign.",
        author: "Emily Watson",
        role: "Head of Product",
        company: "Venture Labs"
    }
]

export function ContentSection() {
    return (
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-[#1A1A1A]">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-[13px] font-medium text-[#7B61FF] uppercase tracking-wider mb-3">
                        Testimonials
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-[-0.01em] text-white">
                        What clients say
                    </h2>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors duration-300"
                        >
                            <Quote className="w-8 h-8 text-[#7B61FF] mb-4" />
                            <p className="text-white/70 text-[14px] leading-[1.7] mb-6">
                                {testimonial.quote}
                            </p>
                            <div className="border-t border-white/10 pt-4">
                                <span className="text-[13px] font-semibold text-white block">{testimonial.author}</span>
                                <span className="text-[12px] text-white/40">{testimonial.role}, {testimonial.company}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
