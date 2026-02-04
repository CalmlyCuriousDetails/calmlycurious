import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Let's Work Together
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Ready to give your website the polished, professional finish it deserves? 
            I'd love to hear from you.
          </p>

          <Button
            size="lg"
            className="group"
            asChild
          >
            <a href="mailto:hello@calmlycurious.com">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
