import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Zap, Layers, Watch } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const specs = [
  { icon: Watch, label: "Caliber", value: "CH 29-535 PS", desc: "Manual-winding mechanical movement with 33 jewels" },
  { icon: Zap, label: "Power Reserve", value: "72 Hours", desc: "Twin mainspring barrels for extended autonomy" },
  { icon: ShieldCheck, label: "Water Resistance", value: "300m / 1000ft", desc: "Oyster case with Triplock crown system" },
  { icon: Layers, label: "Components", value: "354 Parts", desc: "Hand-assembled and decorated by master watchmakers" },
];

const MovementSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".spec-card").forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="movement" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
            The Movement
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-foreground">
            Engineering <span className="text-gradient-gold italic">Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="spec-card glass-surface p-8 group hover:border-primary/30 transition-all duration-500"
            >
              <spec.icon className="w-5 h-5 text-primary mb-6" />
              <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase mb-2">
                {spec.label}
              </p>
              <p className="font-heading text-2xl text-foreground mb-3">{spec.value}</p>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovementSection;
