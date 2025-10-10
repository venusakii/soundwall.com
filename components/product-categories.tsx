"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

const LayersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
)

const WavesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  </svg>
)

const RadioIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
  </svg>
)

const BoxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
)

const categories = [
  {
    title: "Acoustic Panels",
    description: "Stylish wall panels that absorb sound and enhance your interior",
    icon: LayersIcon,
    color: "primary",
  },
  {
    title: "Sound Absorbers",
    description: "Effective solutions for controlling reverberation and echo",
    icon: WavesIcon,
    color: "secondary",
  },
  {
    title: "Bass Traps",
    description: "Specialized elements for low-frequency control",
    icon: RadioIcon,
    color: "primary",
  },
  {
    title: "Acoustic Foam",
    description: "Universal solutions for home studios and podcast rooms",
    icon: BoxIcon,
    color: "secondary",
  },
]

export function ProductCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="products" className="py-24 px-4 bg-gradient-to-b from-black to-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-center mb-16 text-white">
          Product Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isHovered = hoveredIndex === index

            return (
              <Card
                key={index}
                className={`bg-card border-2 p-6 cursor-pointer transition-all duration-300 ${
                  isHovered
                    ? `border-${category.color} scale-105 shadow-2xl ${category.color === "primary" ? "neon-cyan" : "neon-amber"}`
                    : "border-border hover:border-muted-foreground"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`p-4 rounded-full transition-all duration-300 ${
                      category.color === "primary" ? "bg-primary/20" : "bg-secondary/20"
                    } ${isHovered ? "scale-110 rotate-12" : ""}`}
                  >
                    <Icon className={`w-8 h-8 ${category.color === "primary" ? "text-primary" : "text-secondary"}`} />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
