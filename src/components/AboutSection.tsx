import { motion } from "framer-motion";
import { Users, Award, Globe, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "1:1", label: "Live Online Sessions" },
  { icon: Award, value: "Trinity", label: "Rock & Pop Aligned" },
  { icon: Globe, value: "Global", label: "Learn From Anywhere" },
  { icon: Zap, value: "All Ages", label: "8 to 80, Everyone Welcome" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">About Us</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Western Contemporary Music, <span className="text-primary">Redefined</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Des School of Music is dedicated to teaching western contemporary music — from rock and pop to jazz and electronic. Our curriculum is aligned with Trinity College London's Rock & Pop graded examinations, giving you internationally recognized milestones on your musical journey.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're picking up an instrument for the first time or preparing for your Grade 8 exam, our certified instructors deliver personalized 1-on-1 lessons tailored to your pace and goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-card border border-border/50 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
