import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  data?: {
    name: string;
    title: string;
    summary: string;
  };
}

const Hero = ({ data }: HeroProps) => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const name = data?.name || "Software Developer";
  const title = "3DEXPERIENCE CONSULTANT";
  const summary = data?.summary || "Expert in ENOVIA, Widget Development, AG Grid, AG Charts, Plotly.js, JavaScript, Vue, and Vuetify. Passionate about creating innovative solutions and delivering exceptional user experiences.";

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            {summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button onClick={scrollToContact} size="lg" className="w-full sm:w-auto">
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in">
            <Button variant="ghost" size="icon" className="hover-scale">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Linkedin size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
