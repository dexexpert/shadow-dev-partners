import { useState } from 'react';
import { Button } from '@/components/ui/button';
import techfusionLogo from '@/assets/techfusion-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            
            <div className="gradient-text text-2xl font-bold">
              TechFusion
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              FAQ
            </button>
            <Button variant="outline" className="cosmic-glow">
              <a href="https://calendly.com/davidortiz-shay/30min" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="block text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block text-foreground/80 hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="block text-foreground/80 hover:text-foreground transition-colors"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block text-foreground/80 hover:text-foreground transition-colors"
            >
              FAQ
            </button>
            <Button variant="outline" className="cosmic-glow w-full">
              <a href="https://calendly.com/davidortiz-shay/30min" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;