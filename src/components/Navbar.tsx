import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["About", "Instruments", "Why Us", "Testimonials", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-3">
          <span className="font-display text-xl font-bold text-foreground">
            Des <span className="text-primary">School of Music</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {link}
            </a>
          ))}
          <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            Book Free Trial
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
              <Button className="bg-primary text-primary-foreground rounded-full">Book Free Trial</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
