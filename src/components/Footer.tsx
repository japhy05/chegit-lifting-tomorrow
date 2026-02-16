import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-hero-gradient text-primary-foreground/80 py-10 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-indigo/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center">
          <img src={logo} alt="Chegit Logo" className="h-16 sm:h-20 md:h-24 w-auto mx-auto mb-4 sm:mb-6" />
          <p className="font-display text-base sm:text-lg md:text-xl italic text-accent mb-6 sm:mb-8 max-w-lg mx-auto px-4">
            "Engineering the Future. Empowering Youth. Lifting Lives."
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm text-primary-foreground/30 mb-6 sm:mb-8 font-body">
            <span className="px-3 py-1 rounded-full glass-dark text-xs">#Chegit</span>
            <span className="px-3 py-1 rounded-full glass-dark text-xs">#ChegitLifts</span>
            <span className="px-3 py-1 rounded-full glass-dark text-xs">#LiftWithChegit</span>
          </div>
          <div className="border-t border-primary-foreground/10 pt-6 sm:pt-8">
            <p className="text-xs text-primary-foreground/30 font-body px-4">
              © {new Date().getFullYear()} Kibet Kemboi — Chegit. All rights reserved. Eldoret, Kenya.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
