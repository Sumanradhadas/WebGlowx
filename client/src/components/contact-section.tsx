import { Button } from "@/components/ui/button";
import { Mail, Send, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary glow-text" data-testid="heading-contact">
            Get Started Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            Ready to grow your business online? Contact us now and let's make it happen!
          </p>
        </div>

        <Card className="max-w-3xl mx-auto glow-border-strong bg-gradient-to-br from-primary/5 via-background to-background">
          <CardContent className="p-8 sm:p-12">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 glow-border mx-auto">
                  <Mail className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">Let's Talk About Your Business</h3>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Send us an email and we'll get back to you with a custom quote tailored to your needs
                </p>
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="glow-border-strong text-lg px-8 py-6 h-auto group"
                  asChild
                  data-testid="button-email"
                >
                  <a
                    href="mailto:webglow@zohomail.in"
                    className="flex items-center gap-3"
                  >
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <span className="font-semibold">webglow@zohomail.in</span>
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border/50">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">24-Hour Response</p>
                  <p className="text-xs text-muted-foreground">We reply to all emails within one business day</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Free Consultation</p>
                  <p className="text-xs text-muted-foreground">Get expert advice at no cost</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Custom Quote</p>
                  <p className="text-xs text-muted-foreground">Pricing tailored to your business</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 border border-primary/10" data-testid="badge-promise">
            <span className="text-sm text-muted-foreground">
              We handle your online presence so you can focus on your business
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
