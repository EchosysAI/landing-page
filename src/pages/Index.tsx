
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import DemoVideo from '@/components/DemoVideo';
import Features from '@/components/Features';
import ToolsIntegration from '@/components/ToolsIntegration';
import AgentSection from '@/components/AgentSection';
import ProcessFlow from '@/components/ProcessFlow';
import ComparisonSection from '@/components/ComparisonSection';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Initialize intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.intersection-reveal');
    elements.forEach((el) => observer.observe(el));

    // Show/hide scroll button based on scroll position
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <TrustedBy />
      <DemoVideo />
      <Features />
      <ToolsIntegration />
      <AgentSection />
      <ProcessFlow />
      <ComparisonSection />
      <Benefits />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 z-50 p-3 rounded-full bg-gradient-to-r from-echoPurple-600 to-echoBlue-600 text-white shadow-lg transition-all duration-300 ${
          showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Index;
