
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillsProps {
  data?: Array<{
    category: string;
    technologies: string[];
  }>;
}

const Skills = ({ data }: SkillsProps) => {
  const skillCategories = data || [
    {
      category: "3D & PLM Technologies",
      technologies: ["3DX", "ENOVIA", "Widget Development", "PLM Solutions", "CAD Integration"]
    },
    {
      category: "Programming Languages", 
      technologies: ["Java", "JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
      category: "Frontend Technologies",
      technologies: ["Vue.js", "Vuetify", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      category: "Data Visualization",
      technologies: ["AG Grid", "AG Charts", "Plotly.js", "D3.js", "Chart.js"]
    },
    {
      category: "Backend & Databases",
      technologies: ["Spring Boot", "REST APIs", "PostgreSQL", "Oracle", "MongoDB"]
    },
    {
      category: "Tools & DevOps",
      technologies: ["Git", "GitLab", "Docker", "Jenkins", "Maven", "npm"]
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
            <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    >
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
