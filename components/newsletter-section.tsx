"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section id="newsletter" className="py-24 px-4 bg-gradient-to-b from-card to-black">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border-2 border-primary/30 p-8 md:p-12 neon-cyan">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4 text-white">
              Get Sound Improvement Tips
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Subscribe to our newsletter and receive exclusive tips, new product announcements, and special offers
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-black border-primary/50 text-white placeholder:text-muted-foreground focus:border-primary"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              disabled={isSubmitted}
            >
              {isSubmitted ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>

          {isSubmitted && (
            <p className="text-center text-primary mt-4 font-semibold">Thank you for subscribing! Check your email.</p>
          )}
        </Card>
      </div>
    </section>
  )
}
