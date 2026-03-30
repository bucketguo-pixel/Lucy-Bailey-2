import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/Container";
import { CopyEmail } from "@/components/CopyEmail";
import { profile } from "@/src/data/profile";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="content">
        <PageIntro
          eyebrow="Contact"
          title="Start a Thoughtful Conversation"
          description="For discussions around business, asset allocation, strategic capital, and long-term value creation."
        />
        <section className="section-light py-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div className="rounded-[28px] soft-card p-7">
                <div className="text-sm text-slate-500">Email</div>
                <div className="mt-2 font-serif text-3xl text-slate-900">{profile.person.email}</div>
                <div className="mt-6">
                  <CopyEmail email={profile.person.email} />
                </div>
                <div className="mt-8">
                  <a
                    href="https://www.facebook.com/Ella.Windsor.13408"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full soft-pill px-4 py-2 text-sm text-slate-700 hover:bg-white"
                  >
                    Facebook
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] soft-card p-7">
                <h2 className="font-serif text-2xl text-slate-900">Areas of Conversation</h2>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  <li>Asset allocation and long-term wealth strategy</li>
                  <li>Consumer-business investment and capital structure</li>
                  <li>Gold, foreign exchange, and risk-aware market thinking</li>
                  <li>Philanthropy, education, and value-driven growth</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
