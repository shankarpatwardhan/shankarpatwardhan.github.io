
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Index = () => {
  const { data: portfolioData, isLoading, error } = usePortfolioData();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    console.error('Error loading portfolio data:', error);
    // Still render with fallback data
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero data={portfolioData?.personalInfo} />
        <About data={portfolioData?.personalInfo} />
        <Skills data={portfolioData?.skills} />
        <Experience data={portfolioData?.experience} />
        <Projects data={portfolioData?.projects} />
        <Contact data={portfolioData?.personalInfo} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
