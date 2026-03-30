"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import { profile } from "@/src/data/profile";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-home relative overflow-hidden bg-[#f8f6f2] py-20 sm:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay loop muted playsInline preload="auto" className="hero-home-video h-full w-full object-cover">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/58 to-black/48" />
      </div>

      <Container>
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div ref={contentRef} className="max-w-[760px]">
            <div className={`portfolio-block ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0s" }}>
              <p className="hero-kicker">Portfolio Note</p>
              <h1 className="hero-display">
                A quieter
                <span> way </span>
                <br />
                to think about
                <br />
                wealth and life.
              </h1>
            </div>

            <div className={`portfolio-panel ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0.16s" }}>
              <p className="hero-lead">
                Lucy Bailey works across finance, business, and real-world experience,
                building a perspective shaped by structure rather than noise.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {profile.person.success.slice(0, 2).map((t, i) => (
                  <p
                    key={t}
                    className={`hero-note ${visible ? "is-visible" : ""}`}
                    style={{ transitionDelay: `${0.28 + i * 0.16}s` }}
                  >
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className={`hero-image-wrap ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0.22s" }}>
            <div className="hero-image-card">
              <Image
                src="/images/hero-main-new.png"
                alt="Lucy Bailey portrait"
                width={1200}
                height={1600}
                className="aspect-[4/5] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
