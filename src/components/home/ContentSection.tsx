import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
    {
        logo: "◇ LOGOIPSUM",
        quote: "We appreciate the work Matt has done for us over the years! We've found ourselves often returning to him for our design needs!",
        author: "CEO, Logo Ipsum"
    },
    {
        logo: "△ Logoipsum",
        quote: "Matt has a great understanding of our specific needs and surpassed our expectations!",
        author: "CEO, Logo Ipsum"
    },
    {
        logo: "☆ Logoipsum",
        quote: "A designer who truly listens and delivers exactly what we needed. Would highly recommend!",
        author: "CEO, Logo Ipsum"
    }
]

export function ContentSection() {
    return (
        <section className="bg-[#F0F0E6]">
            <div className="flex flex-col md:flex-row">
                {/* Left Column - Purple Box with Scribble */}
                <div className="w-full md:w-[40%] relative flex flex-col">
                    {/* Purple Box */}
                    <div className="bg-[#7B61FF] p-6 md:p-8 text-white">
                        <h2 className="text-xl md:text-2xl font-black leading-tight mb-3">
                            We make sure their first impression is memorable.
                        </h2>
                        <p className="text-white/60 text-[11px] mb-5 max-w-[280px] leading-relaxed">
                            We've worked with hundreds of startups and established businesses in creating memorable digital experiences that capture the eyes of many.
                        </p>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#7B61FF] rounded-none px-4 h-7 text-[10px] font-semibold uppercase tracking-wide">
                            book a free call
                        </Button>
                    </div>
                    
                    {/* Scribble/Wireframe below purple box */}
                    <div className="flex-1 flex items-center justify-center py-8 md:py-0">
                        <svg className="w-[200px] md:w-[240px] h-[160px] md:h-[200px] text-[#7B61FF]" viewBox="0 0 200 160">
                            {/* Wavy lines */}
                            <path d="M10,80 Q40,30 80,80 T150,80 T220,80" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M10,90 Q40,40 80,90 T150,90 T220,90" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M10,100 Q40,50 80,100 T150,100 T220,100" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M10,110 Q40,60 80,110 T150,110 T220,110" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                            {/* Ellipses */}
                            <ellipse cx="100" cy="90" rx="85" ry="55" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                            <ellipse cx="100" cy="90" rx="65" ry="40" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                    </div>
                </div>

                {/* Right Column - Testimonial Cards */}
                <div className="w-full md:w-[60%] p-4 md:p-6 flex flex-col gap-3">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="bg-[#E8E4D9] p-4 relative"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <span className="text-[10px] font-bold text-[#1A1A1A]/70 tracking-wide">
                                    {testimonial.logo}
                                </span>
                                {index === 1 && (
                                    <div className="flex gap-1">
                                        <button className="w-5 h-5 border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-white/50">
                                            <ChevronLeft className="w-2.5 h-2.5" />
                                        </button>
                                        <button className="w-5 h-5 border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-white/50">
                                            <ChevronRight className="w-2.5 h-2.5" />
                                        </button>
                                    </div>
                                )}
                            </div>
                            <p className="text-[#1A1A1A]/60 text-[10px] leading-relaxed pr-8">
                                {testimonial.quote}
                            </p>
                            {/* Purple accent shape */}
                            <div className="absolute top-3 right-3">
                                <svg className="w-5 h-5 text-[#7B61FF]/40" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10"/>
                                    <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M22 12c0-5.52-4.48-10-10-10"/>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
