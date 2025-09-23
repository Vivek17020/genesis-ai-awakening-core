import { ArrowLeft, Shield, Smartphone, Zap, Globe, Database, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              About ZKPresence
            </h1>
            <p className="text-muted-foreground mt-2">
              Privacy-first event attendance verification and NFT rewards
            </p>
          </div>
        </div>

        {/* Features Section */}
        <Card className="mb-8 gradient-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="w-6 h-6 mr-2 text-primary" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Zero-Knowledge Proofs</h3>
                  <p className="text-sm text-muted-foreground">
                    Verify attendance without revealing personal information using zk-SNARKs
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Smartphone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Mobile-First Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Native iOS and Android apps for seamless event check-ins
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">NFT Rewards</h3>
                  <p className="text-sm text-muted-foreground">
                    Unique event NFTs as proof of attendance and collectibles
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Privacy Preserved</h3>
                  <p className="text-sm text-muted-foreground">
                    No personal data stored, only cryptographic proofs
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sponsor APIs Section */}
        <Card className="mb-8 gradient-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="w-6 h-6 mr-2 text-primary" />
              Sponsor APIs & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-card/50">
                <Badge variant="secondary" className="mb-2">Polygon</Badge>
                <p className="text-sm text-muted-foreground">
                  NFT minting and smart contracts on Polygon network
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50">
                <Badge variant="secondary" className="mb-2">Supabase</Badge>
                <p className="text-sm text-muted-foreground">
                  Backend database and real-time event management
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50">
                <Badge variant="secondary" className="mb-2">1inch</Badge>
                <p className="text-sm text-muted-foreground">
                  Token swapping and DeFi integrations
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50">
                <Badge variant="secondary" className="mb-2">Circom</Badge>
                <p className="text-sm text-muted-foreground">
                  Zero-knowledge circuit implementation
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50">
                <Badge variant="secondary" className="mb-2">IPFS</Badge>
                <p className="text-sm text-muted-foreground">
                  Decentralized NFT metadata storage
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50">
                <Badge variant="secondary" className="mb-2">WalletConnect</Badge>
                <p className="text-sm text-muted-foreground">
                  Multi-wallet integration and authentication
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Architecture Diagram */}
        <Card className="mb-8 gradient-border">
          <CardHeader>
            <CardTitle>System Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-card/30 rounded-lg p-6 overflow-auto">
              <svg viewBox="0 0 800 500" className="w-full h-auto max-w-full">
                {/* Mobile App */}
                <rect x="50" y="50" width="120" height="80" rx="10" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <text x="110" y="85" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Mobile App</text>
                <text x="110" y="100" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">(iOS/Android)</text>
                
                {/* ZK Circuit */}
                <rect x="250" y="50" width="120" height="80" rx="10" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                <text x="310" y="85" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">ZK Circuit</text>
                <text x="310" y="100" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">(Circom)</text>
                
                {/* Backend API */}
                <rect x="450" y="50" width="120" height="80" rx="10" fill="hsl(var(--accent))" opacity="0.2" stroke="hsl(var(--accent))" strokeWidth="2"/>
                <text x="510" y="85" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Backend API</text>
                <text x="510" y="100" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">(Supabase)</text>
                
                {/* Blockchain */}
                <rect x="350" y="200" width="120" height="80" rx="10" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <text x="410" y="235" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Polygon</text>
                <text x="410" y="250" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">(Smart Contracts)</text>
                
                {/* IPFS */}
                <rect x="150" y="200" width="120" height="80" rx="10" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                <text x="210" y="235" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">IPFS</text>
                <text x="210" y="250" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">(NFT Storage)</text>
                
                {/* 1inch API */}
                <rect x="550" y="200" width="120" height="80" rx="10" fill="hsl(var(--accent))" opacity="0.2" stroke="hsl(var(--accent))" strokeWidth="2"/>
                <text x="610" y="235" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">1inch API</text>
                <text x="610" y="250" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">(Token Swaps)</text>
                
                {/* Arrows */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--muted-foreground))" />
                  </marker>
                </defs>
                
                {/* Mobile to ZK */}
                <line x1="170" y1="90" x2="250" y2="90" stroke="hsl(var(--muted-foreground))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                
                {/* ZK to Backend */}
                <line x1="370" y1="90" x2="450" y2="90" stroke="hsl(var(--muted-foreground))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                
                {/* Backend to Blockchain */}
                <line x1="510" y1="130" x2="410" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                
                {/* Mobile to IPFS */}
                <line x1="110" y1="130" x2="210" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                
                {/* Backend to 1inch */}
                <line x1="570" y1="90" x2="610" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                
                {/* Flow Labels */}
                <text x="210" y="85" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Proof Gen</text>
                <text x="410" y="85" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Verify</text>
                <text x="460" y="170" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Mint NFT</text>
                <text x="160" y="170" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Store Media</text>
                <text x="590" y="150" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">DeFi</text>
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Project Info */}
        <Card className="gradient-border">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Built for ETH Denver 2024 Hackathon
              </p>
              <div className="flex justify-center space-x-4">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Capacitor</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}