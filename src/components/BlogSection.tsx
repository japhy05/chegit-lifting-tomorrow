import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ArrowUpRight, Clock } from "lucide-react";

const spring = { type: "spring", damping: 24, stiffness: 200 };

const posts = [
  {
    category: "Youth Empowerment",
    title: "Why Africa's Future Depends on Youth-Led Innovation",
    excerpt: "The continent's greatest resource isn't its minerals — it's the energy, creativity, and ambition of its young people.",
    date: "Coming Soon",
    readTime: "5 min read",
  },
  {
    category: "Governance",
    title: "Ethical Leadership in the Age of Digital Governance",
    excerpt: "How technology can be leveraged to build transparent, accountable, and inclusive governance systems.",
    date: "Coming Soon",
    readTime: "7 min read",
  },
  {
    category: "Technology",
    title: "From Code to Community: Tech as a Tool for Social Impact",
    excerpt: "Bridging the digital divide means more than access — it means relevance, empowerment, and ownership.",
    date: "Coming Soon",
    readTime: "6 min read",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-24 md:py-36 bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-indigo/[0.03] rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={spring}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-accent font-body text-[11px] tracking-[0.3em] uppercase mb-4 font-semibold">
            Blog & Insights
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Thoughts on <span className="text-gradient-brand">Leadership</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: i * 0.08 }}
              className="group bg-card rounded-3xl overflow-hidden hover-lift cursor-pointer shadow-ios"
            >
              <div className="h-[3px] bg-brand-gradient" />
              <div className="p-6 md:p-7">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="text-accent" size={13} />
                  <span className="text-accent text-[11px] font-semibold tracking-wider uppercase font-body">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 font-body font-light">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-muted-foreground/50">
                    <Clock size={11} />
                    <span className="text-[11px] font-body">{post.readTime}</span>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-accent opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
