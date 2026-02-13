import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Youth Empowerment",
    title: "Why Africa's Future Depends on Youth-Led Innovation",
    excerpt: "The continent's greatest resource isn't its minerals — it's the energy, creativity, and ambition of its young people.",
    date: "Coming Soon",
  },
  {
    category: "Governance",
    title: "Ethical Leadership in the Age of Digital Governance",
    excerpt: "How technology can be leveraged to build transparent, accountable, and inclusive governance systems.",
    date: "Coming Soon",
  },
  {
    category: "Technology",
    title: "From Code to Community: Tech as a Tool for Social Impact",
    excerpt: "Bridging the digital divide means more than access — it means relevance, empowerment, and ownership.",
    date: "Coming Soon",
  },
];

const BlogSection = () => {
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
            Blog & Insights
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Thoughts on <span className="text-gradient-brand">Leadership</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-elevated hover:border-accent/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="text-accent" size={16} />
                <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                  {post.category}
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-xs">{post.date}</span>
                <ArrowRight
                  size={16}
                  className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
