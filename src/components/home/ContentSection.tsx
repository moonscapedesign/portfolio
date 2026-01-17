import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const testimonials = [
    {
        company: "TechStart Inc.",
        quote: "Working with Bridie transformed our brand identity. Her attention to detail and understanding of our vision exceeded all expectations.",
        author: "Sarah Chen",
        role: "CEO"
    },
    {
        company: "Design Co.",
        quote: "Bridie has a remarkable ability to translate complex ideas into beautiful, functional designs. A true professional.",
        author: "James Miller",
        role: "Creative Director"
    },
    {
        company: "Venture Labs",
        quote: "The results speak for themselves. Our conversion rates improved by 40% after the redesign.",
        author: "Emily Watson",
        role: "Head of Product"
    }
]

export function ContentSection() {
    return (
        <section className="py-20 md:py-28 px-6 md:px-12 bg-[#F5F5F0]">
            <div>
                {/* Purple CTA Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#7B61FF] p-10 md:p-14 text-white text-center mb-14"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-[1.15] tracking-[-0.01em] mb-4 max-w-2xl mx-auto">
                        Making first impressions memorable.
                    </h2>
                    <p className="text-white/60 text-[15px] md:text-base mb-8 max-w-xl mx-auto leading-[1.7]">
                        Partnering with startups and established businesses to create digital experiences that captivate and convert.
                    </p>
                    <Button asChild variant="outline" className="border-white/80 text-white hover:bg-white hover:text-[#7B61FF] rounded-none px-5 h-10 text-[13px] font-medium transition-all duration-200">
                        <Link to="/contact">Book a free call</Link>
                    </Button>
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
                            className="bg-white p-6 border border-[#1A1A1A]/5 hover:border-[#7B61FF]/20 transition-colors duration-300"
                        >
                            <span className="text-[11px] font-semibold text-[#7B61FF] tracking-wider uppercase mb-3 block">
                                {testimonial.company}
                            </span>
                            <p className="text-[#1A1A1A]/60 text-[13px] leading-[1.7] mb-5">
                                "{testimonial.quote}"
                            </p>
                            <div>
                                <span className="text-[13px] font-semibold text-[#1A1A1A] block">{testimonial.author}</span>
                                <span className="text-[11px] text-[#1A1A1A]/40">{testimonial.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
