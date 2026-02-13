import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">
            About Chegit
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            A Name That Means{" "}
            <span className="text-gradient-gold">To Lift</span>
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
              youth, champion sustainability, and model the kind of transformational leadership Africa
              needs.
            </p>
            <p>
              Based in Eldoret, Kenya, Chegit serves as CEO of Shizen Greenify Foundation, COO of
              Xiracom Ltd, and Managing Director of M & K Organic Farms — a portfolio that reflects his
              deep commitment to environmental sustainability, technological innovation, and
              agricultural enterprise.
            </p>
            <p>
              His vision for Kenya is one where young people are not spectators of governance but its
              architects. A future where ethical leadership, transparent governance, and inclusive
              economic opportunity are not aspirations but standards.
            </p>
            <p className="text-foreground font-display text-xl md:text-2xl italic border-l-4 border-gold pl-6 py-2">
              "Chegit is not just a name. It is a calling — to lift."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
