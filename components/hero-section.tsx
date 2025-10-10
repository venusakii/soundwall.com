"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated background waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-32 bg-primary/10 blur-3xl animate-wave" />
        <div
          className="absolute top-1/2 left-0 w-full h-32 bg-secondary/10 blur-3xl animate-wave"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-32 bg-primary/10 blur-3xl animate-wave"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-[family-name:var(--font-display)] text-6xl md:text-8xl font-bold mb-6 text-white">
          <span className="inline-block animate-float">Bring Silence.</span>
          <br />
          <span className="inline-block animate-float text-primary" style={{ animationDelay: "1s" }}>
            Shape Sound.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform any space into a studio or cozy zone with perfect acoustics. Balance between sound and aesthetics.
        </p>
        <Button
          size="lg"
          onClick={scrollToProducts}
          className="bg-primary text-primary-foreground hover:bg-primary/90 neon-cyan text-lg px-8 py-6 font-semibold"
        >
          Explore Products
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  )
}
