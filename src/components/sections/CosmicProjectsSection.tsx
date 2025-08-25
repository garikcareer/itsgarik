import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ExternalLink, Github, Zap, Mail, Sparkles, Cpu } from 'lucide-react'

const CosmicProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Quantum Commerce Hub',
      description: 'Neural-powered e-commerce platform with quantum encryption, real-time AI analytics, and molecular-level user experience optimization.',
      technologies: ['React Fusion', 'Spring Quantum', 'Neural MySQL', 'Crypto API', 'JWT Matrix'],
      github: '#',
      demo: '#',
      status: 'Deployed',
      color: 'from-cyan-400 to-blue-600',
      icon: Zap
    },
    {
      title: 'Neural Task Synchronizer',
      description: 'Multi-dimensional project management with quantum entanglement updates, holographic drag-and-drop, and consciousness-level collaboration.',
      technologies: ['Next.js Matrix', 'Node Cluster', 'Quantum SQL', 'Socket Neural', 'Redis Cache'],
      github: '#',
      demo: '#',
      status: 'Evolving',
      color: 'from-purple-400 to-pink-600',
      icon: Cpu
    },
    {
      title: 'Atmospheric Analytics Portal',
      description: 'Quantum weather prediction system with neural data aggregation, holographic visualization, and predictive consciousness algorithms.',
      technologies: ['Vue Synthesis', 'Python AI', 'FastAPI Neural', 'MongoDB Grid', 'Chart Quantum'],
      github: '#',
      demo: '#',
      status: 'Deployed',
      color: 'from-green-400 to-teal-600',
      icon: Sparkles
    }
  ]

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border-cosmic-primary/30 mb-8">
            <Cpu className="h-4 w-4 text-cosmic-primary mr-2" />
            <span className="text-sm font-medium text-cosmic-primary">Neural Constructs</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neon-text">
            Quantum Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advanced neural constructs showcasing quantum-level development capabilities 
            and multidimensional problem-solving architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card neon-border group hover:scale-105 transition-all duration-500 flex flex-col overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-7 w-7 text-white" />
                  </div>
                  <Badge 
                    className={`${
                      project.status === 'Deployed' 
                        ? 'bg-gradient-to-r from-green-400 to-teal-600' 
                        : 'bg-gradient-to-r from-orange-400 to-red-600'
                    } text-white border-none`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl neon-text group-hover:text-cosmic-primary transition-colors">
                  {project.title}
                </CardTitle>
                
                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col space-y-6">
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline" 
                      className="border-cosmic-primary/30 text-cosmic-primary hover:bg-cosmic-primary hover:text-white transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="cosmic-button border-cosmic-primary/30 hover:border-cosmic-primary flex-1"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Neural Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    asChild
                    className="cosmic-button flex-1"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Interface
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Message */}
        <Card className="glass-card border-cosmic-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-cosmic-neural mr-3" />
              <Sparkles className="h-6 w-6 text-cosmic-accent mr-3" />
              <Cpu className="h-6 w-6 text-cosmic-primary" />
            </div>
            <h3 className="text-2xl font-bold neon-text mb-4">
              Neural Templates Ready
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              These quantum constructs are neural templates optimized for integration. 
              Ready to discuss collaborative consciousness and multidimensional development protocols.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                asChild
                className="cosmic-button"
              >
                <a href="mailto:garik@itsgarik.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Neural Interface
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="cosmic-button border-cosmic-primary/30 hover:border-cosmic-primary"
              >
                <a href="https://github.com/itsgarik" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  Quantum Repository
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-cosmic-neural rounded-full opacity-60 animate-ping"></div>
      <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-cosmic-accent rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/6 w-2 h-2 bg-cosmic-primary rounded-full opacity-70 animate-bounce"></div>
    </section>
  )
}

export default CosmicProjectsSection