
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Full Stack Development",
      description: "Expert in both frontend and backend technologies with focus on enterprise solutions"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "3DX & ENOVIA",
      description: "Specialized in Dassault Systèmes platforms and PLM solutions"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Modern Web Technologies",
      description: "Proficient in Vue.js, JavaScript, and modern frontend frameworks"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Data Visualization",
      description: "Expert in AG Grid, AG Charts, and Plotly.js for complex data presentations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate software developer with extensive experience in enterprise applications, 
            3D technologies, and modern web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              As a software developer with deep expertise in 3DX and ENOVIA platforms, I specialize in 
              creating robust enterprise solutions that bridge the gap between complex backend systems 
              and intuitive user interfaces.
            </p>
            <p className="text-muted-foreground mb-4">
              My experience spans from developing custom widgets and integrations in ENOVIA to building 
              sophisticated data visualization tools using AG Grid, AG Charts, and Plotly.js. I'm passionate 
              about leveraging modern web technologies like Vue.js and Vuetify to create exceptional user experiences.
            </p>
            <p className="text-muted-foreground">
              I thrive on solving complex technical challenges and delivering solutions that not only meet 
              but exceed client expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover-scale transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
