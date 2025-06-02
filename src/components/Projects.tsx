
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ENOVIA Widget Suite",
      description: "A comprehensive collection of custom widgets for ENOVIA platform that enhances user productivity and streamlines PLM workflows. Features include advanced search capabilities, data visualization, and workflow automation.",
      technologies: ["3DX", "ENOVIA", "Java", "JavaScript", "CSS"],
      features: [
        "Custom search and filter widgets",
        "Real-time data synchronization",
        "Responsive design for mobile devices",
        "Integration with external APIs"
      ],
      demoUrl: "#",
      sourceUrl: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard built with Vue.js and AG Grid for complex data analysis. Features real-time charts, advanced filtering, and export capabilities using AG Charts and Plotly.js.",
      technologies: ["Vue.js", "Vuetify", "AG Grid", "AG Charts", "Plotly.js"],
      features: [
        "Real-time data updates",
        "Interactive charts and graphs",
        "Advanced filtering and sorting",
        "Export to multiple formats"
      ],
      demoUrl: "#",
      sourceUrl: "#"
    },
    {
      title: "Enterprise Java Application",
      description: "Scalable enterprise application built with Spring Boot and modern frontend technologies. Includes user management, reporting modules, and integration with multiple databases.",
      technologies: ["Java", "Spring Boot", "Vue.js", "PostgreSQL", "REST APIs"],
      features: [
        "Microservices architecture",
        "Role-based access control",
        "Comprehensive reporting system",
        "API documentation with Swagger"
      ],
      demoUrl: "#",
      sourceUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating expertise in various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-scale transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg">{project.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="default" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Github size={16} />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
