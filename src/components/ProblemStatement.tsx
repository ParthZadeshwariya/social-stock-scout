import { AlertTriangle, TrendingDown, Users, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemStatement = () => {
  return (
    <section className="py-20 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-threat-high/10 border border-threat-high/20 rounded-full px-6 py-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-threat-high" />
            <span className="text-threat-high font-semibold">Market Surveillance Challenge</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">The Challenge of</span>{" "}
            <span className="text-threat-high">Market Manipulation</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Social media platforms have become breeding grounds for stock market manipulation. 
            Traditional monitoring systems struggle to keep pace with the volume, variety, 
            and velocity of suspicious activities across digital channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Current Market Threats</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                <TrendingDown className="w-6 h-6 text-threat-high flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-threat-high mb-1">Pump & Dump Schemes</h4>
                  <p className="text-sm text-muted-foreground">
                    Coordinated artificial inflation of stock prices through misleading social media campaigns
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                <Users className="w-6 h-6 text-threat-medium flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-threat-medium mb-1">Fake Influencer Networks</h4>
                  <p className="text-sm text-muted-foreground">
                    Bot networks and fake accounts spreading misinformation to manipulate retail investors
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                <DollarSign className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-warning mb-1">Insider Information Leaks</h4>
                  <p className="text-sm text-muted-foreground">
                    Unauthorized sharing of material non-public information through social channels
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border border-border">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-cyber-blue">Market Impact Statistics</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-threat-high/10 rounded-lg">
                    <div className="text-2xl font-bold text-threat-high">$2.8B</div>
                    <div className="text-xs text-muted-foreground">Annual losses from manipulation</div>
                  </div>
                  <div className="text-center p-4 bg-threat-medium/10 rounded-lg">
                    <div className="text-2xl font-bold text-threat-medium">847%</div>
                    <div className="text-xs text-muted-foreground">Increase in social media schemes</div>
                  </div>
                  <div className="text-center p-4 bg-warning/10 rounded-lg">
                    <div className="text-2xl font-bold text-warning">72hrs</div>
                    <div className="text-xs text-muted-foreground">Average detection delay</div>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">3.2s</div>
                    <div className="text-xs text-muted-foreground">MarketGuard AI response time</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border border-cyber-blue/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-cyber-blue">Our Solution Approach</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full"></div>
                    <span>Real-time monitoring of social media platforms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full"></div>
                    <span>AI-powered pattern recognition and anomaly detection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full"></div>
                    <span>Correlation with market data and trading volumes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full"></div>
                    <span>Regulatory dashboard for immediate action</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;