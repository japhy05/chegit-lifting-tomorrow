import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-deep-dark text-primary-foreground/80 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center">
          <img src={logo} alt="Chegit Logo" className="h-14 w-auto mx-auto mb-4" />
          <p className="font-display text-base md:text-lg italic text-accent mb-6">
            "Engineering the Future. Empowering Youth. Lifting Lives."
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-primary-foreground/50 mb-6">
            <span>#Chegit</span>
            <span>·</span>
            <span>#ChegitLifts</span>
            <span>·</span>
            <span>#LiftWithChegit</span>
          </div>
          <div className="border-t border-primary-foreground/10 pt-6">
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Kibet Kemboi — Chegit. All rights reserved. Eldoret, Kenya.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
