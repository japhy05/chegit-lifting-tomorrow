import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, MapPin } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpeg";

const spring = { type: "spring" as const, damping: 24, stiffness: 200 };

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo/[0.03] rounded-full blur-[160px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8" ref={ref}>
        <div className="grid md:grid-cols-5 gap-8 sm:gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...spring }}
            className="md:col-span-2"
          >
            <div className="relative group max-w-xs sm:max-w-sm mx-auto md:max-w-none">
              <div className="absolute -inset-4 bg-brand-gradient rounded-3xl opacity-15 blur-xl group-hover:opacity-25 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-3xl shadow-ios-lg">
                <img
                  src={aboutPhoto}
                  alt="Kibet Kemboi"
                  className="relative rounded-3xl w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent rounded-3xl" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...spring, delay: 0.1 }}
            className="md:col-span-3"
          >
            <p className="text-accent font-body text-[11px] tracking-[0.3em] uppercase mb-4 font-semibold">
              About Chegit
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-10 leading-tight">
              A Name That Means{" "}
              <span className="text-gradient-brand">To Lift</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-accent rounded-2xl mb-6 sm:mb-8"
            >
              <MapPin size={13} className="text-accent" />
              <span className="text-xs sm:text-sm font-body text-foreground/75 font-medium">
                Born in Plateau, Eldoret · Raised in Metkei, Elgeyo Marakwet County
              </span>
            </motion.div>

            <div className="space-y-4 sm:space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base md:text-[17px] font-body font-light">
              <p>
                <strong className="text-foreground font-semibold">"Chegit"</strong> is a Kalenjin name meaning{" "}
                <em>car jack</em> — a tool that lifts. Just as a car jack elevates a vehicle so it can
                move forward, Kibet Kemboi has dedicated his life to lifting people, communities, and
                ideas so they can rise to their fullest potential.
              </p>
              <p>
                As a software engineer by training and a community builder by conviction, Chegit bridges
                the worlds of technology and grassroots leadership. From the digital boardrooms of tech
                innovation to the dusty grounds of rural Kenya, his mission remains singular: to empower
                youth, champion sustainability, and model the kind of transformational leadership Africa needs.
              </p>
              <p>
                Based in Eldoret, Kenya, Chegit serves as CEO of Shizen Greenify Foundation, COO of
                Xiracom Ltd, and Managing Director of M & K Organic Farms — a portfolio that reflects his
                deep commitment to environmental sustainability, technological innovation, and
                agricultural enterprise.
              </p>
              
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ ...spring, delay: 0.3 }}
                className="relative glass-card rounded-2xl p-4 sm:p-6 mt-6 sm:mt-8 shadow-ios"
              >
                <Quote className="text-accent/15 absolute top-4 right-4" size={26} />
                <p className="text-foreground font-display text-lg sm:text-xl md:text-2xl italic leading-relaxed">
                  "Chegit is not just a name. It is a calling — to lift."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
