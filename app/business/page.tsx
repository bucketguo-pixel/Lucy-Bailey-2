import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/Container";
import { profile } from "@/src/data/profile";

export default function BusinessPage() {
  return (
    <>
      <Navbar />
      <main id="content">
        <PageIntro
          eyebrow="Business"
          title="A Practical Approach to Capital and Risk"
          description="Less about performance language, more about how judgment, timing, and structure shape long-term decisions."
        />
        <section className="section-light py-16">
          <Container>
            <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[28px] soft-card p-7">
                <h2 className="font-serif text-3xl text-slate-900">Core Perspective</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600">
                  <p>
                    Lucy Bailey's work connects institutional finance, real-world business exposure,
                    and more liquid market participation. The emphasis is on calm decision-making,
                    disciplined allocation, and understanding where risk truly sits.
                  </p>
                  <ul className="list-disc space-y-2 pl-5">
                    {profile.brandStats.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-[28px] soft-card p-7">
                <h2 className="font-serif text-3xl text-slate-900">Investment Practice</h2>
                <p className="mt-5 text-sm leading-8 text-slate-600">{profile.investmentText}</p>
                <div className="mt-6 grid gap-3">
                  {profile.investments.map((item) => (
                    <div key={item.title} className="rounded-2xl border soft-line bg-white/60 px-4 py-4">
                      <div className="font-medium text-slate-900">{item.title}</div>
                      <div className="mt-1 text-sm leading-7 text-slate-600">{item.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
