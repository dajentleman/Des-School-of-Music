import { motion } from "framer-motion";
import { Mic, Guitar, Drum, Music2, Headphones } from "lucide-react";

const instruments = [
  { name: "Voice", icon: Mic, desc: "Develop your unique vocal identity with contemporary techniques" },
  { name: "Guitar", icon: Guitar, desc: "Acoustic & electric — rock, blues, jazz, pop and more" },
  { name: "Bass", icon: Music2, desc: "Lock in the rhythm section with groove-focused training" },
  { name: "Drums", icon: Drum, desc: "Build rock-solid timing and creative fills" },
  { name: "Music Production", icon: Headphones, desc: "Learn DAWs, mixing, mastering and beat-making" },
];

const InstrumentsSection = () => (
  <section id="instruments" className="py-24 bg-card relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">What We Teach</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Choose Your Instrument</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {instruments.map((inst, i) => (
          <motion.div
            key={inst.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group p-8 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center hover:glow-gold"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <inst.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{inst.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{inst.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InstrumentsSection;
