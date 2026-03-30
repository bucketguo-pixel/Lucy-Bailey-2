import { Container } from "@/components/Container";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="page-band pt-16 sm:pt-20">
      <Container>
        <div className="border-b light-line pb-10">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            {eyebrow}
          </div>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
