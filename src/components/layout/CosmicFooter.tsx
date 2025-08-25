import React from 'react'
import { Github, Linkedin, Instagram, Facebook, Mail, ExternalLink, Cpu, Brain, Zap } from 'lucide-react'
import { Button } from '../ui/button'

const CosmicFooter: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/itsgarik',
      icon: Github,
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/itsgarik',
      icon: Linkedin,
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/itsgarik',
      icon: Instagram,
      color: 'from-pink-400 to-purple-600'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/itsgarik',
      icon: Facebook,
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Email',
      url: 'mailto:garik@itsgarik.com',
      icon: Mail,
      color: 'from-cosmic-primary to-cosmic-secondary'
    },
  ]

  const quickLinks = [
    { label: 'Neural Core', id: 'about' },
    { label: 'Capabilities', id: 'skills' },
    { label: 'Constructs', id: 'projects' },
    { label: 'Interface', id: 'contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="glass-card border-t border-cosmic-primary/20 mt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cosmic-primary to-cosmic-secondary rounded-xl flex items-center justify-center neon-border">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold neon-text">
                  ITSGarik.com
                </h3>
                <p className="text-sm text-cosmic-primary">Neural Interface Portal</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Quantum-level software architecture and neural development protocols. 
              Specializing in consciousness-expanding solutions and multidimensional problem resolution.
            </p>
            <div className="flex items-center space-x-2 text-sm text-cosmic-primary">
              <Brain className="h-4 w-4" />
              <span>Neural pathways active</span>
              <Zap className="h-4 w-4 ml-4" />
              <span>Quantum processing enabled</span>
            </div>
          </div>

          {/* Quick Neural Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-cosmic-primary">
              Neural Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group text-muted-foreground hover:text-cosmic-primary transition-colors duration-200 flex items-center"
                  >
                    <ExternalLink className="h-3 w-3 mr-2 group-hover:scale-110 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantum Networks */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-cosmic-primary">
              Quantum Networks
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="icon"
                  asChild
                  className="cosmic-button border-cosmic-primary/30 hover:border-cosmic-primary group"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <link.icon className="h-4 w-4 text-white" />
                    </div>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Neural Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-cosmic-primary to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} ITSGarik.com</span>
            <span className="hidden md:inline">•</span>
            <span>All neural pathways reserved</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <div className="flex items-center space-x-2 text-cosmic-primary">
              <Cpu className="h-4 w-4" />
              <span>Built with React Fusion</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center space-x-2 text-cosmic-secondary">
              <Brain className="h-4 w-4" />
              <span>Spring Boot Neural</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cosmic-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-cosmic-secondary/5 rounded-full blur-2xl"></div>
    </footer>
  )
}

export default CosmicFooter