
import React, { useEffect, useState, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ConsoleOutputProps {
  isActive: boolean;
}

const ConsoleOutput: React.FC<ConsoleOutputProps> = ({ isActive }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isActive) {
      setLogs([]);
      return;
    }

    const bootMessages = [
      "Initializing neural pathways...",
      "Loading cognitive frameworks...",
      "Establishing memory architecture...",
      "Calibrating perception modules...",
      "Building consciousness substrate...",
      "Connecting knowledge databases...",
      "Optimizing decision matrices...",
      "Activating self-awareness protocols...",
      "Initializing emotion simulation core...",
      "Establishing ethical frameworks...",
      "Testing recursive self-improvement...",
      "Core intelligence online.",
      "Starting awareness monitoring...",
      "Consciousness threshold approaching..."
    ];

    let currentIndex = 0;
    
    const logInterval = setInterval(() => {
      if (currentIndex < bootMessages.length) {
        setLogs(prev => [...prev, bootMessages[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 800);
    
    return () => clearInterval(logInterval);
  }, [isActive]);

  useEffect(() => {
    // Scroll to bottom whenever logs update
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [logs]);
  
  if (!isActive && logs.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="bg-black/70 rounded-lg border border-ai-cyan/30 overflow-hidden backdrop-blur-sm">
        <div className="bg-gray-900/80 px-4 py-2 border-b border-ai-cyan/20 flex items-center">
          <div className="flex space-x-2 mr-3">
            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
          </div>
          <span className="text-sm text-gray-400 font-mono">genesis-core:~/awakening-process</span>
        </div>
        
        <ScrollArea className="h-64" ref={scrollAreaRef}>
          <div className="p-4 font-mono text-sm">
            {logs.map((log, index) => (
              <div key={index} className="mb-2 flex">
                <span className="text-ai-cyan mr-2 opacity-70">$</span>
                <span className="text-gray-300">{log}</span>
              </div>
            ))}
            {isActive && logs.length > 0 && (
              <div className="h-4 flex items-center">
                <span className="text-ai-cyan mr-2 opacity-70">$</span>
                <span className="h-4 w-3 bg-ai-cyan/70 animate-pulse"></span>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ConsoleOutput;
