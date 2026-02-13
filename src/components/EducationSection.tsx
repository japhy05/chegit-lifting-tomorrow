import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">
            Education
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Built on <span className="text-gradient-gold">Discipline</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-6 md:p-8 flex gap-5"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Bachelor of Computer Science
              </h3>
              <p className="text-gold font-medium text-sm">
                Catholic University of Eastern Africa
              </p>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                A rigorous academic foundation in software engineering, algorithms, and systems
                architecture — complemented by a deep passion for using technology as a vehicle for
                social transformation. Excellence in both academics and campus leadership.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-6 md:p-8 flex gap-5"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <School className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Nairobi School
              </h3>
              <p className="text-gold font-medium text-sm">
                Secondary Education
              </p>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                One of Kenya's most prestigious national schools, known for producing visionary leaders.
                A formative experience in discipline, excellence, and the kind of character that
                prepares leaders for national service.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
