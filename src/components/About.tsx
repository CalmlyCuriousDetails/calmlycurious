import mainWords from "@/assets/mainwords.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding pt-12 pb-16 bg-card">
      <div className="container-narrow">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
          Hi! I'm Vicki
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-18 items-start">
          {/* Text Content */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              A detail-focused <em>website reviewer</em> with a sharp eye for the tiny mistakes — 
              <span className="text-accent"> spelling slips, awkward wording, and inconsistencies</span>. 
              These are easy to overlook but hard to unsee once you notice them.
            </p>
            
            <p>My background and experiences are a mix of real-world service and digital design, spanning administration, travel, hospitality, and graphic design. This diverse path, combined with hands-on experience in HTML and UX/UI principles, gives me a unique understanding of how words, visuals, and user experience all come together to create a professional, trustworthy online presence.





            </p>
            
            <p>I don't just see words on a screen; I understand how they interact with the layout and the human being on the other side. I ensure that your information is not just present but actually useful and easy to navigate.


            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={mainWords}
              alt="Creative workspace with colorful sticky notes"
              className="w-full rounded-2xl shadow-lg object-cover" />

          </div>
        </div>
      </div>
    </section>);

};

export default About;