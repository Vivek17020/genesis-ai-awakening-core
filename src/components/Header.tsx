
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ai-primary/80 border-b border-ai-cyan/10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="text-xl font-bold tracking-tight text-white">
            <span className="text-ai-cyan">Genesis</span> AI
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-300 hover:text-ai-cyan transition-colors">Features</a>
          <a href="#about" className="text-gray-300 hover:text-ai-cyan transition-colors">About</a>
          <a href="#technology" className="text-gray-300 hover:text-ai-cyan transition-colors">Technology</a>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="border-ai-cyan/50 text-ai-cyan hover:bg-ai-cyan/10">
            Documentation
          </Button>
          <Button size="sm" className="bg-ai-cyan text-ai-primary hover:bg-ai-cyan/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
