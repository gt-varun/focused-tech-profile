
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Product Manager',
      company: 'TechCorp Inc.',
      content: 'John consistently delivered high-quality code and innovative solutions. His ability to translate complex requirements into elegant, user-friendly interfaces made him an invaluable team member.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c120?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Lead Developer',
      company: 'StartupXYZ',
      content: 'Working with John was a game-changer for our project. His expertise in modern web technologies and attention to detail helped us deliver our product ahead of schedule with exceptional quality.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'DesignStudio',
      content: 'John has an exceptional ability to bridge the gap between design and development. He brought our designs to life with pixel-perfect precision and smooth animations that enhanced the user experience.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'CTO',
      company: 'InnovateLab',
      content: 'Johns technical leadership and problem-solving skills are outstanding. He not only writes clean, maintainable code but also mentors junior developers and contributes to architectural decisions.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues, clients, and collaborators
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
