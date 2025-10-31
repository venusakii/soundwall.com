"use client"

export function AboutHero() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-background via-background to-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
          About <span className="neon-cyan">Soundwall</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Transforming spaces through the perfect harmony of acoustics and aesthetics
        </p>
      </div>
    </section>
  )
}
