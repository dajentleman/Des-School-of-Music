import { Music } from "lucide-react";

const Footer = () => (
  <footer className="py-12 bg-card border-t border-border/30">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Music className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-foreground">Des School of Music</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#instruments" className="hover:text-primary transition-colors">Instruments</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Des School of Music. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
