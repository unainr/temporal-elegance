import { useState } from "react";
import { Watch, Menu, X } from "lucide-react";
import WaitlistDialog from "./WaitlistDialog";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="glass-navbar fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Watch className="w-5 h-5 text-primary" />
          <span className="font-heading text-xl tracking-[0.2em] text-foreground uppercase">
            Chronos
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Collection", "Movement", "Heritage", "Atelier"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <WaitlistDialog />
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden glass-navbar border-t border-border px-6 py-6 flex flex-col gap-4">
          {["Collection", "Movement", "Heritage", "Atelier"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm tracking-[0.15em] text-muted-foreground uppercase hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <WaitlistDialog />
        </div>
      )}
    </header>
  );
};

export default Navbar;
