import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="WebGlow Logo" 
            className="h-10 w-auto object-contain transition-transform hover:scale-105"
          />
          <span className="font-bold text-xl">
            <span className="text-primary">Web</span>
            <span className="text-secondary">Glow</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            size="sm"
            className="glow-border"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
