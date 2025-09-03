import React from 'react'
import { Menu, Code, Mail, FileText, Briefcase, Trophy, GraduationCap } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import ThemeToggle from '../ui/ThemeToggle'

type NavItem = {
  label: string;
  sectionId: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { label: 'Projects', sectionId: 'projects', icon: FileText },
  { label: 'Skills', sectionId: 'skills', icon: Code },
  { label: 'Experience', sectionId: 'experience', icon: Briefcase },
  { label: 'Education', sectionId: 'about', icon: GraduationCap }, // Note: Kept sectionId 'about' as in original
  { label: 'Sports', sectionId: 'sports', icon: Trophy },
  { label: 'Contact', sectionId: 'contact', icon: Mail },
];

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2 pointer-events-none select-none">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-xl font-mono font-semibold text-primary text-center">
              ITSGarik.com
            </span>
          </div>

          {/* **Refactored Desktop Navigation** */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="matrix-nav-item relative px-3 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                    {item.label}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_var(--primary)]"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {/* **Refactored Mobile Navigation** */}
                  {navItems.map((item) => (
                    <DropdownMenuItem
                      key={item.label}
                      onClick={() => scrollToSection(item.sectionId)}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar