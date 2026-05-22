"use client"

import { useState, useEffect } from "react"
import { Search, Bell, User, Menu, X, Home } from "lucide-react"
import Link from "next/link"

// 1. ADDED: This interface tells TypeScript the Navbar can accept this prop safely
interface NavbarProps {
  onNavigateHome?: () => void
}

// 2. UPDATED: Destructure onNavigateHome here so TypeScript stops complaining
export function Navbar({ onNavigateHome }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Helper to force-close open modals on homepage navigation
  const handleHomeNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false)
    
    // Call the parent file's close handler if it exists
    if (onNavigateHome) {
      onNavigateHome()
    }

    window.dispatchEvent(new Event("close-detail-modal"))
    
    if (href && href.startsWith("#")) {
      e.preventDefault()
      const element = document.getElementById(href.replace("#", ""))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else if (href === "/") {
      // Smooth scroll back to top of baseline home page screen
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#papers", label: "Papers" },
    { href: "#education", label: "Education" },
    { href: "#awards", label: "Awards" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-background/20" 
          : "bg-gradient-to-b from-background/90 via-background/50 to-transparent"
      }`}
    >
      <div className="px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link 
            href="/" 
            onClick={(e) => handleHomeNavigation(e, "/")}
            className="group flex items-center gap-1"
          >
            <span className="text-primary font-black text-2xl md:text-3xl tracking-tighter group-hover:tracking-normal transition-all duration-300">
              PRV
            </span>
            <span className="hidden sm:inline text-foreground font-bold text-xl md:text-2xl tracking-tight">
              PORTFOLIO
            </span> 
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={(e) => handleHomeNavigation(e, link.href)}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
        
        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* <button 
            className="hidden sm:flex w-9 h-9 items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/10 rounded-full transition-all"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button> */}
          <button 
            className="hidden sm:flex relative w-9 h-9 items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/10 rounded-full transition-all"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </button>
          <button className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-red-600 flex items-center justify-center hover:scale-105 transition-transform shadow-md shadow-primary/30">
            <User className="w-5 h-5 text-primary-foreground" />
          </button>
          
          {/* Mobile menu toggle */}
          <button 
            className="lg:hidden w-9 h-9 flex items-center justify-center text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-t border-border/50 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link
            href="/"
            onClick={(e) => handleHomeNavigation(e, "/")}
            className="flex items-center gap-2 px-4 py-3 text-primary font-bold hover:bg-foreground/5 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>

        <div className="px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
              onClick={(e) => handleHomeNavigation(e, link.href)}  
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}