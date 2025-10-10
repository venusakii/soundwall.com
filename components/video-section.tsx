"use client"

import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import { useState } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-center mb-8 text-white">
          Video Demonstration
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
          Watch how our acoustic solutions transform spaces
        </p>

        <Card className="bg-black border-2 border-secondary/30 overflow-hidden neon-amber">
          <div className="relative aspect-video">
            {!isPlaying ? (
              <div className="relative w-full h-full">
                <img
                  src="/acoustic-panels-installation-video-thumbnail.jpg"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform neon-amber"
                  >
                    <Play className="w-10 h-10 ml-1" />
                  </button>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Soundwall Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}
