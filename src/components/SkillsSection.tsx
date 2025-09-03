import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Code, Database, Globe, Server, Smartphone, Wrench } from 'lucide-react'

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Angular', 'Vue.js'],
      color: 'text-blue-400'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Java', 'Spring Boot', 'Node.js', 'Python', 'C#', '.NET', 'Express.js', 'RESTful APIs', 'GraphQL'],
      color: 'text-green-400'
    },
    {
      title: 'Database Technologies',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Oracle', 'SQL Server'],
      color: 'text-purple-400'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'Android (Java/Kotlin)', 'iOS (Swift)', 'Xamarin'],
      color: 'text-pink-400'
    },
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C#', 'C++', 'Go', 'Rust', 'PHP'],
      color: 'text-yellow-400'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins', 'Maven', 'Gradle', 'Linux'],
      color: 'text-orange-400'
    }
  ]

  return (
    <section id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-primary mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I've learned and worked with throughout my development journey. 
            I'm always eager to learn new technologies and expand my skill set, currently exploring cloud architecture, 
            microservices, and modern DevOps practices to stay at the forefront of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_25px_rgba(0,255,65,0.3)]"
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <CardTitle className="text-primary text-lg">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline" 
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default hover:shadow-[0_0_8px_rgba(0,255,65,0.3)]"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection