
import React from 'react';
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const DemoVideo = () => {
  const openVideo = () => {
    // This would typically open a modal with the YouTube video
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-accent to-transparent -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-echoPurple-500/10 to-echoBlue-500/10 border border-echoPurple-200 text-echoPurple-700 rounded-full">
            See it in action
          </span>
          <h2 className="section-heading">
            Watch how EchoSysAI
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-echoPurple-600 to-echoBlue-600">
              transforms your workflow
            </span>
          </h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-echoPurple-400/20 to-echoBlue-400/20 rounded-xl blur-xl transform scale-95 translate-y-4"></div>
          
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden aspect-video shadow-card group">
            <div className="absolute inset-0 bg-gradient-to-r from-echoPurple-600/20 to-echoBlue-600/20"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=90&w=1400"
              alt="EchoSysAI in action" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            
            <Button 
              onClick={openVideo}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-echoPurple-600 hover:bg-white/90 rounded-full w-20 h-20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300"
            >
              <PlayCircle className="h-12 w-12" />
            </Button>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-black/0">
              <h3 className="text-white text-xl font-medium">Complete Platform Demo</h3>
              <p className="text-white/70 mt-2">See how EchoSysAI integrates with your existing tools and workflows</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;
