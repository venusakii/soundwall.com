"use client"

import { Card } from "@/components/ui/card"

const galleryItems = [
  {
    title: "Home Studio",
    image: "/home-recording-studio-with-acoustic-panels.jpg",
  },
  {
    title: "Podcast Room",
    image: "/podcast-room-with-sound-treatment.jpg",
  },
  {
    title: "Home Theater",
    image: "/home-theater-with-acoustic-panels.jpg",
  },
  {
    title: "Music Room",
    image: "/music-practice-room-with-sound-panels.jpg",
  },
  {
    title: "Office Space",
    image: "/modern-office-with-acoustic-treatment.jpg",
  },
  {
    title: "Gaming Room",
    image: "/gaming-room-with-acoustic-panels.jpg",
  },
]

export function GallerySection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-center mb-8 text-white">
          Interior Gallery
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
          Get inspired by real projects featuring our acoustic solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="group bg-card border-2 border-border hover:border-primary overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
