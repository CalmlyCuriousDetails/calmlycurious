const About = () => {
  return (
    <section id="about" className="section-padding pt-12 bg-card">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
              Hi! I'm Vicki
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A detail-focused website reviewer with a sharp eye for the tiny mistakes — 
                <span className="text-accent"> spelling slips, awkward wording, and inconsistencies</span>. 
                These are easy to overlook but hard to unsee once you notice them.
              </p>
              
              <p>
                My background and experiences are a mix of real-world service and digital design, 
                spanning administration, travel, restaurant work, and graphic design. This diverse path, 
                combined with hands-on experience in HTML and UX/UI principles, gives me a unique understanding 
                of how words, visuals, and user experience all come together to create a professional, 
                trustworthy online presence.
              </p>
              
              <p>
                I don't just see words on a screen; I understand how they interact with the layout 
                and the human being on the other side.
              </p>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <blockquote className="font-heading text-2xl text-foreground italic">
                  "Thoughtful refinement, not criticism"
                </blockquote>
              </div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
