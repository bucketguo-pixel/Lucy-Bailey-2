
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function HomePage() {
  const sections = [
    { title:"About",desc:"Background, identity, and perspective.",href:"/about"},
    { title:"Career",desc:"A path shaped by structure and change.",href:"/career"},
    { title:"Business",desc:"Investment, risk, and real-world decisions.",href:"/business"},
    { title:"Giving",desc:"Responsibility beyond capital.",href:"/charity"},
  ]

  return (
    <>
      <Navbar/>
      <main>
        <Hero/>

        <section className="py-24">
          <Container>
            <div className="grid md:grid-cols-2 gap-10">
              {sections.map(s=>(
                <Link key={s.title} href={s.href}
                  className="group border-b pb-6 hover:opacity-70 transition">
                  <div className="text-2xl font-serif text-slate-900">{s.title}</div>
                  <div className="mt-2 text-sm text-slate-500">{s.desc}</div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

      </main>
      <Footer/>
    </>
  )
}
