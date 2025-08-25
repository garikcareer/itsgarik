import React, { useEffect, useState } from 'react'
import { Cpu, Menu, Palette, Sparkles } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { useTheme } from '../context/CosmicThemeProvider.tsx'

const CosmicNavbar: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'about', label: 'Neural Core', icon: Cpu },
    { id: 'skills', label: 'Capabilities', icon: Sparkles },
    { id: 'projects', label: 'Constructs', icon: Cpu },
    { id: 'contact', label: 'Interface', icon: Sparkles },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-card backdrop-blur-xl border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center neon-border">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold neon-text tracking-tight">
                ITSGarik
              </span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">
                Neural Interface
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-accent"
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4 text-cosmic-primary group-hover:text-cosmic-secondary transition-colors" />
                  <span className="text-sm font-medium text-foreground group-hover:text-cosmic-primary transition-colors">
                    {item.label}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="cosmic-button border-cosmic-primary/30 hover:border-cosmic-primary group"
            >
              <div className="relative">
                <Palette className="h-4 w-4 transition-transform group-hover:rotate-180" />
                <div className="absolute inset-0 bg-cosmic-primary opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity"></div>
              </div>
              <span className="sr-only">Toggle cosmic theme</span>
            </Button>
            
            {/* Mobile menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="cosmic-button border-cosmic-primary/30">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 glass-card border-cosmic-primary/20">
                  {navItems.map((item) => (
                    <DropdownMenuItem 
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="group cursor-pointer"
                    >
                      <item.icon className="mr-3 h-4 w-4 text-cosmic-primary group-hover:text-cosmic-secondary transition-colors" />
                      <span className="group-hover:text-cosmic-primary transition-colors">{item.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="h-px bg-gradient-to-r from-transparent via-cosmic-primary to-transparent opacity-30"></div>
    </nav>
  )
}

export default CosmicNavbar