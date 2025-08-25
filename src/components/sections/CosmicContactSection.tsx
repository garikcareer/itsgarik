import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Mail, MapPin, Calendar, Github, Linkedin, Instagram, Facebook, Zap, Cpu, Brain } from 'lucide-react'

const CosmicContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Neural Gateway',
      value: 'garik@itsgarik.com',
      href: 'mailto:garik@itsgarik.com',
      copy: true,
      color: 'from-cyan-400 to-blue-600'
    },
    {
      icon: MapPin,
      label: 'Quantum Location',
      value: 'Rochester, NY Sector',
      href: null,
      copy: false,
      color: 'from-purple-400 to-pink-600'
    },
    {
      icon: Calendar,
      label: 'Interface Status',
      value: 'Neural pathways open',
      href: null,
      copy: false,
      color: 'from-green-400 to-teal-600'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/itsgarik',
      icon: Github,
      color: 'from-gray-400 to-gray-600',
      hoverColor: 'hover:from-gray-300 hover:to-gray-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/itsgarik',
      icon: Linkedin,
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:from-blue-300 hover:to-blue-500'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/itsgarik',
      icon: Instagram,
      color: 'from-pink-400 to-purple-600',
      hoverColor: 'hover:from-pink-300 hover:to-purple-500'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/itsgarik',
      icon: Facebook,
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-400 hover:to-blue-600'
    }
  ]

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('garik@itsgarik.com')
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border-cosmic-primary/30 mb-8">
            <Brain className="h-4 w-4 text-cosmic-primary mr-2" />
            <span className="text-sm font-medium text-cosmic-primary">Neural Interface</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neon-text">
            Connect Consciousness
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Always seeking new neural connections, quantum collaborations, and consciousness-expanding projects. 
            Ready to establish dimensional communication protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="glass-card neon-border">
            <CardHeader>
              <CardTitle className="text-2xl neon-text flex items-center">
                <Mail className="h-6 w-6 mr-3" />
                Neural Pathways
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-cosmic-primary mb-1">
                      {info.label}
                    </p>
                    <div className="flex items-center space-x-3">
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-cosmic-primary transition-colors duration-200"
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
                          className="cosmic-button h-8 px-3 text-xs"
                        >
                          Neural Copy
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Networks */}
          <Card className="glass-card neon-border">
            <CardHeader>
              <CardTitle className="text-2xl neon-text">
                Quantum Networks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Connect across dimensional networks and professional consciousness platforms:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="outline"
                      asChild
                      className={`cosmic-button border-cosmic-primary/30 hover:border-cosmic-primary justify-start group h-12`}
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <div className={`w-8 h-8 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                          <link.icon className="h-4 w-4 text-white" />
                        </div>
                        {link.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Neural Stats */}
              <div className="pt-6 border-t border-cosmic-primary/20">
                <h4 className="font-medium text-cosmic-primary mb-4 flex items-center">
                  <Cpu className="h-4 w-4 mr-2" />
                  Neural Metrics
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Level:</span>
                    <span className="text-cosmic-primary font-medium">Quantum Developer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Neural Training:</span>
                    <span className="text-cosmic-primary font-medium">RIT Matrix</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Core Architecture:</span>
                    <span className="text-cosmic-primary font-medium">Java • React Fusion</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantum State:</span>
                    <span className="text-cosmic-neural font-medium">Active & Learning</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Direct Communication */}
        <div className="mt-16 text-center">
          <Card className="glass-card border-cosmic-primary/20 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-cosmic-neural mr-3" />
                <Brain className="h-6 w-6 text-cosmic-accent mr-3" />
                <Cpu className="h-6 w-6 text-cosmic-primary" />
              </div>
              <h3 className="text-2xl font-bold neon-text mb-4">
                Direct Neural Interface
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                This consciousness portal is quantum-optimized and ready for multidimensional integration. 
                Prepared to discuss collaborative neural architectures and consciousness-expanding projects.
              </p>
              <Button 
                size="lg"
                asChild
                className="cosmic-button"
              >
                <a href="mailto:garik@itsgarik.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Initiate Neural Link
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-cosmic-neural rounded-full opacity-60 animate-ping"></div>
      <div className="absolute bottom-1/3 right-1/6 w-4 h-4 bg-cosmic-accent rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-cosmic-primary rounded-full opacity-70 animate-bounce"></div>
    </section>
  )
}

export default CosmicContactSection