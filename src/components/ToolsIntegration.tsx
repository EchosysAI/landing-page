
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ClipboardCheck, 
  GitPullRequest, 
  MessageSquare, 
  Mail, 
  Database, 
  Server, 
  Cloud, 
  Github, 
  GitBranch, 
  Code 
} from "lucide-react";

const toolCategories = [
  {
    id: "issue-management",
    title: "Issue Management",
    description: "Connect to your favorite issue tracking and project management tools to automate ticket creation and management.",
    tools: [
      { name: "Jira", icon: <ClipboardCheck className="h-5 w-5" />, description: "Automated issue creation and assignment" },
      { name: "Asana", icon: <ClipboardCheck className="h-5 w-5" />, description: "Task creation and updates" },
      { name: "Linear", icon: <ClipboardCheck className="h-5 w-5" />, description: "Issue tracking integration" },
      { name: "Monday.com", icon: <ClipboardCheck className="h-5 w-5" />, description: "Workflow automation" },
      { name: "ClickUp", icon: <ClipboardCheck className="h-5 w-5" />, description: "Task management integration" }
    ]
  },
  {
    id: "communication",
    title: "Communication",
    description: "Keep your team informed with real-time notifications and updates through your preferred communication channels.",
    tools: [
      { name: "Slack", icon: <MessageSquare className="h-5 w-5" />, description: "Real-time notifications and bot integration" },
      { name: "Email", icon: <Mail className="h-5 w-5" />, description: "Customizable email alerts" },
      { name: "Microsoft Teams", icon: <MessageSquare className="h-5 w-5" />, description: "Team notifications and channels" },
      { name: "Discord", icon: <MessageSquare className="h-5 w-5" />, description: "Developer community updates" }
    ]
  },
  {
    id: "logs",
    title: "Log Management",
    description: "Collect and analyze logs from various sources to detect issues and anomalies in your AI systems.",
    tools: [
      { name: "AWS CloudWatch", icon: <Cloud className="h-5 w-5" />, description: "Cloud infrastructure logging" },
      { name: "Datadog", icon: <Server className="h-5 w-5" />, description: "Application performance monitoring" },
      { name: "SumoLogic", icon: <Database className="h-5 w-5" />, description: "Machine data analytics" },
      { name: "Splunk", icon: <Database className="h-5 w-5" />, description: "Log monitoring and analytics" },
      { name: "Elastic", icon: <Server className="h-5 w-5" />, description: "Log and trace collection" },
      { name: "Google Cloud Logging", icon: <Cloud className="h-5 w-5" />, description: "Cloud platform logging" }
    ]
  },
  {
    id: "integration",
    title: "Code Integration",
    description: "Connect with your version control and CI/CD systems to streamline the development workflow.",
    tools: [
      { name: "GitHub", icon: <Github className="h-5 w-5" />, description: "Issues, PRs, and workflow integration" },
      { name: "BitBucket", icon: <GitBranch className="h-5 w-5" />, description: "Repository and issue tracking" },
      { name: "GitLab", icon: <GitPullRequest className="h-5 w-5" />, description: "Complete DevOps platform integration" },
      { name: "Azure DevOps", icon: <Code className="h-5 w-5" />, description: "End-to-end DevOps toolchain" },
      { name: "Jenkins", icon: <Code className="h-5 w-5" />, description: "CI/CD pipeline automation" }
    ]
  }
];

const ToolsIntegration = () => {
  return (
    <div id="tools" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-echoPurple-500/10 to-echoBlue-500/10 border border-echoPurple-200 text-echoPurple-700 rounded-full">
            Seamless Integrations
          </span>
          <h2 className="section-heading">
            Connect with your
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-echoPurple-600 to-echoBlue-600">
              favorite tools and platforms
            </span>
          </h2>
          <p className="section-subheading mt-6">
            EchoSysAI integrates with the tools you already use, creating a unified workflow
            that enhances productivity and reduces context switching.
          </p>
        </div>
        
        <Tabs defaultValue="issue-management" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl bg-muted/50">
              {toolCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-echoPurple-500 data-[state=active]:to-echoBlue-500 data-[state=active]:text-white"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {toolCategories.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="animate-fade-in"
            >
              <div className="space-y-8">
                <p className="text-center text-foreground/80 max-w-3xl mx-auto">
                  {category.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.tools.map((tool, index) => (
                    <div 
                      key={index} 
                      className="glass-card p-6 rounded-xl border border-white/20 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-echoPurple-500/10 to-echoBlue-500/10 flex items-center justify-center mb-4">
                        {tool.icon}
                      </div>
                      <h3 className="text-lg font-bold text-echoPurple-700 mb-2">{tool.name}</h3>
                      <p className="text-sm text-foreground/70">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ToolsIntegration;
