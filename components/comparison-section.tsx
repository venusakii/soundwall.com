"use client"

import { useState } from "react"

export function ComparisonSection() {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-center mb-8 text-white">
          Before and After
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
          Move the slider to see the difference in interior before and after installing acoustic panels
        </p>

        <div className="relative aspect-video bg-card rounded-lg overflow-hidden border-2 border-primary/30">
          {/* Before image */}
          <div className="absolute inset-0">
            <img
              src="/empty-room-with-bare-walls-and-echo.jpg"
              alt="Before panel installation"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-destructive/90 text-white px-4 py-2 rounded-full font-bold">
              BEFORE
            </div>
          </div>

          {/* After image */}
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
            <img
              src="/modern-room-with-acoustic-panels-on-walls--studio-.jpg"
              alt="After panel installation"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full font-bold">
              AFTER
            </div>
          </div>

          {/* Slider */}
          <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `${sliderPosition}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-6 bg-primary" />
                <div className="w-1 h-6 bg-primary" />
              </div>
            </div>
          </div>

          {/* Slider input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          />
        </div>
      </div>
    </section>
  )
}
