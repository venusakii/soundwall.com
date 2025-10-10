import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <AboutSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
