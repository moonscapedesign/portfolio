import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getGalleryImages } from "../lib/content"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

export function Gallery() {
    const images = getGalleryImages()
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const openLightbox = useCallback((index: number) => {
        setSelectedIndex(index)
        document.body.style.overflow = "hidden"
    }, [])

    const closeLightbox = useCallback(() => {
        setSelectedIndex(null)
        document.body.style.overflow = "auto"
    }, [])

    const goToPrevious = useCallback(() => {
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
        }
    }, [selectedIndex, images.length])

    const goToNext = useCallback(() => {
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
        }
    }, [selectedIndex, images.length])

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === "Escape") closeLightbox()
        if (e.key === "ArrowLeft") goToPrevious()
        if (e.key === "ArrowRight") goToNext()
    }, [closeLightbox, goToPrevious, goToNext])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-32 pb-20 px-4 sm:px-6 bg-[#0A0A0A]"
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4"
                >
                    Photo<br />
                    <span className="text-[#9B8AFF]">Gallery.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-white/60 text-lg max-w-xl"
                >
                    A curated collection of visual work and creative explorations.
                </motion.p>
            </div>

            {/* Masonry Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                            className="break-inside-avoid mb-4"
                        >
                            <div
                                onClick={() => openLightbox(index)}
                                className="relative group cursor-pointer rounded-xl overflow-hidden bg-white/5"
                            >
                                <img
                                    src={img}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Zoom Icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                        <ZoomIn className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                {/* Image Number Badge */}
                                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-xs font-medium text-white/80 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                                        {index + 1} / {images.length}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Navigation - Previous */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goToPrevious() }}
                            className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>

                        {/* Navigation - Next */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goToNext() }}
                            className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="max-w-[90vw] max-h-[85vh] relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[selectedIndex]}
                                alt={`Gallery image ${selectedIndex + 1}`}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>

                        {/* Image Counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                            {selectedIndex + 1} of {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
