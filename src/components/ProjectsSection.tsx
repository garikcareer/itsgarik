import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ExternalLink, Code } from 'lucide-react'
import { FaGithub } from 'react-icons/fa';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application built with React frontend and Spring Boot backend, featuring user authentication, product management, and payment integration.',
      technologies: ['React', 'Spring Boot', 'MySQL', 'Stripe API', 'JWT'],
      github: '#',
      demo: '#',
      status: 'Completed'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'Redis'],
      github: '#',
      demo: '#',
      status: 'In Development'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard that aggregates weather data from multiple APIs and provides interactive charts and forecasting.',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'MongoDB', 'Chart.js'],
      github: '#',
      demo: '#',
      status: 'Completed'
    }
  ]

  return (
    <section id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my skills in full-stack development. 
            These projects are templates and are ready for integration, demonstrating my ability to deliver 
            complete solutions from concept to deployment. I&apos;m always looking forward to discussing how 
            we can work together on exciting new projects.
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 snap-x snap-mandatory">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_25px_rgba(0,255,65,0.3)] flex-shrink-0 w-80 md:w-96 snap-start"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'bg-primary text-primary-foreground shadow-[0_0_8px_rgba(0,255,65,0.3)]' : ''}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-primary text-xl">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-muted-foreground mb-4 flex-1 line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className="border-primary/30 text-primary text-xs hover:shadow-[0_0_8px_rgba(0,255,65,0.2)] transition-all duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="matrix-button-hover border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1 hover:shadow-[0_0_12px_rgba(0,255,65,0.3)]"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      asChild
                      className="matrix-button-hover bg-primary text-primary-foreground hover:bg-primary/90 flex-1 shadow-[0_0_10px_rgba(0,255,65,0.2)] hover:shadow-[0_0_18px_rgba(0,255,65,0.4)]"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary transition-colors cursor-pointer shadow-[0_0_4px_rgba(0,255,65,0.3)]"
              />
            ))}
          </div>
        </div>

        {/* GitHub Call-to-Action - Made Larger and More Prominent */}
        <div className="mt-16 text-center">
          <div className="max-w-md mx-auto">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work? Check out my GitHub for additional projects and contributions.
            </p>
            <Button 
              size="lg"
              asChild
              className="matrix-button-hover bg-primary text-primary-foreground hover:bg-primary/90 w-full py-4 text-lg font-semibold shadow-[0_0_15px_rgba(0,255,65,0.2)] hover:shadow-[0_0_25px_rgba(0,255,65,0.4)]"
            >
              <a href="https://github.com/itsgarik" target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-6 w-6 mr-3" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection