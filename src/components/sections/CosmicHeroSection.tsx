import React, { useEffect, useRef } from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Brain, Code, GraduationCap, Sparkles, Zap /*, Cpu */ } from 'lucide-react'

const CosmicHeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return

            const rect = heroRef.current.getBoundingClientRect()
            const x = (e.clientX - rect.left) / rect.width
            const y = (e.clientY - rect.top) / rect.height

            heroRef.current.style.setProperty('--mouse-x', `${x}`)
            heroRef.current.style.setProperty('--mouse-y', `${y}`)
        }

        const heroElement = heroRef.current
        if (heroElement) {
            heroElement.addEventListener('mousemove', handleMouseMove)
        }

        return () => {
            if (heroElement) {
                heroElement.removeEventListener('mousemove', handleMouseMove)
            }
        }
    }, [])

  const capabilities = [
    {
      icon: Code,
      title: 'Neural Architecture',
      description: 'Advanced full-stack development with quantum efficiency',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      icon: Brain,
      title: 'Cognitive Computing',
      description: 'AI-driven problem solving and algorithmic innovation',
      color: 'from-purple-400 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Quantum Processing',
      description: 'Parallel execution of complex engineering solutions',
      color: 'from-green-400 to-teal-600'
    }
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
      <div 
        ref={heroRef}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative"
        style={{
          background: `radial-gradient(600px circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(0, 212, 255, 0.1), transparent 40%)`
        }}
      >
        {/* Main Hero Content */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border-cosmic-primary/30 mb-8">
            <Sparkles className="h-4 w-4 text-cosmic-primary mr-2" />
            <span className="text-sm font-medium text-cosmic-primary">Neural Interface Active</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="block">Garik</span>
            <span className="block text-4xl md:text-5xl mt-2 text-muted-foreground">
              Neural Architect
            </span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Advanced cognitive systems engineer specializing in quantum-level problem solving, 
              neural network architectures, and multidimensional software constructs.
            </p>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-0 left-1/4 w-20 h-20 bg-gradient-to-br from-cosmic-primary to-cosmic-secondary rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-16 h-16 bg-gradient-to-br from-cosmic-accent to-cosmic-neural rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <Card 
              key={index}
              className="glass-card neon-border group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className={`w-16 h-16 bg-gradient-to-br ${capability.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 neon-text">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
                
                {/* Animated background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <Card className="glass-card border-cosmic-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cosmic-secondary to-cosmic-accent rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold neon-text">Neural Training Matrix</h3>
                <p className="text-muted-foreground">Rochester Institute of Technology</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Badge className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary text-white border-none">
                  Bachelor of Science • Computer Science
                </Badge>
                <Badge className="bg-gradient-to-r from-cosmic-secondary to-cosmic-accent text-white border-none">
                  Associate in Science • Applied Computing
                </Badge>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive neural pathway development in quantum computing principles, 
                  advanced algorithmic structures, and multidimensional problem resolution protocols.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Elements */}
        <div className="absolute top-1/4 left-0 w-4 h-4 bg-cosmic-neural rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-3/4 right-0 w-6 h-6 bg-cosmic-accent rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cosmic-primary rounded-full opacity-70 animate-bounce"></div>
      </div>
    </section>
  )
}

export default CosmicHeroSection