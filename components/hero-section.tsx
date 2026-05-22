"use client"

import { Play, Info, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [muted, setMuted] = useState(true)
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Multiple gradient overlays for cinematic effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent z-10" />
      
      {/* Animated accent elements */}
      <div className="absolute inset-0 overflow-hidden z-5">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-20 px-4 md:px-12 lg:px-16 pt-24 md:pt-0 max-w-4xl">
        {/* Top badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-sm tracking-wide">NOW STREAMING</span>
          </div>
          <span className="text-muted-foreground text-sm">Season 2026-2027</span>
        </div>
        
        {/* Title with styled text */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight">
          <span className="block text-foreground">PRAVEEN</span>
          <span className="block bg-gradient-to-r from-primary via-red-400 to-orange-400 bg-clip-text text-transparent">
            PRASANNAN
          </span>
        </h1>
        
        {/* Metadata row */}
        <div className="flex items-center gap-3 md:gap-4 mb-6 flex-wrap">
          <span className="text-primary font-bold text-lg">98% Match</span>
          <span className="text-muted-foreground">2024</span>
          <span className="border border-muted-foreground/50 px-2 py-0.5 text-xs font-semibold rounded">4K</span>
          <span className="border border-muted-foreground/50 px-2 py-0.5 text-xs font-semibold rounded">HDR</span>
          <span className="bg-foreground/10 px-2 py-0.5 text-xs font-medium rounded">5+ Seasons</span>
          <span className="bg-primary/20 text-primary px-2 py-0.5 text-xs font-bold rounded">TOP 10</span>
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-secondary-foreground mb-8 leading-relaxed max-w-2xl">
          A compelling story of a <span className="text-primary font-semibold">Software and AI Engineer</span> with 
          expertise in building scalable Python microservices and AI-driven systems. 
          Watch as cutting-edge NLP, Generative AI, and LLM technologies come together.
        </p>
        
        {/* Genre tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["Python", "Django", "React", "NLP", "GenAI", "LLMs", "Cloud"].map((skill, i) => (
            <span key={skill} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
              {skill}{i < 6 && <span className="ml-2 text-primary">•</span>}
            </span>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 gap-2 text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-6 h-6 fill-current" />
            View Career
          </Button>
          <Button 
            size="lg" 
            variant="secondary" 
            className="gap-2 text-lg px-8 py-6 bg-secondary/80 backdrop-blur-sm hover:bg-secondary border border-border/50"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Info className="w-6 h-6" />
            View Skills
          </Button>
        </div>
      </div>
      
      {/* Bottom right controls like Netflix */}
      <div className="absolute bottom-32 right-4 md:right-12 z-20 flex items-center gap-4">
        <button 
          onClick={() => setMuted(!muted)}
          className="w-10 h-10 rounded-full border border-foreground/50 flex items-center justify-center hover:bg-foreground/10 transition-colors"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        <div className="bg-foreground/20 backdrop-blur-sm px-4 py-1.5 border-l-4 border-primary text-sm font-medium">
          18+
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-15" />
    </section>
  )
}
