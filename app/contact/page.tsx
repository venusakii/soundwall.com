import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1b0028] to-black">
      <div className="pt-20">
        <NewsletterSection />
      </div>
      <Footer />
      <CookieBanner />
    </main>
  )
}
