import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.floor(obj.val)),
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete,
        });
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="mb-8">
        <svg width="60" height="60" viewBox="0 0 60 60" className="animate-ticker">
          <circle cx="30" cy="30" r="28" fill="none" stroke="hsl(var(--gold))" strokeWidth="0.5" />
          <line x1="30" y1="30" x2="30" y2="8" stroke="hsl(var(--gold))" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="30" y1="30" x2="42" y2="24" stroke="hsl(var(--gold))" strokeWidth="1" strokeLinecap="round" />
          <circle cx="30" cy="30" r="2" fill="hsl(var(--gold))" />
        </svg>
      </div>
      <p className="font-heading text-lg tracking-[0.3em] text-muted-foreground uppercase mb-4">
        Calibrating
      </p>
      <span ref={counterRef} className="font-mono text-5xl text-gradient-gold font-light">
        {String(count).padStart(3, "0")}
      </span>
    </div>
  );
};

export default Preloader;
