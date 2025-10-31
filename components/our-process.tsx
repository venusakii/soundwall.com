"use client"

import { useEffect, useRef, useState } from "react"

export function OurProcess() {
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

  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "Browse our curated collection of acoustic solutions, each selected for quality and design excellence.",
    },
    {
      number: "02",
      title: "Select",
      description: "Choose products that match your acoustic needs and aesthetic preferences with our detailed guides.",
    },
    {
      number: "03",
      title: "Purchase",
      description: "Order securely through our Amazon partnership for reliable delivery and customer protection.",
    },
    {
      number: "04",
      title: "Transform",
      description:
        "Install your acoustic treatment and experience the perfect balance of sound quality and visual appeal.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Your journey to perfect acoustics in four simple steps
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="text-center">
                  <div className="inline-block mb-6">
                    <div className="text-6xl font-bold text-primary/20 font-[family-name:var(--font-display)]">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
