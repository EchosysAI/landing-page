
import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "EchoSysAI completely transformed our LLM operations workflow. We're now catching model degradation issues before they impact users, and our AI team collaboration has never been better.",
    author: "Sarah Johnson",
    title: "VP of AI, CloudNative Solutions"
  },
  {
    quote: "The integration with our Slack and GitHub Issues made adoption seamless. The AI-powered root cause analysis has reduced our MTTR for model incidents by over 60%.",
    author: "Michael Chen",
    title: "AI Operations Lead, TechForward"
  },
  {
    quote: "As a smaller AI team, we needed a solution to help us manage our growing LLM infrastructure. EchoSysAI gives us enterprise-level monitoring without the enterprise-level complexity.",
    author: "Emily Rodriguez",
    title: "ML Engineering Manager, GrowthStartup"
  },
  {
    quote: "We've been able to automate 80% of our AI incident response process, allowing our engineers to focus on building better models instead of fighting fires.",
    author: "David Kim",
    title: "VP of AI Engineering, DataFlow"
  },
  {
    quote: "The pattern recognition capabilities for LLM outputs are impressive. It found recurring issues in our RAG pipeline we had missed for months, leading to significant reliability improvements.",
    author: "Jessica Wong",
    title: "AI Reliability Lead, CloudServices Inc"
  },
  {
    quote: "After implementing EchoSysAI, we've seen a 45% reduction in time spent on manual LLM evaluation. It's been transformative for our small AI DevOps team.",
    author: "Thomas Martinez",
    title: "AI Platform Engineer, InnovateTech"
  },
  {
    quote: "I was skeptical about another AI management tool, but EchoSysAI has proven its worth. The automated anomaly detection in our LLM responses has saved us countless hours.",
    author: "Alex Thompson",
    title: "AI Engineering Director, FutureStack"
  },
  {
    quote: "The GitHub integration for our AI model versioning is seamless. Having our issues automatically synced with our sprint board has improved visibility across AI and product teams.",
    author: "Lisa Cooper",
    title: "AI Product Manager, BuildFast"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="glass-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow mx-2 my-2 flex-shrink-0 w-[280px]">
    {/* Quote */}
    <p className="text-foreground/80 italic text-xs">
      "{testimonial.quote}"
    </p>
    
    {/* Author */}
    <div className="mt-3 pt-3 border-t border-foreground/10">
      <p className="font-medium text-xs">{testimonial.author}</p>
      <p className="text-xs text-foreground/60">{testimonial.title}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll animation
    const animateScroll = () => {
      if (row1Ref.current && row2Ref.current) {
        row1Ref.current.scrollLeft += 1;
        row2Ref.current.scrollLeft -= 1;

        // Reset when scroll reaches the end (create infinite loop effect)
        if (row1Ref.current.scrollLeft >= (row1Ref.current.scrollWidth - row1Ref.current.clientWidth)) {
          row1Ref.current.scrollLeft = 0;
        }
        if (row2Ref.current.scrollLeft <= 0) {
          row2Ref.current.scrollLeft = row2Ref.current.scrollWidth - row2Ref.current.clientWidth;
        }
      }
    };

    const scrollInterval = setInterval(animateScroll, 30);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div id="testimonials" className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-accent/30">
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-gradient-radial from-echoPurple-400/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-1/4 h-1/4 bg-gradient-radial from-echoBlue-400/10 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-echoPurple-500/10 to-echoBlue-500/10 border border-echoPurple-200 text-echoPurple-700 rounded-full">
            Testimonials
          </span>
          <h2 className="section-heading">
            Trusted by innovative
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-echoPurple-600 to-echoBlue-600">
              AI teams worldwide
            </span>
          </h2>
          <p className="section-subheading mt-4">
            Hear from our customers who have transformed their AI system monitoring
            and issue resolution processes with EchoSysAI.
          </p>
        </div>
        
        {/* Moving testimonials - Row 1 (left to right) */}
        <div className="relative mb-6 overflow-hidden">
          <div 
            ref={row1Ref}
            className="flex overflow-x-hidden py-3"
            style={{ width: 'calc(100% + 40px)', marginLeft: '-20px', marginRight: '-20px' }}
          >
            {/* Duplicate testimonials to create seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
        
        {/* Moving testimonials - Row 2 (right to left) */}
        <div className="relative overflow-hidden">
          <div 
            ref={row2Ref}
            className="flex overflow-x-hidden py-3"
            style={{ width: 'calc(100% + 40px)', marginLeft: '-20px', marginRight: '-20px' }}
          >
            {/* Duplicate testimonials in reverse order to create seamless loop */}
            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
        
        <div className="mt-12 glass-card rounded-xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-echoPurple-500/5 to-echoBlue-500/5"></div>
          
          <div className="relative">
            <h3 className="text-xl font-bold">Join hundreds of innovative AI teams</h3>
            <p className="mt-3 text-foreground/70 max-w-2xl mx-auto text-sm">
              From AI startups to enterprise LLM operations, EchoSysAI is helping teams around the world
              improve their AI system reliability and team productivity.
            </p>
            
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <div className="inline-block px-3 py-1.5 rounded-full bg-white shadow-sm border border-foreground/10">
                <span className="font-medium text-xs text-foreground/80">98% retention rate</span>
              </div>
              <div className="inline-block px-3 py-1.5 rounded-full bg-white shadow-sm border border-foreground/10">
                <span className="font-medium text-xs text-foreground/80">4.9/5 average rating</span>
              </div>
              <div className="inline-block px-3 py-1.5 rounded-full bg-white shadow-sm border border-foreground/10">
                <span className="font-medium text-xs text-foreground/80">200+ active AI teams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
