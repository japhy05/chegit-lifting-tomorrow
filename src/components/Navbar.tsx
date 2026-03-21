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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass shadow-ios"
          : "bg-transparent"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-3 group">
          <img src={logo} alt="Chegit Logo" className="h-12 md:h-14 lg:h-16 w-auto transition-transform duration-500 group-hover:scale-105" style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }} />
        </a>

        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium text-muted-foreground hover:text-foreground transition-all duration-300 px-3.5 py-2 rounded-xl hover:bg-primary/5 group"
              style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            >
              {link.label}
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-brand-gradient rounded-full transition-all duration-500 group-hover:w-2/3" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 bg-brand-gradient text-primary-foreground px-5 py-2 rounded-2xl text-[13px] font-semibold hover:shadow-glow transition-all duration-500 flex items-center gap-2"
            style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            Lift With Chegit <ArrowUpRight size={13} />
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-2 rounded-xl hover:bg-primary/5 transition-colors active:scale-95 duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-0.5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", damping: 24, stiffness: 300, delay: i * 0.04 }}
                  className="text-[15px] font-medium text-foreground py-3 px-4 rounded-2xl hover:bg-primary/5 transition-colors active:scale-[0.98] duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-brand-gradient text-primary-foreground px-5 py-3.5 rounded-2xl text-center font-semibold mt-3 flex items-center justify-center gap-2 active:scale-[0.98] duration-200"
              >
                Lift With Chegit <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
