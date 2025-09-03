import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const WorkExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovation Corp',
      location: 'Los Angeles, CA',
      period: '2023 - Present',
      year: 2023,
      type: 'Full-time',
      description:
        'Leading development of enterprise-scale web applications using React, Spring Boot, and cloud technologies. Mentoring junior developers and architecting scalable solutions.',
      technologies: [
        'React',
        'TypeScript',
        'Spring Boot',
        'AWS',
        'Docker',
        'PostgreSQL',
      ],
      achievements: [
        'Reduced application load time by 40% through performance optimization',
        'Led a team of 5 developers on critical product features',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
      ],
      current: true,
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions LLC',
      location: 'Remote',
      period: '2022 - 2023',
      year: 2022,
      type: 'Full-time',
      description:
        'Developed and maintained multiple client applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'Azure'],
      achievements: [
        'Successfully delivered 8+ client projects on time and within budget',
        'Improved code quality by implementing automated testing',
        'Reduced bug reports by 35% through comprehensive testing strategies',
      ],
      current: false,
    },
    {
      title: 'Software Developer Intern',
      company: 'StartupTech Inc',
      location: 'Rochester, NY',
      period: '2021 - 2022',
      year: 2021,
      type: 'Internship',
      description:
        'Contributed to the development of a SaaS platform, gaining hands-on experience with full-stack development and agile methodologies.',
      technologies: ['Angular', 'Java', 'Spring Framework', 'MySQL'],
      achievements: [
        'Developed key features that increased user engagement by 25%',
        'Collaborated effectively in an agile development environment',
        'Received commendation for code quality and problem-solving skills',
      ],
      current: false,
    },
    {
      title: 'Junior Developer',
      company: 'LocalTech Solutions',
      location: 'Rochester, NY',
      period: '2019 - 2021',
      year: 2019,
      type: 'Part-time',
      description:
        'Entry-level development role while completing studies. Worked on web applications and learned professional development practices.',
      technologies: ['JavaScript', 'PHP', 'HTML/CSS', 'MySQL'],
      achievements: [
        'Built responsive web interfaces for local businesses',
        'Learned version control and collaborative development',
        'Gained experience with database design and optimization',
      ],
      current: false,
    },
    {
      title: 'IT Support Specialist',
      company: 'RIT Campus Technology',
      location: 'Rochester, NY',
      period: '2017 - 2019',
      year: 2017,
      type: 'Part-time',
      description:
        'Provided technical support for campus technology systems while studying. First step into the tech industry.',
      technologies: ['Windows', 'macOS', 'Linux', 'Networking', 'Hardware'],
      achievements: [
        'Resolved 200+ technical support tickets monthly',
        'Trained new student technicians',
        'Improved system response time by 25%',
      ],
      current: false,
    },
  ];

  return (
    <section id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-primary mb-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development spans from
            internship to senior roles, where I&apos;ve been passionate about
            creating efficient, scalable solutions and contributing to team
            success through collaboration and continuous learning. Each role has
            shaped my expertise and leadership abilities.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/70 to-primary/30 z-0 shadow-[0_0_6px_rgba(0,255,65,0.4)]"></div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Experience Card */}
                  <div className="w-full">
                    <Card
                      className={`border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] mx-4 md:mx-8 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_25px_rgba(0,255,65,0.3)] ${
                        experience.current
                          ? 'shadow-[0_0_20px_rgba(0,255,65,0.25)]'
                          : ''
                      }`}
                    >
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex items-start space-x-4 flex-1">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(0,255,65,0.2)] ${
                                experience.current
                                  ? 'bg-primary/20 shadow-[0_0_15px_rgba(0,255,65,0.4)]'
                                  : 'bg-primary/10'
                              }`}
                            >
                              <Briefcase
                                className={`h-6 w-6 ${
                                  experience.current
                                    ? 'text-primary animate-pulse'
                                    : 'text-primary'
                                }`}
                              />
                            </div>
                            <div className="flex-1">
                              <CardTitle
                                className={`text-xl mb-1 ${
                                  experience.current
                                    ? 'text-primary animate-pulse'
                                    : 'text-primary'
                                }`}
                              >
                                {experience.title}
                                {experience.current && (
                                  <Badge className="ml-2 bg-primary text-primary-foreground animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.4)]">
                                    Current
                                  </Badge>
                                )}
                              </CardTitle>
                              <h4 className="font-semibold text-foreground text-lg">
                                {experience.company}
                              </h4>
                            </div>
                          </div>
                          {/* Year Badge */}
                          <Badge
                            variant="outline"
                            className="border-primary/30 text-primary font-mono text-lg px-3 py-1 shadow-[0_0_8px_rgba(0,255,65,0.2)]"
                          >
                            {experience.year}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {experience.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {experience.location}
                          </div>
                          <Badge
                            variant="outline"
                            className="border-primary/30 text-primary hover:shadow-[0_0_8px_rgba(0,255,65,0.2)] transition-all duration-200"
                          >
                            {experience.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>

                        <div>
                          <h5 className="font-medium text-primary mb-3">
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default hover:shadow-[0_0_8px_rgba(0,255,65,0.3)]"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium text-primary mb-3">
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {experience.achievements.map(
                              (achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_4px_rgba(0,255,65,0.5)]"></div>
                                  <span className="text-muted-foreground">
                                    {achievement}
                                  </span>
                                </li>
                              )
                            )}
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
  );
};

export default WorkExperienceSection;
