import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioProject } from "@shared/schema";

export function PortfolioSection() {
  const { data: projects, isLoading } = useQuery<PortfolioProject[]>({
    queryKey: ["/api/portfolio"],
  });

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary glow-text" data-testid="heading-portfolio">
            My Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-portfolio-description">
            See how we've helped businesses like yours shine online
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-2 glow-border group"
                data-testid={`card-project-${index}`}
              >
                <div className="aspect-video overflow-hidden bg-muted relative">
                  <div className="w-full h-full relative overflow-hidden">
                    <iframe
                      src={project.liveUrl}
                      title={project.title}
                      className="absolute top-0 left-0 border-0 pointer-events-none origin-top-left"
                      style={{
                        width: '1280px',
                        height: '720px',
                        transform: 'scale(0.28)',
                        transformOrigin: 'top left',
                        overflow: 'hidden'
                      }}
                      data-testid={`iframe-project-${index}`}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                      referrerPolicy="no-referrer"
                      scrolling="no"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold" data-testid={`text-project-title-${index}`}>
                        {project.title}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium whitespace-nowrap">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground" data-testid={`text-project-description-${index}`}>
                      {project.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group/btn"
                    asChild
                    data-testid={`button-view-project-${index}`}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Site
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
