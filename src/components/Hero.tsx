import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-narrow text-center">
        <img 
          src={logo} 
          alt="Calmly Curious" 
          className="h-24 md:h-32 lg:h-40 w-auto mx-auto mb-8 animate-fade-in-up" 
        />
        
        <p className="text-primary text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed mb-6 animate-fade-in-delay-1 max-w-3xl mx-auto">
          Calmly Curious is built on the belief that thoughtful attention and careful questioning lead to better content.
        </p>
        
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 animate-fade-in-delay-2 max-w-2xl mx-auto">
          I specialise in seeing what others miss—so your words are clear, confident, and correct.
        </p>
        
        <div className="flex items-center justify-center gap-2 animate-fade-in-delay-3">
          <span className="text-accent font-medium">Calm curiosity.</span>
          <span className="text-foreground">Every detail matters.</span>
        </div>

        <div className="mt-16 animate-fade-in-delay-3">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm tracking-wide">Learn more</span>
            <svg
              className="w-4 h-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
