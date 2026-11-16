import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/sections/SectionHeading";

export function About() {
  return (
    <section id="tentang" className="pt-14">
      <SectionHeading title="About Me" path="/tentang" />
      <div className="space-y-3.5">
        {profile.about.map((paragraph, i) => (
          <p key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
