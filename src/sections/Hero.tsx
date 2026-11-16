import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="border-b pt-14 pb-12 sm:pt-16">
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-8">
        <div className="min-w-0">
          <p
            className="font-mono text-[13px] tracking-wide text-primary"
            data-aos="fade-up"
          >
            {profile.headline}
          </p>
          <h1
            className="mt-3.5 text-[clamp(2.6rem,9vw,4.6rem)] leading-[1.05] font-bold tracking-tight"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            {profile.name}
          </h1>
          <p
            className="mt-5 max-w-[56ch] text-lg text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            {profile.intro}
          </p>
        </div>
        {profile.photo && (
          <img
            src={profile.photo}
            alt={`Foto ${profile.name}`}
            className="order-first size-40 shrink-0 rounded-md border bg-card object-cover p-1 sm:order-last sm:size-60"
            data-aos="zoom-in"
          />
        )}
      </div>

      <div
        className="mt-8 overflow-x-auto rounded-md bg-card p-4 font-mono text-[13px] leading-7"
        aria-label="Ringkasan singkat"
        data-aos="fade-up"
        data-aos-delay="240"
      >
        {profile.status.map((row) => (
          <div key={row.key} className="whitespace-nowrap">
            <span className="inline-block w-20 text-muted-foreground">
              {row.key}
            </span>
            <span className={cn(row.highlight && "text-primary")}>
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <div
        className="mt-7 flex flex-wrap gap-3"
        data-aos="fade-up"
        data-aos-delay="320"
      >
        <Button asChild>
          <a href="#proyek">Lihat proyek</a>
        </Button>
        <Button asChild variant="outline">
          <a href="#kontak">Hubungi saya</a>
        </Button>
        {profile.cvUrl && (
          <Button asChild variant="ghost">
            <a href={profile.cvUrl} target="_blank" rel="noreferrer">
              <Download /> Unduh CV
            </a>
          </Button>
        )}
      </div>
    </section>
  );
}
