import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School } from "lucide-react";

const spring = { type: "spring", damping: 24, stiffness: 200 };

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-16 sm:py-24 md:py-36 bg-section-alt relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-indigo/[0.03] rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={spring}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-accent font-body text-[11px] tracking-[0.3em] uppercase mb-4 font-semibold">
            Education
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Built on <span className="text-gradient-brand">Discipline</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              icon: GraduationCap,
              title: "Bachelor of Computer Science",
              school: "Catholic University of Eastern Africa",
              desc: "A rigorous academic foundation in software engineering, algorithms, and systems architecture — complemented by a deep passion for using technology as a vehicle for social transformation. Excellence in both academics and campus leadership.",
              delay: 0.08,
            },
            {
              icon: School,
              title: "Nairobi School",
              school: "Secondary Education",
              desc: "One of Kenya's most prestigious national schools, known for producing visionary leaders. A formative experience in discipline, excellence, and the kind of character that prepares leaders for national service.",
              delay: 0.16,
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: item.delay }}
              className="group glass-card rounded-3xl p-5 sm:p-7 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 hover-lift cursor-default"
            >
              <div className="w-13 h-13 rounded-2xl bg-brand-gradient flex items-center justify-center shrink-0 group-hover:shadow-glow transition-shadow duration-500">
                <item.icon className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-accent font-medium text-sm font-body mt-1">
                  {item.school}
                </p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed font-body font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
