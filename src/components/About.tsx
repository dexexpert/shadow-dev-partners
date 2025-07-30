const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              What Is TechFusion?
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              TechFusion is a remote dev agency that partners with US-based professionals to turn their LinkedIn, Upwork, Outlier, or freelance profiles into consistent revenue — without you needing to do any dev work yourself.
            </p>
            <div className="text-xl text-accent font-semibold mb-8">
              This isn't a course. It's not coaching.<br/>
              It's a real team doing real work under your name — and you get paid for it.
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="fade-in-up delay-100 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover-lift cosmic-glow">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero Time Investment</h3>
              <p className="text-foreground/70">Our partners spend as little as 5 hours/week managing their freelance income</p>
            </div>

            <div className="fade-in-up delay-200 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover-lift cosmic-glow">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-foreground/70">Our developers deliver high-quality work that maintains your professional reputation</p>
            </div>

            <div className="fade-in-up delay-300 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover-lift cosmic-glow">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fully Managed</h3>
              <p className="text-foreground/70">We handle everything from client communication to project delivery on your behalf</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;