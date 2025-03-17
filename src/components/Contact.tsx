
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Contact = () => {
  return (
    <div id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-echoPurple-500/5 to-echoBlue-500/5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-xl overflow-hidden border border-white/20 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Section */}
            <div className="bg-gradient-to-br from-echoPurple-600 to-echoBlue-600 p-12 text-white">
              <h2 className="text-3xl font-bold">Ready to transform your system monitoring?</h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Join hundreds of innovative teams using EchoSysAI to improve system reliability,
                team productivity, and customer satisfaction.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Schedule a live demo</h3>
                    <p className="mt-1 text-sm text-white/70">
                      See EchoSysAI in action with a personalized demo for your team.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Start your free trial</h3>
                    <p className="mt-1 text-sm text-white/70">
                      Try EchoSysAI free for 14 days with full access to all features.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Seamless onboarding</h3>
                    <p className="mt-1 text-sm text-white/70">
                      Our team will help you get set up and running in no time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Section */}
            <div className="p-12">
              <h3 className="text-2xl font-bold">Get in touch</h3>
              <p className="mt-2 text-foreground/70">
                Fill out the form to schedule a demo or start your free trial.
              </p>
              
              <form className="mt-8 space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground/80 mb-1">
                        First name
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground/80 mb-1">
                        Last name
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                      Work email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground/80 mb-1">
                      Company
                    </label>
                    <Input 
                      id="company" 
                      placeholder="Acme Inc." 
                      className="w-full"
                    />
                  </div>
                </div>
                
                <Button className="w-full py-6 bg-gradient-to-r from-echoPurple-600 to-echoBlue-600 shadow-button hover:opacity-90 transition-all button-shine-effect text-base">
                  Schedule a Demo
                </Button>
                
                <p className="text-xs text-center text-foreground/50">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="underline">Terms of Service</a> and{" "}
                  <a href="#" className="underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
