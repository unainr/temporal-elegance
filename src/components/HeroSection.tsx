import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(headingRef.current, { y: 80, opacity: 0, duration: 1.2, delay: 0.3 })
      .from(subRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury mechanical watch movement"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-mono text-xs tracking-[0.4em] text-primary uppercase mb-6">
          Est. 1847 · Swiss Made
        </p>
        <h1
          ref={headingRef}
          className="font-heading text-5xl sm:text-7xl lg:text-8xl font-light text-foreground leading-[0.95] mb-8"
        >
          Where Time
          <br />
          <span className="text-gradient-gold italic">Becomes Art</span>
        </h1>
        <p
          ref={subRef}
          className="font-mono text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10"
        >
          Each timepiece is a testament to 176 years of uncompromising craftsmanship,
          precision engineering, and the relentless pursuit of horological perfection.
        </p>
        <a
          ref={ctaRef}
          href="#collection"
          className="inline-block font-mono text-xs tracking-[0.2em] uppercase px-8 py-4 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 glow-gold"
        >
          View Collection
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
