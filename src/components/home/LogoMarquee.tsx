export function LogoMarquee() {
    const logos = [
        "ACME", "Apex", "Brilliance", "Command", "Echo", "Flux", "Gravity", "Horizon"
    ]

    return (
        <section
            className="py-12 bg-transparent overflow-hidden opacity-40 mix-blend-multiply"
            aria-label="Trusted by companies"
        >
            <div className="flex">
                <div className="flex animate-scroll whitespace-nowrap">
                    {logos.map((logo, index) => (
                        <div key={`logo-1-${index}`} className="mx-8 md:mx-16 flex items-center">
                            <span className="text-2xl font-bold text-gray-300 font-mono tracking-wider">{logo}</span>
                        </div>
                    ))}
                    {/* Duplicate set for seamless scrolling - marked as decorative */}
                    {logos.map((logo, index) => (
                        <div key={`logo-2-${index}`} className="mx-8 md:mx-16 flex items-center" aria-hidden="true">
                            <span className="text-2xl font-bold text-gray-300 font-mono tracking-wider">{logo}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
