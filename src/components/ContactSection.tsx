import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Send, ArrowUpRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-36 bg-section-dark relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
            Let's <span className="text-gradient-brand">Connect</span>
          </h2>
          <p className="text-primary-foreground/50 mt-4 sm:mt-5 max-w-xl mx-auto font-body text-sm sm:text-base">
            Whether you want to collaborate, partner, or support youth initiatives — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3 sm:space-y-5"
          >
            {[
              { icon: MapPin, title: "Location", value: "Born in Plateau, Eldoret · Raised in Metkei, Elgeyo Marakwet County" },
              { icon: Mail, title: "Email", value: "kibetjapheth424@gmail.com", href: "mailto:kibetjapheth424@gmail.com" },
              { icon: Phone, title: "Phone", value: "+254 769 526 927", href: "tel:+254769526927" },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href || "#"}
                className="group glass-accent rounded-xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:bg-indigo/10 transition-all duration-300 cursor-pointer block"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0 group-hover:shadow-glow transition-shadow duration-500">
                  <item.icon className="text-primary-foreground" size={18} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-primary-foreground text-sm">{item.title}</h4>
                  <p className="text-primary-foreground/50 text-xs sm:text-sm font-body break-all sm:break-normal">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="pt-2 sm:pt-4">
              <p className="text-xs text-primary-foreground/40 mb-3 font-body tracking-wider uppercase">Follow on social media</p>
              <div className="flex flex-wrap gap-2">
                {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="group/social glass-dark text-primary-foreground/70 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-medium hover:bg-primary/10 hover:text-accent transition-all duration-300 flex items-center gap-1.5 font-body"
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
            className="glass-dark rounded-2xl p-5 sm:p-7 md:p-8 space-y-4 sm:space-y-5 animated-border"
          >
            {[
              { label: "Name", type: "text", placeholder: "Your full name", key: "name" as const },
              { label: "Email", type: "email", placeholder: "you@email.com", key: "email" as const },
            ].map((field) => (
              <div key={field.label}>
                <label className="text-xs font-medium text-primary-foreground/70 block mb-2 font-body tracking-wider uppercase">{field.label}</label>
                <input
                  type={field.type}
                  required
                  maxLength={field.key === "name" ? 100 : 255}
                  value={formData[field.key]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
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
                maxLength={2000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-dark/50 border border-border rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none font-body"
                placeholder="How can we collaborate?"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-gradient text-primary-foreground py-3.5 rounded-xl font-semibold text-sm hover:shadow-glow transition-all duration-500 flex items-center justify-center gap-2 font-body disabled:opacity-50"
            >
              {loading ? (
                <><Loader2 size={16} className="animate-spin" /> Sending...</>
              ) : (
                <>Send Message <Send size={16} /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
