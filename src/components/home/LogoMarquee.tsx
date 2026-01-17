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
        <section className="py-5 bg-[#F5F5F0] overflow-hidden border-y border-[#1A1A1A]/5">
            <div className="flex">
                <div className="flex animate-scroll whitespace-nowrap">
                    {[...clients, ...clients].map((client, index) => (
                        <div key={index} className="mx-8 md:mx-12 flex items-center">
                            <span className="text-sm font-medium text-[#1A1A1A]/40 tracking-wider uppercase">{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
