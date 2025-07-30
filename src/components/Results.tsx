const Results = () => {
  const testimonials = [
    {
      name: "Manucher",
      subtitle: "(non-tech)",
      platform: "LinkedIn",
      income: "$2,400",
      timeSpent: "~5 hr/week",
      quote: "I never thought I could earn from tech projects with zero coding skills. TechFusion made it possible.",
      delay: "100"
    },
    {
      name: "Adewole", 
      subtitle: "(ex-marketer)",
      platform: "Upwork, Outlier",
      income: "$6,800",
      timeSpent: "~8 hrs/week", 
      quote: "The team handles everything technical while I maintain client relationships. It's the perfect partnership.",
      delay: "200"
    },
    {
      name: "Josh",
      subtitle: "(designer)", 
      platform: "LinkedIn",
      income: "$10,300",
      timeSpent: "~10 hrs/week",
      quote: "My design background pairs perfectly with TechFusion's development capabilities. Together we're unstoppable.",
      delay: "300"
    }
  ];

  return (
    <section id="results" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Real Results
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            These are real profile owners. No coding, no stress — just smart passive income.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className={`fade-in-up delay-${testimonial.delay} bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover-lift cosmic-glow`}
            >
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-4">
                  {testimonial.subtitle}
                </p>
                <div className="text-sm text-foreground/60 mb-4">
                  {testimonial.platform}
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4 mb-6">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-sm text-foreground/60 mb-1">Monthly Income</div>
                  <div className="text-2xl font-bold text-primary">
                    {testimonial.income}
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-sm text-foreground/60 mb-1">Time Spent</div>
                  <div className="text-lg font-semibold text-accent">
                    {testimonial.timeSpent}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/80 text-center italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-16">
          <div className="fade-in-up delay-400 bg-card/20 backdrop-blur-sm border border-border/50 rounded-xl p-6 max-w-2xl mx-auto cosmic-glow">
            <h3 className="text-xl font-bold mb-4 gradient-text">
              Why TechFusion Is Safe & Professional
            </h3>
            <div className="space-y-3 text-foreground/80">
              <div className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>All client calls are joined by real devs from our team</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>You approve anything we send on your behalf</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>We only earn when you do — zero risk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;