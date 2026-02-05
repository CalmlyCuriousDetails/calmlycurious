import heroLogo from "@/assets/hero-logo.png";
import heroCalm from "@/assets/herocalm.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32" style={{ backgroundColor: '#DED9D1' }}>
      <div className="container-narrow text-center">
        
        <img 
          src={heroLogo} 
          alt="Calmly Curious" 
          className="h-24 md:h-32 lg:h-40 w-auto mx-auto mb-8 animate-fade-in"
        />
        
        <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed mb-6 animate-fade-in-delay-1 max-w-3xl mx-auto" style={{ color: '#D98C6C' }}>
          Built on the belief that thoughtful attention and careful questioning lead to better content.
        </p>
        
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 animate-fade-in-delay-2 max-w-2xl mx-auto">
          I specialise in seeing what others miss—so your words are clear, confident, and correct.
        </p>
        
        <p className="text-base md:text-lg italic animate-fade-in-delay-3 max-w-2xl mx-auto">
          <span className="text-accent">Calm curiosity.</span>{" "}
          <span className="text-foreground">Every detail matters.</span>
        </p>

        <div className="mt-10 animate-fade-in-delay-3">
          <img 
            src={heroCalm} 
            alt="Calm workspace" 
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
