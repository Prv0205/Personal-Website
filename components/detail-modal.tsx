// "use client"

// import { ArrowLeft, X, Plus, ExternalLink, Clock, MapPin, Calendar, Award, BookOpen, Briefcase, Download, Mail } from "lucide-react"
// import Image from "next/image"
// import { useEffect } from "react"
// import { Navbar } from "@/components/navbar"

// export interface DetailItem {
//   id: string
//   title: string
//   subtitle: string
//   description: string
//   tags: string[]
//   year: string
//   location?: string
//   duration?: string
//   featured?: boolean
//   rating?: string
//   thumbnail?: string
//   link?: string
//   details?: {
//     responsibilities?: string[]
//     achievements?: string[]
//     technologies?: string[]
//     citations?: string
//     grade?: string
//     coursework?: string[]
//   }
// }

// interface DetailModalProps {
//   item: DetailItem | null
//   onClose: () => void
//   variant?: "experience" | "skill" | "education" | "award" | "paper"
// }

// export function DetailModal({ item, onClose, variant = "experience" }: DetailModalProps) {
//   useEffect(() => {
//     if (item) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "unset"
//     }
//     return () => {
//       document.body.style.overflow = "unset"
//     }
//   }, [item])


//   useEffect(() => {
//     const handleGlobalClose = () => {
//       onClose()
//     }

//     window.addEventListener("close-detail-modal", handleGlobalClose)
//     return () => window.removeEventListener("close-detail-modal", handleGlobalClose)
//   }, [onClose])

//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose()
//     }
//     window.addEventListener("keydown", handleEscape)
//     return () => window.removeEventListener("keydown", handleEscape)
//   }, [onClose])

//   if (!item) return null

//   const getVariantIcon = () => {
//     switch (variant) {
//       case "experience":
//         return <Briefcase className="w-5 h-5" />
//       case "education":
//         return <BookOpen className="w-5 h-5" />
//       case "award":
//         return <Award className="w-5 h-5" />
//       case "paper":
//         return <BookOpen className="w-5 h-5" />
//       default:
//         return <Briefcase className="w-5 h-5" />
//     }
//   }

//   const getVariantLabel = () => {
//     switch (variant) {
//       case "experience":
//         return "WORK EXPERIENCE"
//       case "education":
//         return "EDUCATION"
//       case "award":
//         return "ACHIEVEMENT"
//       case "paper":
//         return "PUBLICATION"
//       default:
//         return "DETAILS"
//     }
//   }

//   return (
//     <div 
//   className="fixed inset-0 z-[100] flex items-start justify-center bg-background overflow-hidden"
//   onClick={onClose}
// >
//      <div className="fixed top-0 left-0 right-0 z-[120]">
//   <Navbar />
// </div>
      
//       {/* Sticky navigation bar */}
//       {/* <div className="fixed top-0 left-0 right-0 z-[110] flex items-center justify-between px-4 py-3 bg-background border-b border-border/50">
//         <button
//           onClick={onClose}
//           className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
//           aria-label="Go back"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           <span className="text-sm font-medium">Back</span>
//         </button>
//         <button
//           onClick={onClose}
//           className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
//           aria-label="Close modal"
//         >
//           <X className="w-5 h-5" />
//         </button>
//       </div> */}

//       <div
//   className="relative w-full max-w-4xl mt-16 mb-8 mx-4 max-h-[calc(100vh-4rem)] overflow-y-auto animate-in fade-in zoom-in-95 duration-300"
//   onClick={(e) => e.stopPropagation()}
// >

//         {/* Hero image */}
//         <div className="relative h-[300px] md:h-[400px] rounded-t-xl overflow-hidden">
//           {item.thumbnail && (
//             <Image
//               src={item.thumbnail}
//               alt={item.title}
//               fill
//               className="object-cover"
//             />
//           )}
//           <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-transparent to-transparent" />

//           {/* Rating badge */}
//           {item.rating && (
//             <div className="absolute top-6 right-6 bg-primary text-primary-foreground text-lg font-bold px-4 py-2 rounded-lg shadow-lg">
//               {item.rating}
//             </div>
//           )}

//           {/* Featured badge */}
//           {item.featured && (
//             <div className="absolute top-16 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
//               <span>★</span> FEATURED
//             </div>
//           )}
//         </div>

//         {/* Content */}
//         <div className="bg-card rounded-b-xl p-6 md:p-8 border border-t-0 border-border/50">
//           {/* Header */}
//           <div className="flex flex-wrap items-center gap-3 mb-4">
//             <span className="flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
//               {getVariantIcon()}
//               {getVariantLabel()}
//             </span>
//             {item.year && (
//               <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
//                 <Calendar className="w-3.5 h-3.5" />
//                 {item.year}
//               </span>
//             )}
//             {item.duration && (
//               <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
//                 <Clock className="w-3.5 h-3.5" />
//                 {item.duration}
//               </span>
//             )}
//             {item.location && (
//               <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
//                 <MapPin className="w-3.5 h-3.5" />
//                 {item.location}
//               </span>
//             )}
//           </div>

//           <h1 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h1>
//           <p className="text-lg text-muted-foreground mb-6">{item.subtitle}</p>

//           {/* Action buttons */}
//           {/* <div className="flex flex-wrap gap-3 mb-8">
//             <button className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
//               <Plus className="w-5 h-5" />
//               Add to List
//             </button>
//             {item.link && (
//               <a
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
//               >
//                 <ExternalLink className="w-5 h-5" />
//                 View Publication
//               </a>
//             )}
//           </div> */}
//           {/* Action buttons */}
// <div className="flex flex-wrap gap-3 mb-8">
//   {/* Primary CTA: Resume Download (or Mailto fallback) */}
//   <a
//     href="/Praveen_Prasannan_Resume.pdf" // 
//     download="Praveen_Prasannan_Resume.pdf"
//     className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors border border-border/50 shadow-md"
//   >
//     <Download className="w-5 h-5" />
//     Download Resume
//   </a>

//   {/* Secondary Dynamic CTA: Tailored based on the content view */}
//   {item.link ? (
//     <a
//       href={item.link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
//     >
//       <ExternalLink className="w-5 h-5" />
//       {variant === "paper" || variant === "education" ? "View Publication" : "Launch Live App"}
//     </a>
//   ) : (
//     <a
//       href="mailto:praveenprasannan1995@gmail.com?subject=Inquiry regarding your portfolio item: Open Role"
//       className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
//     >
//       <Mail className="w-5 h-5" />
//       Inquire / Hire Me
//     </a>
//   )}
// </div>

//           {/* Description */}
//           <div className="mb-8">
//             <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Overview</h3>
//             <p className="text-foreground/90 leading-relaxed">{item.description}</p>
//           </div>

//           {/* Citation for papers */}
//           {item.details?.citations && (
//             <div className="mb-8 p-4 bg-secondary/30 rounded-lg border border-border/50">
//               <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Full Citation</h3>
//               <p className="text-sm text-foreground/80 italic leading-relaxed">{item.details.citations}</p>
//             </div>
//           )}

//           {/* Grade for education */}
//           {item.details?.grade && (
//             <div className="mb-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
//               <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Academic Performance</h3>
//               <p className="text-2xl font-bold text-foreground">{item.details.grade}</p>
//             </div>
//           )}

//           {/* Responsibilities */}
//           {item.details?.responsibilities && item.details.responsibilities.length > 0 && (
//             <div className="mb-8">
//               <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Key Responsibilities</h3>
//               <ul className="space-y-2">
//                 {item.details.responsibilities.map((resp, index) => (
//                   <li key={index} className="flex items-start gap-3 text-foreground/90">
//                     <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
//                     {resp}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Achievements */}
//           {item.details?.achievements && item.details.achievements.length > 0 && (
//             <div className="mb-8">
//               <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Achievements</h3>
//               <ul className="space-y-2">
//                 {item.details.achievements.map((achievement, index) => (
//                   <li key={index} className="flex items-start gap-3 text-foreground/90">
//                     <span className="text-amber-500">★</span>
//                     {achievement}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Coursework */}
//           {item.details?.coursework && item.details.coursework.length > 0 && (
//             <div className="mb-8">
//               <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Key Coursework</h3>
//               <div className="flex flex-wrap gap-2">
//                 {item.details.coursework.map((course) => (
//                   <span key={course} className="text-sm bg-secondary/50 text-foreground/80 px-3 py-1.5 rounded-lg">
//                     {course}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Technologies */}
//           {item.details?.technologies && item.details.technologies.length > 0 && (
//             <div className="mb-8">
//               <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Technologies Used</h3>
//               <div className="flex flex-wrap gap-2">
//                 {item.details.technologies.map((tech) => (
//                   <span key={tech} className="text-sm bg-primary/20 text-primary px-3 py-1.5 rounded-full font-medium">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Tags */}
//           <div>
//             <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Tags</h3>
//             <div className="flex flex-wrap gap-2">
//               {item.tags.map((tag) => (
//                 <span key={tag} className="text-sm bg-foreground/10 text-foreground/70 px-3 py-1.5 rounded-full">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { ArrowLeft, X, Plus, ExternalLink, Clock, MapPin, Calendar, Award, BookOpen, Briefcase, Download, Mail } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import { Navbar } from "@/components/navbar"

export interface DetailItem {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  year: string
  location?: string
  duration?: string
  featured?: boolean
  rating?: string
  thumbnail?: string
  link?: string
  details?: {
    responsibilities?: string[]
    achievements?: string[]
    technologies?: string[]
    citations?: string
    grade?: string
    coursework?: string[]
  }
}

interface DetailModalProps {
  item: DetailItem | null
  onClose: () => void
  variant?: "experience" | "skill" | "education" | "award" | "paper"
}

export function DetailModal({ item, onClose, variant = "experience" }: DetailModalProps) {
  
  // Custom redirect helper to completely reload the homepage
  const handleBackToHome = () => {
    window.location.href = "/"
  }

  // Intercept physical phone back buttons & gestures to redirect home
  useEffect(() => {
    if (!item) return

    document.body.style.overflow = "hidden"

    // Push state so there's an entry to intercept
    window.history.pushState({ modalOpen: true }, "")

    const handlePopState = () => {
      // User pressed the physical back key -> throw them back to a fresh home route
      handleBackToHome()
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("popstate", handlePopState)
    }
  }, [item])

  useEffect(() => {
    const handleGlobalClose = () => {
      onClose()
    }

    window.addEventListener("close-detail-modal", handleGlobalClose)
    return () => window.removeEventListener("close-detail-modal", handleGlobalClose)
  }, [onClose])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!item) return null

  const getVariantIcon = () => {
    switch (variant) {
      case "experience":
        return <Briefcase className="w-5 h-5" />
      case "education":
        return <BookOpen className="w-5 h-5" />
      case "award":
        return <Award className="w-5 h-5" />
      case "paper":
        return <BookOpen className="w-5 h-5" />
      default:
        return <Briefcase className="w-5 h-5" />
    }
  }

  const getVariantLabel = () => {
    switch (variant) {
      case "experience":
        return "WORK EXPERIENCE"
      case "education":
        return "EDUCATION"
      case "award":
        return "ACHIEVEMENT"
      case "paper":
        return "PUBLICATION"
      default:
        return "DETAILS"
    }
  }

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center bg-background overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleBackToHome()
        }
      }}
    >
      {/* Mobile Top Header Action Bar */}
      <div className="fixed top-0 left-0 right-0 z-[120] flex items-center justify-between px-4 py-3 bg-background/80 backdrop-blur-md md:hidden border-b border-border/40">
        <button
          onClick={handleBackToHome}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors py-1 px-2"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>
        <span className="text-xs font-bold tracking-wider text-muted-foreground/80">{getVariantLabel()}</span>
        <button
          onClick={handleBackToHome}
          className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="fixed top-0 left-0 right-0 z-[120] hidden md:block">
        <Navbar />
      </div>

      <div
        className="relative w-full max-w-4xl mt-14 md:mt-16 mb-8 mx-4 max-h-[calc(100vh-3.5rem)] md:max-h-[calc(100vh-4rem)] overflow-y-auto animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {/* Hero image */}
        <div className="relative h-[240px] md:h-[400px] rounded-t-xl overflow-hidden">
          {item.thumbnail && (
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-transparent to-transparent" />

          {item.rating && (
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-primary text-primary-foreground text-sm md:text-lg font-bold px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-lg">
              {item.rating}
            </div>
          )}

          {item.featured && (
            <div className="absolute top-14 right-4 md:top-16 md:right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-lg flex items-center gap-1.5">
              <span>★</span> FEATURED
            </div>
          )}
        </div>

        {/* Content details box */}
        <div className="bg-card rounded-b-xl p-5 md:p-8 border border-t-0 border-border/50">
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
            <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">
              {getVariantIcon()}
              {getVariantLabel()}
            </span>
            {item.year && (
              <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-muted-foreground bg-secondary/50 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                {item.year}
              </span>
            )}
            {item.duration && (
              <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-muted-foreground bg-secondary/50 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                {item.duration}
              </span>
            )}
            {item.location && (
              <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-muted-foreground bg-secondary/50 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5" />
                {item.location}
              </span>
            )}
          </div>

          <h1 className="text-xl md:text-3xl font-bold mb-2">{item.title}</h1>
          <p className="text-base md:text-lg text-muted-foreground mb-6">{item.subtitle}</p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="/Praveen_Prasannan_Resume.pdf" 
              download="Praveen_Prasannan_Resume.pdf"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors border border-border/50 shadow-md text-sm md:text-base w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 text-sm md:text-base w-full sm:w-auto"
              >
                <ExternalLink className="w-5 h-5" />
                {variant === "paper" || variant === "education" ? "View Publication" : "Launch Live App"}
              </a>
            ) : (
              <a
                href="mailto:praveenprasannan1995@gmail.com?subject=Inquiry regarding your portfolio item: Open Role"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 text-sm md:text-base w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                Inquire / Hire Me
              </a>
            )}
          </div>

          {/* Core Info Details */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Overview</h3>
            <p className="text-foreground/90 text-sm md:text-base leading-relaxed">{item.description}</p>
          </div>

          {item.details?.citations && (
            <div className="mb-8 p-4 bg-secondary/30 rounded-lg border border-border/50">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Full Citation</h3>
              <p className="text-xs md:text-sm text-foreground/80 italic leading-relaxed">{item.details.citations}</p>
            </div>
          )}

          {item.details?.grade && (
            <div className="mb-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Academic Performance</h3>
              <p className="text-xl md:text-2xl font-bold text-foreground">{item.details.grade}</p>
            </div>
          )}

          {item.details?.responsibilities && item.details.responsibilities.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Key Responsibilities</h3>
              <ul className="space-y-2">
                {item.details.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.details?.achievements && item.details.achievements.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Achievements</h3>
              <ul className="space-y-2">
                {item.details.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                    <span className="text-amber-500">★</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.details?.coursework && item.details.coursework.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Key Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {item.details.coursework.map((course) => (
                  <span key={course} className="text-xs md:text-sm bg-secondary/50 text-foreground/80 px-3 py-1.5 rounded-lg">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.details?.technologies && item.details.technologies.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {item.details.technologies.map((tech) => (
                  <span key={tech} className="text-xs md:text-sm bg-primary/20 text-primary px-3 py-1.5 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs md:text-sm bg-foreground/10 text-foreground/70 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}