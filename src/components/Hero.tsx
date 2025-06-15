
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden noise-bg grid-pattern">
      <div className="hero-glow top-1/4 left-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in opacity-0" style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-gradient">
              Helping developers do more, <span className="block">with less stress.</span>
            </h1>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              We build custom solutions for developers, server owners, and creators - from Discord bots to full-stack web applications.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0" style={{animationDelay: "0.6s", animationFillMode: "forwards"}}>
            <Button 
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
