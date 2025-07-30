import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What if I don't have a strong profile?",
      answer: "No problem! We'll help you build a compelling freelance profile from scratch. Our team knows exactly what clients look for and will optimize your profile to attract high-quality projects. We handle the profile creation, portfolio development, and positioning strategy."
    },
    {
      question: "How do I get paid?",
      answer: "Payments come directly from clients to you, just like any normal freelance work. We agree on a percentage split upfront, and you keep the majority. Typical splits range from 60-80% to you, depending on your involvement level. You handle your own invoicing and maintain full control of client relationships."
    },
    {
      question: "Can I talk to someone who's already doing this?",
      answer: "Absolutely! We can connect you with current partners who are happy to share their experience. During your strategy call, we can arrange a brief conversation with someone in a similar situation to yours. This helps you understand the day-to-day reality and earnings potential."
    },
    {
      question: "What kind of projects do you handle?",
      answer: "We specialize in web development, mobile apps, SaaS platforms, e-commerce sites, and custom software solutions. Our team covers frontend, backend, full-stack development, and can handle projects ranging from simple websites to complex enterprise applications. We focus on projects that match your profile's positioning."
    },
    {
      question: "How much time do I need to commit?",
      answer: "Most partners spend 5-10 hours per week. This includes approving proposals, joining client calls (when needed), and staying updated on project progress. You're not doing any coding or technical work - just maintaining client relationships and providing the 'face' of the business."
    },
    {
      question: "What if I have some technical knowledge already?",
      answer: "Even better! Partners with technical backgrounds often earn more because they can handle more complex client conversations and position themselves for higher-value projects. Your existing knowledge becomes a competitive advantage, and our team handles the actual implementation while you focus on strategy and client relationships."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Get answers to common questions about how TechFusion works
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="fade-in-up bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 cosmic-glow">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/30">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Who's a Good Fit Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="fade-in-up delay-200 text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Who's a Good Fit?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in-up delay-300 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 cosmic-glow">
              <h4 className="text-xl font-semibold mb-4 text-primary">Requirements:</h4>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>US-based (or convincingly US-based online)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Have (or open to building) a freelance profile</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>OK being the "face" while we do the work</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Can respond to basic messages or calls when needed</span>
                </li>
              </ul>
            </div>

            <div className="fade-in-up delay-400 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 cosmic-glow">
              <h4 className="text-xl font-semibold mb-4 text-accent">What You Need:</h4>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You don't need any tech skills. You just need to be reliable, communicative, and open to earning.
              </p>
              <div className="text-center">
                <div className="text-lg font-semibold text-primary mb-2">
                  "You focus on showing up."
                </div>
                <div className="text-md text-foreground/70">
                  We'll handle everything in the shadows. 🕶️
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;