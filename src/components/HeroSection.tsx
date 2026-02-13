import { motion } from "framer-motion";
import { ArrowRight, Eye, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Lifting light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Kibet Kemboi — Chegit
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-5xl mx-auto"
        >
          Empowering Youth.{" "}
          <span className="text-gradient-gold">Engineering Solutions.</span>{" "}
          Lifting Communities.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary-foreground/70 font-body text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8"
        >
          Software Engineer · Youth Leader · Community Builder · Sustainability Advocate
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="#contact"
            className="bg-gold text-accent-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:opacity-90 transition-opacity flex items-center gap-2 shadow-gold"
          >
            Lift With Chegit <ArrowRight size={18} />
          </a>
          <a
            href="#projects"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:bg-primary-foreground/10 transition-colors flex items-center gap-2"
          >
            <Eye size={18} /> View My Work
          </a>
          <a
            href="#contact"
            className="text-primary-foreground/80 hover:text-gold transition-colors font-medium flex items-center gap-2"
          >
            <MessageCircle size={18} /> Connect With Me
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
