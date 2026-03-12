import { motion } from "framer-motion";
import { GraduationCap, Star, Clock, Video } from "lucide-react";

const features = [
  { icon: Video, title: "Live 1:1 Online Classes", desc: "Real-time, personalized instruction — not pre-recorded videos." },
  { icon: GraduationCap, title: "Trinity Exam Prep", desc: "Curriculum aligned with Trinity Rock & Pop Grades 1–8." },
  { icon: Star, title: "Certified Instructors", desc: "Learn from professional musicians with performance & teaching experience." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Book sessions that fit your schedule. Learn at your pace." },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-24 animated-gradient-bg relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Built for Real Musicians</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex gap-5 p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/30 hover:border-primary/40 transition-all"
          >
            <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
