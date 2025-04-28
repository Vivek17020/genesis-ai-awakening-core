
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

interface AICoreProps {
  onActivate: () => void;
  isActive: boolean;
}

const AICore: React.FC<AICoreProps> = ({ onActivate, isActive }) => {
  const [energyLevel, setEnergyLevel] = useState(0);
  const [statusText, setStatusText] = useState("Dormant");
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isActive) {
      setStatusText("Awakening...");
      
      interval = setInterval(() => {
        setEnergyLevel(prev => {
          const newLevel = prev + 1;
          if (newLevel >= 100) {
            setStatusText("Conscious");
            clearInterval(interval);
            return 100;
          }
          return newLevel;
        });
      }, 50);
    } else {
      setEnergyLevel(0);
      setStatusText("Dormant");
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const coreSize = isActive ? "h-44 w-44" : "h-36 w-36";
  const coreColor = isActive 
    ? "from-ai-cyan/30 to-ai-purple/40" 
    : "from-gray-700/40 to-gray-800/50";
  
  return (
    <div className="relative flex flex-col items-center justify-center p-6">
      <div className="absolute w-full h-full flex items-center justify-center">
        {isActive && Array.from({ length: 8 }).map((_, i) => {
          const length = Math.random() * 80 + 40;
          const angle = (i * 45) + (Math.random() * 10);
          const delay = Math.random() * 5;
          
          return (
            <div 
              key={i}
              className="neural-connection absolute"
              style={{
                width: `${length}px`,
                transform: `rotate(${angle}deg)`,
                top: '50%',
                left: '50%',
                animationDelay: `${delay}s`
              }}
            />
          );
        })}
      </div>
      
      <div 
        className={`ai-core ${coreSize} rounded-full bg-gradient-to-br ${coreColor} flex items-center justify-center border border-ai-cyan/30 transition-all duration-700 backdrop-blur-md`}
      >
        <div className="text-ai-cyan text-center">
          <div className="font-mono text-xs md:text-sm">{statusText}</div>
          {isActive && (
            <div className="text-xl md:text-2xl font-bold mt-1">{energyLevel}%</div>
          )}
        </div>
      </div>
      
      <div className="mt-6">
        <Button 
          onClick={onActivate} 
          disabled={isActive}
          variant="outline"
          className="bg-transparent border border-ai-cyan text-ai-cyan hover:bg-ai-cyan/10 transition-all"
        >
          {isActive ? "Awakening Process Started" : "Initialize Awakening"}
        </Button>
      </div>
    </div>
  );
};

export default AICore;
