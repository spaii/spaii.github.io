import { ArrowUpRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { certificates } from "@/data/portfolio";
import { SectionHeading } from "@/sections/SectionHeading";

export function Certificates() {
  if (certificates.length === 0) return null;

  return (
    <section id="sertifikat" className="pt-14">
      <SectionHeading title="Certificates" path="/sertifikat" />
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {certificates.map((cert, i) => (
          <div
            key={cert.image}
            className="w-[280px] shrink-0 snap-start sm:w-[340px]"
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group w-full cursor-zoom-in overflow-hidden rounded-lg border bg-card text-left transition-colors hover:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <img
                    src={cert.image}
                    alt={`Sertifikat ${cert.title}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full border-b object-cover object-top"
                  />
                  <div className="p-4">
                    <p className="font-display font-bold">{cert.title}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{cert.title}</DialogTitle>
                  <DialogDescription>
                    {cert.issuer} · {cert.year}
                  </DialogDescription>
                </DialogHeader>
                <img
                  src={cert.image}
                  alt={`Sertifikat ${cert.title}`}
                  className="max-h-[70vh] w-full rounded-md border object-contain"
                />
                {cert.href && (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Verifikasi sertifikat
                    <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </section>
  );
}
