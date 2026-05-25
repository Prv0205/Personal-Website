"use client"

import { useState , useEffect, useRef} from "react"
import { Code, Brain, Cloud, Users, Sparkles, ArrowLeft, X, ChevronLeft, ChevronRight, Play, Plus } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"


 interface SkillCategory {
  id: string
  title: string
  icon: React.ReactNode
  skills: string[]
  proficiency: number
  color: string
  thumbnail: string
  description: string
  details: {
    overview: string
    tools: string[]
    experience: string
    projects: string[]
  }
}

const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: <Code className="w-7 h-7" />,
    skills: ["Python", "ReactJS", "Django REST Framework", "Flask", "HTML", "CSS"],
    proficiency: 95,
    color: "from-red-500 to-orange-500",
    thumbnail: "/images/skill-programming-thumb.jpg",
    description: "5+ years of hands-on experience building scalable web applications",
    details: {
      overview: "Expert-level proficiency in Python ecosystem with extensive experience in web development using Django and React. Built production systems serving thousands of users daily.",
      tools: ["Python 3.x", "Django", "Django REST Framework", "React.js", "Flask", "ORM Queries",  "FastAPI", "HTML5/CSS3", "JavaScript/TypeScript"],
      experience: "5+ years of professional development experience across multiple companies and projects",
      projects: [
        "Django REST APIs supporting 25K+ daily users at TCS",
        "Full-stack dashboards with React and Django at Aiton AI",
        "Government chatbot backends using Flask at ICFOSS",
        "Research platform with Django and React at University of Galway"
      ]
    }
  },
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    icon: <Brain className="w-7 h-7" />,
    skills: ["NLP", "GenAI", "LLM Prompt Engineering", "Hugging Face Transformers", "RAG", "NLTK", "Vector DBs"],
    proficiency: 90,
    color: "from-violet-500 to-purple-500",
    thumbnail: "/images/skill-ai-thumb.jpg",
    description: "MSc in AI with specialization in NLP and Large Language Models",
    details: {
      overview: "Specialized in Natural Language Processing and Generative AI with a Master's degree in Artificial Intelligence. Published research in NLP and built production AI systems.",
      tools: ["Hugging Face Transformers", "LangChain", "OpenAI API", "NLTK", "spaCy", "PyTorch", "TensorFlow", "Vector Databases (Pinecone, Weaviate)"],
      experience: "3+ years working with AI/ML technologies, MSc in AI with Best Thesis Award",
      projects: [
        "Counter-speech generation model for Malayalam (Published 2025)",
        "Malayalam chatbot using hybrid NLP approach (ICON 2020)",
        "RAG-based research assistant at University of Galway",
        "COVID-19 information chatbot for Kerala Government"
      ]
    }
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <Cloud className="w-7 h-7" />,
    skills: ["AWS (EC2, S3)", "GCP Deployment & Monitoring", "PostgreSQL", "MySQL"],
    proficiency: 85,
    color: "from-cyan-500 to-blue-500",
    thumbnail: "/images/skill-cloud-thumb.jpg",
    description: "Production deployments on AWS and GCP with database expertise",
    details: {
      overview: "Experienced in deploying and maintaining production systems on major cloud platforms. Strong database administration skills with PostgreSQL and MySQL.",
      tools: ["AWS EC2", "AWS S3", "AWS RDS", "Google Cloud Platform", "Docker", "PostgreSQL", "MySQL", "Redis", "Nginx"],
      experience: "4+ years managing cloud infrastructure and databases in production environments",
      projects: [
        "AWS deployment for mobile app backends at Softnotions",
        "GCP deployment for research platform at University of Galway",
        "Database optimization for 25K+ user system at TCS",
        "Government chatbot infrastructure at ICFOSS"
      ]
    }
  },
  {
    id: "collaboration",
    title: "Collaboration & Tools",
    icon: <Users className="w-7 h-7" />,
    skills: ["Git", "Agile", "Code Reviews", "Mentorship", "Peer Programming"],
    proficiency: 92,
    color: "from-emerald-500 to-green-500",
    thumbnail: "/images/skill-collab-thumb.jpg",
    description: "Team leadership and mentorship with Agile methodology expertise",
    details: {
      overview: "Strong leadership and collaboration skills developed through managing teams and contributing to large-scale projects. Experienced in Agile methodologies and modern development practices.",
      tools: ["Git/GitHub", "Jira", "Confluence", "Slack", "VS Code", "Agile/Scrum", "Code Review Tools", "CI/CD Pipelines"],
      experience: "Led 5-member team at Softnotions, mentored junior developers across multiple roles",
      projects: [
        "Led 5-member engineering team at Softnotions Technologies",
        "Agile development practices at TCS with cross-functional teams",
        "Research collaboration at University of Galway DSI",
        "Open source contributions and community engagement"
      ]
    }
  },
]

interface SkillModalProps {
  skill: SkillCategory | null
  onClose: () => void
}

 export function SkillModal({ skill, onClose}:  SkillModalProps) {
    useEffect(() => {
  document.body.style.overflow = skill ? "hidden" : "unset"

  return () => {
    document.body.style.overflow = "unset"
  }
}, [skill])

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

  if (!skill) return null


  return (
    <div 
  className="fixed inset-0 z-[100] flex items-start justify-center bg-background overflow-hidden"
  // onClick={onClose}
>
  {/* <Navbar /> */}
      {/* Sticky navigation bar */}
      {/* <div className="fixed top-0 left-0 right-0 z-[110] flex items-center justify-between px-4 py-3 bg-background border-b border-border/50">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </button>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div> */}

      <div
  className="relative w-full max-w-4xl mt-16 mb-8 mx-4 max-h-[calc(100vh-4rem)] overflow-y-auto animate-in fade-in zoom-in-95 duration-300"
  onClick={(e) => e.stopPropagation()}
> 
        {/* Hero image */}
        <div className="relative h-[250px] md:h-[350px] rounded-t-xl overflow-hidden">
          <Image
            src={skill.thumbnail}
            alt={skill.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20`} />

          {/* Proficiency badge */}
          <div className={`absolute top-6 right-6 bg-gradient-to-r ${skill.color} text-white text-lg font-bold px-4 py-2 rounded-lg shadow-lg`}>
            {skill.proficiency}%
          </div>
        </div>

        {/* Content */}
        <div className="bg-card rounded-b-xl p-6 md:p-8 border border-t-0 border-border/50">
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white`}>
              {skill.icon}
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">SKILL CATEGORY</span>
              <h1 className="text-2xl md:text-3xl font-bold">{skill.title}</h1>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-6">{skill.description}</p>

          {/* Proficiency bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Proficiency Level</span>
              <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                {skill.proficiency}%
              </span>
            </div>
            <div className="h-3 bg-muted/50 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Overview</h3>
            <p className="text-foreground/90 leading-relaxed">{skill.details.overview}</p>
          </div>

          {/* Experience */}
          <div className="mb-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Experience</h3>
            <p className="text-foreground font-medium">{skill.details.experience}</p>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skill.details.tools.map((tool) => (
                <span key={tool} className={`text-sm bg-gradient-to-r ${skill.color} bg-opacity-20 text-foreground px-3 py-1.5 rounded-full font-medium border border-border/50`}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Key Projects</h3>
            <ul className="space-y-2">
              {skill.details.projects.map((project, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/90">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} mt-2 flex-shrink-0`} />
                  {project}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills tags */}
          <div>
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skill.skills.map((s) => (
                <span key={s} className="text-sm bg-foreground/10 text-foreground/70 px-3 py-1.5 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// export function SkillsGrid() {
//   const [selectedSkill, setSelectedSkill] = useState<SkillCategory | null>(null)

//   useEffect(() => {
//   const handlePopState = () => {
//     setSelectedSkill(null)
//   }

//   window.addEventListener("popstate", handlePopState)

//   return () => {
//     window.removeEventListener("popstate", handlePopState)
//   }
// }, [])

//   return (
//     <>
//       <section className="py-12 px-4 md:px-12" id="skills">
//         <div className="flex items-center gap-4 mb-8">
//           <div className="flex items-center gap-2">
//             <Sparkles className="w-5 h-5 text-primary" />
//             <h2 className="text-xl md:text-2xl font-bold tracking-tight">Top Skills</h2>
//           </div>
//           <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-xs" />
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {skillCategories.map((category) => (
//             <div
//               key={category.id}
//               // onClick={() => setSelectedSkill(category)}
//               onClick={() => {
//   setSelectedSkill(category)
//   window.history.pushState({ modal: true }, "")
// }}
//               className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
//             >
//               {/* Thumbnail image */}
//               <div className="relative h-32 overflow-hidden">
//                 <Image
//                   src={category.thumbnail}
//                   alt={category.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
//                 <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
//                 {/* Proficiency badge */}
//                 <div className={`absolute top-2 right-2 bg-gradient-to-r ${category.color} text-white text-xs font-bold px-2 py-1 rounded shadow-lg`}>
//                   {category.proficiency}%
//                 </div>
//               </div>

//               <div className="p-4">
//                 {/* Top accent line */}
//                 <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
//                 {/* Icon with title */}
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform duration-300`}>
//                     {category.icon}
//                   </div>
//                   <h3 className="font-bold text-base">{category.title}</h3>
//                 </div>
                
//                 {/* Proficiency bar */}
//                 <div className="h-1.5 bg-muted/50 rounded-full mb-4 overflow-hidden">
//                   <div
//                     className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 group-hover:shadow-lg`}
//                     style={{ width: `${category.proficiency}%` }}
//                   />
//                 </div>
                
//                 {/* Skills list */}
//                 <div className="flex flex-wrap gap-1.5">
//                   {category.skills.slice(0, 4).map((skill) => (
//                     <span
//                       key={skill}
//                       className="text-xs bg-secondary/80 text-secondary-foreground px-2 py-1 rounded-full"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                   {category.skills.length > 4 && (
//                     <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
//                       +{category.skills.length - 4} more
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
//     </>
//   )
// }

// export function SkillsGrid() {
//   const [selectedSkill, setSelectedSkill] = useState<SkillCategory | null>(null)
//   const [hoveredId, setHoveredId] = useState<string | null>(null)
//   const scrollRef = useRef<HTMLDivElement>(null) // ⭐ Added ref to control horizontal movement track

//   useEffect(() => {
//     const handlePopState = () => {
//       setSelectedSkill(null)
//     }
//     window.addEventListener("popstate", handlePopState)
//     return () => window.removeEventListener("popstate", handlePopState)
//   }, [])

//   // ⭐ Added side slide handler block matching ContentRow mechanics
//   const scroll = (direction: "left" | "right") => {
//     if (scrollRef.current) {
//       const scrollAmount = 400
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       })
//     }
//   }

//   const handleCardClick = (category: SkillCategory) => {
//     setSelectedSkill(category)
//     window.history.pushState({ modal: true }, "")
//   }

//   return (
//     <>
//       {/* ⭐ Added group/row identifier to support navigation button display conditions */}
//       <section className="py-10 relative group/row" id="skills">
//         <div className="flex items-center gap-4 mb-6 px-4 md:px-12">
//           <div className="flex items-center gap-2">
//             <Sparkles className="w-5 h-5 text-primary" />
//             <h2 className="text-xl md:text-2xl font-bold tracking-tight">Top Skills</h2>
//           </div>
//           <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-xs" />
//         </div>
        
//         {/* ⭐ Added matching Left Section Navigation Arrow */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary p-3 rounded-r-lg opacity-0 group-hover/row:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-lg"
//           aria-label="Scroll left"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
        
//         {/* ⭐ Added matching Right Section Navigation Arrow */}
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary p-3 rounded-l-lg opacity-0 group-hover/row:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-lg"
//           aria-label="Scroll right"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         {/* ⭐ REPLACED 'grid grid-cols-1...' WITH 'flex overflow-x-auto hide-scrollbar' FOR THE HORIZONTAL ROW */}
//         <div
//           ref={scrollRef}
//           className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 md:px-12 pb-6"
//         >
//           {skillCategories.map((category) => (
//             <div
//               key={category.id}
//               // ⭐ Added flex-shrink-0 and fixed item widths to preserve structure on mobile screens
//               className="flex-shrink-0 w-[260px] md:w-[300px] group cursor-pointer"
//               onMouseEnter={() => setHoveredId(category.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               onClick={() => handleCardClick(category)}
//             >
//               {/* Card component shell remains exactly as you built it */}
//               <div
//                 className={`bg-card rounded-xl p-5 border border-border/50 shadow-md hover:border-primary/50 transition-all duration-300 h-full ${
//                   hoveredId === category.id ? "scale-[1.02] shadow-lg shadow-primary/5 border-primary/30" : ""
//                 }`}
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white transition-transform duration-300`}>
//                     {category.icon}
//                   </div>
//                   <h3 className="font-bold text-base">{category.title}</h3>
//                 </div>
                
//                 <div className="h-1.5 bg-muted/50 rounded-full mb-4 overflow-hidden">
//                   <div
//                     className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 group-hover:shadow-lg`}
//                     style={{ width: `${category.proficiency}%` }}
//                   />
//                 </div>
                
//                 <div className="flex flex-wrap gap-1.5">
//                   {category.skills.slice(0, 4).map((skill) => (
//                     <span
//                       key={skill}
//                       className="text-xs bg-secondary/80 text-secondary-foreground px-2 py-1 rounded-full"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                   {category.skills.length > 4 && (
//                     <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
//                       +{category.skills.length - 4} more
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
//     </>
//   )
// }


// export function SkillsGrid() {
//   const [selectedSkill, setSelectedSkill] = useState<SkillCategory | null>(null)
//   const [hoveredId, setHoveredId] = useState<string | null>(null)
//   const scrollRef = useRef<HTMLDivElement>(null) // 🌟 Horizontal tracking scroll ref

//   useEffect(() => {
//     const handlePopState = () => {
//       setSelectedSkill(null)
//     }
//     window.addEventListener("popstate", handlePopState)
//     return () => window.removeEventListener("popstate", handlePopState)
//   }, [])

//   // 🌟 Horizontal scrolling navigation trigger logic
//   const scroll = (direction: "left" | "right") => {
//     if (scrollRef.current) {
//       const scrollAmount = 400
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       })
//     }
//   }

//   const handleCardClick = (category: SkillCategory) => {
//     setSelectedSkill(category)
//     window.history.pushState({ modal: true }, "")
//   }

//   return (
//     <>
//       {/* 🌟 Added 'group/row' wrapper class name to handle arrow display visibility */}
//       <section className="py-10 relative group/row" id="skills">
//         <div className="flex items-center gap-4 mb-6 px-4 md:px-12">
//           <div className="flex items-center gap-2">
//             <Sparkles className="w-5 h-5 text-primary" />
//             <h2 className="text-xl md:text-2xl font-bold tracking-tight">Top Skills</h2>
//           </div>
//           <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-xs" />
//         </div>
        
//         {/* 🌟 Left Scroll Arrow Control Trigger */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary p-3 rounded-r-lg opacity-0 group-hover/row:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-lg hidden md:block"
//           aria-label="Scroll left"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
        
//         {/* 🌟 Right Scroll Arrow Control Trigger */}
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary p-3 rounded-l-lg opacity-0 group-hover/row:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-lg hidden md:block"
//           aria-label="Scroll right"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         {/* 🌟 Changed into a horizontal flex-scroll layer row container */}
//         <div
//           ref={scrollRef}
//           className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 md:px-12 pb-6"
//         >
//           {skillCategories.map((category) => (
//             <div
//               key={category.id}
//               className="flex-shrink-0 w-[260px] md:w-[300px] group cursor-pointer"
//               onMouseEnter={() => setHoveredId(category.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               onClick={() => handleCardClick(category)}
//             >
//               {/* 🌟 Main Card - Expands smoothly (scale-110) on hover */}
//               <div 
//                 className={`bg-card rounded-xl p-5 border border-border/50 shadow-md transition-all duration-500 relative overflow-hidden ${
//                   hoveredId === category.id 
//                     ? "scale-110 z-30 shadow-2xl shadow-primary/20 border-primary/30" 
//                     : hoveredId && hoveredId !== category.id 
//                       ? "scale-95 opacity-60" 
//                       : ""
//                 }`}
//               >
//                 {/* Decorative colored glow backdrop profile matching card color schemes */}
//                 <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} opacity-5 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
                
//                 <div className="flex items-center gap-3 mb-3 relative z-10">
//                   <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white transition-transform duration-300 group-hover:scale-110`}>
//                     {category.icon}
//                   </div>
//                   <h3 className="font-bold text-base">{category.title}</h3>
//                 </div>
                
//                 <div className="h-1.5 bg-muted/50 rounded-full mb-4 overflow-hidden relative z-10">
//                   <div
//                     className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
//                     style={{ width: `${category.proficiency}%` }}
//                   />
//                 </div>
                
//                 <div className="flex flex-wrap gap-1.5 relative z-10">
//                   {category.skills.slice(0, 3).map((skill) => (
//                     <span
//                       key={skill}
//                       className="text-xs bg-secondary/80 text-secondary-foreground px-2 py-1 rounded-full"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                   {category.skills.length > 3 && (
//                     <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
//                       +{category.skills.length - 3}
//                     </span>
//                   )}
//                 </div>
//               </div>
              
//               {/* 🌟 NEW HOVER DETAILS DROP BOX (Matches layout of detail fields from ContentRow cards) */}
//               <div 
//                 className={`transition-all duration-300 overflow-hidden relative z-20 ${
//                   hoveredId === category.id ? "max-h-64 opacity-100 mt-2" : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-xl">
//                   {/* Interactive Button Ribbon Controls */}
//                   <div className="flex items-center gap-2 mb-3">
//                     <button 
//                       className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shadow-md"
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         handleCardClick(category)
//                       }}
//                     >
//                       <Play className="w-3.5 h-3.5 text-primary-foreground fill-current ml-0.5" />
//                     </button>
//                     <button 
//                       className="w-8 h-8 rounded-full border border-muted-foreground/50 flex items-center justify-center hover:border-foreground hover:bg-foreground/5 transition-all"
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         handleCardClick(category)
//                       }}
//                     >
//                       <Plus className="w-3.5 h-3.5" />
//                     </button>
//                     <span className="ml-auto text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
//                       Proficiency: {category.proficiency}%
//                     </span>
//                   </div>
                  
//                   {/* Detailed Description Field text */}
//                   <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
//                     {category.description}
//                   </p>
                  
//                   {/* Detailed Secondary Technology Tags Layout strip mapping */}
//                   <div className="flex flex-wrap gap-1">
//                     {category.details.tools.slice(0, 3).map((tool) => (
//                       <span key={tool} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/10 font-medium">
//                         {tool}
//                       </span>
//                     ))}
//                     {category.details.tools.length > 3 && (
//                       <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-semibold">
//                         +{category.details.tools.length - 3} More
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
//     </>
//   )
// }


export function SkillsGrid() {
  const [selectedSkill, setSelectedSkill] = useState<SkillCategory | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null) 
  
  useEffect(() => {
    const handlePopState = () => {
      setSelectedSkill(null)
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  // ⭐ Added the smooth row stepping function
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleCardClick = (category: SkillCategory) => {
    setSelectedSkill(category)
    window.history.pushState({ modal: true }, "")
  }

  return (
    <>
      {/* ⭐ Added group/row identifier to manage arrow visibility actions */}
      <section className="py-10 relative group/row" id="skills">
        <div className="flex items-center gap-4 mb-6 px-4 md:px-12">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">Top Skills</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-xs" />
        </div>
        
        {/* ⭐ Added Left Navigation Arrow Trigger */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary p-3 rounded-r-lg opacity-0 group-hover/row:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-lg hidden md:block"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        {/* ⭐ Added Right Navigation Arrow Trigger */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary p-3 rounded-l-lg opacity-0 group-hover/row:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-lg hidden md:block"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* ⭐ REPLACED "grid grid-cols-1..." WITH Horizontal Slider Layer */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-12 pb-6"
        >
          {skillCategories.map((category) => (
            <div
              key={category.id}
              // ⭐ Swapped grid item behavior for fixed sizing card strips
              className="flex-shrink-0 w-[280px] md:w-[320px] group cursor-pointer"
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleCardClick(category)}
            >
              {/* ⭐ Main Card Element Box (Matches your image layout completely) */}
              <div
                className={`relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 h-[240px] md:h-[260px] flex flex-col justify-between ${
                  hoveredId === category.id ? "scale-[1.05] z-10 shadow-xl shadow-primary/10 border-primary/30" : ""
                }`}
              >
                {/* Thumbnail Layer Area with floating proficiency percentage */}
                <div className="relative h-32 w-full overflow-hidden flex-shrink-0">
                  <Image
                    src={category.thumbnail}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className={`absolute top-3 right-3 bg-gradient-to-r ${category.color} text-white text-xs font-bold px-2 py-1 rounded shadow-lg`}>
                    {category.proficiency}%
                  </div>
                </div>

                {/* Info Text / Progress Bar Frame Content */}
                <div className="p-4 flex-1 flex flex-col justify-between relative">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-sm md:text-base tracking-tight">{category.title}</h3>
                  </div>
                  
                  <div className="h-1.5 bg-muted/50 rounded-full mb-3 overflow-hidden w-full">
                    <div
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${category.proficiency}%` }}
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 line-clamp-2 max-h-[52px] overflow-hidden">
                    {category.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] bg-secondary/80 text-secondary-foreground px-2 py-0.5 rounded-full whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                    {category.skills.length > 3 && (
                      <span className="text-[11px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold whitespace-nowrap">
                        +{category.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* ⭐ NEW Hover drop down strip matching layout specs of detail-modal.tsx metadata fields */}
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  hoveredId === category.id ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-card/95 backdrop-blur-sm rounded-xl p-3 border border-border/50 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <button className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-sm">
                      <Play className="w-3 h-3 text-primary-foreground fill-current ml-0.5" />
                    </button>
                    <button className="w-7 h-7 rounded-full border border-muted-foreground/50 flex items-center justify-center">
                      <Plus className="w-3 h-3" />
                    </button>
                    <span className="ml-auto text-[10px] text-muted-foreground font-medium">
                      Overview Data
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </>
  )
}