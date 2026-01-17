export function LogoMarquee() {
    const logos = [
        "ACME", "Apex", "Brilliance", "Command", "Echo", "Flux", "Gravity", "Horizon"
    ]
    const duplicatedLogos = [...logos, ...logos]

    return (
        <section className="py-12 border-y border-gray-200 bg-white overflow-hidden">
            <div className="flex">
                <div className="flex animate-scroll whitespace-nowrap">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={index} className="mx-8 md:mx-16 flex items-center">
                            <span className="text-2xl font-bold text-gray-300 font-mono tracking-wider">{logo}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
