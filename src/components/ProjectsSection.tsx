import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Users, Leaf, Sprout } from "lucide-react";

const projects = [
  {
    icon: Code,
    category: "Software Engineering",
    title: "Digital Governance Platform",
    desc: "A web-based civic engagement tool that connects youth with local government representatives, enabling transparent communication and accountability.",
  },
  {
    icon: Users,
    category: "Youth Empowerment",
    title: "Keiyo South Youth Connect",
    desc: "A mentorship and skills development program reaching over 2,000 young people with digital literacy, entrepreneurship, and leadership training.",
  },
  {
    icon: Leaf,
    category: "Sustainability",
    title: "Greenify Schools Initiative",
    desc: "An environmental education program that has planted over 5,000 trees across schools in the Rift Valley, fostering a culture of environmental stewardship.",
  },
  {
    icon: Sprout,
    category: "Agriculture",
    title: "Organic Farming Hub",
    desc: "A modern organic farming model that demonstrates sustainable agriculture practices while creating employment opportunities for local communities.",
  },
  {
    icon: Code,
    category: "Software Engineering",
    title: "Community Health Tracker",
    desc: "A mobile application designed to track community health metrics and connect rural populations with healthcare resources and information.",
  },
  {
    icon: Users,
    category: "Youth Empowerment",
    title: "Tech for Change Bootcamp",
    desc: "An intensive coding bootcamp for underprivileged youth, equipping them with software development skills to compete in the digital economy.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
            Projects & Initiatives
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Impact In <span className="text-gradient-brand">Action</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-elevated hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="text-primary" size={20} />
              </div>
              <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                {p.category}
              </span>
              <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
