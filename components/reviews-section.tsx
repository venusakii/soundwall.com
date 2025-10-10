"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    name: "Premium Acoustic Foam Panels",
    slug: "premium-acoustic-foam-panels",
    rating: 5,
    reviews: 2847,
    price: "$89.99",
    description:
      "High-density acoustic foam panels with superior sound absorption. Perfect for home studios and recording spaces.",
    image: "/acoustic-foam-panels.jpg",
  },
  {
    name: "Corner Bass Trap Set",
    slug: "corner-bass-trap-set",
    rating: 5,
    reviews: 1523,
    price: "$129.99",
    description:
      "Professional bass traps for corner placement. Eliminates low-frequency buildup and improves room acoustics.",
    image: "/bass-trap-corner-acoustic.jpg",
  },
  {
    name: "Hexagon Sound Panels",
    slug: "hexagon-sound-panels",
    rating: 5,
    reviews: 3241,
    price: "$149.99",
    description: "Modern hexagonal design panels that combine aesthetics with excellent sound dampening properties.",
    image: "/hexagon-acoustic-panels-modern.jpg",
  },
  {
    name: "Acoustic Diffuser Panels",
    slug: "acoustic-diffuser-panels",
    rating: 4,
    reviews: 892,
    price: "$199.99",
    description: "Professional diffuser panels that scatter sound waves for a balanced acoustic environment.",
    image: "/acoustic-diffuser-panels-wood.jpg",
  },
  {
    name: "Soundproof Door Seal Kit",
    slug: "soundproof-door-seal-kit",
    rating: 5,
    reviews: 4156,
    price: "$39.99",
    description: "Complete door sealing solution to block sound leakage. Easy installation with adhesive backing.",
    image: "/door-soundproof-seal.jpg",
  },
  {
    name: "Studio Monitor Isolation Pads",
    slug: "studio-monitor-isolation-pads",
    rating: 5,
    reviews: 2634,
    price: "$59.99",
    description:
      "High-density foam pads that decouple speakers from surfaces, reducing vibrations and improving clarity.",
    image: "/studio-monitor-isolation-pads.jpg",
  },
  {
    name: "Acoustic Fabric Wall Panels",
    slug: "acoustic-fabric-wall-panels",
    rating: 5,
    reviews: 1789,
    price: "$179.99",
    description:
      "Elegant fabric-wrapped panels with wooden frames. Combines premium aesthetics with acoustic performance.",
    image: "/fabric-acoustic-wall-panels-elegant.jpg",
  },
  {
    name: "Soundproof Curtains Heavy Duty",
    slug: "soundproof-curtains-heavy-duty",
    rating: 4,
    reviews: 5234,
    price: "$119.99",
    description:
      "Triple-weave blackout curtains with sound dampening properties. Perfect for home theaters and bedrooms.",
    image: "/soundproof-curtains-heavy.jpg",
  },
  {
    name: "Acoustic Ceiling Tiles",
    slug: "acoustic-ceiling-tiles",
    rating: 5,
    reviews: 967,
    price: "$249.99",
    description: "Drop ceiling acoustic tiles that reduce echo and reverberation. Professional-grade sound control.",
    image: "/acoustic-ceiling-tiles-professional.jpg",
  },
]

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? "fill-secondary text-secondary" : "fill-none text-muted-foreground"}`}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-center mb-4 text-white">
          Top Rated Products
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Discover our most popular acoustic solutions with verified customer reviews
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-card border-2 border-primary/20 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,246,255,0.3)] group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < product.rating} />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews.toLocaleString()})</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">{product.description}</p>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 neon-cyan">
                    <Link href={`/products/${product.slug}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Amazon Affiliate Disclaimer */}
        <p className="text-center text-muted-foreground text-sm mt-12 max-w-3xl mx-auto">
          As an Amazon Associate, we earn from qualifying purchases. Prices and availability are subject to change.
        </p>
      </div>
    </section>
  )
}

export { products }
