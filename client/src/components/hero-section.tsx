import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/10 to-background dark:from-[#0a0a14] dark:via-[#111122] dark:to-[#0a0a14]">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent dark:from-primary/10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 glow-orange mb-4" data-testid="badge-professional">
            <TrendingUp className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Grow Your Business Online</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" data-testid="heading-hero">
            <span className="text-primary glow-text">Web</span>
            <span className="text-secondary glow-text">Glow</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/90 leading-tight" data-testid="text-tagline">
            Shine your business online
          </p>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-description">
            We help local businesses and MSMEs grow their online presence with fast, affordable, and beautifully designed websites and social media management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="glow-border-strong transition-all duration-300 bg-primary hover:bg-primary/90"
              onClick={scrollToContact}
              data-testid="button-get-started"
            >
              Get Your Website
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="glow-orange transition-all duration-300"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                servicesSection?.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
