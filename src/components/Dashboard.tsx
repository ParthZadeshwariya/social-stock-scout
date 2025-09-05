import { Activity, AlertTriangle, Eye, TrendingUp, Users, Shield, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const threats = [
    {
      id: "TH-001",
      user: "Account Analysis",
      risk: "Variable",
      confidence: "Enter username",
      pattern: "Real-time Analysis",
      engagement: "Live Data",
      status: "Ready"
    },
    {
      id: "TH-002", 
      user: "Market Monitor",
      risk: "Medium",
      confidence: "78.9%",
      pattern: "Volume Spike",
      engagement: "8.7K",
      status: "Monitoring"
    },
    {
      id: "TH-003",
      user: "Sentiment Tracker",
      risk: "Low",
      confidence: "34.1%",
      pattern: "Sentiment Shift",
      engagement: "2.1K",
      status: "Tracking"
    }
  ];

  const handleAnalyze = () => {
    if (!searchQuery.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const riskLevels = ["High", "Medium", "Low"];
      const patterns = ["Pump & Dump", "Volume Manipulation", "Sentiment Analysis", "Bot Network", "Coordinated Activity"];
      const randomRisk = riskLevels[Math.floor(Math.random() * riskLevels.length)];
      const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
      const confidence = (Math.random() * 40 + 60).toFixed(1); // 60-100%
      const engagement = (Math.random() * 50 + 5).toFixed(1); // 5-55K
      
      setAnalysisResult({
        user: searchQuery,
        risk: randomRisk,
        confidence: `${confidence}%`,
        pattern: randomPattern,
        engagement: `${engagement}K`,
        timestamp: new Date().toLocaleTimeString()
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return "threat-high";
      case "Medium": return "threat-medium";
      case "Low": return "threat-low";
      default: return "muted";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Regulatory</span>{" "}
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-teal bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time threat detection and market surveillance dashboard designed 
            for regulators and exchanges to take immediate action.
          </p>
        </div>

        {/* Dashboard stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-card border border-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-cyber-blue/10 rounded-lg mx-auto mb-3">
                <Activity className="w-6 h-6 text-cyber-blue" />
              </div>
              <div className="text-2xl font-bold text-cyber-blue">1,247</div>
              <div className="text-sm text-muted-foreground">Active Monitors</div>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-threat-high/10 rounded-lg mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-threat-high" />
              </div>
              <div className="text-2xl font-bold text-threat-high">23</div>
              <div className="text-sm text-muted-foreground">High Risk Alerts</div>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg mx-auto mb-3">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <div className="text-2xl font-bold text-success">156</div>
              <div className="text-sm text-muted-foreground">Resolved Cases</div>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-warning/10 rounded-lg mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-warning" />
              </div>
              <div className="text-2xl font-bold text-warning">$4.2M</div>
              <div className="text-sm text-muted-foreground">Protected Volume</div>
            </CardContent>
          </Card>
        </div>

        {/* Account Analysis Section */}
        <div className="mb-8">
          <Card className="bg-card border border-cyber-blue/20">
            <CardHeader>
              <CardTitle className="text-cyber-blue">Account Risk Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter social media username (e.g., @username)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-background border-border"
                  />
                </div>
                <Button 
                  onClick={handleAnalyze}
                  disabled={!searchQuery.trim() || isAnalyzing}
                  variant="cyber"
                >
                  <Search className="w-4 h-4 mr-2" />
                  {isAnalyzing ? "Analyzing..." : "Analyze"}
                </Button>
              </div>
              
              {analysisResult && (
                <div className="p-4 bg-secondary/20 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-${getRiskColor(analysisResult.risk)} animate-pulse`} />
                      <div>
                        <div className="font-semibold text-foreground">{analysisResult.user}</div>
                        <div className="text-sm text-muted-foreground">Analyzed at {analysisResult.timestamp}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold text-${getRiskColor(analysisResult.risk)}`}>
                        {analysisResult.risk} Risk
                      </div>
                      <div className="text-xs text-muted-foreground">{analysisResult.confidence} confidence</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Pattern Detected</div>
                      <div className="font-medium">{analysisResult.pattern}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Engagement</div>
                      <div className="font-medium">{analysisResult.engagement}</div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Main dashboard view */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Threat Detection Feed */}
          <div className="lg:col-span-2">
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-cyber-blue" />
                  <span>Live Threat Detection</span>
                  <div className="ml-auto flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-sm text-success">Live</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {threats.map((threat, index) => (
                    <div key={threat.id} className="p-6 hover:bg-secondary/20 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full bg-${getRiskColor(threat.risk)} animate-pulse`} />
                          <div>
                            <div className="font-semibold text-foreground">{threat.user}</div>
                            <div className="text-sm text-muted-foreground">ID: {threat.id}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-semibold text-${getRiskColor(threat.risk)}`}>
                            {threat.risk} Risk
                          </div>
                          <div className="text-xs text-muted-foreground">{threat.confidence} confidence</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Pattern</div>
                          <div className="font-medium">{threat.pattern}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Engagement</div>
                          <div className="font-medium">{threat.engagement}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Status</div>
                          <div className="font-medium">{threat.status}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-4">
                        <Button size="sm" variant="cyber" className="text-xs">
                          Investigate
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          View Details
                        </Button>
                        {threat.risk === "High" && (
                          <Button size="sm" variant="destructive" className="text-xs">
                            Flag for Action
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Analytics */}
          <div className="space-y-6">
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="text-lg">Detection Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Detection Rate</span>
                    <span className="text-sm font-semibold text-success">99.8%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '99.8%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Response Time</span>
                    <span className="text-sm font-semibold text-cyber-blue">3.2s avg</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-cyber-blue h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="text-lg">Platform Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Social Media</span>
                    </div>
                    <span className="text-sm font-semibold text-cyber-blue">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Forums</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Planned</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">News Sites</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Planned</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;