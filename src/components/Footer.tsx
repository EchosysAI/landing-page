
import React from 'react';
import { Twitter, Facebook, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-echoPurple-600 to-echoBlue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-echoPurple-600 to-echoBlue-600">
                EchoSysAI
              </span>
            </div>
            
            <p className="mt-4 text-foreground/70 max-w-md">
              Transforming system monitoring with AI-powered analysis, anomaly detection, 
              and collaborative issue resolution.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-echoBlue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-echoBlue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-echoBlue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-echoBlue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Changelog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">About</a></li>
              <li><a href="#testimonials" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Customers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Terms</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Security</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-echoPurple-600 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60">
              &copy; {new Date().getFullYear()} EchoSysAI. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-foreground/60">
                Designed with precision. Built with excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
