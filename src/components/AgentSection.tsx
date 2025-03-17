
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cpu, Terminal, Code, CircleCheck, RefreshCw, Shield, Database,
  FileSearch, PieChart, GitPullRequest, Users, MessageSquare, Bell,
  BarChart, Workflow, Zap, ListChecks, ArrowRightLeft
} from 'lucide-react';
import { Button } from './ui/button';

const agentCategories = [
  {
    id: "logging",
    title: "Log Management",
    description: "Collect, filter, and analyze logs from various sources",
    agents: [
      {
        name: "LogSync Agent",
        icon: <Terminal className="h-5 w-5" />,
        description: "Collects and normalizes logs from various sources",
        integrations: ["AWS CloudWatch", "Sumo Logic", "Google Cloud Logging", "OpenTelemetry"]
      },
      {
        name: "LogFilter Agent",
        icon: <FileSearch className="h-5 w-5" />,
        description: "Filters logs based on severity levels or keywords",
        integrations: ["AWS CloudWatch", "Sumo Logic", "Custom filtering rules"]
      }
    ]
  },
  {
    id: "anomalies",
    title: "Anomaly Detection",
    description: "Identify patterns and anomalies in your logs and systems",
    agents: [
      {
        name: "AnomalyDetect Agent",
        icon: <Shield className="h-5 w-5" />,
        description: "Identifies anomalies using AI/ML models and rule-based logic",
        integrations: ["GPT-4", "Internal anomaly detection engine"]
      },
      {
        name: "PatternInsight Agent",
        icon: <PieChart className="h-5 w-5" />,
        description: "Recognizes recurring patterns or systemic issues in logs",
        integrations: ["GPT-4", "Historical log database"]
      },
      {
        name: "RootCause Agent",
        icon: <Code className="h-5 w-5" />,
        description: "Performs root cause analysis on flagged anomalies",
        integrations: ["GPT-4", "AWS CloudWatch", "Sumo Logic"]
      }
    ]
  },
  {
    id: "tickets",
    title: "Ticket Management",
    description: "Automate ticket creation and assignment",
    agents: [
      {
        name: "TicketGen Agent",
        icon: <CircleCheck className="h-5 w-5" />,
        description: "Creates structured tickets with RCA details and fixes",
        integrations: ["Jira", "Asana", "Linear", "EchoSysAI Sprint Board"]
      },
      {
        name: "AssignBot Agent",
        icon: <Users className="h-5 w-5" />,
        description: "Assigns tickets based on roles or workload",
        integrations: ["Slack", "Jira", "Asana", "Linear"]
      },
      {
        name: "GitSync Agent",
        icon: <GitPullRequest className="h-5 w-5" />,
        description: "Syncs GitHub Issues with sprint board automatically",
        integrations: ["GitHub REST API", "EchoSysAI Sprint Board"]
      }
    ]
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: "Keep your team in sync with real-time updates",
    agents: [
      {
        name: "SlackSync Agent",
        icon: <RefreshCw className="h-5 w-5" />,
        description: "Manages Slack communication for real-time updates",
        integrations: ["Slack API", "Dedicated channels", "Query responses"]
      },
      {
        name: "SprintChat Agent",
        icon: <MessageSquare className="h-5 w-5" />,
        description: "Powers chat interface within sprint board",
        integrations: ["EchoSysAI Sprint Board", "Slack"]
      },
      {
        name: "NotifyPro Agent",
        icon: <Bell className="h-5 w-5" />,
        description: "Sends real-time updates for tasks and pipelines",
        integrations: ["Slack API", "Email systems", "In-app notifications"]
      }
    ]
  },
  {
    id: "pipelines",
    title: "Pipeline Monitoring",
    description: "Monitor CI/CD pipelines and get real-time updates",
    agents: [
      {
        name: "PipelineTrack Agent",
        icon: <Cpu className="h-5 w-5" />,
        description: "Monitors CI/CD pipeline stages and progress",
        integrations: ["Jenkins", "GitLab CI/CD", "GitHub Actions"]
      },
      {
        name: "FlowOptimizer Agent",
        icon: <Workflow className="h-5 w-5" />,
        description: "Analyzes workflows to identify inefficiencies",
        integrations: ["CI/CD metrics", "Performance analytics", "Workflow history"]
      }
    ]
  },
  {
    id: "feedback",
    title: "Feedback & Optimization",
    description: "Continuously improve your workflows and processes",
    agents: [
      {
        name: "FeedbackCollect Agent",
        icon: <BarChart className="h-5 w-5" />,
        description: "Gathers user feedback on resolved issues",
        integrations: ["Slack API", "EchoSysAI Dashboard", "Feedback forms"]
      },
      {
        name: "PrioritySetter Agent",
        icon: <ListChecks className="h-5 w-5" />,
        description: "Prioritizes tasks based on urgency and impact",
        integrations: ["Sprint Board", "Severity metrics", "Business impact analysis"]
      },
      {
        name: "CollabManager Agent",
        icon: <ArrowRightLeft className="h-5 w-5" />,
        description: "Coordinates interactions between agents",
        integrations: ["Internal agent communication system", "Task handoff protocol"]
      }
    ]
  }
];

const AgentSection = () => {
  const [activeCategory, setActiveCategory] = useState("logging");
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
  
  const toggleExpand = (agentName: string) => {
    if (expandedAgent === agentName) {
      setExpandedAgent(null);
    } else {
      setExpandedAgent(agentName);
    }
  };
  
  return (
    <div className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-accent/50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-echoPurple-400/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-echoBlue-400/10 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-echoPurple-500/10 to-echoBlue-500/10 border border-echoPurple-200 text-echoPurple-700 rounded-full">
            Meet Our Agents
          </span>
          <h2 className="section-heading">
            Powered by a team of
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-echoPurple-600 to-echoBlue-600">
              intelligent agents
            </span>
          </h2>
          <p className="section-subheading mt-6 max-w-3xl mx-auto">
            EchoSysAI leverages 16 specialized AI agents that work together 
            to monitor your systems, detect anomalies, and help your team resolve issues faster.
            Each agent integrates with the tools you already use.
          </p>
        </div>
        
        <Tabs defaultValue="logging" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 w-full max-w-5xl bg-muted/50">
              {agentCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-xs sm:text-sm whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-echoPurple-500 data-[state=active]:to-echoBlue-500 data-[state=active]:text-white"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {agentCategories.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="animate-fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="glass-card rounded-xl p-6 border border-white/20 h-full">
                    <div className="flex flex-col h-full">
                      <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                      <p className="text-foreground/70 mb-6">
                        {category.description}
                      </p>
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-3">Agents in this category:</h4>
                        <ul className="list-disc list-inside space-y-2 text-foreground/70">
                          {category.agents.map((agent) => (
                            <li key={agent.name} className="font-medium">
                              {agent.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-echoPurple-600 to-echoBlue-600 flex items-center justify-center text-white">
                          <span className="text-xl font-bold">AI</span>
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-echoPurple-700">Echo Command Center</div>
                          <div className="text-sm text-foreground/60">Orchestrating your agents</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    {category.agents.map((agent, index) => (
                      <div key={index} className={`glass-card rounded-xl p-6 border border-white/20 transition-all duration-300 ${expandedAgent === agent.name ? 'ring-2 ring-echoPurple-500/50' : 'hover:shadow-md'}`}>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-echoPurple-600 to-echoBlue-600 flex items-center justify-center text-white">
                                {agent.icon}
                              </div>
                            </div>
                            <div className="flex-grow">
                              <div className="flex justify-between items-start">
                                <h4 className="text-xl font-bold text-echoPurple-700">{agent.name}</h4>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => toggleExpand(agent.name)}
                                  className="text-xs text-echoPurple-700 hover:text-echoPurple-900"
                                >
                                  {expandedAgent === agent.name ? 'Show Less' : 'Show More'}
                                </Button>
                              </div>
                              <p className="text-foreground/70 mt-1">{agent.description}</p>
                            </div>
                          </div>
                          
                          <div className={`transition-all duration-300 overflow-hidden ${expandedAgent === agent.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="pt-4 border-t border-echoPurple-100">
                              <h5 className="text-sm font-semibold mb-3">How it works:</h5>
                              <p className="text-sm text-foreground/70 mb-4">
                                {agent.name === "LogSync Agent" && "Continuously monitors and collects logs from various sources, normalizing data formats for consistent analysis."}
                                {agent.name === "LogFilter Agent" && "Applies custom filtering rules to reduce noise and highlight important log entries based on severity or content."}
                                {agent.name === "AnomalyDetect Agent" && "Uses machine learning to detect unusual patterns or behaviors that may indicate potential issues."}
                                {agent.name === "PatternInsight Agent" && "Analyzes historical log data to identify recurring issues and systemic problems across your infrastructure."}
                                {agent.name === "RootCause Agent" && "Leverages GPT-4 to analyze anomalies and determine their root causes with actionable insights."}
                                {agent.name === "TicketGen Agent" && "Automatically creates well-structured tickets with detailed information about the issue and suggested fixes."}
                                {agent.name === "AssignBot Agent" && "Intelligently assigns tickets to team members based on expertise, availability, and workload."}
                                {agent.name === "GitSync Agent" && "Maintains bidirectional sync between GitHub Issues and your EchoSysAI Sprint Board."}
                                {agent.name === "SlackSync Agent" && "Creates and manages dedicated Slack channels for specific issues, keeping all communication organized."}
                                {agent.name === "SprintChat Agent" && "Enables real-time discussions within tickets on your sprint board, maintaining context for all conversations."}
                                {agent.name === "NotifyPro Agent" && "Delivers timely notifications about issue status changes, assignments, and updates."}
                                {agent.name === "PipelineTrack Agent" && "Monitors your CI/CD pipelines in real-time, tracking progress and detecting failures immediately."}
                                {agent.name === "FlowOptimizer Agent" && "Analyzes your development workflows to identify bottlenecks and suggest improvements."}
                                {agent.name === "FeedbackCollect Agent" && "Gathers feedback from team members about resolved issues to continuously improve processes."}
                                {agent.name === "PrioritySetter Agent" && "Evaluates issue severity, impact, and urgency to automatically prioritize your team's workload."}
                                {agent.name === "CollabManager Agent" && "Coordinates the handoff of tasks between different agents, ensuring smooth workflow transitions."}
                              </p>
                              
                              <h5 className="text-sm font-semibold mb-2">Benefits:</h5>
                              <ul className="list-disc list-inside space-y-1 text-sm text-foreground/70 mb-4">
                                {agent.name === "LogSync Agent" && (
                                  <>
                                    <li>Consolidates logs from multiple sources into a single view</li>
                                    <li>Standardizes log formats for consistent analysis</li>
                                    <li>Reduces time spent gathering log data manually</li>
                                  </>
                                )}
                                {agent.name === "LogFilter Agent" && (
                                  <>
                                    <li>Reduces noise in your log analysis</li>
                                    <li>Highlights critical errors and warnings</li>
                                    <li>Customizable filtering rules tailored to your needs</li>
                                  </>
                                )}
                                {agent.name === "AnomalyDetect Agent" && (
                                  <>
                                    <li>Proactively identifies potential issues before they affect users</li>
                                    <li>Reduces mean time to detection (MTTD)</li>
                                    <li>Continuously improves detection accuracy over time</li>
                                  </>
                                )}
                                {agent.name === "PatternInsight Agent" && (
                                  <>
                                    <li>Identifies recurring issues that need permanent fixes</li>
                                    <li>Highlights trends and patterns in system behavior</li>
                                    <li>Helps predict and prevent future problems</li>
                                  </>
                                )}
                                {agent.name === "RootCause Agent" && (
                                  <>
                                    <li>Reduces mean time to resolution (MTTR)</li>
                                    <li>Provides actionable insights for fixing issues</li>
                                    <li>Leverages GPT-4 for deep analysis of complex problems</li>
                                  </>
                                )}
                                {agent.name === "TicketGen Agent" && (
                                  <>
                                    <li>Automates the creation of well-structured tickets</li>
                                    <li>Ensures consistent documentation of issues</li>
                                    <li>Includes detailed context for faster resolution</li>
                                  </>
                                )}
                                {agent.name === "AssignBot Agent" && (
                                  <>
                                    <li>Ensures fair distribution of workload</li>
                                    <li>Matches issues with team members' expertise</li>
                                    <li>Reduces time spent on manual assignment</li>
                                  </>
                                )}
                                {agent.name === "GitSync Agent" && (
                                  <>
                                    <li>Eliminates duplicate issue tracking across systems</li>
                                    <li>Keeps GitHub Issues and sprint board in sync</li>
                                    <li>Reduces context switching between tools</li>
                                  </>
                                )}
                                {agent.name === "SlackSync Agent" && (
                                  <>
                                    <li>Creates dedicated channels for critical issues</li>
                                    <li>Ensures team-wide visibility of important updates</li>
                                    <li>Centralizes communication about specific problems</li>
                                  </>
                                )}
                                {agent.name === "SprintChat Agent" && (
                                  <>
                                    <li>Maintains context for all conversations</li>
                                    <li>Reduces the need for separate communication channels</li>
                                    <li>Archives discussions for future reference</li>
                                  </>
                                )}
                                {agent.name === "NotifyPro Agent" && (
                                  <>
                                    <li>Ensures timely awareness of important events</li>
                                    <li>Customizable notification preferences</li>
                                    <li>Reduces information overload through smart filtering</li>
                                  </>
                                )}
                                {agent.name === "PipelineTrack Agent" && (
                                  <>
                                    <li>Provides real-time visibility into pipeline status</li>
                                    <li>Immediately alerts on pipeline failures</li>
                                    <li>Tracks performance metrics over time</li>
                                  </>
                                )}
                                {agent.name === "FlowOptimizer Agent" && (
                                  <>
                                    <li>Identifies bottlenecks in your development workflow</li>
                                    <li>Suggests data-driven improvements</li>
                                    <li>Continuously optimizes CI/CD processes</li>
                                  </>
                                )}
                                {agent.name === "FeedbackCollect Agent" && (
                                  <>
                                    <li>Gathers insights to improve future issue resolution</li>
                                    <li>Identifies training opportunities for the team</li>
                                    <li>Drives continuous improvement in processes</li>
                                  </>
                                )}
                                {agent.name === "PrioritySetter Agent" && (
                                  <>
                                    <li>Ensures critical issues are addressed first</li>
                                    <li>Balances urgency and business impact</li>
                                    <li>Adapts to changing priorities automatically</li>
                                  </>
                                )}
                                {agent.name === "CollabManager Agent" && (
                                  <>
                                    <li>Ensures smooth handoffs between different agents</li>
                                    <li>Prevents tasks from getting lost between stages</li>
                                    <li>Optimizes the overall workflow across all agents</li>
                                  </>
                                )}
                              </ul>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-semibold mb-2">Integrates with:</h5>
                            <div className="flex flex-wrap gap-2">
                              {agent.integrations.map((tool, idx) => (
                                <span 
                                  key={idx} 
                                  className="inline-block px-3 py-1 text-xs bg-gradient-to-r from-echoPurple-500/10 to-echoBlue-500/10 rounded-full border border-echoPurple-200 text-echoPurple-700"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="bg-gradient-to-r from-echoPurple-500/10 to-echoBlue-500/10 rounded-lg p-4 mt-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-echoPurple-600 to-echoBlue-600 flex items-center justify-center text-white font-bold text-sm mr-4">
                          AI
                        </div>
                        <div>
                          <p className="text-foreground/80 italic">
                            {activeCategory === 'logging' && "Our LogSync and LogFilter agents work together to collect, normalize, and filter logs from all your sources, providing a clean dataset for analysis."}
                            {activeCategory === 'anomalies' && "Our AnomalyDetect, PatternInsight, and RootCause agents collaborate to find issues, identify patterns, and determine root causes with actionable insights."}
                            {activeCategory === 'tickets' && "Our TicketGen, AssignBot, and GitSync agents streamline issue management by creating tickets, assigning them to the right people, and syncing with GitHub."}
                            {activeCategory === 'collaboration' && "Our SlackSync, SprintChat, and NotifyPro agents ensure your team stays connected with real-time updates and contextual discussions."}
                            {activeCategory === 'pipelines' && "Our PipelineTrack and FlowOptimizer agents monitor your CI/CD pipelines and help identify opportunities to improve your development workflow."}
                            {activeCategory === 'feedback' && "Our FeedbackCollect, PrioritySetter, and CollabManager agents work together to gather insights, prioritize work, and ensure smooth handoffs between teams."}
                          </p>
                          <div className="mt-2 text-xs text-foreground/50">Echo Command Center • Just now</div>
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

export default AgentSection;
