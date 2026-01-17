const testimonials = [
    {
        quote: "We appreciate the work Bridie has done for us over the years! We've found ourselves often returning to her for our design needs!",
        author: "CEO, Logo Ipsum"
    },
    {
        quote: "Bridie has a great understanding of our specific needs and surpassed our expectations!",
        author: "CEO, Logo Ipsum"
    },
    {
        quote: "We appreciate the work Bridie has done for us over the years! We've found ourselves often returning to her for our design needs!",
        author: "CEO, Logo Ipsum"
    },
    {
        quote: "Bridie has a great understanding of our specific needs and surpassed our expectations!",
        author: "CEO, Logo Ipsum"
    }
]

export function TestimonialsMarquee() {
    return (
        <section className="py-8 bg-[#F0F0E6] overflow-hidden">
            <div className="flex">
                <div className="flex gap-6 animate-scroll">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 bg-white p-6 w-[400px] shadow-sm border border-[#1A1A1A]/5"
                        >
                            <p className="text-[#1A1A1A]/80 text-sm leading-relaxed mb-4">
                                "{testimonial.quote}"
                            </p>
                            <p className="text-[#1A1A1A] text-xs font-semibold">
                                - {testimonial.author}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
