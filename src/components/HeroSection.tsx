import { motion } from "framer-motion";
import { ArrowRight, Eye, MessageCircle } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-accent font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
            >
              Kibet Kemboi — Chegit
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight"
            >
              Empowering Youth.{" "}
              <span className="text-gradient-brand">Engineering Solutions.</span>{" "}
              Lifting Communities.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-primary-foreground/60 font-body text-base md:text-lg mt-6"
            >
              Software Engineer · Youth Leader · Community Builder · Sustainability Advocate
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 mt-10"
            >
              <a
                href="#contact"
                className="bg-accent text-accent-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:opacity-90 transition-opacity flex items-center gap-2 shadow-brand"
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
                className="text-primary-foreground/70 hover:text-accent transition-colors font-medium flex items-center gap-2"
              >
                <MessageCircle size={18} /> Connect
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl" />
              <img
                src={heroPortrait}
                alt="Kibet Kemboi — Chegit"
                className="relative z-10 w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
