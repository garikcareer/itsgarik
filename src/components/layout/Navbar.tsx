import React from 'react';
import {
  Menu,
  Code,
  Mail,
  FileText,
  Briefcase,
  Trophy,
  GraduationCap,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import ThemeToggle from '../context/ThemeContext/ThemeToggle';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 w-full bg-background/20 backdrop-blur-sm border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand - Disabled editing */}
          <div className="flex items-center space-x-2 pointer-events-none select-none">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-xl font-mono font-semibold text-primary text-center">
              ITSGarik.com
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="matrix-nav-item relative px-3 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                  Projects
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_var(--primary)]"></div>
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="matrix-nav-item relative px-3 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                  Skills
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_var(--primary)]"></div>
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="matrix-nav-item relative px-3 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                  Experience
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_var(--primary)]"></div>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="matrix-nav-item relative px-3 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                  Education
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_var(--primary)]"></div>
              </button>
              <button
                onClick={() => scrollToSection('sports')}
                className="matrix-nav-item relative px-3 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                  Sports
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_var(--primary)]"></div>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="matrix-nav-item relative px-3 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                  Contact
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_var(--primary)]"></div>
              </button>
            </div>
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => scrollToSection('projects')}>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Projects</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('skills')}>
                    <Code className="mr-2 h-4 w-4" />
                    <span>Skills</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => scrollToSection('experience')}
                  >
                    <Briefcase className="mr-2 h-4 w-4" />
                    <span>Experience</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('about')}>
                    <GraduationCap className="mr-2 h-4 w-4" />
                    <span>Education</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('sports')}>
                    <Trophy className="mr-2 h-4 w-4" />
                    <span>Sports</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('contact')}>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Contact</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
