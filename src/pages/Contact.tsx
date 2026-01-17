import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-[#0A0A0A]">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.9]">
                        Let's start<br />
                        <span className="text-[#9B8AFF]">something.</span>
                    </h1>
                    <p className="text-xl text-white/60 mb-16 max-w-md mx-auto">
                        Have a project in mind or just want to say hi? I'm currently available for new opportunities.
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <a href="mailto:b.moonscapedesign@gmail.com" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-[#9B8AFF] transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-white/50">Email me at</p>
                                <p className="text-lg font-medium text-white">b.moonscapedesign@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-white/50">Call me</p>
                                <p className="text-lg font-medium text-white">+61 400 000 000</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-white/50">Located in</p>
                                <p className="text-lg font-medium text-white">Yarra Valley, Victoria</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
