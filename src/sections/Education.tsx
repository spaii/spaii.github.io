import { educations } from "@/data/portfolio";
import { SectionHeading } from "@/sections/SectionHeading";

export function Education() {
  return (
    <section id="pendidikan" className="pt-14">
      <SectionHeading title="Education" path="/pendidikan" />
      <div className="space-y-10">
        {educations.map((edu, i) => (
          <div
            key={`${edu.school}-${edu.period}`}
            className="grid gap-x-6 gap-y-2 sm:grid-cols-[132px_minmax(0,1fr)]"
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <div className="font-mono text-xs text-muted-foreground">
              {edu.period}
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <div className="flex items-center gap-3 py-1">
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={`Logo ${edu.school}`}
                    className="size-10 rounded-sm bg-white object-contain p-1"
                  />
                )}
                <p>{edu.school}</p>
              </div>

              {edu.gpa && (
                <p className="mt-1.5 text-[15px]">
                  IPK <b className="font-mono font-medium">{edu.gpa}</b>
                </p>
              )}
              {edu.thesis && (
                <p className="mt-2.5 max-w-[60ch] text-[15px]">
                  <strong className="font-semibold">Skripsi:</strong>{" "}
                  {edu.thesis}
                </p>
              )}
              {(edu.courses || edu.organization) && (
                <p className="mt-3.5 max-w-[60ch] text-muted-foreground">
                  {edu.courses && (
                    <>
                      <strong className="font-semibold text-foreground">
                        Mata kuliah relevan:
                      </strong>{" "}
                      {edu.courses}.{" "}
                    </>
                  )}
                  {edu.organization && (
                    <>
                      <strong className="font-semibold text-foreground">
                        Organisasi:
                      </strong>{" "}
                      {edu.organization}.
                    </>
                  )}
                </p>
              )}
              {edu.note && (
                <p className="mt-3.5 max-w-[60ch] text-muted-foreground">
                  {edu.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
