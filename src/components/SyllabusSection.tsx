import { motion } from "framer-motion";
import { Award, Gauge } from "lucide-react";

const SyllabusSection = () => (
  <section id="syllabus" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card opacity-50" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Your Path</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          Two Ways to <span className="text-primary">Learn</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          Choose the learning path that fits your goals — structured exam preparation or flexible self-paced growth.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Trinity Path */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Award className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Trinity Graded Path</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Follow the internationally recognized Trinity College London Rock & Pop syllabus. Progress through Grades 1–8 with structured milestones and certified examinations.
          </p>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 8 }, (_, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
              >
                Grade {i + 1}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Perfect for students seeking formal qualifications and a clear roadmap.
          </p>
        </motion.div>

        {/* Self-paced Path */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -6 }}
          className="p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
            <Gauge className="w-7 h-7 text-accent" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Learn at Your Pace</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            No exams, no pressure. Learn songs you love, explore genres freely, and develop your skills at a pace that works for you — guided by expert mentors every step of the way.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Beginner", "Intermediate", "Advanced", "Pro"].map((level) => (
              <span
                key={level}
                className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
              >
                {level}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Ideal for hobbyists, songwriters, and anyone who wants to learn on their own terms.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SyllabusSection;
