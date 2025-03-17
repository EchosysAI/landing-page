
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit, Activity, MessageSquareText, BarChart2, Database, Bug } from "lucide-react";

const features = [
  {
    id: "model-monitoring",
    title: "LLM Monitoring",
    description: "Comprehensive monitoring of your LLMs with real-time metrics tracking, performance analytics, and anomaly detection.",
    icon: <BrainCircuit className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=90&w=1400",
    bullets: [
      "Real-time LLM response quality monitoring",
      "Model drift detection across multiple deployments",
      "Detailed performance metrics by model version",
      "Custom alerting based on model-specific thresholds"
    ],
    dashboard: {
      title: "Model Monitoring Dashboard",
      stats: [
        { label: "Model Requests", value: "2.4M", change: "+18%" },
        { label: "Avg Latency", value: "910ms", change: "-5%" },
        { label: "Error Rate", value: "0.3%", change: "-0.1%" }
      ],
      alerts: [
        { type: "warning", message: "Hallucination increase detected in RAG pipeline", time: "15m ago" }
      ]
    }
  },
  {
    id: "anomaly-detection",
    title: "Anomaly Detection",
    description: "AI-powered anomaly detection for LLMs that identifies unusual patterns in responses, latency, and other key metrics.",
    icon: <Activity className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=90&w=1400",
    bullets: [
      "ML-based anomaly detection for LLM outputs",
      "Statistical analysis of response time variations",
      "Pattern recognition in model behavior",
      "Early warning system for model degradation"
    ],
    dashboard: {
      title: "Anomaly Detection Dashboard",
      stats: [
        { label: "Anomalies Detected", value: "12", change: "-4" },
        { label: "False Positives", value: "2", change: "-3" },
        { label: "MTTR", value: "28m", change: "-33%" }
      ],
      alerts: [
        { type: "critical", message: "GPT-4 response quality degraded in finance domain", time: "8m ago" }
      ]
    }
  },
  {
    id: "log-analysis",
    title: "AI Log Analysis",
    description: "Advanced log analysis tools specifically designed for LLM and agent logs, with AI-powered insights and filtering.",
    icon: <Database className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=90&w=1400",
    bullets: [
      "Specialized LLM prompt-response log analysis",
      "Automated tagging of problematic interactions",
      "Context-aware log filtering and search",
      "Historical trend analysis for model behavior"
    ],
    dashboard: {
      title: "LLM Log Analysis Dashboard",
      stats: [
        { label: "Logs Processed", value: "5.6M", change: "+22%" },
        { label: "Tagged Issues", value: "84", change: "+7" },
        { label: "Critical Logs", value: "12", change: "-3" }
      ],
      alerts: [
        { type: "info", message: "New log pattern identified in query processing", time: "42m ago" }
      ]
    }
  },
  {
    id: "incident-management",
    title: "AI Incident Management",
    description: "Streamlined incident management for AI systems with automated ticket creation, assignment, and resolution tracking.",
    icon: <Bug className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=90&w=1400",
    bullets: [
      "Automated incident creation from model anomalies",
      "AI-powered root cause analysis suggestions",
      "Integration with GitHub Issues and Jira",
      "Team-specific routing based on model domains"
    ],
    dashboard: {
      title: "LLM Incident Management Dashboard",
      stats: [
        { label: "Active Incidents", value: "5", change: "-2" },
        { label: "Resolved Today", value: "8", change: "+3" },
        { label: "Avg Resolution", value: "3.2h", change: "-18%" }
      ],
      alerts: [
        { type: "success", message: "Resolved: Claude model latency spike in EU region", time: "1h ago" }
      ]
    }
  },
  {
    id: "evaluation",
    title: "LLM Evaluation",
    description: "Comprehensive evaluation tools for assessing LLM performance across multiple dimensions and metrics.",
    icon: <BarChart2 className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=90&w=1400",
    bullets: [
      "Automated evaluation of model performance",
      "Customizable evaluation frameworks and rubrics",
      "A/B testing for model versions and prompts",
      "Custom evaluation datasets and benchmarks"
    ],
    dashboard: {
      title: "LLM Evaluation Dashboard",
      stats: [
        { label: "Models Evaluated", value: "5", change: "+1" },
        { label: "Eval Runs", value: "124", change: "+22" },
        { label: "Benchmark Score", value: "87.3%", change: "+1.4%" }
      ],
      alerts: [
        { type: "warning", message: "New model version showing regression on factuality tests", time: "35m ago" }
      ]
    }
  }
];

const Features = () => {
  return (
    <div id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-echoPurple-500/10 to-echoBlue-500/10 border border-echoPurple-200 text-echoPurple-700 rounded-full">
            Key Features
          </span>
          <h2 className="section-heading">
            Everything AI teams need for
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-echoPurple-600 to-echoBlue-600">
              modern LLM operations
            </span>
          </h2>
          <p className="section-subheading mt-6">
            EchoSysAI combines powerful monitoring, intelligent analysis, and collaborative tools
            to give your AI team complete visibility and control of your language models.
          </p>
        </div>
        
        <Tabs defaultValue="model-monitoring" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full max-w-3xl bg-muted/50">
              {features.map((feature) => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className="text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-echoPurple-500 data-[state=active]:to-echoBlue-500 data-[state=active]:text-white"
                >
                  <div className="flex flex-col items-center md:flex-row md:space-x-2">
                    <span className="hidden md:block">{feature.icon}</span>
                    <span>{feature.title.split(' ')[0]}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {features.map((feature) => (
            <TabsContent 
              key={feature.id} 
              value={feature.id}
              className="animate-fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-gradient-to-r from-echoPurple-500/20 to-echoBlue-500/20">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-echoPurple-500 to-echoBlue-500 flex items-center justify-center">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-echoPurple-400/10 to-echoBlue-400/10 rounded-xl blur-xl transform scale-95 translate-y-4"></div>
                    <div className="glass-card rounded-xl overflow-hidden border border-white/20 shadow-card">
                      {/* Feature Dashboard Preview */}
                      <div className="p-4 border-b border-gray-200 bg-white flex justify-between items-center">
                        <div className="text-sm font-medium">{feature.dashboard.title}</div>
                        <div className="flex space-x-2">
                          <span className="inline-block px-2 py-1 rounded-md bg-gray-100 text-xs">Today</span>
                          <span className="inline-block px-2 py-1 rounded-md bg-echoPurple-100 text-echoPurple-700 text-xs">Live</span>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {feature.dashboard.stats.map((stat, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                              <div className="text-xs text-gray-500">{stat.label}</div>
                              <div className="flex items-baseline mt-1">
                                <div className="text-lg font-semibold">{stat.value}</div>
                                <div className={`ml-2 text-xs ${stat.label.includes('Rate') || stat.label.includes('MTTR') || stat.label.includes('Anomalies') || stat.label.includes('False') ? 
                                  (stat.change.startsWith('-') ? 'text-green-500' : 'text-amber-500') : 
                                  (stat.change.startsWith('+') ? 'text-green-500' : 'text-amber-500')}`}>
                                  {stat.change}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Graph Placeholder */}
                        <div className="h-32 bg-gray-50 rounded-lg border border-gray-100 mb-4 flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full flex items-end px-2 pt-2">
                            {Array.from({ length: 24 }).map((_, i) => {
                              const height = 20 + Math.random() * 60;
                              return (
                                <div key={i} className="flex-1 mx-px">
                                  <div 
                                    className={`mx-auto ${i === 14 ? 'bg-echoPurple-500' : 'bg-blue-100'} rounded-t-sm`}
                                    style={{ height: `${height}%`, width: '80%' }}
                                  ></div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        
                        {/* Alerts */}
                        <div className="space-y-2">
                          {feature.dashboard.alerts.map((alert, idx) => (
                            <div key={idx} className={`p-2 rounded text-xs border-l-2 ${
                              alert.type === 'critical' ? 'bg-red-50 border-red-500 text-red-700' :
                              alert.type === 'warning' ? 'bg-amber-50 border-amber-500 text-amber-700' :
                              alert.type === 'success' ? 'bg-green-50 border-green-500 text-green-700' :
                              'bg-blue-50 border-blue-500 text-blue-700'
                            }`}>
                              <div className="font-medium">{alert.message}</div>
                              <div className="text-gray-500 mt-1 text-right">{alert.time}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Features;
