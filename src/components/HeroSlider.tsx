import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Master Your Voice",
    subtitle: "Contemporary vocal training from beginner to pro",
    accent: "Voice",
  },
  {
    title: "Shred the Guitar",
    subtitle: "Acoustic & electric guitar — all styles, all levels",
    accent: "Guitar",
  },
  {
    title: "Lock in the Groove",
    subtitle: "Bass guitar fundamentals to advanced techniques",
    accent: "Bass",
  },
  {
    title: "Feel the Beat",
    subtitle: "Drums & percussion — rhythm is everything",
    accent: "Drums",
  },
  {
    title: "Produce Like a Pro",
    subtitle: "Music production, mixing & mastering from scratch",
    accent: "Production",
  },
  {
    title: "Teach. Inspire. Get Hired.",
    subtitle: "For musicians, by musicians — join our team of passionate educators empowering the next generation",
    accent: "Musicians",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => setCurrent((p) => (p + dir + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center animated-gradient-bg overflow-hidden">
      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            ["--duration" as string]: `${3 + i}s`,
            ["--delay" as string]: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.p
              className="text-primary font-display text-lg font-semibold tracking-widest uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slides[current].accent}
            </motion.p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-900 leading-tight mb-6 text-foreground">
              {slides[current].title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {slides[current].subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-lg glow-gold">
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg border-muted-foreground/30 text-foreground hover:bg-muted">
                Explore Courses
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-16">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-primary" : "w-4 bg-muted-foreground/30"}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button onClick={() => go(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={() => go(1)} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
