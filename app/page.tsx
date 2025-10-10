import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductCategories } from "@/components/product-categories"
import { TechnologySection } from "@/components/technology-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ComparisonSection } from "@/components/comparison-section"
import { VideoSection } from "@/components/video-section"
import { GallerySection } from "@/components/gallery-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <TechnologySection />
      <ReviewsSection />
      <ComparisonSection />
      <VideoSection />
      <GallerySection />
      <NewsletterSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
