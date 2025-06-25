
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, MapPin, Calendar, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a mission to create impactful digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-muted-foreground">
              <p>
                I'm a dedicated full-stack developer with over 4 years of experience building 
                scalable web applications and digital products. My journey began with a curiosity 
                about how websites work, and it has evolved into a passion for creating elegant, 
                efficient solutions to complex problems.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, cloud architecture, and user-centered 
                design. When I'm not coding, you'll find me contributing to open-source projects, 
                writing technical blogs, or exploring the latest developments in AI and machine learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                San Francisco, CA
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                Available for new opportunities
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                john.smith@example.com
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="grid gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-3 text-primary">Mission</h3>
                <p className="text-muted-foreground">
                  To leverage technology in creating solutions that not only solve business problems 
                  but also enhance user experiences and drive meaningful innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-3 text-primary">Values</h3>
                <p className="text-muted-foreground">
                  Continuous learning, clean code, collaborative teamwork, and building 
                  inclusive products that make technology accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-3 text-primary">Approach</h3>
                <p className="text-muted-foreground">
                  I believe in understanding the problem deeply before writing the first line of code, 
                  iterating quickly, and always keeping the end user in mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
