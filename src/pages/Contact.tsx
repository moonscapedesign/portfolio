import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-[#F0F0E6]">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#1A1A1A] mb-8 leading-[0.9]">
                            Let's start<br />
                            <span className="text-[#7B61FF]">something.</span>
                        </h1>
                        <p className="text-xl text-[#1A1A1A]/60 mb-12 max-w-md">
                            Have a project in mind or just want to say hi? I'm currently available for new opportunities.
                        </p>

                        <div className="space-y-8">
                            <a href="mailto:b.moonscapedesign@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#7B61FF] group-hover:text-white transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email me at</p>
                                    <p className="text-lg font-medium">b.moonscapedesign@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1A1A1A]">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Call me</p>
                                    <p className="text-lg font-medium">+61 400 123 456</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1A1A1A]">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Located in</p>
                                    <p className="text-lg font-medium">Sydney, Australia</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-black/5"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-500">Name</label>
                                    <Input id="name" placeholder="John Doe" className="bg-[#F0F0E6] border-transparent h-12 rounded-xl focus:bg-white transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-500">Email</label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="bg-[#F0F0E6] border-transparent h-12 rounded-xl focus:bg-white transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-500">Subject</label>
                                <Input id="subject" placeholder="Project inquiry..." className="bg-[#F0F0E6] border-transparent h-12 rounded-xl focus:bg-white transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-500">Message</label>
                                <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-[#F0F0E6] border-transparent rounded-xl focus:bg-white transition-colors resize-none p-4" />
                            </div>
                            <Button type="submit" size="lg" className="w-full bg-[#1A1A1A] hover:bg-[#7B61FF] text-white h-14 rounded-xl font-semibold text-lg">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
