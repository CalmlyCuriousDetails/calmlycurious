const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-heading text-xl text-foreground">Calmly Curious</span>
            <p className="text-muted-foreground text-sm mt-1">
              Website review & content refinement
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Services
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Calmly Curious. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
