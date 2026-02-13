import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

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
    <section className="py-20 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Voices of <span className="text-gradient-gold">Impact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 relative"
            >
              <Quote className="text-gold/30 absolute top-4 right-4" size={24} />
              <p className="text-muted-foreground text-sm leading-relaxed italic mb-4">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-gold text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
