import { motion } from "framer-motion";
import { ArrowRight, Eye, MessageCircle, ChevronDown } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full border border-primary/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full border border-primary/5"
        />
        <div className="absolute top-1/4 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-indigo/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-indigo-light/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-24 sm:py-32 md:py-40">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Portrait - show on mobile too */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center order-first md:order-last"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-6 sm:-inset-8 bg-accent/10 rounded-full blur-3xl"
              />
              <div className="absolute -inset-1 bg-brand-gradient rounded-full opacity-20 blur-2xl" />
              <img
                src={heroPortrait}
                alt="Kibet Kemboi — Chegit"
                className="relative z-10 w-48 sm:w-64 md:w-80 lg:w-[420px] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-accent mb-6 sm:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-primary-foreground/70 font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                Kibet Kemboi — Chegit
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1]"
            >
              Empowering Youth.{" "}
              <span className="text-gradient-brand">Engineering Solutions.</span>{" "}
              <span className="block mt-2">Lifting Communities.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-primary-foreground/50 font-body text-sm sm:text-base md:text-lg mt-6 sm:mt-8 max-w-lg"
            >
              Software Engineer · Youth Leader · Community Builder · Sustainability Advocate
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 mt-8 sm:mt-10"
            >
              <a
                href="#contact"
                className="group bg-brand-gradient text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:shadow-glow transition-all duration-500 flex items-center justify-center gap-3"
              >
                Lift With Chegit
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="group glass-accent text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-indigo/20 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Eye size={18} /> View My Work
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
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-primary-foreground/30"
        >
          <span className="text-xs font-body tracking-widest uppercase hidden sm:block">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
