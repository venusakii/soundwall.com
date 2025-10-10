"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-center mb-8 text-white">
            About <span className="text-primary">Soundwall</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soundwall is not just an acoustic panels store. It's an atmospheric portal about sound and space design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to make perfect acoustics accessible to everyone. We believe that quality sound and
              aesthetics should go hand in hand, creating spaces where every note sounds perfect.
            </p>
            <div className="pt-8 flex justify-center">
              <div className="relative w-64 h-64">
                {/* Sound wave visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
                      style={{
                        transform: `translateY(${(i - 2) * 20}px)`,
                        animation: `wave ${2 + i * 0.5}s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
                {/* Panel illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-40 bg-card border-2 border-primary/50 rounded-lg shadow-lg shadow-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
