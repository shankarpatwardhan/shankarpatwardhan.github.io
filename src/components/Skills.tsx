
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "3D & PLM Technologies",
      skills: ["3DX", "ENOVIA", "Widget Development", "PLM Solutions", "CAD Integration"]
    },
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
      title: "Frontend Technologies",
      skills: ["Vue.js", "Vuetify", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Data Visualization",
      skills: ["AG Grid", "AG Charts", "Plotly.js", "D3.js", "Chart.js"]
    },
    {
      title: "Backend & Databases",
      skills: ["Spring Boot", "REST APIs", "PostgreSQL", "Oracle", "MongoDB"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitLab", "Docker", "Jenkins", "Maven", "npm"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build exceptional software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-scale transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
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
  );
};

export default Skills;
