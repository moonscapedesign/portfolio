import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Card, CardContent } from "../components/ui/card"

export function Contact() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                <div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Let's Talk.</h1>
                    <p className="text-xl text-gray-500 mb-12">
                        Have a project in mind? detailed description I'd love to hear about it.
                        Send me a message and I'll get back to you as soon as possible.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <p className="font-semibold text-primary mb-1">Email</p>
                            <a href="mailto:hello@brayden.design" className="text-lg text-gray-600 hover:text-accent transition-colors">hello@brayden.design</a>
                        </div>
                        <div>
                            <p className="font-semibold text-primary mb-1">Phone</p>
                            <p className="text-lg text-gray-600">+61 400 123 456</p>
                        </div>
                        <div>
                            <p className="font-semibold text-primary mb-1">Studio</p>
                            <p className="text-lg text-gray-600">Surry Hills, Sydney<br />NSW 2010, Australia</p>
                        </div>
                    </div>
                </div>

                <Card className="border-none shadow-lg bg-white">
                    <CardContent className="p-8">
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <Input id="subject" placeholder="Project inquiry..." />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px]" />
                            </div>
                            <Button type="submit" size="lg" className="w-full rounded-full">
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
