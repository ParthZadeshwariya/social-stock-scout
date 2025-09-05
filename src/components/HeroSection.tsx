import { Shield, Eye, AlertTriangle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import cyberHero from "@/assets/cyber-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${cyberHero})` }}
      />
      
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(217,91%,60%,0.1)_0%,transparent_50%)]" />
      
      {/* Scan line animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-cyber-blue opacity-30 animate-scan-line" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 text-cyber-blue">
              <Shield className="w-8 h-8" />
              <span className="text-lg font-semibold tracking-wider uppercase">CyberShield</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Threat</span>{" "}
              <span className="bg-gradient-to-r from-cyber-blue to-cyber-teal bg-clip-text text-transparent">
                Hunters
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Advanced AI-powered detection system monitoring social media platforms for 
              suspicious stock manipulation and market threats in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cyber" size="lg" className="text-lg px-8">
                <Eye className="w-5 h-5 mr-2" />
                View Dashboard
              </Button>
              <Button variant="outline-cyber" size="lg" className="text-lg px-8">
                Learn More
              </Button>
            </div>

            {/* Live stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-blue">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">99.8%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">3.2s</div>
                <div className="text-sm text-muted-foreground">Response</div>
              </div>
            </div>
          </div>

          {/* Right content - Live threat simulation */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-blue/10 rounded-full blur-xl" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Live Threat Detection</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-sm text-success">Active</span>
                  </div>
                </div>
                
                {/* Threat alerts */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-threat-high/10 border border-threat-high/20 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-threat-high animate-pulse" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-threat-high">High Risk Detected</div>
                      <div className="text-xs text-muted-foreground">@stockguru_official - Pump & dump pattern</div>
                    </div>
                    <div className="text-xs text-threat-high font-mono">95.2%</div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-threat-medium/10 border border-threat-medium/20 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-threat-medium" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-threat-medium">Medium Risk</div>
                      <div className="text-xs text-muted-foreground">Unusual volume spike correlation</div>
                    </div>
                    <div className="text-xs text-threat-medium font-mono">67.8%</div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-threat-low/10 border border-threat-low/20 rounded-lg">
                    <Eye className="w-4 h-4 text-threat-low" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-threat-low">Monitoring</div>
                      <div className="text-xs text-muted-foreground">Social sentiment analysis</div>
                    </div>
                    <div className="text-xs text-threat-low font-mono">23.1%</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tech stack preview */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyber-blue">Groq AI</div>
                <div className="text-xs text-muted-foreground">Ultra-fast inference</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyber-teal">LangChain</div>
                <div className="text-xs text-muted-foreground">ML Pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;