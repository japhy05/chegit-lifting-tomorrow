import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutPhoto from "@/assets/about-photo.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <div className="grid md:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-primary/10 rounded-2xl blur-xl" />
              <img
                src={aboutPhoto}
                alt="Kibet Kemboi"
                className="relative rounded-2xl w-full object-cover shadow-elevated"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-3"
          >
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              About Chegit
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
              A Name That Means{" "}
              <span className="text-gradient-brand">To Lift</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg font-body">
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
              <p className="text-foreground font-display text-xl md:text-2xl italic border-l-4 border-accent pl-6 py-2">
                "Chegit is not just a name. It is a calling — to lift."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
