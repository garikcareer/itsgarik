import React from 'react'
import { Github, Linkedin, Instagram, Facebook, Mail } from 'lucide-react'
import { Button } from '../ui/button'

type SocialLink = {
  name: string;
  url: string;
  icon: React.ElementType;
  hoverClasses: string;     
};

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/itsgarik',
    icon: Github,
    hoverClasses: 'hover:bg-social-github hover:border-social-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/itsgarik',
    icon: Linkedin,
    hoverClasses: 'hover:bg-social-linkedin hover:border-social-linkedin'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/itsgarik',
    icon: Instagram,
    hoverClasses: 'hover:bg-social-instagram hover:border-social-instagram'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/itsgarik',
    icon: Facebook,
    hoverClasses: 'hover:bg-social-facebook hover:border-social-facebook'
  },
  {
    name: 'Email',
    url: 'mailto:garik@itsgarik.com',
    icon: Mail,
    hoverClasses: 'hover:bg-social-email hover:border-social-email'
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary font-mono">
              ITSGarik.com
            </h3>
            <p className="text-muted-foreground">
              Full-stack software developer passionate about solving problems and building innovative solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="icon"
                  asChild
                  className={`
                    border-primary text-primary hover:text-primary-foreground 
                    transition-colors duration-300
                    ${link.hoverClasses}
                  `}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} ITSGarik.com. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm font-mono">
              Built with React & Spring Boot
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer