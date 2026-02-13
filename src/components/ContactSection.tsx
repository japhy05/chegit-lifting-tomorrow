import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";

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
    <section id="contact" className="py-20 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Let's <span className="text-gradient-brand">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Whether you want to collaborate, partner, or support youth initiatives — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground">Location</h4>
                <p className="text-muted-foreground text-sm">Eldoret, Kenya</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground">Email</h4>
                <p className="text-muted-foreground text-sm">chegit@contact.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground">Phone</h4>
                <p className="text-muted-foreground text-sm">+254 7XX XXX XXX</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">Follow on social media</p>
              <div className="flex gap-3">
                {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="bg-card border border-border text-foreground px-4 py-2 rounded-lg text-xs font-medium hover:border-accent/50 transition-colors"
                  >
                    {s}
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
            className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4"
          >
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Name</label>
              <input
                type="text"
                required
                className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
              <input
                type="email"
                required
                className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="How can we collaborate?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {submitted ? "Message Sent!" : (
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
