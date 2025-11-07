export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border/50 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3" data-testid="logo-footer">
            <img 
              src="/logo.png" 
              alt="WebGlow Logo" 
              className="h-8 w-auto object-contain opacity-90"
            />
            <span className="font-semibold">
              <span className="text-primary">Web</span>
              <span className="text-secondary">Glow</span>
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center" data-testid="text-copyright">
            © 2025 WebGlow | Shine your business online
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:webglow@zohomail.in"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
