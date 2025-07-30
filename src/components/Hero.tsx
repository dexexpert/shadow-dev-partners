import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up" style={{ margin-top: '100px' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Get paid while we code !!!#!#!#!
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-4xl mx-auto">
            The Dev Team Behind Your Freelance Success
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            We help you earn from freelance projects — without writing a single line of code.
          </p>
          <p className="text-md text-accent mb-12 font-semibold">
            You bring the profile. We bring the work. You get paid.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="fade-in-up delay-200 flex flex-wrap justify-center gap-4 mb-12">
          {[
            'Reliable Delivery',
            'Expert Developers', 
            'Fast Turnaround',
            'No Coding Required',
            'Real Dev Team'
          ].map((feature, index) => (
            <div 
              key={feature}
              className={`px-6 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full text-sm hover-lift delay-${(index + 1) * 100}`}
            >
              {feature}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="px-8 py-6 text-lg cosmic-glow animate-pulse-glow">
            <a href="https://calendly.com/davidortiz-shay/30min" target="_blank" rel="noopener noreferrer">
              Book Your Call
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-lg cosmic-glow"
            onClick={() => scrollToSection('how-it-works')}
          >
            Learn More
          </Button>
        </div>

        {/* Floating Dev Team Visual */}
        <div className="fade-in-up delay-500 mt-16">
          <div className="relative max-w-md mx-auto">
            <div className="floating bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 cosmic-glow">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-cosmic rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Real Dev Team</h3>
                <p className="text-sm text-foreground/70">A professional team working behind the scenes on your behalf</p>
                <div className="mt-4 grid grid-cols-5 gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-primary rounded-full animate-twinkle" style={{animationDelay: `${i * 0.2}s`}}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;