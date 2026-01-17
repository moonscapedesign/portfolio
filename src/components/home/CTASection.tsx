import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { MoveUpRight } from "lucide-react"

export function CTASection() {
    return (
        <section className="py-32 px-6 bg-[#1A1A1A] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 border border-[#7B61FF]/20 rounded-full" />
                <div className="absolute bottom-10 right-10 w-48 h-48 border border-[#7B61FF]/20 rounded-full" />
                <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-[#7B61FF]/10 rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8">
                        The best time<br />
                        <span className="text-[#7B61FF]">is now.</span>
                    </h2>
                    
                    <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-12">
                        Let me tell you more about how life-changing this is.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button 
                            className="bg-[#7B61FF] hover:bg-[#6A51E0] text-white rounded-none h-14 px-10 text-base font-bold shadow-[8px_8px_0px_0px_rgba(123,97,255,0.3)] hover:translate-y-1 hover:shadow-none transition-all"
                        >
                            book a free consult
                            <MoveUpRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button 
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white hover:text-[#1A1A1A] rounded-none h-14 px-10 text-base font-bold"
                        >
                            view my work
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
