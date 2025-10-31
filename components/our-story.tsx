"use client"

import { useEffect, useRef, useState } from "react"

export function OurStory() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-black relative">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-12 text-white text-center">
            Our <span className="text-primary">Story</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soundwall was born from a simple observation: great sound shouldn't come at the cost of great design. We
                noticed that acoustic treatment was often seen as purely functional, with little regard for aesthetics.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our founders, passionate about both audio engineering and interior design, set out to change this
                narrative. We curated a collection of acoustic solutions that don't just perform exceptionally—they
                elevate the visual appeal of any space.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Soundwall serves thousands of customers worldwide, from home studio enthusiasts to professional
                recording facilities, helping them achieve acoustic perfection without compromising on style.
              </p>
            </div>

            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
              <div className="absolute inset-4 bg-card border-2 border-primary/30 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-4">2019</div>
                  <div className="text-xl text-muted-foreground">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
