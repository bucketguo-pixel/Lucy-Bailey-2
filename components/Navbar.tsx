import Link from "next/link";
import { Container } from "@/components/Container";

export function Navbar() {
  return (
    <header className="py-6">
      <Container>
        <div className="flex items-start justify-between gap-8">
          <Link href="/" className="brand-wordmark leading-none text-slate-900">
            Lucy Bailey
          </Link>

          <nav className="flex gap-6 pt-2 text-sm text-slate-500">
            <Link href="/about">About</Link>
            <Link href="/career">Career</Link>
            <Link href="/business">Business</Link>
            <Link href="/charity">Giving</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
