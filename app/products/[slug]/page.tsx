import { products } from "@/components/reviews-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import Link from "next/link"
import { notFound } from "next/navigation"

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

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1b0028] to-black">
      <div className="container mx-auto px-4 py-24">
        {/* Back Button */}
        <Link
          href="/reviews"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,246,255,0.4)]">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < product.rating} />
                ))}
              </div>
              <span className="text-lg text-muted-foreground">
                {product.rating}.0 ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{product.description}</p>

            {/* Features */}
            <Card className="bg-card/50 border-primary/20 p-6 mb-8">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-4">Key Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Premium quality materials for long-lasting performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Easy installation with included mounting hardware</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Professional-grade sound absorption and control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Suitable for home studios, offices, and entertainment spaces</span>
                </li>
              </ul>
            </Card>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-cyan text-lg py-6"
              asChild
            >
              <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                Buy Now on Amazon
              </a>
            </Button>

            <p className="text-center text-muted-foreground text-sm mt-4">
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </main>
  )
}
