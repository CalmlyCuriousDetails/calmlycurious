import heroLogo from "@/assets/hero-logo.png";
import heroCalm from "@/assets/herocalm.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32" style={{ backgroundColor: '#DED9D1' }}>
      <div className="container-narrow text-center" style={{ fontSize: '1.125rem' }}>
        
        <img 
          src={heroLogo} 
          alt="Calmly Curious" 
          className="h-24 md:h-32 lg:h-40 w-auto mx-auto mb-8 animate-fade-in"
        />
        
        <p className="font-semibold leading-relaxed mb-6 animate-fade-in-delay-1 max-w-3xl mx-auto" style={{ color: '#D98C6C' }}>
          Built on the belief that thoughtful attention and careful questioning lead to better content.
        </p>
        
        <p className="text-muted-foreground leading-relaxed mb-10 animate-fade-in-delay-2 max-w-2xl mx-auto">
          I specialise in seeing what others miss — so your words are clear, confident, and correct.
        </p>
        
        <p className="text-muted-foreground leading-relaxed animate-fade-in-delay-3 max-w-2xl mx-auto">
          You know that feeling when you walk into a store, pass a sign, or open a book or webpage — and something just isn't right? That quiet frustration, followed by the instant excitement of wanting to fix it. That's me. I know that feeling.
        </p>

        <div className="mt-10 animate-fade-in-delay-3">
          <img 
            src={heroCalm} 
            alt="Calm workspace" 
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
          />
        </div>

        <p className="italic animate-fade-in-delay-3 max-w-2xl mx-auto mt-8">
          <span className="text-accent">Calm curiosity.</span>{" "}
          <span className="text-foreground">Every detail matters.</span>
        </p>
        
        <p className="italic text-muted-foreground animate-fade-in-delay-3 max-w-2xl mx-auto mt-4">
          I don't look for problems — bad typography finds me.
        </p>

      </div>
    </section>
  );
};

export default Hero;
