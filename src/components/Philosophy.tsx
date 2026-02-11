const Philosophy = () => {
  return (
    <section className="section-padding pl-[32px] pt-[64px] pr-[32px] pb-[16px]">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
            My Approach
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            I'm calmly curious by nature and love the quiet, focused work of polishing content 
            until it reads naturally. It's not about being overly critical; it's about 
            <span className="text-primary font-medium"> thoughtful refinement</span> to ensure 
            nothing small undermines the big impression you're trying to make.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
            {
              title: "Friendly",
              description: "Approachable feedback that respects your vision and voice."
            },
            {
              title: "Reliable",
              description: "Consistent, thorough attention to every detail, every time."
            },
            {
              title: "Easy to work with",
              description: "Clear communication and a collaborative spirit throughout."
            }].
            map((item, index) =>
            <div
              key={item.title}
              className="group p-6 rounded-xl bg-surface-sage border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">

                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-surface-light flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-heading text-xl">{index + 1}</span>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-surface-light text-sm">{item.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default Philosophy;