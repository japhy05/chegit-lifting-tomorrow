import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Briefcase, MapPin, Heart, ArrowUpRight } from "lucide-react";

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
    <section id="leadership" className="py-24 md:py-36 bg-section-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-light/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">
            Youth Empowerment & Leadership
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
            Lifting the Next <span className="text-gradient-brand">Generation</span>
          </h2>
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-dark rounded-2xl p-6 md:p-8 text-center hover-lift cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-shadow duration-500">
                <c.icon className="text-primary-foreground" size={22} />
              </div>
              <div className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
                <AnimatedCounter target={c.value} suffix={c.suffix} />
              </div>
              <p className="text-primary-foreground/50 text-sm mt-2 font-body">{c.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="group glass-dark rounded-xl px-6 py-4 flex items-center gap-4 hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              <ArrowUpRight size={16} className="text-accent shrink-0 group-hover:rotate-45 transition-transform duration-300" />
              <span className="text-primary-foreground/70 text-base font-body flex-1">{h.text}</span>
              <span className="hidden sm:inline-block text-accent/60 text-xs font-body tracking-wider uppercase">{h.tag}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default YouthSection;
