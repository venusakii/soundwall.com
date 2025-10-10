"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-6xl mx-auto bg-card/95 backdrop-blur-lg border-2 border-primary/30 rounded-lg p-6 shadow-2xl">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <p className="text-foreground leading-relaxed">
              This website uses cookies to improve your experience and analyze site usage. By continuing, you consent to
              the use of cookies.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleAccept}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold whitespace-nowrap"
            >
              Accept
            </Button>
            <button onClick={handleAccept} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
