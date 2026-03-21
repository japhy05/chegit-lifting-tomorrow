import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Briefcase, MapPin, Heart, ArrowUpRight } from "lucide-react";

const spring = { type: "spring" as const, damping: 24, stiffness: 200 };

const counters = [
  { icon: Users, value: 5000, suffix: "+", label: "Youth Reached", color: "from-indigo to-indigo-light" },
  { icon: Briefcase, value: 25, suffix: "+", label: "Projects Led", color: "from-indigo-light to-accent" },
  { icon: MapPin, value: 15, suffix: "+", label: "Communities Engaged", color: "from-accent to-indigo" },
  { icon: Heart, value: 10, suffix: "+", label: "Mentorship Programs", color: "from-indigo to-indigo-light" },
];

const highlights = [
  { text: "Youth mentorship & training initiatives across Keiyo South and Eldoret", tag: "Mentorship" },
  { text: "Community mobilization for inclusive governance", tag: "Governance" },
  { text: "Leadership development programs for young professionals", tag: "Leadership" },
  { text: "Political engagement advocacy for youth inclusion", tag: "Advocacy" },
  { text: "Youth economic empowerment through technology & enterprise", tag: "Enterprise" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const YouthSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-16 sm:py-24 md:py-36 bg-section-dark relative overflow-hidden">
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-indigo/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-light/[0.04] rounded-full blur-[160px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={spring}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-accent font-body text-[11px] tracking-[0.3em] uppercase mb-4 font-semibold">
            Youth Empowerment & Leadership
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
            Lifting the Next <span className="text-gradient-brand">Generation</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-16 sm:mb-20">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: i * 0.08 }}
              className="group glass-accent rounded-3xl p-5 md:p-7 text-center hover-lift cursor-default"
            >
              <div className="w-11 h-11 rounded-2xl bg-brand-gradient flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-shadow duration-500">
                <c.icon className="text-primary-foreground" size={20} />
              </div>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
                <AnimatedCounter target={c.value} suffix={c.suffix} />
              </div>
              <p className="text-primary-foreground/45 text-xs sm:text-sm mt-2 font-body font-light">{c.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...spring, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-2"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ ...spring, delay: 0.3 + i * 0.06 }}
              className="group glass-dark rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-indigo/8 transition-all duration-300 cursor-default"
              style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            >
              <ArrowUpRight size={15} className="text-accent shrink-0 group-hover:rotate-45 transition-transform duration-300" />
              <span className="text-primary-foreground/65 text-sm sm:text-base font-body font-light flex-1">{h.text}</span>
              <span className="hidden sm:inline-block text-accent/50 text-[11px] font-body tracking-wider uppercase font-medium">{h.tag}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default YouthSection;
