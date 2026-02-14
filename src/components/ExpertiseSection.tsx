import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <section id="expertise" className="py-24 md:py-36 bg-section-alt relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo/3 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">
            Technical Expertise
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Building With <span className="text-gradient-brand">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Skill bars */}
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground font-body">{skill.name}</span>
                  <span className="text-accent font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                    className="h-full bg-brand-gradient rounded-full relative"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary-foreground shadow-glow" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-card text-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:border-accent/50 hover:shadow-brand transition-all duration-300 cursor-default font-body"
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
