
import { motion } from "framer-motion"
import { getGalleryImages } from "../lib/content"
import { ArrowUpRight } from "lucide-react"

export function Gallery() {
    const images = getGalleryImages()

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8"
                >
                    Photo<br />
                    <span className="text-[#9B8AFF]">Gallery.</span>
                </motion.h1>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 max-w-6xl mx-auto space-y-8">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="break-inside-avoid relative group rounded-2xl overflow-hidden"
                    >
                        <img
                            src={img}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-[#0A0A0A] p-2 rounded-full shadow-lg">
                                <ArrowUpRight className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
