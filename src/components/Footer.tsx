import { Watch } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Watch className="w-4 h-4 text-primary" />
          <span className="font-heading text-lg tracking-[0.2em] text-foreground uppercase">
            Chronos
          </span>
        </div>
        <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase">
          © 2024 Chronos Manufacture · Geneva, Switzerland
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
