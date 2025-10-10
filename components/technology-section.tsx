"use client"

import { Card } from "@/components/ui/card"
import { Volume2, VolumeX } from "lucide-react"
import { useState } from "react"

export function TechnologySection() {
  const [showBefore, setShowBefore] = useState(true)

  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-center mb-8 text-white">
          Technology and Innovation
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
          See how sound disperses before and after installing acoustic panels
        </p>

        <Card className="bg-black border-2 border-primary/30 p-8 md:p-12">
          <div className="relative aspect-video bg-gradient-to-br from-card to-black rounded-lg overflow-hidden">
            {/* Interactive 3D room visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              {showBefore ? (
                <div className="relative w-full h-full">
                  {/* Sound waves bouncing everywhere (before) */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-0.5 bg-destructive/60 animate-wave"
                      style={{
                        top: `${10 + i * 7}%`,
                        animationDuration: `${1 + Math.random()}s`,
                        animationDelay: `${Math.random()}s`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Volume2 className="w-16 h-16 text-destructive mx-auto mb-4" />
                      <p className="text-destructive font-bold text-xl">BEFORE: Chaotic Sound Reflection</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  {/* Controlled sound waves (after) */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-0.5 bg-primary/60 animate-wave"
                      style={{
                        top: `${25 + i * 15}%`,
                        animationDuration: "2s",
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
                  {/* Acoustic panels on walls */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-12 h-16 bg-primary/40 border border-primary rounded" />
                    ))}
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-12 h-16 bg-primary/40 border border-primary rounded" />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <VolumeX className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-primary font-bold text-xl">AFTER: Controlled Acoustics</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Toggle button */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <button
                onClick={() => setShowBefore(!showBefore)}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all neon-cyan"
              >
                {showBefore ? "Show AFTER" : "Show BEFORE"}
              </button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
