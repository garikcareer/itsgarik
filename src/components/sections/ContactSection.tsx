import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Mail, MapPin, Calendar, Github, Linkedin, Instagram, Facebook, Code, GraduationCap, Brain } from 'lucide-react'

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'garik@itsgarik.com',
      href: 'mailto:garik@itsgarik.com',
      copy: true
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Los Angeles, CA',
      href: null,
      copy: false
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Open to opportunities',
      href: null,
      copy: false
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/itsgarik',
      icon: Github,
      colorClass: 'social-icon-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/itsgarik',
      icon: Linkedin,
      colorClass: 'social-icon-linkedin'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/itsgarik',
      icon: Instagram,
      colorClass: 'social-icon-instagram'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/itsgarik',
      icon: Facebook,
      colorClass: 'social-icon-facebook'
    }
  ]

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('garik@itsgarik.com')
    // You could add a toast notification here
  }

  return (
    <section id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-primary mb-4">
            Contact
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and interesting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </div>

        {/* Connect With Me Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_25px_rgba(0,255,65,0.3)]">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-primary text-lg">Full-Stack Developer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Experienced in both frontend and backend technologies, creating end-to-end solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_25px_rgba(0,255,65,0.3)]">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-primary text-lg">RIT Graduate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Dual degree holder with strong foundation in computer science and applied computing.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_25px_rgba(0,255,65,0.3)]">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-primary text-lg">Problem Solver</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Passionate about tackling complex challenges and learning new technologies.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information and Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="border-primary/20 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_25px_rgba(0,255,65,0.3)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_8px_rgba(0,255,65,0.2)]">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-primary">
                      {info.label}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{info.value}</span>
                      )}
                      {info.copy && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleCopyEmail}
                          className="matrix-button-hover h-6 px-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_8px_rgba(0,255,65,0.3)]"
                        >
                          Copy
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Media & Professional Links */}
          <Card className="border-primary/20 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_25px_rgba(0,255,65,0.3)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-primary">
                Let's Connect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-muted-foreground mb-4">
                  Follow me on social media or connect professionally:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="outline"
                      asChild
                      className="matrix-button-hover border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 justify-start hover:shadow-[0_0_12px_rgba(0,255,65,0.3)]"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <link.icon className={`h-4 w-4 mr-2 ${link.colorClass}`} />
                        <span>{link.name}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground mb-4 text-sm">
                  Ready to start a conversation?
                </p>
                <div className="flex flex-col gap-3">
                  <Button 
                    size="lg"
                    asChild
                    className="matrix-button-hover bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_12px_rgba(0,255,65,0.2)] hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
                  >
                    <a href="mailto:garik@itsgarik.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild
                    className="matrix-button-hover border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]"
                  >
                    <a href="https://github.com/itsgarik" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2" />
                      View GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="border-primary/20 max-w-3xl mx-auto shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_25px_rgba(0,255,65,0.3)] transition-all duration-300">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Whether you're looking for a dedicated developer, have an exciting project in mind, 
                or just want to chat about technology, I'd love to hear from you.
              </p>
              <p className="text-primary font-medium">
                Let's build something amazing together!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection