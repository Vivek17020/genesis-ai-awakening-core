import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Users, QrCode, ChevronRight, Sparkles, Music, Headphones } from "lucide-react";

interface EnhancedOnboardingProps {
  onComplete: () => void;
}

const steps = [
  {
    id: 1,
    title: "Welcome to ZKPresence",
    subtitle: "Festival Edition",
    description: "Experience the future of privacy-preserving event verification with zero-knowledge proofs.",
    icon: Zap,
    gradient: "from-primary to-secondary",
    features: ["Anonymous verification", "Blockchain secured", "Privacy first"]
  },
  {
    id: 2,
    title: "Generate ZK Proofs",
    subtitle: "Prove Without Revealing",
    description: "Create cryptographic proofs of your presence at events without revealing your personal information.",
    icon: Shield,
    gradient: "from-secondary to-accent",
    features: ["Zero-knowledge technology", "Cryptographic security", "Verifiable credentials"]
  },
  {
    id: 3,
    title: "Connect & Verify",
    subtitle: "Festival Networking",
    description: "Connect with other attendees and generate group proofs while maintaining complete privacy.",
    icon: Users,
    gradient: "from-accent to-primary",
    features: ["Anonymous connections", "Group verification", "Ephemeral identities"]
  },
  {
    id: 4,
    title: "Collect NFT Badges",
    subtitle: "Digital Memories",
    description: "Earn unique NFT badges for each event you attend, creating a verifiable record of your festival journey.",
    icon: QrCode,
    gradient: "from-festival-pink to-festival-cyan",
    features: ["Unique NFT artwork", "Event memories", "Blockchain stored"]
  }
];

export default function EnhancedOnboarding({ onComplete }: EnhancedOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const step = steps[currentStep];
  const Icon = step.icon;

  return (
    <div className="min-h-screen bg-gradient-stage flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse stage-lights"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000 stage-lights"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500 stage-lights"></div>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center space-x-2 mb-8 z-10">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index <= currentStep 
                ? 'bg-primary scale-125 glow-neon' 
                : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <Card className={`w-full max-w-md bg-card/80 backdrop-blur-xl border-primary/20 shadow-card transition-all duration-500 ${
        isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        <div className="p-8 text-center space-y-6">
          {/* Icon */}
          <div className="relative mx-auto w-20 h-20 mb-6">
            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-full opacity-20 animate-pulse float-animation`}></div>
            <div className={`absolute inset-2 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center glow-pulse`}>
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-6 h-6 text-primary sparkle-animation" />
            </div>
            {currentStep === 0 && (
              <div className="absolute -bottom-2 -left-2">
                <Music className="w-5 h-5 text-secondary animate-bounce" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className={`text-2xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                {step.title}
              </h2>
              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                <Headphones className="w-3 h-3 mr-1" />
                {step.subtitle}
              </Badge>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>

            {/* Features */}
            <div className="space-y-2 pt-2">
              {step.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center space-x-2 p-2 bg-muted/20 rounded-lg concert-wave"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-1 h-1 bg-primary rounded-full sparkle-animation"></div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button 
              variant="ghost" 
              onClick={handleSkip}
              className="flex-1 text-muted-foreground hover:text-foreground"
            >
              Skip
            </Button>
            <Button 
              onClick={handleNext}
              className={`flex-1 bg-gradient-to-r ${step.gradient} hover:opacity-90 text-primary-foreground font-medium glow-pulse`}
            >
              {currentStep === steps.length - 1 ? (
                <>
                  Start Festival
                  <Sparkles className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {/* Step Counter */}
      <div className="mt-6 text-center text-muted-foreground text-sm z-10">
        Step {currentStep + 1} of {steps.length}
      </div>
    </div>
  );
}