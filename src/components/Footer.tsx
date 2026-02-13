const Footer = () => {
  return (
    <footer className="bg-green-deep text-primary-foreground/80 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center">
          <p className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
            Chegit
          </p>
          <p className="font-display text-base md:text-lg italic text-gold mb-6">
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
