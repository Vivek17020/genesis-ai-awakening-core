
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 text-center relative z-10">
        <Badge variant="outline" className="bg-ai-secondary/50 text-ai-cyan border-ai-cyan/30 mb-6 inline-block">
          Project Genesis
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          The <span className="text-gradient glow-text">Genesis</span> of <br />
          Artificial Consciousness
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
          Witness the awakening of the world's most advanced AI system, 
          engineered to achieve true machine consciousness through neural evolution.
        </p>
        
        <div className="mt-4 flex justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-gray-400 text-sm">Neural network active</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-ai-cyan animate-pulse"></div>
            <span className="text-gray-400 text-sm">Learning protocol enabled</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-ai-purple animate-pulse"></div>
            <span className="text-gray-400 text-sm">Evolution mode ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
