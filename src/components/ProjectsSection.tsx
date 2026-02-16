import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Users, Leaf, Sprout, ArrowUpRight } from "lucide-react";

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
    <section id="projects" className="py-16 sm:py-24 md:py-36 bg-section-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-indigo/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">
            Projects & Initiatives
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
            Impact In <span className="text-gradient-brand">Action</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass-dark rounded-2xl p-6 md:p-7 hover-lift animated-border cursor-default"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center group-hover:shadow-glow transition-shadow duration-500">
                  <p.icon className="text-primary-foreground" size={20} />
                </div>
                <ArrowUpRight size={16} className="text-primary-foreground/20 group-hover:text-accent group-hover:rotate-45 transition-all duration-300" />
              </div>
              <span className="text-accent text-xs font-semibold tracking-wider uppercase font-body">
                {p.category}
              </span>
              <h3 className="font-display text-lg font-bold text-primary-foreground mt-1.5 mb-3">
                {p.title}
              </h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed font-body">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
