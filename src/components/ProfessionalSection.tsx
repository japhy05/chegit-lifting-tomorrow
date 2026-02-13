import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Cpu, Sprout, Users } from "lucide-react";

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
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
            Professional Leadership
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Leading With <span className="text-gradient-brand">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {orgs.map((org, i) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-elevated hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <org.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{org.name}</h3>
                  <p className="text-accent text-sm font-medium">{org.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{org.desc}</p>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
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
