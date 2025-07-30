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
      answer: "We'll help you build one from scratch — no problem."
    },
    {
      question: "How do I get paid?",
      answer: "We split earnings from every project closed through your profile. All payments are tracked and sent transparently."
    },
    {
      question: "Can I talk to someone who's already doing this?",
      answer: "Absolutely - ask and we'll share examples or even connect you with one of our partners."
    },
    {
      question: "What kind of projects do you handle?",
      answer: "We handle a wide range of web and mobile development projects, including websites, web applications, e-commerce stores, and more."
    },
    {
      question: "How much time do I need to commit?",
      answer: "Most of our partners spend between 5-10 hours per week, primarily for simple communications and occasional client calls."
    },
    {
      question: "What if I have some technical knowledge already?",
      answer: "That's great! Your existing knowledge can help with client interactions, but it's not required. Our team handles all technical aspects regardless."
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