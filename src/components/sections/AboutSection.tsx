import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { GraduationCap } from 'lucide-react'

const AboutSection: React.FC = () => {
  const educationDetails = [
    {
      institution: 'Rochester Institute of Technology',
      location: 'Rochester, NY',
      period: '2015 - 2019',
      year: 2015,
      degrees: [
        'Bachelor of Science in Computer Science',
        'Associate in Science with Applied Computing'
      ],
      type: 'Dual Degree',
      description: 'Comprehensive education in software engineering, algorithms, data structures, and applied computing principles. My dual degree program provided a strong foundation in both theoretical computer science concepts and practical application development, preparing me for real-world software engineering challenges.',
      skills: ['Software Engineering', 'Algorithms', 'Data Structures', 'Applied Computing', 'Computer Systems', 'Database Design'],
      achievements: [
        'Maintained 3.7+ GPA throughout program',
        'Completed capstone project in machine learning',
        'Active member of Computer Science Society'
      ]
    },
    {
      institution: 'Technology Prep Academy',
      location: 'Los Angeles, CA',
      period: '2011 - 2015',
      year: 2011,
      degrees: [
        'High School Diploma'
      ],
      type: 'Technology Focus',
      description: 'Early interest in technology and programming. Started the journey into software development with a strong foundation in computer science fundamentals and mathematics.',
      skills: ['HTML', 'CSS', 'Basic JavaScript', 'Computer Science Fundamentals', 'Mathematics', 'Problem Solving'],
      achievements: [
        'Valedictorian of graduating class',
        'Founded programming club',
        'Built first web applications'
      ]
    }
  ]

  return (
    <section id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Education Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-primary mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and formal training that shaped my development journey. I'm committed to 
            continuous learning and professional development through online courses, certifications, 
            and hands-on project experience to stay current with evolving technologies.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/70 to-primary/30 z-0 shadow-[0_0_6px_rgba(0,255,65,0.4)]"></div>

            {/* Education Cards */}
            <div className="space-y-8">
              {educationDetails.map((education, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Education Card */}
                  <div className="w-full">
                    <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] mx-4 md:mx-8 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_25px_rgba(0,255,65,0.3)]">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                              <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-primary text-xl mb-1">
                                {education.institution}
                              </CardTitle>
                              <h4 className="font-semibold text-foreground text-lg">
                                {education.location}
                              </h4>
                            </div>
                          </div>
                          {/* Year Badge */}
                          <Badge 
                            variant="outline" 
                            className="border-primary/30 text-primary font-mono text-lg px-3 py-1 shadow-[0_0_8px_rgba(0,255,65,0.2)]"
                          >
                            {education.year}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <div className="flex items-center">
                            <GraduationCap className="h-4 w-4 mr-1" />
                            {education.period}
                          </div>
                          <Badge variant="outline" className="border-primary/30 text-primary hover:shadow-[0_0_8px_rgba(0,255,65,0.2)] transition-all duration-200">
                            {education.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {education.degrees.map((degree, degreeIndex) => (
                            <Badge 
                              key={degreeIndex}
                              variant="outline" 
                              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default hover:shadow-[0_0_8px_rgba(0,255,65,0.3)]"
                            >
                              {degree}
                            </Badge>
                          ))}
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {education.description}
                        </p>
                        
                        <div>
                          <h5 className="font-medium text-primary mb-3">Key Areas of Study</h5>
                          <div className="flex flex-wrap gap-2">
                            {education.skills.map((skill, skillIndex) => (
                              <Badge 
                                key={skillIndex}
                                variant="outline" 
                                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default text-sm hover:shadow-[0_0_8px_rgba(0,255,65,0.3)]"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium text-primary mb-3">Key Achievements</h5>
                          <ul className="space-y-2">
                            {education.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_4px_rgba(0,255,65,0.5)]"></div>
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection