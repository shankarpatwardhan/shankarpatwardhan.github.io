
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Enterprise Solutions Inc.",
      period: "2021 - Present",
      location: "Remote",
      description: "Leading development of enterprise 3DX applications and ENOVIA customizations. Specialized in creating complex widgets and integrations that streamline PLM workflows.",
      achievements: [
        "Developed 15+ custom ENOVIA widgets improving user productivity by 40%",
        "Led migration of legacy Java applications to modern frameworks",
        "Implemented advanced data visualization using AG Grid and Plotly.js"
      ],
      technologies: ["3DX", "ENOVIA", "Java", "Vue.js", "AG Grid"]
    },
    {
      title: "Full Stack Developer",
      company: "Tech Innovations Ltd.",
      period: "2019 - 2021",
      location: "City, Country",
      description: "Focused on developing modern web applications with emphasis on data visualization and user experience. Worked extensively with Vue.js ecosystem and charting libraries.",
      achievements: [
        "Built responsive dashboards using Vue.js and Vuetify",
        "Integrated AG Charts for real-time data visualization",
        "Optimized application performance resulting in 50% faster load times"
      ],
      technologies: ["Vue.js", "Vuetify", "AG Charts", "JavaScript", "Node.js"]
    },
    {
      title: "Junior Software Engineer",
      company: "Digital Solutions Corp.",
      period: "2017 - 2019",
      location: "City, Country",
      description: "Started career focusing on Java development and web technologies. Gained expertise in enterprise software development and database management.",
      achievements: [
        "Contributed to large-scale Java applications",
        "Learned enterprise software development best practices",
        "Developed foundational skills in web technologies"
      ],
      technologies: ["Java", "Spring Boot", "JavaScript", "SQL", "HTML/CSS"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through various roles that shaped my expertise in enterprise software development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-scale transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-primary mb-2">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{exp.description}</p>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
