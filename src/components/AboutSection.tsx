import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, MapPin } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo/3 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8" ref={ref}>
        <div className="grid md:grid-cols-5 gap-8 sm:gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >
            <div className="relative group max-w-xs sm:max-w-sm mx-auto md:max-w-none">
              <div className="absolute -inset-3 bg-brand-gradient rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl animated-border">
                <img
                  src={aboutPhoto}
                  alt="Kibet Kemboi"
                  className="relative rounded-2xl w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent rounded-2xl" />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-3"
          >
            <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">
              About Chegit
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-10 leading-tight">
              A Name That Means{" "}
              <span className="text-gradient-brand">To Lift</span>
            </h2>

            {/* Origin badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-accent rounded-full mb-6 sm:mb-8"
            >
              <MapPin size={14} className="text-accent" />
              <span className="text-xs sm:text-sm font-body text-foreground/80">
                Born in Plateau, Eldoret · Raised in Metkei, Elgeyo Marakwet County
              </span>
            </motion.div>

            <div className="space-y-4 sm:space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg font-body">
              <p>
                <strong className="text-foreground">"Chegit"</strong> is a Kalenjin name meaning{" "}
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
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative glass-card rounded-xl p-4 sm:p-6 mt-6 sm:mt-8 animated-border"
              >
                <Quote className="text-accent/20 absolute top-4 right-4" size={28} />
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
