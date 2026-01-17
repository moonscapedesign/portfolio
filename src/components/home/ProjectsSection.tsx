import { Button } from "../ui/button"

export function ProjectsSection() {
    return (
        <section className="bg-[#F0F0E6]">
            <div className="flex flex-col md:flex-row">
                {/* Left Column - Purple Box with Scribble */}
                <div className="w-full md:w-[40%] relative">
                    {/* Purple Box */}
                    <div className="bg-[#7B61FF] p-6 md:p-8 text-white h-full flex flex-col justify-center relative overflow-hidden min-h-[280px]">
                        {/* Wireframe scribble decoration */}
                        <svg className="absolute bottom-4 left-4 right-4 h-[120px] text-white/30" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
                            <path d="M0,50 Q30,20 60,50 T120,50 T180,50 T240,50" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M0,60 Q30,30 60,60 T120,60 T180,60 T240,60" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M0,70 Q30,40 60,70 T120,70 T180,70 T240,70" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                            <ellipse cx="100" cy="55" rx="80" ry="35" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                            <ellipse cx="100" cy="55" rx="60" ry="25" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        
                        <h2 className="text-xl md:text-2xl font-black leading-tight mb-4 relative z-10">
                            Here are some of my past projects.
                        </h2>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#7B61FF] rounded-none px-4 h-7 text-[10px] font-semibold uppercase tracking-wide w-fit relative z-10">
                            view all projects
                        </Button>
                    </div>
                </div>

                {/* Right Column - Project Images Grid */}
                <div className="w-full md:w-[60%] grid grid-cols-2 gap-0">
                    <div className="aspect-[4/3] bg-[#7B61FF] overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop" 
                            alt="Project 1"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="aspect-[4/3] bg-[#E8E4D9] overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" 
                            alt="Project 2"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="aspect-[4/3] bg-[#E8E4D9] overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=600&auto=format&fit=crop" 
                            alt="Project 3"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="aspect-[4/3] bg-[#7B61FF] overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=600&auto=format&fit=crop" 
                            alt="Project 4"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
