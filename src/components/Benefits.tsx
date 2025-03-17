
import React from 'react';
import { Clock, TrendingUp, Users, Shield } from 'lucide-react';

const Benefits = () => {
  const metrics = [
    {
      icon: <Clock className="h-8 w-8" />,
      value: "73%",
      label: "Reduction in MTTR",
      description: "Faster issue resolution with AI-powered root cause analysis"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "47%",
      label: "Fewer incidents",
      description: "Proactive detection prevents issues before they occur"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "3.2x",
      label: "Team productivity",
      description: "Streamlined workflows and better collaboration"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      value: "92%",
      label: "Customer satisfaction",
      description: "Improved system reliability and faster issue resolution"
    }
  ];

  return (
    <div id="benefits" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-accent to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-echoPurple-500/10 to-echoBlue-500/10 border border-echoPurple-200 text-echoPurple-700 rounded-full">
            Business Impact
          </span>
          <h2 className="section-heading">
            Quantifiable benefits for
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-echoPurple-600 to-echoBlue-600">
              your organization
            </span>
          </h2>
          <p className="section-subheading mt-6">
            EchoSysAI delivers measurable improvements to your system reliability, team productivity,
            and customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="feature-card text-center hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-echoPurple-100 to-echoBlue-100 rounded-full mb-6">
                <div className="bg-gradient-to-r from-echoPurple-500 to-echoBlue-500 p-2 rounded-full text-white">
                  {metric.icon}
                </div>
              </div>
              
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-echoPurple-600 to-echoBlue-600">
                {metric.value}
              </div>
              
              <div className="mt-2 font-medium text-foreground/90">{metric.label}</div>
              
              <div className="mt-3 text-sm text-foreground/70">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-card rounded-xl p-8 bg-gradient-to-r from-echoPurple-500/5 to-echoBlue-500/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold">The bottom line</h3>
              <p className="mt-4 text-foreground/70">
                Our customers report significant ROI within the first three months of implementing EchoSysAI.
              </p>
            </div>
            
            <div className="md:col-span-2 flex flex-col md:flex-row justify-between">
              <div className="text-center mb-8 md:mb-0">
                <div className="text-3xl font-bold text-echoPurple-600">$580K</div>
                <div className="text-sm text-foreground/70 mt-2">Average annual savings</div>
              </div>
              
              <div className="text-center mb-8 md:mb-0">
                <div className="text-3xl font-bold text-echoBlue-600">267%</div>
                <div className="text-sm text-foreground/70 mt-2">Average ROI</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-echoPurple-600">3.4</div>
                <div className="text-sm text-foreground/70 mt-2">Month payback period</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
