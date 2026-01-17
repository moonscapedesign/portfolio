export function LogoMarquee() {
    const clients = [
        "TechStart",
        "Design Co",
        "Venture Labs",
        "Creative Studio",
        "Digital First",
        "Brand Agency",
        "StartupXYZ",
        "Innovation Inc"
    ]

    return (
        <section className="py-5 bg-[#0A0A0A] overflow-hidden border-y border-white/5">
            <div className="flex">
                <div className="flex animate-scroll whitespace-nowrap">
                    {[...clients, ...clients].map((client, index) => (
                        <div key={index} className="mx-8 md:mx-12 flex items-center">
                            <span className="text-sm font-medium text-white/30 tracking-wider uppercase">{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
