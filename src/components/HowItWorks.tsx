const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "You provide a freelance profile",
      description: "(LinkedIn, Upwork, Fiverr, etc.) Or we help you build one from scratch."
    },
    {
      number: "2", 
      title: "We optimize your profile",
      description: "We'll improve your headline, portfolio, and messaging to attract clients."
    },
    {
      number: "3",
      title: "We handle the outreach", 
      description: "Our team sends proposals, replies to messages, and books client calls — all under your name."
    },
    {
      number: "4",
      title: "Client call? No stress.",
      description: "If a client asks for a video call, our devs join as your \"technical partners.\" You don't need to explain anything — we handle the technical side."
    },
    {
      number: "5",
      title: "We close the deal & do the work",
      description: "Our team builds the project. You sit back and earn a cut of every project we deliver."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            How It Works
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Our simple 5-step process gets you earning with minimal time investment
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`fade-in-up delay-${index * 100} flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 last:mb-0`}
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center text-2xl font-bold text-white star-glow">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover-lift cosmic-glow">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-8 mt-20 w-0.5 h-12 bg-gradient-cosmic opacity-50"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="fade-in-up delay-500 bg-card/20 backdrop-blur-sm border border-border/50 rounded-2xl p-8 cosmic-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Start Earning?</h3>
            <p className="text-foreground/70 mb-6">
              Join our network of successful partners who are earning while we handle the technical work.
            </p>
            <a 
              href="https://calendly.com/davidortiz-shay/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-cosmic text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 star-glow"
            >
              Schedule Your Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;