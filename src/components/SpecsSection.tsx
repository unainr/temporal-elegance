import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const specGroups = [
  {
    title: "Case & Dial",
    items: [
      { label: "Case Size", value: "40.5mm" },
      { label: "Case Material", value: "18K Rose Gold" },
      { label: "Crystal", value: "Sapphire, anti-reflective coating" },
      { label: "Dial Color", value: "Noir Grand Feu Enamel" },
      { label: "Water Resistance", value: "300m / 30 bar" },
    ],
  },
  {
    title: "Movement",
    items: [
      { label: "Caliber", value: "CH 29-535 PS" },
      { label: "Type", value: "Manual-winding mechanical" },
      { label: "Frequency", value: "28,800 vph (4 Hz)" },
      { label: "Power Reserve", value: "Approx. 72 hours" },
      { label: "Jewels", value: "33" },
    ],
  },
  {
    title: "Strap & Clasp",
    items: [
      { label: "Strap Material", value: "Hand-stitched alligator leather" },
      { label: "Clasp", value: "18K Rose Gold fold-over clasp" },
      { label: "Lug Width", value: "21mm" },
    ],
  },
];

const SpecsSection = () => {
  return (
    <section id="atelier" className="py-32 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
            Technical Specifications
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-light text-foreground">
            The <span className="text-gradient-gold italic">Details</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {specGroups.map((group) => (
            <AccordionItem
              key={group.title}
              value={group.title}
              className="glass-surface px-6 border-border"
            >
              <AccordionTrigger className="font-heading text-xl text-foreground hover:text-primary py-6">
                {group.title}
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                        {item.label}
                      </span>
                      <span className="font-mono text-sm text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SpecsSection;
