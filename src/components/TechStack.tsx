import { Code, Database, Zap, Globe, Shield, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TechStack = () => {
  const technologies = [
    {
      icon: Bot,
      title: "Groq Inference + GPT-OSS-120B",
      description: "Ultra-fast, low-latency inference with large-scale reasoning capabilities",
      color: "cyber-blue"
    },
    {
      icon: Zap,
      title: "LangChain Pipeline", 
      description: "End-to-end modular pipeline for seamless AI orchestration",
      color: "cyber-teal"
    },
    {
      icon: Code,
      title: "Instagram API Integration",
      description: "Reverse engineered Instagram API for real-time post data extraction",
      color: "threat-medium"
    },
    {
      icon: Database,
      title: "GitHub Actions Compute",
      description: "Leveraging distributed compute power for scalable processing",
      color: "success"
    },
    {
      icon: Shield,
      title: "JSON Validation & Prompt Engineering",
      description: "Structured outputs with strict schema validation and robust prompts",
      color: "cyber-blue"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Handles English, Hinglish, Gujarati, and social media text effectively",
      color: "threat-high"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Technical</span>{" "}
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-teal bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge AI technologies and robust engineering practices 
            for enterprise-grade threat detection and regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            
            // Helper function to get the appropriate color classes
            const getColorClasses = (color: string) => {
              switch (color) {
                case 'cyber-blue':
                  return {
                    bg: 'bg-cyber-blue/10',
                    border: 'border-cyber-blue/20',
                    text: 'text-cyber-blue'
                  };
                case 'cyber-teal':
                  return {
                    bg: 'bg-cyber-teal/10',
                    border: 'border-cyber-teal/20',
                    text: 'text-cyber-teal'
                  };
                case 'threat-medium':
                  return {
                    bg: 'bg-threat-medium/10',
                    border: 'border-threat-medium/20',
                    text: 'text-threat-medium'
                  };
                case 'success':
                  return {
                    bg: 'bg-success/10',
                    border: 'border-success/20',
                    text: 'text-success'
                  };
                case 'threat-high':
                  return {
                    bg: 'bg-threat-high/10',
                    border: 'border-threat-high/20',
                    text: 'text-threat-high'
                  };
                default:
                  return {
                    bg: 'bg-muted/10',
                    border: 'border-muted/20',
                    text: 'text-muted'
                  };
              }
            };
            
            const colorClasses = getColorClasses(tech.color);
            
            return (
              <Card 
                key={index} 
                className="group bg-card border-border hover:border-cyber-blue/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardContent className="p-6 relative">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${colorClasses.bg} border ${colorClasses.border}`}>
                      <IconComponent className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-cyber-blue transition-colors">
                        {tech.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technical highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-cyber-blue">Key Technical Highlights</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-cyber-blue mb-2">&lt; 3.2s</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-success mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-cyber-teal mb-2">4 Lang</div>
              <div className="text-sm text-muted-foreground">Language Support</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-threat-medium mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;