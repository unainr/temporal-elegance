import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import watch1 from "@/assets/watch-1.jpg";
import watch2 from "@/assets/watch-2.jpg";
import watch3 from "@/assets/watch-3.jpg";
import watch4 from "@/assets/watch-4.jpg";
import gearsBg from "@/assets/gears-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

const watches = [
  { img: watch1, name: "Patrimoine Classique", price: "CHF 42,500", ref: "Ref. 5170G-010" },
  { img: watch2, name: "Nautique Chronograph", price: "CHF 68,900", ref: "Ref. 5711/1A-014" },
  { img: watch3, name: "Grand Squelette", price: "CHF 125,000", ref: "Ref. 5303R-001" },
  { img: watch4, name: "Aquanaut Profonde", price: "CHF 35,200", ref: "Ref. 5167A-012" },
];

const HorizontalShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || !sectionRef.current) return;
    const totalScroll = trackRef.current.scrollWidth - window.innerWidth;

    gsap.to(trackRef.current, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Parallax background
    gsap.to(bgRef.current, {
      x: -totalScroll * 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 1,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="collection" className="relative h-screen overflow-hidden">
      {/* Parallax gears background */}
      <div ref={bgRef} className="absolute inset-0 w-[200%]">
        <img
          src={gearsBg}
          alt=""
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-background/80" />

      <div ref={trackRef} className="relative z-10 flex items-center h-full gap-8 px-[10vw]" style={{ width: "fit-content" }}>
        {/* Section title card */}
        <div className="flex-shrink-0 w-[40vw] flex flex-col justify-center pr-16">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">The Collection</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Masterpieces of <span className="text-gradient-gold italic">Precision</span>
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-md">
            Scroll to explore our curated selection of exceptional timepieces,
            each representing the pinnacle of horological artistry.
          </p>
        </div>

        {watches.map((w) => (
          <div
            key={w.name}
            className="flex-shrink-0 w-[350px] sm:w-[400px] group cursor-pointer"
          >
            <div className="glass-surface overflow-hidden mb-6">
              <div className="aspect-square overflow-hidden">
                <img
                  src={w.img}
                  alt={w.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase mb-1">
              {w.ref}
            </p>
            <h3 className="font-heading text-2xl text-foreground mb-2">{w.name}</h3>
            <p className="font-mono text-sm text-muted-foreground">{w.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalShowcase;
