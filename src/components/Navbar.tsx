
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-echoPurple-600 to-echoBlue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-echoPurple-600 to-echoBlue-600">
            EchoSysAI
          </span>
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#process" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Testimonials
          </a>
          <Button
            className="ml-4 bg-gradient-to-r from-echoPurple-600 to-echoBlue-600 shadow-button hover:opacity-90 transition-all button-shine-effect"
          >
            Get Started
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground/90"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <a 
            href="#features" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#process" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#testimonials" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button 
            className="bg-gradient-to-r from-echoPurple-600 to-echoBlue-600 shadow-button w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
