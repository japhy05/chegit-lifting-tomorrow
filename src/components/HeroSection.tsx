import { motion } from "framer-motion";
import { ArrowRight, Eye, ChevronDown } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

const springTransition = { type: "spring", damping: 24, stiffness: 200 };

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Soft ambient orbs — iOS vibrancy feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full border border-primary/[0.03]"
        />
        <div className="absolute top-1/4 right-1/4 w-40 sm:w-72 h-40 sm:h-72 bg-indigo/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-56 sm:w-[420px] h-56 sm:h-[420px] bg-indigo-light/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-24 sm:py-32 md:py-40">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="flex justify-center order-first md:order-last"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 sm:-inset-10 bg-accent/8 rounded-full blur-3xl"
              />
              <div className="absolute -inset-1 bg-brand-gradient rounded-full opacity-15 blur-2xl" />
              <img
                src={heroPortrait}
                alt="Kibet Kemboi — Chegit"
                className="relative z-10 w-48 sm:w-64 md:w-80 lg:w-[400px] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-accent mb-6 sm:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-primary-foreground/60 font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium">
                Kibet Kemboi — Chegit
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.4 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.08]"
            >
              Empowering Youth.{" "}
              <span className="text-gradient-brand">Engineering Solutions.</span>{" "}
              <span className="block mt-2">Lifting Communities.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.6 }}
              className="text-primary-foreground/45 font-body text-sm sm:text-base md:text-lg mt-6 sm:mt-8 max-w-lg font-light tracking-wide"
            >
              Software Engineer · Youth Leader · Community Builder · Sustainability Advocate
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 mt-8 sm:mt-10"
            >
              <a
                href="#contact"
                className="group bg-brand-gradient text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-semibold text-sm sm:text-base hover:shadow-glow transition-all duration-500 flex items-center justify-center gap-3 active:scale-[0.97]"
                style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
              >
                Lift With Chegit
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="group glass-accent text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-semibold text-sm sm:text-base hover:bg-indigo/15 transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.97]"
                style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
              >
                <Eye size={17} /> View My Work
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-primary-foreground/25"
        >
          <span className="text-[10px] font-body tracking-[0.2em] uppercase hidden sm:block font-light">Scroll</span>
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
