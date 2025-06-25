
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, BookOpen, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      type: 'certification',
      icon: <BookOpen className="h-6 w-6" />,
      title: 'AWS Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Advanced certification demonstrating expertise in designing distributed systems on AWS.',
      credential: 'AWS-PSA-12345'
    },
    {
      id: 2,
      type: 'award',
      icon: <Trophy className="h-6 w-6" />,
      title: 'Best Technical Innovation',
      issuer: 'TechCorp Annual Awards',
      date: '2023',
      description: 'Recognized for developing an AI-powered optimization system that improved efficiency by 40%.',
      credential: null
    },
    {
      id: 3,
      type: 'competition',
      icon: <Award className="h-6 w-6" />,
      title: 'Global Hackathon Winner',
      issuer: 'CodeChallenge 2023',
      date: '2023',
      description: 'First place among 500+ teams for building a real-time collaborative coding platform.',
      credential: 'GH2023-001'
    },
    {
      id: 4,
      type: 'certification',
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      description: 'Certified in designing, building, and deploying applications on Google Cloud Platform.',
      credential: 'GCP-PD-67890'
    },
    {
      id: 5,
      type: 'achievement',
      icon: <Users className="h-6 w-6" />,
      title: 'Open Source Contributor',
      issuer: 'GitHub',
      date: '2020-Present',
      description: 'Active contributor to major open source projects with 500+ stars and 100+ forks.',
      credential: null
    },
    {
      id: 6,
      type: 'certification',
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Meta React Advanced Certification',
      issuer: 'Meta (Facebook)',
      date: '2022',
      description: 'Advanced certification covering React ecosystem, performance optimization, and best practices.',
      credential: 'META-RA-11223'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300';
      case 'award':
        return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300';
      case 'competition':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-300';
      case 'achievement':
        return 'bg-green-500/10 text-green-700 dark:text-green-300';
      default:
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-300';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'certification':
        return 'Certification';
      case 'award':
        return 'Award';
      case 'competition':
        return 'Competition';
      case 'achievement':
        return 'Achievement';
      default:
        return 'Other';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones that reflect my commitment to continuous learning and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${getTypeColor(achievement.type)}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {getTypeLabel(achievement.type)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{achievement.date}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-primary font-medium mb-3 text-sm">
                  {achievement.issuer}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>
                
                {achievement.credential && (
                  <div className="pt-3 border-t">
                    <p className="text-xs text-muted-foreground">
                      Credential ID: <span className="font-mono">{achievement.credential}</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
