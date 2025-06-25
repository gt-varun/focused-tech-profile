
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        'React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
        'Tailwind CSS', 'Sass', 'Next.js', 'Nuxt.js', 'Webpack', 'Vite'
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        'Node.js', 'Python', 'Express.js', 'FastAPI', 'Django', 'Flask',
        'REST APIs', 'GraphQL', 'Microservices', 'Socket.io', 'JWT', 'OAuth'
      ]
    },
    {
      title: 'Database & Cloud',
      icon: '☁️',
      skills: [
        'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'AWS', 'Google Cloud',
        'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Linux', 'Nginx'
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        'VS Code', 'Figma', 'Postman', 'Jest', 'Cypress', 'ESLint',
        'Prettier', 'Jira', 'Slack', 'Adobe Creative Suite', 'Photoshop', 'Illustrator'
      ]
    }
  ];

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Spanish', level: 'Conversational' },
    { name: 'French', level: 'Basic' }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl group-hover:text-primary transition-colors duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-md mx-auto hover:shadow-xl transition-all duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="text-2xl">🌍</span>
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {languages.map((language) => (
                <div key={language.name} className="flex justify-between items-center hover:bg-muted/50 p-2 rounded transition-colors duration-300">
                  <span className="font-medium">{language.name}</span>
                  <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300">{language.level}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
