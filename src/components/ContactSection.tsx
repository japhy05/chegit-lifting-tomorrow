import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Send, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-section-dark relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
            Let's <span className="text-gradient-brand">Connect</span>
          </h2>
          <p className="text-primary-foreground/50 mt-5 max-w-xl mx-auto font-body">
            Whether you want to collaborate, partner, or support youth initiatives — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            {[
              { icon: MapPin, title: "Location", value: "Eldoret, Kenya" },
              { icon: Mail, title: "Email", value: "chegit@contact.com" },
              { icon: Phone, title: "Phone", value: "+254 7XX XXX XXX" },
            ].map((item) => (
              <div key={item.title} className="group glass-accent rounded-xl p-5 flex items-center gap-4 hover:bg-indigo/10 transition-all duration-300 cursor-default">
                <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0 group-hover:shadow-glow transition-shadow duration-500">
                  <item.icon className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary-foreground text-sm">{item.title}</h4>
                  <p className="text-primary-foreground/50 text-sm font-body">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-xs text-primary-foreground/40 mb-3 font-body tracking-wider uppercase">Follow on social media</p>
              <div className="flex gap-2">
                {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="group/social glass-dark text-primary-foreground/70 px-4 py-2.5 rounded-xl text-xs font-medium hover:bg-primary/10 hover:text-accent transition-all duration-300 flex items-center gap-1.5 font-body"
                  >
                    {s}
                    <ArrowUpRight size={10} className="opacity-0 group-hover/social:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-dark rounded-2xl p-7 md:p-8 space-y-5 animated-border"
          >
            {[
              { label: "Name", type: "text", placeholder: "Your full name" },
              { label: "Email", type: "email", placeholder: "you@email.com" },
            ].map((field) => (
              <div key={field.label}>
                <label className="text-xs font-medium text-primary-foreground/70 block mb-2 font-body tracking-wider uppercase">{field.label}</label>
                <input
                  type={field.type}
                  required
                  className="w-full bg-dark/50 border border-border rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all font-body"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div>
              <label className="text-xs font-medium text-primary-foreground/70 block mb-2 font-body tracking-wider uppercase">Message</label>
              <textarea
                required
                rows={4}
                className="w-full bg-dark/50 border border-border rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none font-body"
                placeholder="How can we collaborate?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-gradient text-primary-foreground py-3.5 rounded-xl font-semibold text-sm hover:shadow-glow transition-all duration-500 flex items-center justify-center gap-2 font-body"
            >
              {submitted ? "Message Sent! ✓" : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
