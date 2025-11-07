import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";
import { Loader2, Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const handlePrevious = () => {
    if (!testimonials) return;
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!testimonials) return;
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (isLoading) {
    return (
      <section className="py-20 px-4">
        <div className="flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary glow-text" data-testid="heading-testimonials">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-description">
            Don't just take our word for it - hear from businesses we've helped grow online
          </p>
        </div>

        <div className="relative">
          <Card className="glow-border hover-elevate transition-all duration-300" data-testid="card-testimonial">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center space-y-6">
                <Quote className="h-12 w-12 text-primary/30" />
                
                <div className="flex gap-1">
                  {Array.from({ length: parseInt(currentTestimonial.rating) }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl" data-testid="text-testimonial-content">
                  "{currentTestimonial.content}"
                </blockquote>

                <div className="pt-4">
                  <div className="font-semibold text-lg" data-testid="text-testimonial-name">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid="text-testimonial-role">
                    {currentTestimonial.role}, {currentTestimonial.business}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="hover-elevate"
              data-testid="button-prev-testimonial"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary glow-border"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  data-testid={`dot-testimonial-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="hover-elevate"
              data-testid="button-next-testimonial"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
