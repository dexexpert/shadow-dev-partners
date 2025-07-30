import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-up bg-card/20 backdrop-blur-sm border border-border/50 rounded-2xl p-12 cosmic-glow">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Ready to Join TechFusion?
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                We only earn when you earn. Start your journey to freelance success without coding today.
              </p>
              <div className="text-accent font-semibold">
                No upfront fees • No subscriptions • Win-win partnership
              </div>
            </div>

            {/* Steps */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Here's what to do:
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-left">
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="w-8 h-8 bg-gradient-cosmic rounded-full flex items-center justify-center text-white font-bold mb-3">
                    1
                  </div>
                  <p className="text-sm text-foreground/80">
                    Send us your LinkedIn, Upwork, or freelance profile
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="w-8 h-8 bg-gradient-cosmic rounded-full flex items-center justify-center text-white font-bold mb-3">
                    2
                  </div>
                  <p className="text-sm text-foreground/80">
                    We optimize it + start outreach
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="w-8 h-8 bg-gradient-cosmic rounded-full flex items-center justify-center text-white font-bold mb-3">
                    3
                  </div>
                  <p className="text-sm text-foreground/80">
                    You approve any needed messages or calls
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="w-8 h-8 bg-gradient-cosmic rounded-full flex items-center justify-center text-white font-bold mb-3">
                    4
                  </div>
                  <p className="text-sm text-foreground/80">
                    We close projects → you get paid
                  </p>
                </div>
              </div>
              <div className="text-center mt-6 text-foreground/80 font-medium">
                It's that easy.
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-6 text-lg cosmic-glow animate-pulse-glow">
                <a href="https://calendly.com/davidortiz-shay/30min" target="_blank" rel="noopener noreferrer">
                  Book Your Call
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg cosmic-glow">
                <a href="mailto:davidortiz.shay@gmail.com">
                  DM Us to Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;