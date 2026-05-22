"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play, Plus, Clock, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import { DetailModal, type DetailItem } from "./detail-modal"

interface ContentRowProps {
  title: string
  items: DetailItem[]
  variant?: "experience" | "skill" | "education" | "award" | "paper"
  onItemSelect?: (item: DetailItem) => void // Made optional to prevent page.tsx mismatches
}

export function ContentRow({ title, items, variant = "experience", onItemSelect }: ContentRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<DetailItem | null>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const getGradientOverlay = (index: number) => {
    const gradients = [
      "from-red-600/80 via-red-900/60 to-transparent",
      "from-blue-600/80 via-blue-900/60 to-transparent",
      "from-emerald-600/80 via-emerald-900/60 to-transparent",
      "from-amber-600/80 via-amber-900/60 to-transparent",
      "from-violet-600/80 via-violet-900/60 to-transparent",
      "from-cyan-600/80 via-cyan-900/60 to-transparent",
    ]
    return gradients[index % gradients.length]
  }

  const handleCardClick = (item: DetailItem) => {
    setSelectedItem(item)
    // Run optional callback parent mechanism if supplied by page.tsx
    if (onItemSelect) {
      onItemSelect(item)
    }
  }

  return (
    <>
      <section 
        className="py-10 relative group/row" 
        id={variant === "experience" ? "experience" : variant === "education" ? "education" : variant === "award" ? "awards" : variant === "paper" ? "papers" : "skills"}
      >
        <div className="flex items-center gap-4 mb-6 px-4 md:px-12">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-xs" />
        </div>
        
        {/* Navigation arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary p-3 rounded-r-lg opacity-0 group-hover/row:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-lg"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary p-3 rounded-l-lg opacity-0 group-hover/row:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-lg"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 md:px-12 pb-6"
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[260px] md:w-[300px] group cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleCardClick(item)}
            >
              {/* Card */}
              <div 
                className={`relative h-[160px] md:h-[180px] rounded-lg overflow-hidden mb-2 transition-all duration-500 shadow-lg ${
                  hoveredId === item.id 
                    ? "scale-110 z-30 shadow-2xl shadow-primary/20" 
                    : hoveredId && hoveredId !== item.id 
                      ? "scale-95 opacity-60" 
                      : ""
                }`}
              >
                {/* Thumbnail image */}
                {item.thumbnail && (
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                )}
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${getGradientOverlay(index)}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
                
                {/* Play button overlay */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredId === item.id ? "opacity-100" : "opacity-0"}`}>
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50 transition-transform hover:scale-110">
                    <Play className="w-7 h-7 text-primary-foreground fill-current ml-1" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bold text-sm md:text-base line-clamp-1 drop-shadow-lg">{item.title}</h3>
                  <p className="text-xs md:text-sm text-foreground/80 line-clamp-1">{item.subtitle}</p>
                </div>
                
                {/* Rating badge */}
                {item.rating && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-md shadow-lg">
                    {item.rating}
                  </div>
                )}
                
                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-lg flex items-center gap-1">
                    <span className="text-[10px]">★</span> FEATURED
                  </div>
                )}
                
                {/* Top 10 style number for experience */}
                {variant === "experience" && (
                  <div className="absolute -bottom-2 -left-2 text-7xl font-black text-foreground/10 select-none">
                    {index + 1}
                  </div>
                )}
              </div>
              
              {/* Hover card details */}
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  hoveredId === item.id ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-card/95 backdrop-blur-sm rounded-lg p-4 border border-border/50 shadow-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <button 
                      className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shadow-md"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(item)
                      }}
                    >
                      <Play className="w-4 h-4 text-primary-foreground fill-current ml-0.5" />
                    </button>
                    <button 
                      className="w-9 h-9 rounded-full border-2 border-muted-foreground/50 flex items-center justify-center hover:border-foreground hover:bg-foreground/10 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border-2 border-muted-foreground/50 flex items-center justify-center hover:border-foreground hover:bg-foreground/10 transition-all ml-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 flex-wrap">
                    {item.year && <span className="text-primary font-bold">{item.year}</span>}
                    {item.duration && (
                      <span className="flex items-center gap-1 bg-secondary/50 px-2 py-0.5 rounded">
                        <Clock className="w-3 h-3" />
                        {item.duration}
                      </span>
                    )}
                    {item.location && (
                      <span className="flex items-center gap-1 bg-secondary/50 px-2 py-0.5 rounded">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground line-clamp-3 mb-3 leading-relaxed">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal integration matching selected structural configurations */}
      <DetailModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
        variant={variant}
      />
    </>
  )
}