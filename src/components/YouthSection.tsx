import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Briefcase, MapPin, Heart } from "lucide-react";

const counters = [
  { icon: Users, value: 5000, suffix: "+", label: "Youth Reached" },
  { icon: Briefcase, value: 25, suffix: "+", label: "Projects Led" },
  { icon: MapPin, value: 15, suffix: "+", label: "Communities Engaged" },
  { icon: Heart, value: 10, suffix: "+", label: "Mentorship Programs" },
];

const highlights = [
  "Youth mentorship & training initiatives across Keiyo South and Eldoret",
  "Community mobilization for inclusive governance",
  "Leadership development programs for young professionals",
  "Political engagement advocacy for youth inclusion",
  "Youth economic empowerment through technology & enterprise",
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

  return <span ref={ref}>{count}{suffix}</span>;
}

const YouthSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-20 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">
            Youth Empowerment & Leadership
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Lifting the Next <span className="text-gradient-gold">Generation</span>
          </h2>
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 text-center shadow-elevated border border-border"
            >
              <c.icon className="mx-auto mb-3 text-primary" size={28} />
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter target={c.value} suffix={c.suffix} />
              </div>
              <p className="text-muted-foreground text-sm mt-1">{c.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <ul className="space-y-4">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-gold shrink-0" />
                <span className="text-muted-foreground text-base md:text-lg">{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default YouthSection;
