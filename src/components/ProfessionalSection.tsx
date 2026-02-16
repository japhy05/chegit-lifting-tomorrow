import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Cpu, Sprout, Users, ArrowUpRight } from "lucide-react";

const orgs = [
  {
    icon: Leaf,
    name: "Shizen Greenify Foundation",
    role: "CEO & Founder",
    desc: "Leading environmental sustainability initiatives across Kenya. From tree planting campaigns to waste management innovation, Shizen Greenify is building a greener future for African communities.",
    focus: "Sustainability & Environmental Leadership",
  },
  {
    icon: Cpu,
    name: "Xiracom Ltd",
    role: "COO",
    desc: "Driving innovation and strategic growth in technology solutions. Xiracom builds digital tools that empower businesses and institutions to scale efficiently in the African market.",
    focus: "Innovation & Strategy",
  },
  {
    icon: Sprout,
    name: "M & K Organic Farms",
    role: "Managing Director",
    desc: "Pioneering organic agricultural enterprise that demonstrates how sustainable farming can drive economic empowerment. Creating employment and food security in the Rift Valley region.",
    focus: "Agriculture & Enterprise",
  },
  {
    icon: Users,
    name: "Ruto Kumi Bila Break Movement",
    role: "Constituency Coordinator — Keiyo South",
    desc: "Mobilizing grassroots support and youth participation in democratic processes. Coordinating community outreach and civic education to ensure every voice is heard.",
    focus: "Grassroots Mobilization",
  },
];

const ProfessionalSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-indigo/3 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">
            Professional Leadership
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Leading With <span className="text-gradient-brand">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {orgs.map((org, i) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card rounded-2xl p-7 md:p-8 hover-lift animated-border cursor-default"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center group-hover:shadow-glow transition-shadow duration-500">
                  <org.icon className="text-primary-foreground" size={22} />
                </div>
                <ArrowUpRight size={18} className="text-muted-foreground/30 group-hover:text-accent group-hover:rotate-45 transition-all duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{org.name}</h3>
              <p className="text-accent text-sm font-medium font-body mb-4">{org.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed font-body mb-5">{org.desc}</p>
              <span className="inline-block bg-primary/8 text-primary text-xs font-semibold px-4 py-1.5 rounded-full font-body">
                {org.focus}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
