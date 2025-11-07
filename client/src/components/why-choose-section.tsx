import { Zap, DollarSign, MessageCircle } from "lucide-react";

export function WhyChooseSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Get your website up and running quickly with our streamlined process"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Professional web services at prices local businesses can afford"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Direct support via WhatsApp for quick answers and assistance"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary glow-text" data-testid="heading-why-choose">
            Why Choose WebGlow?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-description">
            We handle your online presence so you can focus on your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-lg hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`benefit-${index}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto glow-border">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold" data-testid={`text-benefit-title-${index}`}>{benefit.title}</h3>
                <p className="text-muted-foreground" data-testid={`text-benefit-description-${index}`}>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
