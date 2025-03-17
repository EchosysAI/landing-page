
import React from 'react';
import { CircleCheck, Code, Cpu, Terminal, Shield, RefreshCw } from 'lucide-react';

const ProcessFlow = () => {
  const steps = [
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Connect Your Systems",
      description: "Integrate with your Slack, log sources, and project management tools in minutes."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Automatic Log Analysis",
      description: "Our AI agent continuously analyzes logs to identify patterns and anomalies."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Proactive Alerts",
      description: "Get notified of potential issues before they impact your users."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Root Cause Analysis",
      description: "AI-powered insights help you quickly understand and resolve issues."
    },
    {
      icon: <CircleCheck className="h-6 w-6" />,
      title: "Collaborative Resolution",
      description: "Work together using our sprint board with integrated chat and GitHub Issues sync."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Continuous Improvement",
      description: "Learn from each incident to prevent similar issues in the future."
    }
  ];

  return (
    <div id="process" className="py-24 relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-echoPurple-500/10 to-echoBlue-500/10 border border-echoPurple-200 text-echoPurple-700 rounded-full">
            How It Works
          </span>
          <h2 className="section-heading">
            A streamlined process for
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-echoPurple-600 to-echoBlue-600">
              exceptional results
            </span>
          </h2>
          <p className="section-subheading mt-6">
            EchoSysAI simplifies system monitoring and issue resolution with an intelligent, 
            integrated workflow designed for modern DevOps teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="feature-card relative hover:translate-y-[-4px]">
              {/* Connecting line between cards */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-8 border-t-2 border-dashed border-echoPurple-200 z-10"></div>
              )}
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-echoPurple-500 to-echoBlue-500 flex items-center justify-center text-white mr-4">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-foreground/70 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 opacity-10 text-4xl font-bold text-echoPurple-500">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
