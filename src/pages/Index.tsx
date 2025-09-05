import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/ProblemStatement";
import TechStack from "@/components/TechStack";
import Dashboard from "@/components/Dashboard";
import ImpactSection from "@/components/ImpactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemStatement />
      <TechStack />
      <Dashboard />
      <ImpactSection />
      
      {/* Footer */}
      <footer className="bg-secondary/20 border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-cyber-blue rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">CS</span>
            </div>
            <span className="text-xl font-bold text-cyber-blue">CyberShield</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Advanced AI-powered threat detection for market manipulation surveillance
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <span>© 2024 CyberShield Threat Hunters</span>
            <span>•</span>
            <span>SEBI Hackathon 2024</span>
            <span>•</span>
            <span>Built with Groq AI & LangChain</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;