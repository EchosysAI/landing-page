
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const ComparisonSection = () => {
  const beforePoints = [
    "Hours spent manually searching through logs",
    "Reactive approach to system issues",
    "Siloed information across multiple tools",
    "Delayed response to critical issues",
    "Disconnected communication between teams",
    "Limited visibility into system health"
  ];

  const afterPoints = [
    "Intelligent log analysis with pattern recognition",
    "Proactive anomaly detection with early warnings",
    "Unified platform integrating all your tools",
    "Immediate alerts with root cause analysis",
    "Seamless collaboration via Slack and sprint board",
    "Comprehensive dashboards with real-time insights"
  ];

  return (
    <div className="py-24 relative overflow-hidden bg-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-echoPurple-500/10 to-echoBlue-500/10 border border-echoPurple-200 text-echoPurple-700 rounded-full">
            Before & After
          </span>
          <h2 className="section-heading">
            Transform your
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-echoPurple-600 to-echoBlue-600">
              system monitoring experience
            </span>
          </h2>
          <p className="section-subheading mt-6">
            See how EchoSysAI revolutionizes the way your team handles system monitoring,
            anomaly detection, and issue resolution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Before Column */}
          <div className="glass-card rounded-xl p-8 border border-red-200 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full border border-red-200 shadow-sm">
              <h3 className="text-lg font-bold text-red-500">Before EchoSysAI</h3>
            </div>
            
            <ul className="space-y-4 mt-6">
              {beforePoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="flex-shrink-0 h-6 w-6 text-red-500 mr-3" />
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-100">
              <p className="text-foreground/70 text-sm italic">
                "We spent hours sifting through logs every time an issue occurred, and by the time we identified the root cause, our users were already impacted."
              </p>
              <p className="mt-2 text-sm font-medium">— DevOps Engineer at a tech company</p>
            </div>
          </div>
          
          {/* After Column */}
          <div className="glass-card rounded-xl p-8 border border-green-200 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full border border-green-200 shadow-sm">
              <h3 className="text-lg font-bold text-green-500">With EchoSysAI</h3>
            </div>
            
            <ul className="space-y-4 mt-6">
              {afterPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500 mr-3" />
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-foreground/70 text-sm italic">
                "EchoSysAI alerts us to potential issues before they impact users, and the root cause analysis helps us resolve problems in minutes instead of hours."
              </p>
              <p className="mt-2 text-sm font-medium">— CTO of a SaaS company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
