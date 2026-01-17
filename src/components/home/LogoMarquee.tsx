export function LogoMarquee() {
    const logos = [
        { icon: "◇", name: "Logoipsum" },
        { icon: "▽", name: "Logoipsum" },
        { icon: "☆", name: "Logoipsum" },
        { icon: "◎", name: "LOGOIPSUM" },
        { icon: "△", name: "Logoipsum" },
        { icon: "⬡", name: "Logoipsum" },
        { icon: "◈", name: "LOGOIPSUM" },
        { icon: "✦", name: "Logoipsum" },
    ]

    return (
        <section className="py-4 bg-[#F0F0E6] overflow-hidden border-y border-[#1A1A1A]/10">
            <div className="flex">
                <div className="flex animate-scroll whitespace-nowrap">
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="mx-6 md:mx-10 flex items-center gap-2">
                            <span className="text-lg text-[#1A1A1A]/70">{logo.icon}</span>
                            <span className="text-sm font-medium text-[#1A1A1A]/70 tracking-wide">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
