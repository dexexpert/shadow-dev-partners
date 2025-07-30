const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/30 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Logo and tagline */}
          <div className="mb-6 md:mb-0">
            <div className="gradient-text text-2xl font-bold mb-2">
              TechFusion
            </div>
            <div className="text-sm text-foreground/60">
              Shadow team
            </div>
          </div>

          {/* Center - Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm"
            >
              FAQ
            </button>
          </nav>

          {/* Right side - Copyright */}
          <div className="text-center md:text-right">
            <div className="text-sm text-foreground/60 mb-2">
              © 2025 TechFusion. All rights reserved.
            </div>
            <div className="text-xs text-foreground/50">
              Made with ❤️ by TechFusion
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;