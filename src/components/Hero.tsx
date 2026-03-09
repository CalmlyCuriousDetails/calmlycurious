import heroLogo from "@/assets/hero-logo.png";
import heroCalm from "@/assets/herocalm.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding px-[32px] pt-[48px] pb-[16px]" style={{ backgroundColor: '#DED9D1' }}>
      <div className="container-narrow text-center px-[32px] pt-[48px] pb-[16px]" style={{ fontSize: '1.125rem' }}>
        
        <img
          src={heroLogo}
          alt="Calmly Curious"
          className="h-24 md:h-32 lg:h-40 w-auto mx-auto mb-8 animate-fade-in" />

        
        <p className="font-semibold leading-relaxed mb-6 animate-fade-in-delay-1 max-w-3xl mx-auto" style={{ color: '#D98C6C' }}>I bridge the gap between the bot and the brain — so your words are clear, confident, and correct. #WebsiteReviewer #AIContentEditor




        </p>
        
        <p className="text-muted-foreground leading-relaxed mb-4 animate-fade-in-delay-2 max-w-2xl mx-auto">
          You know that feeling when you walk into a store, pass a sign, or open a book or webpage — and something just isn't right? That quiet frustration, followed by the instant excitement of wanting to fix it. That's me. I know that feeling.
        </p>
        
        <p className="text-muted-foreground leading-relaxed animate-fade-in-delay-3 max-w-2xl mx-auto">
          If your website looks good but doesn't quite read as smoothly as it could, I can help gently refine the details that shape a strong first impression.
        </p>

        <div className="mt-10 animate-fade-in-delay-3">
          <img src={heroCalm} alt="Calm workspace" className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg" />

        </div>

        <p className="text-muted-foreground animate-fade-in-delay-3 max-w-2xl mx-auto mt-8" style={{ fontSize: '1.125rem' }}>

        </p>

        <p className="italic animate-fade-in-delay-3 max-w-2xl mx-auto mt-4" style={{ fontSize: '1.25rem' }}>
          <span className="text-accent">Calm curiosity.</span>{" "}
          <span className="text-foreground">Every detail matters.</span>
        </p>

      </div>
    </section>);

};

export default Hero;