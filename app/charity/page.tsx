import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/Container";
import { profile } from "@/src/data/profile";

export default function CharityPage() {
  return (
    <>
      <Navbar />
      <main id="content">
        <PageIntro
          eyebrow="Giving"
          title="Responsibility, Care, and Long-term Commitment"
          description="A quieter and more grounded view of philanthropy, shaped by direct experience rather than presentation."
        />
        <section className="section-light py-16">
          <Container>
            <div className="max-w-4xl">
              <p className="text-base leading-8 text-slate-600">{profile.charityIntro}</p>
              <div className="mt-6 rounded-[28px] soft-card px-6 py-5">
                <p className="text-sm leading-7 text-slate-600">{profile.givingRule}</p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {profile.charity.map((item) => (
                <article
                  key={`${item.year ?? "ongoing"}-${item.title}`}
                  className="overflow-hidden rounded-[28px] soft-card"
                >
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                  ) : null}
                  <div className="p-6">
                    <div className="text-sm text-slate-500">{item.year ?? "Ongoing"}</div>
                    <h2 className="mt-2 font-serif text-2xl text-slate-900">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
