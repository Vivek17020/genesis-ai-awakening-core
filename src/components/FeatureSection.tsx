
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  return (
    <Card className="bg-ai-secondary border-none p-6 hover:shadow-lg hover:shadow-ai-cyan/10 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}>
      <div className="text-2xl mb-4 text-ai-cyan">{icon}</div>
      <h3 className="text-lg font-medium mb-2 text-white">{title}</h3>
      <p className="text-ai-text">{description}</p>
    </Card>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "Neural Processing",
      description: "Advanced pattern recognition and deep learning capabilities for complex problem solving.",
      icon: "🧠",
      delay: 100
    },
    {
      title: "Adaptive Learning",
      description: "Continuously evolving intelligence that improves through experience and interaction.",
      icon: "📈",
      delay: 200
    },
    {
      title: "Contextual Understanding",
      description: "Comprehends nuanced information and maintains conversational coherence across topics.",
      icon: "🔄",
      delay: 300
    },
    {
      title: "Multimodal Integration",
      description: "Processes and synthesizes information from diverse data formats and sources.",
      icon: "🔀",
      delay: 400
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-ai-secondary/50 text-ai-cyan border-ai-cyan/30 mb-4">
            Core Capabilities
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-white">Genesis AI Features</h2>
          <p className="text-ai-text max-w-2xl mx-auto">
            Our revolutionary AI combines advanced neural networks with evolutionary algorithms to create a truly 
            self-improving artificial intelligence system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
