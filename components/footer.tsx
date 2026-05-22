import { Mail, Phone, MapPin, Linkedin, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-card via-card/95 to-background border-t border-border/50 py-16 px-4 md:px-12 mt-12 overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-primary">Available for opportunities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready to Start a New{" "}
            <span className="bg-gradient-to-r from-primary via-red-400 to-orange-400 bg-clip-text text-transparent">
              Episode
            </span>
            ?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Looking for exciting opportunities in Software Engineering and AI. Let&apos;s create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="group flex items-center gap-2 mb-4">
              <span className="text-primary font-black text-2xl tracking-tighter">PP</span>
              <span className="text-foreground font-bold text-xl tracking-tight">PORTFOLIO</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Software and AI Engineer crafting scalable solutions and AI-driven systems. 
              5+ years of experience building products that matter.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full" />
              Browse
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                { href: "#experience", label: "Experience" },
                { href: "#skills", label: "Skills" },
                { href: "#papers", label: "Papers" },
                { href: "#education", label: "Education" },
                { href: "#awards", label: "Awards" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-foreground hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full" />
              Connect
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                  href="mailto:praveenprasannan1995@gmail.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground">Email</span>
                    <span className="text-foreground">praveenprasannan1995@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground">Phone</span>
                    <span className="text-foreground">+353 899682715</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground">Location</span>
                    <span className="text-foreground">Galway, Ireland</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://linkedin.com/in/praveen-prasannan-b92491189"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:scale-105"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/praveenprasannan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:scale-105"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:praveenprasannan1995@gmail.com"
            className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:scale-105"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Praveen Prasannan. Streaming quality content since 2019.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookie Preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
