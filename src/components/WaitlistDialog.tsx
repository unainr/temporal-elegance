import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Watch } from "lucide-react";

const WaitlistDialog = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="font-mono text-xs tracking-[0.15em] uppercase px-6 py-2.5 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500">
          Join Waitlist
        </button>
      </DialogTrigger>
      <DialogContent className="glass-surface border-primary/20 max-w-md">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Watch className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="font-heading text-3xl font-light text-foreground">
            Exclusive Access
          </DialogTitle>
          <DialogDescription className="font-mono text-xs text-muted-foreground leading-relaxed">
            Join our private waitlist to receive early access to limited editions
            and bespoke commissions.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="text-center py-8">
            <p className="font-heading text-xl text-primary mb-2">Welcome to the Circle</p>
            <p className="font-mono text-xs text-muted-foreground">
              We'll be in touch with exclusive previews.
            </p>
          </div>
        ) : (
          <form
            className="space-y-4 mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <Input
              placeholder="Full Name"
              className="bg-secondary border-border font-mono text-sm text-foreground placeholder:text-muted-foreground"
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-secondary border-border font-mono text-sm text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button
              type="submit"
              className="w-full font-mono text-xs tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 py-5"
            >
              Request Access
            </Button>
            <p className="text-center font-mono text-[10px] text-muted-foreground">
              Limited to 200 members per quarter
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
