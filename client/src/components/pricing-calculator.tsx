import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Calculator, Check } from "lucide-react";

type WebsiteType = "one-page" | "multi-page" | "ecommerce";
type Timeline = "standard" | "rush";

interface PricingOptions {
  websiteType: WebsiteType;
  features: string[];
  timeline: Timeline;
}

const BASE_PRICES: Record<WebsiteType, number> = {
  "one-page": 5000,
  "multi-page": 12000,
  "ecommerce": 25000,
};

const FEATURE_PRICES: Record<string, number> = {
  "contact-form": 1000,
  "booking-system": 3000,
  "blog": 2000,
  "gallery": 1500,
  "maps": 500,
  "seo": 2000,
};

const TIMELINE_MULTIPLIER: Record<Timeline, number> = {
  standard: 1,
  rush: 1.3,
};

export function PricingCalculator() {
  const [options, setOptions] = useState<PricingOptions>({
    websiteType: "one-page",
    features: [],
    timeline: "standard",
  });
  const [showQuote, setShowQuote] = useState(false);

  const calculateTotal = () => {
    const basePrice = BASE_PRICES[options.websiteType];
    const featuresPrice = options.features.reduce((sum, feature) => sum + FEATURE_PRICES[feature], 0);
    const subtotal = basePrice + featuresPrice;
    const total = Math.round(subtotal * TIMELINE_MULTIPLIER[options.timeline]);
    return { basePrice, featuresPrice, total };
  };

  const handleFeatureToggle = (feature: string) => {
    setOptions(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const { basePrice, featuresPrice, total } = calculateTotal();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="glow-border" data-testid="card-calculator-options">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center glow-border">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Website Quote Calculator</CardTitle>
              <CardDescription>Get an instant estimate for your project</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <Label className="text-base font-semibold">Website Type</Label>
            <RadioGroup
              value={options.websiteType}
              onValueChange={(value) => setOptions(prev => ({ ...prev, websiteType: value as WebsiteType }))}
              className="space-y-3"
            >
              <div className="flex items-start space-x-3 p-4 rounded-lg border hover-elevate transition-all cursor-pointer" data-testid="radio-one-page">
                <RadioGroupItem value="one-page" id="one-page" />
                <div className="flex-1">
                  <Label htmlFor="one-page" className="cursor-pointer font-medium">
                    Single Page Website
                  </Label>
                  <p className="text-sm text-muted-foreground">Perfect for small businesses - ₹{BASE_PRICES["one-page"].toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg border hover-elevate transition-all cursor-pointer" data-testid="radio-multi-page">
                <RadioGroupItem value="multi-page" id="multi-page" />
                <div className="flex-1">
                  <Label htmlFor="multi-page" className="cursor-pointer font-medium">
                    Multi-Page Website
                  </Label>
                  <p className="text-sm text-muted-foreground">5-10 pages with navigation - ₹{BASE_PRICES["multi-page"].toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg border hover-elevate transition-all cursor-pointer" data-testid="radio-ecommerce">
                <RadioGroupItem value="ecommerce" id="ecommerce" />
                <div className="flex-1">
                  <Label htmlFor="ecommerce" className="cursor-pointer font-medium">
                    E-Commerce Website
                  </Label>
                  <p className="text-sm text-muted-foreground">Online store with cart & checkout - ₹{BASE_PRICES["ecommerce"].toLocaleString()}</p>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label className="text-base font-semibold">Additional Features</Label>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(FEATURE_PRICES).map(([feature, price]) => (
                <div key={feature} className="flex items-start space-x-2 p-3 rounded-lg hover-elevate transition-all border">
                  <Checkbox
                    id={feature}
                    checked={options.features.includes(feature)}
                    onCheckedChange={() => handleFeatureToggle(feature)}
                    data-testid={`checkbox-${feature}`}
                  />
                  <div className="flex-1 min-w-0">
                    <Label htmlFor={feature} className="cursor-pointer font-medium capitalize text-sm leading-tight">
                      {feature.replace("-", " ")}
                    </Label>
                    <p className="text-xs text-muted-foreground">+₹{price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-base font-semibold">Timeline</Label>
            <RadioGroup
              value={options.timeline}
              onValueChange={(value) => setOptions(prev => ({ ...prev, timeline: value as Timeline }))}
              className="space-y-3"
            >
              <div className="flex items-start space-x-3 p-4 rounded-lg border hover-elevate transition-all cursor-pointer" data-testid="radio-standard">
                <RadioGroupItem value="standard" id="standard" />
                <div className="flex-1">
                  <Label htmlFor="standard" className="cursor-pointer font-medium">
                    Standard (2-3 weeks)
                  </Label>
                  <p className="text-sm text-muted-foreground">Regular delivery timeline</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg border hover-elevate transition-all cursor-pointer" data-testid="radio-rush">
                <RadioGroupItem value="rush" id="rush" />
                <div className="flex-1">
                  <Label htmlFor="rush" className="cursor-pointer font-medium">
                    Rush (1 week)
                  </Label>
                  <p className="text-sm text-muted-foreground">+30% for expedited delivery</p>
                </div>
              </div>
            </RadioGroup>
          </div>

          <Button
            size="lg"
            className="w-full glow-border-strong"
            onClick={() => setShowQuote(true)}
            data-testid="button-calculate-quote"
          >
            Calculate Your Quote
          </Button>
        </CardContent>
      </Card>

      {showQuote && (
        <Card className="glow-border-strong h-fit sticky top-24" data-testid="card-quote-result">
          <CardHeader>
            <CardTitle className="text-2xl text-primary glow-text">Your Custom Quote</CardTitle>
            <CardDescription>Based on your selections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-muted-foreground">Base Website</span>
                <span className="font-semibold" data-testid="text-base-price">₹{basePrice.toLocaleString()}</span>
              </div>

              {options.features.length > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Additional Features</span>
                    <span className="font-semibold" data-testid="text-features-price">₹{featuresPrice.toLocaleString()}</span>
                  </div>
                  <div className="pl-4 space-y-1">
                    {options.features.map(feature => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-3 w-3 text-primary" />
                        <span className="capitalize">{feature.replace("-", " ")}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {options.timeline === "rush" && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Rush Delivery (+30%)</span>
                  <span className="font-medium">Applied</span>
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t text-lg">
                <span className="font-bold">Estimated Total</span>
                <span className="text-2xl font-bold text-primary glow-text" data-testid="text-total-price">₹{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Button
                size="lg"
                className="w-full glow-border-strong"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="button-get-quote"
              >
                Get This Quote
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Final pricing may vary based on specific requirements
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
