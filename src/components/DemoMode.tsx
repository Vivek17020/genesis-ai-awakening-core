import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Smartphone, Users, Zap, Trophy, Download } from 'lucide-react';
import { useZKIdentity } from '@/hooks/useZKIdentity';
import { useToast } from '@/hooks/use-toast';

interface DemoPhone {
  id: string;
  name: string;
  avatar: string;
  status: 'idle' | 'scanning' | 'generating' | 'success';
  credentials: number;
}

export function DemoMode() {
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [phones, setPhones] = useState<DemoPhone[]>([]);
  const [isRunningDemo, setIsRunningDemo] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const { generateEventCredential, generateCoPresenceProof, submitProofToBlockchain } = useZKIdentity();
  const { toast } = useToast();

  const demoSteps = [
    'Initializing Demo Phones',
    'Generating Mock Credentials',
    'Simulating Proof Exchange',
    'Minting NFT Rewards',
    'Demo Complete!'
  ];

  useEffect(() => {
    if (isDemoMode && phones.length === 0) {
      initializeDemoPhones();
    }
  }, [isDemoMode]);

  const initializeDemoPhones = () => {
    const mockPhones: DemoPhone[] = [
      {
        id: 'phone-alice',
        name: 'Alice',
        avatar: '👩‍🎤',
        status: 'idle',
        credentials: 0
      },
      {
        id: 'phone-bob',
        name: 'Bob',  
        avatar: '👨‍🎸',
        status: 'idle',
        credentials: 0
      }
    ];
    setPhones(mockPhones);
  };

  const updatePhoneStatus = (phoneId: string, status: DemoPhone['status'], credentials?: number) => {
    setPhones(prev => prev.map(phone => 
      phone.id === phoneId 
        ? { ...phone, status, credentials: credentials ?? phone.credentials }
        : phone
    ));
  };

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const runAutomatedDemo = async () => {
    if (isRunningDemo) return;
    
    setIsRunningDemo(true);
    setDemoStep(0);

    try {
      // Step 1: Initialize phones
      setDemoStep(1);
      await sleep(1000);
      
      // Step 2: Generate credentials for both phones
      setDemoStep(2);
      updatePhoneStatus('phone-alice', 'generating');
      updatePhoneStatus('phone-bob', 'generating');
      
      await sleep(1500);
      
      // Generate credentials for Alice
      await generateEventCredential('eth-denver-2024', 'ETH Denver 2024', {
        location: 'Denver, CO',
        attendeeCount: 3500,
        image: '/src/assets/nft-eth-denver.jpg'
      });
      
      updatePhoneStatus('phone-alice', 'success', 1);
      await sleep(500);
      
      // Generate credentials for Bob  
      await generateEventCredential('zk-summit-paris', 'ZK Summit Paris', {
        location: 'Paris, FR',
        attendeeCount: 800,
        image: '/src/assets/nft-zk-summit.jpg'
      });
      
      updatePhoneStatus('phone-bob', 'success', 1);
      
      // Step 3: Simulate proof exchange
      setDemoStep(3);
      await sleep(1000);
      
      updatePhoneStatus('phone-alice', 'scanning');
      updatePhoneStatus('phone-bob', 'scanning');
      
      await sleep(2000);
      
      // Generate co-presence proof
      await generateCoPresenceProof(
        'alice-demo-id',
        'bob-demo-id', 
        'Alice',
        'Bob',
        'demo-nonce-123',
        'Crypto Festival Main Stage'
      );
      
      updatePhoneStatus('phone-alice', 'success', 2);
      updatePhoneStatus('phone-bob', 'success', 2);
      
      // Step 4: Mint NFTs
      setDemoStep(4);
      await sleep(1500);
      
      toast({
        title: "🎉 NFT Minted!",
        description: "Festival co-presence NFT created successfully"
      });
      
      // Step 5: Complete
      setDemoStep(5);
      
      // Trigger celebration animation
      if (typeof window !== 'undefined') {
        import('canvas-confetti').then(confetti => {
          confetti.default({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EC4899']
          });
        });
      }
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Demo Failed",
        description: "Something went wrong during the demo"
      });
    } finally {
      setIsRunningDemo(false);
      setTimeout(() => setDemoStep(0), 3000);
    }
  };

  const getStatusIcon = (status: DemoPhone['status']) => {
    switch (status) {
      case 'scanning': return <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />;
      case 'generating': return <div className="w-2 h-2 bg-yellow-500 rounded-full animate-spin" />;
      case 'success': return <div className="w-2 h-2 bg-green-500 rounded-full glow-neon" />;
      default: return <div className="w-2 h-2 bg-gray-500 rounded-full" />;
    }
  };

  const exportBuilds = () => {
    toast({
      title: "🚀 Build Export",
      description: "Run 'npx cap sync' then 'npx cap build android/ios' after git pull",
    });
  };

  return (
    <Card className="border-festival-glow bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary animate-sparkle" />
              Demo Mode
            </CardTitle>
            <CardDescription>
              Automated hackathon demonstration flow
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="demo-mode">Demo</Label>
            <Switch
              id="demo-mode"
              checked={isDemoMode}
              onCheckedChange={setIsDemoMode}
            />
          </div>
        </div>
      </CardHeader>
      
      {isDemoMode && (
        <CardContent className="space-y-6">
          {/* Demo Phones */}
          <div className="grid grid-cols-2 gap-4">
            {phones.map((phone) => (
              <Card key={phone.id} className="border-muted bg-muted/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{phone.avatar}</div>
                    <div>
                      <h4 className="font-medium">{phone.name}</h4>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(phone.status)}
                        <span className="text-sm text-muted-foreground capitalize">
                          {phone.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="text-sm">{phone.credentials} proofs</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Demo Controls */}
          <div className="flex flex-col gap-4">
            <Button
              onClick={runAutomatedDemo}
              disabled={isRunningDemo}
              className="w-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 festival-glow"
            >
              <Users className="w-4 h-4 mr-2" />
              {isRunningDemo ? 'Running Demo...' : 'Run Full Demo'}
            </Button>

            {demoStep > 0 && (
              <div className="text-center">
                <Badge variant="secondary" className="animate-glow-pulse">
                  Step {demoStep}/5: {demoSteps[demoStep - 1]}
                </Badge>
              </div>
            )}

            <Button
              onClick={exportBuilds}
              variant="outline"
              className="w-full border-festival-glow"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Mobile Builds
            </Button>
          </div>

          {/* Demo Info */}
          <div className="text-sm text-muted-foreground space-y-1">
            <p>🎯 Demo simulates two festival-goers meeting and exchanging ZK proofs</p>
            <p>📱 Generates mock credentials → exchanges proofs → mints NFTs</p>
            <p>🏗️ Use 'Export Mobile Builds' for APK/TestFlight distribution</p>
          </div>
        </CardContent>
      )}
    </Card>
  );
}