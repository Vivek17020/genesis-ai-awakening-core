
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 text-center relative z-10">
        <Badge variant="outline" className="bg-ai-secondary/50 text-ai-cyan border-ai-cyan/30 mb-6 inline-block">
          <Shield className="w-4 h-4 mr-1" /> Project Sentinel
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          AI-Powered <span className="text-gradient glow-text">Insider Threat</span><br />
          Detection & Prevention
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
          Advanced AI agent built in Java, deployed via Azure AI Agent Service,
          that continuously monitors user behavior, detects anomalies, and proactively prevents threats.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button size="lg" className="bg-ai-cyan text-ai-primary hover:bg-ai-cyan/90">
            <Shield className="mr-2" />
            View Demo Dashboard
          </Button>
          <Button variant="outline" size="lg" className="border-ai-cyan/50 text-ai-cyan hover:bg-ai-cyan/10">
            Learn How It Works
          </Button>
        </div>
        
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-4">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-gray-400 text-sm flex items-center">
              <UserCheck className="h-4 w-4 mr-1" /> Behavior Analysis
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-ai-cyan animate-pulse"></div>
            <span className="text-gray-400 text-sm flex items-center">
              <AlertTriangle className="h-4 w-4 mr-1" /> Real-time Alerts
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-ai-purple animate-pulse"></div>
            <span className="text-gray-400 text-sm flex items-center">
              <Shield className="h-4 w-4 mr-1" /> Automated Defense
            </span>
          </div>
        </div>
        
        <div className="mt-8 inline-block border border-ai-cyan/20 rounded-lg bg-ai-primary/60 p-4">
          <div className="text-sm text-left text-ai-cyan font-mono">
            <div className="text-gray-400">// Anomaly detection in progress</div>
            <div>sentinel.monitor(<span className="text-green-400">"user_activities"</span>);</div>
            <div>sentinel.analyze(<span className="text-green-400">"behavior_patterns"</span>);</div>
            <div className="text-yellow-400">alert! suspicious_file_access_detected();</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
