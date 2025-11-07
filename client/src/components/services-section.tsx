import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, MessageCircle } from "lucide-react";
import { PricingCalculator } from "./pricing-calculator";

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Website Design",
      description: "Modern one-page or small multi-page websites to showcase your business online. Custom design with your business info, photos, and contact links.",
      features: ["Custom design", "Mobile responsive", "Fast delivery", "Modern templates"]
    },
    {
      icon: MessageCircle,
      title: "Social Media Management",
      price: "₹500/month",
      description: "We manage your social pages, post regularly, and engage with your customers professionally.",
      features: ["Regular posts & updates", "Instagram, Facebook, Google", "Message & comment replies", "Build local trust"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary glow-text" data-testid="heading-services">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
            Simple, affordable solutions to grow your business online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-2 glow-border group"
                data-testid={`card-service-${index}`}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors glow-border">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    {service.title}
                    {service.price && (
                      <span className="text-lg font-semibold text-primary glow-text">
                        {service.price}
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary glow-border" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">Get Your Custom Quote</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Use our calculator to get an instant estimate for your website project
            </p>
          </div>
          <PricingCalculator />
        </div>
      </div>
    </section>
  );
}
