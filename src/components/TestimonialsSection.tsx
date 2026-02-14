import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Chegit's dedication to youth empowerment is unmatched. He doesn't just talk about change — he engineers it.",
    name: "Community Leader",
    role: "Keiyo South",
  },
  {
    quote: "Working with Kibet on the Greenify initiative showed me what true servant leadership looks like. He lifts everyone around him.",
    name: "Partner Organization",
    role: "Environmental Sector",
  },
  {
    quote: "A rare blend of technical brilliance and grassroots passion. Chegit is the kind of leader Africa needs.",
    name: "Colleague",
    role: "Tech Industry",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo/3 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Voices of <span className="text-gradient-brand">Impact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-7 relative hover-lift animated-border cursor-default"
            >
              <Quote className="text-accent/15 absolute top-6 right-6" size={28} />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic mb-6 font-body">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-accent text-xs font-body">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
