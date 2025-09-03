import React from 'react'

import { Button } from './ui/button'
import {CiMail} from "react-icons/ci";
import {FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/garikcareer',
      icon: FaGithub,
      colorClass: 'social-icon-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/garikcareer',
      icon: FaLinkedin,
      colorClass: 'social-icon-linkedin'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/itsgarik',
      icon: FaInstagram,
      colorClass: 'social-icon-instagram'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/itsgarik',
      icon: FaFacebookSquare,
      colorClass: 'social-icon-facebook'
    },
    {
      name: 'Email',
      url: 'mailto:garik@itsgarik.com',
      icon: CiMail,
      colorClass: 'social-icon-email'
    },
  ]

  return (
    <footer className="bg-card/20 backdrop-blur-sm border-t border-border/30 mt-20">
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
                  className="matrix-button-hover border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <link.icon className={`h-4 w-4 ${link.colorClass}`} />
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