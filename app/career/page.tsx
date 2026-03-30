import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/Container";
import { profile } from "@/src/data/profile";
import { Timeline } from "@/components/Timeline";

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main id="content">
        <PageIntro
          eyebrow="Career"
          title="Education, Finance, Business, and Transition"
        />
        <section className="section-light py-16">
          <Container>
            <div className="grid gap-8 xl:grid-cols-2">
              <div className="rounded-[28px] soft-card p-7">
                <h2 className="font-serif text-3xl text-slate-900">Education</h2>
                <p className="mt-3 text-sm text-slate-500">
                  {profile.education.school} · {profile.education.years}
                </p>
                <p className="mt-5 text-sm leading-8 text-slate-600">{profile.education.text}</p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-8 text-slate-600">
                  {profile.education.awards.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <div className="mt-8 overflow-hidden rounded-[22px] border soft-line">
                  <img src="/images/career-education-new.png" alt="Education" className="aspect-[4/3] w-full object-cover" />
                </div>
              </div>

              <div className="rounded-[28px] soft-card p-7">
                <h2 className="font-serif text-3xl text-slate-900">Career</h2>
                <div className="mt-5 space-y-7">
                  {profile.career.map((item) => (
                    <div key={item.name}>
                      <h3 className="font-serif text-2xl text-slate-900">{item.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{item.years}</p>
                      <div className="mt-3 space-y-3 text-sm leading-8 text-slate-600">
                        {item.points.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-14">
              <h2 className="font-serif text-3xl text-slate-900">Timeline</h2>
              <div className="mt-8 max-w-4xl">
                <Timeline items={profile.timeline} />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
