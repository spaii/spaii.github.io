type SectionHeadingProps = {
  title: string;
  path: string;
};

export function SectionHeading({ title, path }: SectionHeadingProps) {
  return (
    <div className="mb-7 flex items-baseline gap-3.5" data-aos="fade-up">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <span className="font-mono text-xs text-muted-foreground">{path}</span>
    </div>
  );
}
