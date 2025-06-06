
export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    location: string;
    summary: string;
  };
  skills: Array<{
    category: string;
    technologies: string[];
  }>;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    demoUrl?: string;
    sourceUrl?: string;
  }>;
}

export const fetchPortfolioData = async (): Promise<PortfolioData> => {
  try {
    const response = await fetch('https://shankarpatwardhan.bitbucket.io/data.json');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log('Could not fetch remote data, using fallback data');
  }
  
  // Fallback data structure - you can customize this
  return {
    personalInfo: {
      name: "Shankar Patwardhan",
      title: "Senior Software Developer",
      email: "contact@example.com",
      location: "Remote",
      summary: "Expert in 3DX, ENOVIA, Widget Development, AG Grid, AG Charts, Plotly.js, JavaScript, Vue, and Vuetify. Passionate about creating innovative solutions and delivering exceptional user experiences."
    },
    skills: [
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
    ],
    experience: [
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
      }
    ],
    projects: [
      {
        title: "ENOVIA Widget Suite",
        description: "A comprehensive collection of custom widgets for ENOVIA platform that enhances user productivity and streamlines PLM workflows.",
        technologies: ["3DX", "ENOVIA", "Java", "JavaScript", "CSS"],
        features: [
          "Custom search and filter widgets",
          "Real-time data synchronization",
          "Responsive design for mobile devices",
          "Integration with external APIs"
        ]
      }
    ]
  };
};
