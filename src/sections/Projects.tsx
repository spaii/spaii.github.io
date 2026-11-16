import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/sections/SectionHeading";

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollByPage(direction: 1 | -1) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <section id="proyek" className="pt-14">
      <SectionHeading title="Projects" path="/proyek" />

      <div data-aos="fade-up">
        <div
          ref={scrollRef}
          role="region"
          aria-label="Daftar proyek, geser ke samping"
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              className="w-[85%] shrink-0 snap-start sm:w-96"
            >
              <CardHeader>
                <CardDescription className="font-mono text-xs">
                  {project.period} · {project.role}
                </CardDescription>
                <CardTitle className="font-display text-xl font-bold">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {project.image && (
                  <img
                    src={project.image}
                    alt={`Tangkapan layar ${project.title}`}
                    loading="lazy"
                    className="aspect-video w-full rounded-md border object-cover"
                  />
                )}
                <p>{project.description}</p>
                <p className="text-sm text-muted-foreground">
                  <strong className="font-semibold text-foreground">
                    Hasil:
                  </strong>{" "}
                  {project.result}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1 pt-1 text-sm font-medium">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            {projects.length} proyek · geser ke samping
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Proyek sebelumnya"
              onClick={() => scrollByPage(-1)}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Proyek berikutnya"
              onClick={() => scrollByPage(1)}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
