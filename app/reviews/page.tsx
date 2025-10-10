import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <ReviewsSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
