import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="section-light py-24" id="content">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink/55">404</p>
            <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Page not found</h1>
            <p className="mt-4 text-sm leading-8 text-ink/68 sm:text-base">
              The page you are looking for does not exist or may have been moved.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex rounded-full border light-line bg-white px-5 py-3 text-sm text-ink transition hover:bg-paper"
            >
              Return Home
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
