import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-hero-gradient text-primary-foreground/80 py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center">
          <img src={logo} alt="Chegit Logo" className="h-20 md:h-24 w-auto mx-auto mb-6" />
          <p className="font-display text-lg md:text-xl italic text-accent mb-8 max-w-lg mx-auto">
            "Engineering the Future. Empowering Youth. Lifting Lives."
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-primary-foreground/30 mb-8 font-body">
            <span className="px-3 py-1 rounded-full glass-dark text-xs">#Chegit</span>
            <span className="px-3 py-1 rounded-full glass-dark text-xs">#ChegitLifts</span>
            <span className="px-3 py-1 rounded-full glass-dark text-xs">#LiftWithChegit</span>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8">
            <p className="text-xs text-primary-foreground/30 font-body">
              © {new Date().getFullYear()} Kibet Kemboi — Chegit. All rights reserved. Eldoret, Kenya.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
