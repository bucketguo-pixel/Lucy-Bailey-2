import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/Container";
import { profile } from "@/src/data/profile";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="content">
        <PageIntro
          eyebrow="About"
          title="About Lucy Bailey"
          description=""
        />
        <section className="section-light py-16">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
              <div className="max-w-4xl space-y-6 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>{profile.person.statement}</p>
                <p>{profile.person.summary}</p>
                {profile.person.success.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="overflow-hidden rounded-[28px] border soft-line bg-white/70 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <Image
                  src="/images/about-new2.png"
                  alt="Lucy Bailey portrait"
                  width={900}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
