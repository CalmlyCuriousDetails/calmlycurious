import { CheckCircle } from "lucide-react";
const Services = () => {
  const services = ["Spelling and grammar review", "Tone and clarity improvements", "Consistency checks across pages", "User experience insights", "Content flow and readability", "The finishing touch"];
  return <section id="services" className="section-padding bg-card pl-[32px] pr-[32px] pt-[32px] pb-[32px]">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Services List */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
              What I Offer
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'll help your content sound as good as it looks — online and in print.
            </p>

            <ul className="space-y-4">
              {services.map((service) => <li key={service} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{service}</span>
                </li>)}
            </ul>
          </div>

          {/* Decorative Quote */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
              <svg className="w-12 h-12 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed mb-6">
                I don't look for problems — bad typography finds me.
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-heading">V</span>
                </div>
                <span className="text-muted-foreground text-xl font-sans" style={{ fontFamily: "Georgia, serif" }}>Vicki Davidson</span>
              </div>
            </div>
            
            {/* Floating accents */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default Services;