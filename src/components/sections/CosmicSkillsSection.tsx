import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'
import { 
  Brain, 
  Cpu, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  Wrench,
  Zap,
  Sparkles
} from 'lucide-react'

const CosmicSkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Quantum Frontend',
      icon: Globe,
      color: 'from-cyan-400 to-blue-600',
      skills: [
        { name: 'React Fusion', level: 95 },
        { name: 'Neural TypeScript', level: 92 },
        { name: 'Quantum CSS', level: 88 },
        { name: 'Next.js Matrix', level: 90 },
        { name: 'Vue Synthesis', level: 85 }
      ]
    },
    {
      title: 'Neural Backend',
      icon: Server,
      color: 'from-purple-400 to-pink-600',
      skills: [
        { name: 'Java Core', level: 96 },
        { name: 'Spring Quantum', level: 94 },
        { name: 'Node Cluster', level: 89 },
        { name: 'Python AI', level: 87 },
        { name: 'API Neural', level: 93 }
      ]
    },
    {
      title: 'Data Nexus',
      icon: Database,
      color: 'from-green-400 to-teal-600',
      skills: [
        { name: 'MySQL Matrix', level: 91 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB Grid', level: 85 },
        { name: 'Redis Cache', level: 82 },
        { name: 'Oracle Core', level: 79 }
      ]
    },
    {
      title: 'Mobile Synthesis',
      icon: Smartphone,
      color: 'from-orange-400 to-red-600',
      skills: [
        { name: 'React Native', level: 88 },
        { name: 'Flutter Wave', level: 83 },
        { name: 'Swift Neural', level: 76 },
        { name: 'Kotlin Core', level: 81 },
        { name: 'Xamarin', level: 74 }
      ]
    },
    {
      title: 'Code Matrix',
      icon: Brain,
      color: 'from-indigo-400 to-purple-600',
      skills: [
        { name: 'Java Quantum', level: 96 },
        { name: 'JavaScript AI', level: 94 },
        { name: 'TypeScript', level: 92 },
        { name: 'Python Neural', level: 89 },
        { name: 'C# Matrix', level: 84 }
      ]
    },
    {
      title: 'DevOps Neural',
      icon: Wrench,
      color: 'from-yellow-400 to-orange-600',
      skills: [
        { name: 'Docker Pods', level: 87 },
        { name: 'Kubernetes', level: 82 },
        { name: 'AWS Cloud', level: 85 },
        { name: 'CI/CD Pipeline', level: 89 },
        { name: 'Linux Neural', level: 91 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border-cosmic-primary/30 mb-8">
            <Cpu className="h-4 w-4 text-cosmic-primary mr-2" />
            <span className="text-sm font-medium text-cosmic-primary">Neural Capabilities Matrix</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neon-text">
            Quantum Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advanced cognitive processing capabilities across multiple technological dimensions, 
            optimized for quantum-level performance and neural efficiency.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card neon-border group hover:scale-105 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-xl neon-text">
                  {category.title}
                </CardTitle>
                
                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-cosmic-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          boxShadow: `0 0 10px var(--cosmic-glow)`,
                          animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation Status */}
        <Card className="glass-card border-cosmic-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-cosmic-neural mr-3" />
              <Sparkles className="h-6 w-6 text-cosmic-accent mr-3" />
              <Brain className="h-6 w-6 text-cosmic-primary" />
            </div>
            <h3 className="text-2xl font-bold neon-text mb-4">
              Continuous Neural Evolution
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Always expanding cognitive pathways and learning new quantum technologies. 
              Currently researching neural cloud architectures, quantum microservices, 
              and advanced AI-driven development protocols.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              {['Quantum Computing', 'Neural Networks', 'Blockchain', 'AR/VR', 'IoT', 'Edge Computing'].map((tech, index) => (
                <Badge 
                  key={index}
                  className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary text-white border-none px-4 py-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cosmic-neural rounded-full opacity-60 animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cosmic-accent rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/6 w-4 h-4 bg-cosmic-primary rounded-full opacity-50 animate-bounce"></div>
    </section>
  )
}

export default CosmicSkillsSection