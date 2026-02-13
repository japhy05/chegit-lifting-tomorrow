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
    <section id="expertise" className="py-20 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">
            Technical Expertise
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Building With <span className="text-gradient-gold">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Skill bars */}
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.08 }}
                    className="h-full bg-green-gradient rounded-full"
                  />
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
            <h3 className="font-display text-xl font-bold text-foreground mb-5">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-card border border-border text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:border-gold/50 hover:shadow-gold transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
