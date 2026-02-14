import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-36 bg-section-alt relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo/3 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">
            Education
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Built on <span className="text-gradient-brand">Discipline</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {[
            {
              icon: GraduationCap,
              title: "Bachelor of Computer Science",
              school: "Catholic University of Eastern Africa",
              desc: "A rigorous academic foundation in software engineering, algorithms, and systems architecture — complemented by a deep passion for using technology as a vehicle for social transformation. Excellence in both academics and campus leadership.",
              delay: 0.1,
            },
            {
              icon: School,
              title: "Nairobi School",
              school: "Secondary Education",
              desc: "One of Kenya's most prestigious national schools, known for producing visionary leaders. A formative experience in discipline, excellence, and the kind of character that prepares leaders for national service.",
              delay: 0.2,
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: item.delay }}
              className="group bg-card rounded-2xl p-7 md:p-8 flex gap-6 hover-lift animated-border cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0 group-hover:shadow-glow transition-shadow duration-500">
                <item.icon className="text-primary-foreground" size={26} />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-accent font-medium text-sm font-body mt-1">
                  {item.school}
                </p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed font-body">
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
