"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function WhyChooseUs() {
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

  const values = [
    {
      title: "Quality First",
      description:
        "Every product is carefully selected and tested to ensure superior acoustic performance and durability.",
      icon: "✓",
    },
    {
      title: "Design Excellence",
      description:
        "We believe acoustic treatment should enhance your space aesthetically while improving sound quality.",
      icon: "◆",
    },
    {
      title: "Expert Guidance",
      description:
        "Our team provides personalized recommendations to help you achieve optimal acoustics for your specific needs.",
      icon: "★",
    },
    {
      title: "Trusted Partners",
      description:
        "We partner with leading manufacturers and Amazon to ensure reliable delivery and customer satisfaction.",
      icon: "◉",
    },
    {
      title: "Comprehensive Selection",
      description:
        "From foam panels to bass traps, we offer a complete range of acoustic solutions for any application.",
      icon: "▣",
    },
    {
      title: "Customer Success",
      description:
        "Your satisfaction is our priority. We're here to support you from selection to installation and beyond.",
      icon: "♦",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-black to-background relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            Why Choose <span className="text-primary">Soundwall</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            We're committed to delivering exceptional acoustic solutions that transform your space
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border-2 border-primary/20 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-4xl text-primary mb-4">{value.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
