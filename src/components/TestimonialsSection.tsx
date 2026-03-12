import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "Des School helped me clear my Trinity Grade 5 guitar exam in just 8 months!", name: "Arjun M.", detail: "Age 16 · Guitar" },
  { quote: "The vocal training transformed my singing. I finally understand my voice.", name: "Priya S.", detail: "Age 28 · Vocals" },
  { quote: "Never too late to learn — I started drums at 40 and I'm loving every beat.", name: "Rohan K.", detail: "Age 42 · Drums" },
  { quote: "The production course opened up a whole new career path for me.", name: "Sneha T.", detail: "Age 22 · Music Production" },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-card relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">What Our Students Say</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-2xl bg-secondary/30 border border-border/30 relative"
          >
            <Quote className="w-8 h-8 text-primary/30 mb-4" />
            <p className="text-foreground text-lg leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold">
                {t.name[0]}
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
