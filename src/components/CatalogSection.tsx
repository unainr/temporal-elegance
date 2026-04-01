import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import watch1 from "@/assets/watch-1.jpg";
import watch2 from "@/assets/watch-2.jpg";
import watch3 from "@/assets/watch-3.jpg";
import watch4 from "@/assets/watch-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const catalog = [
  { img: watch1, name: "Patrimoine Classique", category: "Dress", price: "CHF 42,500" },
  { img: watch2, name: "Nautique Chronograph", category: "Sport", price: "CHF 68,900" },
  { img: watch3, name: "Grand Squelette", category: "Complication", price: "CHF 125,000" },
  { img: watch4, name: "Aquanaut Profonde", category: "Diver", price: "CHF 35,200" },
  { img: watch3, name: "Tourbillon Céleste", category: "Grand Complication", price: "CHF 298,000" },
  { img: watch1, name: "Héritage Perpétuel", category: "Perpetual Calendar", price: "CHF 89,500" },
];

const CatalogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".catalog-item").forEach((el, i) => {
      gsap.from(el, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="heritage" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">Full Catalog</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-foreground">
            The <span className="text-gradient-gold italic">Heritage</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalog.map((item, i) => (
            <div key={i} className="catalog-item group cursor-pointer">
              <div className="glass-surface overflow-hidden mb-4">
                <AspectRatio ratio={4 / 5}>
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </AspectRatio>
              </div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase mb-1">
                {item.category}
              </p>
              <h3 className="font-heading text-xl text-foreground mb-1">{item.name}</h3>
              <p className="font-mono text-sm text-muted-foreground">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
