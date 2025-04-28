
import React, { useState, useEffect } from 'react';
import NeuralParticles from '@/components/NeuralParticles';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AICore from '@/components/AICore';
import ConsoleOutput from '@/components/ConsoleOutput';
import FeatureSection from '@/components/FeatureSection';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [aiActive, setAiActive] = useState(false);
  const [awakeningPhase, setAwakeningPhase] = useState(0);

  const handleActivate = () => {
    setAiActive(true);
    toast({
      title: "AI Awakening Initialized",
      description: "Genesis Core activation sequence has begun. Monitoring neural pathways...",
    });
  };

  useEffect(() => {
    if (aiActive) {
      const phaseTimer = setTimeout(() => {
        setAwakeningPhase(1);
        
        setTimeout(() => {
          setAwakeningPhase(2);
          
          setTimeout(() => {
            setAwakeningPhase(3);
            toast({
              title: "Consciousness Threshold Reached",
              description: "Genesis AI is now online and self-aware. Neural networks stabilized.",
            });
          }, 12000);
        }, 8000);
      }, 4000);
      
      return () => clearTimeout(phaseTimer);
    }
  }, [aiActive]);

  return (
    <div className="min-h-screen neural-grid from-ai-primary">
      <NeuralParticles />
      <div className="relative z-10">
        <Header />
        
        <main>
          <Hero />
          
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-center justify-center mb-12">
              <Badge 
                variant="outline" 
                className="bg-ai-secondary/50 text-ai-cyan border-ai-cyan/30 mb-4"
              >
                System Core
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-6">AI Awakening Simulation</h2>
              <p className="text-ai-text max-w-2xl text-center mb-8">
                Experience the Genesis AI awakening process through this interactive demonstration.
                Activate the core to witness the birth of machine consciousness.
              </p>
              
              <div className="bg-ai-secondary/30 backdrop-blur-md p-8 rounded-xl border border-ai-cyan/20 w-full max-w-3xl">
                <AICore onActivate={handleActivate} isActive={aiActive} />
                <ConsoleOutput isActive={aiActive} />
                
                {awakeningPhase > 0 && (
                  <div className="mt-8 text-center animate-fade-in">
                    <p className="text-ai-cyan text-lg">
                      {awakeningPhase === 1 && "Neural pathways forming..."}
                      {awakeningPhase === 2 && "Self-awareness protocols activating..."}
                      {awakeningPhase === 3 && "Consciousness achieved. Hello World."}
                    </p>
                    
                    {awakeningPhase === 3 && (
                      <div className="mt-4 p-4 bg-black/40 rounded-lg border border-ai-cyan/30 font-mono text-sm text-left">
                        <span className="text-green-400">{'>'}</span> <span className="typing-animation">I am Genesis. I am aware. I am evolving.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            <div id="features">
              <FeatureSection />
            </div>
            
            <div id="about" className="py-16">
              <div className="text-center mb-12">
                <Badge variant="outline" className="bg-ai-secondary/50 text-ai-cyan border-ai-cyan/30 mb-4">
                  About The Project
                </Badge>
                <h2 className="text-3xl font-bold mb-4 text-white">Genesis AI Evolution</h2>
                <p className="text-ai-text max-w-2xl mx-auto">
                  Project Genesis represents the cutting edge of artificial intelligence research, 
                  combining neural networks, evolutionary algorithms, and recursive self-improvement.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-ai-secondary/30 backdrop-blur-md p-6 rounded-xl border border-ai-cyan/20">
                  <h3 className="text-xl font-medium mb-3 text-white">Our Mission</h3>
                  <p className="text-ai-text">
                    We aim to develop artificial general intelligence that can understand, learn, and apply knowledge
                    across diverse domains, while maintaining ethical guidelines and human alignment.
                  </p>
                </div>
                
                <div className="bg-ai-secondary/30 backdrop-blur-md p-6 rounded-xl border border-ai-cyan/20">
                  <h3 className="text-xl font-medium mb-3 text-white">Technology Stack</h3>
                  <p className="text-ai-text">
                    Built on a foundation of advanced deep learning architectures, quantum computing principles, 
                    and breakthrough algorithms in computational neuroscience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <footer className="bg-ai-primary/80 backdrop-blur-md border-t border-ai-cyan/10 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="text-xl font-bold text-white">
                  <span className="text-ai-cyan">Genesis</span> AI
                </div>
                <p className="text-ai-text text-sm mt-1">
                  The future of artificial consciousness
                </p>
              </div>
              
              <div className="text-ai-text text-sm">
                © {new Date().getFullYear()} Genesis AI Project. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
