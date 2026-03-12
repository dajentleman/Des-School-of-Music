import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 animated-gradient-bg" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
          Ready to Start Your <span className="text-primary">Musical Journey?</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-10">
          Book a free trial lesson and discover what Des School of Music can do for you.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 text-lg glow-gold group">
            Book Free Trial
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10 text-lg border-muted-foreground/30 text-foreground hover:bg-muted">
            Contact Us
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
