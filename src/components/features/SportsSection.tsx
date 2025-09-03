import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Waves, Shield, Target, Dumbbell } from 'lucide-react'

const SportsSection: React.FC = () => {
  const sports = [
    {
      name: 'Swimming',
      icon: Waves,
      level: 'Advanced',
      experience: '15+ years',
      description: 'Competitive swimmer with extensive experience in both pool and open water events. Swimming has been a cornerstone of my fitness routine and competitive spirit.',
      achievements: [
        'State Championship Qualifier - Freestyle Events',
        'Open Water Swimming Competition Finisher',
        'Masters Swimming Team Captain',
        'Personal Record: Sub-25 minute 1500m Freestyle'
      ],
      skills: ['Endurance Training', 'Stroke Technique', 'Mental Toughness', 'Breath Control']
    },
    {
      name: 'Judo & Sambo',
      icon: Shield,
      level: 'Intermediate',
      experience: '8+ years',
      description: 'Dedicated practitioner of Judo and Sambo martial arts. These disciplines have taught me discipline, respect, and the importance of continuous learning and self-improvement.',
      achievements: [
        'Brown Belt in Judo - Regional Competition',
        'Sambo Championship Regional Medalist',
        'Assistant Instructor - Youth Judo Program',
        'Tournament Gold Medalist - Local Competitions'
      ],
      skills: ['Discipline', 'Respect', 'Balance', 'Strategic Thinking', 'Self-Control']
    },
    {
      name: 'Basketball',
      icon: Target,
      level: 'Intermediate',
      experience: '12+ years',
      description: 'Regular player in local leagues and pickup games. Enjoy the strategic teamwork and fast-paced nature of the game that requires quick decision-making and coordination.',
      achievements: [
        'Team Captain - College Intramural League',
        'Regional Tournament Semi-finalist',
        'MVP Award - Local Community League',
        'Leading Scorer - Recreation League Season'
      ],
      skills: ['Team Leadership', 'Strategic Thinking', 'Quick Decision Making', 'Communication']
    },
    {
      name: 'Fitness',
      icon: Dumbbell,
      level: 'Advanced',
      experience: '10+ years',
      description: 'Dedicated to maintaining peak physical condition through structured fitness training. Focus on strength training, cardiovascular health, and functional movement patterns.',
      achievements: [
        'Certified Personal Training Completion',
        'Powerlifting Competition Participant',
        'Marathon Training Program Graduate',
        'Consistent 6-Day Training Schedule Maintainer'
      ],
      skills: ['Goal Setting', 'Consistency', 'Self-Motivation', 'Health Optimization', 'Time Management']
    }
  ]

  return (
    <section id="sports">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-primary mb-4">
            Sports & Athletics
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Athletic pursuits that shape my character and teach valuable life skills while maintaining work-life balance. 
            Sports have taught me invaluable lessons about teamwork, perseverance, leadership, and maintaining a competitive 
            spirit that directly translates to my professional approach in problem-solving and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sports.map((sport, index) => (
            <Card 
              key={index} 
              className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_25px_rgba(0,255,65,0.3)]"
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                  <sport.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-primary text-lg">
                  {sport.name}
                </CardTitle>
                <div className="flex justify-center gap-2 mt-2">
                  <Badge variant="outline" className="border-primary/30 text-primary hover:shadow-[0_0_8px_rgba(0,255,65,0.2)] transition-all duration-200">
                    {sport.level}
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary hover:shadow-[0_0_8px_rgba(0,255,65,0.2)] transition-all duration-200">
                    {sport.experience}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  {sport.description}
                </p>
                
                <div>
                  <h5 className="font-medium text-primary mb-2 text-center">Key Achievements</h5>
                  <ul className="space-y-1">
                    {sport.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_4px_rgba(0,255,65,0.5)]"></div>
                        <span className="text-muted-foreground text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium text-primary mb-2 text-center">Transferable Skills</h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {sport.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline" 
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default text-xs hover:shadow-[0_0_8px_rgba(0,255,65,0.3)]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SportsSection