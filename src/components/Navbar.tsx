import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-18 md:h-22">
        <a href="#" className="flex items-center gap-3 group">
          <img src={logo} alt="Chegit Logo" className="h-14 md:h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105" />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-lg hover:bg-primary/5 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-gradient rounded-full transition-all duration-300 group-hover:w-2/3" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 bg-brand-gradient text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-glow transition-all duration-300 flex items-center gap-2"
          >
            Lift With Chegit <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-primary/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-base font-medium text-foreground py-3 px-4 rounded-xl hover:bg-primary/5 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-brand-gradient text-primary-foreground px-5 py-3.5 rounded-xl text-center font-semibold mt-3 flex items-center justify-center gap-2"
              >
                Lift With Chegit <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
