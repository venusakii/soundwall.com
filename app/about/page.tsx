import { AboutHero } from "@/components/about-hero"
import { OurStory } from "@/components/our-story"
import { WhyChooseUs } from "@/components/why-choose-us"
import { OurProcess } from "@/components/our-process"
import { AboutStats } from "@/components/about-stats"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <AboutHero />
      <OurStory />
      <WhyChooseUs />
      <OurProcess />
      <AboutStats />
      <Footer />
      <CookieBanner />
    </main>
  )
}
