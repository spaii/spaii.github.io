import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/sections/SectionHeading";

export function Skills() {
  return (
    <section id="keahlian" className="pt-14">
      <SectionHeading title="Skills" path="/keahlian" />
      <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-[132px_minmax(0,1fr)]">
        {skills.map((group, i) => (
          <div key={group.label} className="contents">
            <dt
              className="pt-1 font-mono text-xs text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              {group.label}
            </dt>
            <dd
              className="flex flex-wrap gap-1.5"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              {group.items.map((item) => (
                <Badge key={item} variant="secondary" className="text-sm">
                  {item}
                </Badge>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
