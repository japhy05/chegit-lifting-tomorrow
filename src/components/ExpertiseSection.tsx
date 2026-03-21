import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const spring = { type: "spring" as const, damping: 24, stiffness: 200 };

const skills = [
  { name: "Software Development", level: 90 },
  { name: "Digital Solutions & Innovation", level: 85 },
  { name: "Leadership & Governance", level: 95 },
  { name: "Project Management", level: 88 },
  { name: "Community Mobilization", level: 92 },
  { name: "Strategic Planning", level: 87 },
];

const techStack = [
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Cloud Architecture",
  "UI/UX Design", "Agile Methodology", "DevOps", "Mobile Development",
];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-16 sm:py-24 md:py-36 bg-section-alt relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-indigo/[0.03] rounded-full blur-[160px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={spring}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-accent font-body text-[11px] tracking-[0.3em] uppercase mb-4 font-semibold">
            Technical Expertise
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Building With <span className="text-gradient-brand">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 max-w-5xl mx-auto">
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ ...spring, delay: i * 0.06 }}
              >
                <div className="flex justify-between text-sm mb-2.5">
                  <span className="font-medium text-foreground font-body text-[13px]">{skill.name}</span>
                  <span className="text-accent font-semibold text-[13px]">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-muted/40 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.4, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-brand-gradient rounded-full relative"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-foreground shadow-glow" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...spring, delay: 0.15 }}
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ ...spring, delay: 0.3 + i * 0.04 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="glass-card text-foreground px-4 py-2.5 rounded-2xl text-[13px] font-medium hover:border-accent/40 hover:shadow-brand transition-all duration-300 cursor-default font-body"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
