
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Database, 
  GitPullRequest, 
  CheckCircle,
  BrainCircuit,
  Workflow,
  Zap
} from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.intersection-reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-echoPurple-400/20 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-echoBlue-400/20 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - text content */}
          <div className="space-y-8">
            <div className="intersection-reveal from-bottom">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-gradient-to-r from-echoPurple-500/10 to-echoBlue-500/10 border border-echoPurple-200 text-echoPurple-700 rounded-full">
                Introducing EchoSysAI
              </span>
              <h1 className="section-heading leading-tight">
                <span className="block">Revolutionizing AI Ops with</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-echoPurple-600 to-echoBlue-600">
                  Seamless Log-to-Ticket Automation
                </span>
              </h1>
              <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
                Unlock efficiency in AI development with EchoSysAI. Simplify the lifecycle of LLMs and AI agents by automating log analysis, error detection, and ticket creation. Say goodbye to manual workflows and hello to streamlined operations.
              </p>
              <p className="mt-4 text-foreground/70">
                <span className="text-echoPurple-600 font-medium">Built for AI teams by AI teams</span> with specialized 
                agents for AI system monitoring and operational excellence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 intersection-reveal from-bottom">
              <Button className="px-6 py-6 bg-gradient-to-r from-echoPurple-600 to-echoBlue-600 shadow-button hover:opacity-90 transition-all button-shine-effect text-base">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-6 py-6 border-echoPurple-200 text-base">
                Book a Demo
              </Button>
            </div>
          </div>
          
          {/* Right column - AIOps dashboard preview */}
          <div className="lg:ml-auto intersection-reveal from-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-echoPurple-400/10 to-echoBlue-400/10 rounded-xl blur-xl transform scale-95 translate-y-4"></div>
              <div className="glass-card rounded-xl shadow-card overflow-hidden border border-white/20 relative">
                <div className="h-8 bg-slate-100 flex items-center px-4 space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 text-xs text-slate-500">EchoSysAI | AI Ops Dashboard</div>
                </div>
                <div className="grid grid-cols-12 gap-3 p-4 bg-gray-50/80">
                  {/* Sidebar */}
                  <div className="col-span-3 bg-white shadow-sm rounded-lg p-3 flex flex-col h-[420px]">
                    <div className="text-sm font-medium mb-3 text-gray-700">Operations</div>
                    <div className="space-y-2 overflow-auto flex-1">
                      {[
                        { name: 'Log Ingestion', icon: <Database className="w-4 h-4" /> },
                        { name: 'Incident Tracking', icon: <Workflow className="w-4 h-4" /> },
                        { name: 'Automated Tickets', icon: <GitPullRequest className="w-4 h-4" /> },
                        { name: 'Resolution Center', icon: <CheckCircle className="w-4 h-4" /> },
                        { name: 'AI Agent Health', icon: <BrainCircuit className="w-4 h-4" /> },
                        { name: 'Performance Boost', icon: <Zap className="w-4 h-4" /> },
                      ].map((agent, idx) => (
                        <div key={idx} className={`flex items-center space-x-2 p-2 rounded text-xs ${idx === 2 ? 'bg-echoPurple-100 text-echoPurple-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                          {agent.icon}
                          <span>{agent.name}</span>
                          {idx === 2 && <span className="ml-auto px-1.5 py-0.5 rounded-full bg-echoPurple-500/20 text-echoPurple-700 text-[10px]">Active</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="col-span-9 space-y-3">
                    {/* Top stats */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'AI System Logs Processed', value: '5.8M', change: '+22%', icon: <Database className="w-4 h-4" /> },
                        { label: 'Automated Tickets', value: '217', change: '+35%', icon: <GitPullRequest className="w-4 h-4" /> },
                        { label: 'Avg. Resolution Time', value: '1.4h', change: '-42%', icon: <CheckCircle className="w-4 h-4" /> },
                      ].map((stat, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="flex justify-between items-center">
                            <div className="text-xs text-gray-500">{stat.label}</div>
                            <div className="text-echoPurple-600">{stat.icon}</div>
                          </div>
                          <div className="flex items-baseline mt-1">
                            <div className="text-xl font-semibold">{stat.value}</div>
                            <div className={`ml-2 text-xs ${stat.change.startsWith('+') ? 'text-green-500' : 'text-amber-500'}`}>
                              {stat.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Operational Workflow Visualization */}
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium text-gray-700">Log-to-Ticket Automation</div>
                        <div className="flex items-center gap-1 text-xs text-echoPurple-600">
                          <span>Fully Automated</span>
                          <CheckCircle className="w-3 h-3" />
                        </div>
                      </div>
                      <div className="h-32 relative">
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                          {/* Log-to-Ticket Pipeline Visualization */}
                          <div className="flex items-center w-full justify-between">
                            {/* Step 1: Log Collection */}
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-10 h-10 rounded-full bg-echoPurple-100 flex items-center justify-center">
                                <Database className="h-5 w-5 text-echoPurple-600" />
                              </div>
                              <div className="text-xs text-gray-600">AI System Logs</div>
                            </div>
                            
                            {/* Arrow */}
                            <div className="h-0.5 w-12 bg-gradient-to-r from-echoPurple-300 to-echoPurple-400"></div>
                            
                            {/* Step 2: Analysis */}
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-10 h-10 rounded-full bg-echoPurple-100 flex items-center justify-center">
                                <BrainCircuit className="h-5 w-5 text-echoPurple-600" />
                              </div>
                              <div className="text-xs text-gray-600">AI Analysis</div>
                            </div>
                            
                            {/* Arrow */}
                            <div className="h-0.5 w-12 bg-gradient-to-r from-echoPurple-400 to-echoBlue-400"></div>
                            
                            {/* Step 3: Ticket Creation */}
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-10 h-10 rounded-full bg-echoBlue-100 flex items-center justify-center">
                                <GitPullRequest className="h-5 w-5 text-echoBlue-600" />
                              </div>
                              <div className="text-xs text-gray-600">Ticket Creation</div>
                            </div>
                            
                            {/* Arrow */}
                            <div className="h-0.5 w-12 bg-gradient-to-r from-echoBlue-400 to-echoBlue-500"></div>
                            
                            {/* Step 4: Resolution */}
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-10 h-10 rounded-full bg-echoBlue-100 flex items-center justify-center">
                                <CheckCircle className="h-5 w-5 text-echoBlue-600" />
                              </div>
                              <div className="text-xs text-gray-600">Quick Resolution</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Active Incidents */}
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium text-gray-700">Recent Automations</div>
                        <div className="text-xs text-echoPurple-600">View all</div>
                      </div>
                      <div className="space-y-2">
                        <div className="p-2 bg-red-50 rounded border-l-2 border-red-500 text-xs">
                          <div className="font-medium text-red-700">AI System Error: Production API Gateway</div>
                          <div className="text-gray-500 mt-1 flex justify-between">
                            <span>Ticket #T-2341 created</span>
                            <span>13m ago</span>
                          </div>
                        </div>
                        <div className="p-2 bg-amber-50 rounded border-l-2 border-amber-500 text-xs">
                          <div className="font-medium text-amber-700">AI Agent Performance Degradation</div>
                          <div className="text-gray-500 mt-1 flex justify-between">
                            <span>Ticket #T-2340 created</span>
                            <span>28m ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
