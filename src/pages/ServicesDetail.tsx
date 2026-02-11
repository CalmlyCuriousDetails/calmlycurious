import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Spelling and grammar review",
    description: "Eliminate distracting errors to maintain a flawless professional image.",
  },
  {
    title: "Tone and clarity improvements",
    description: "Refine your messaging to be clear, human, and aligned with your brand.",
  },
  {
    title: "Consistency alignment",
    description: "Align your content across every page to build visitor trust.",
  },
  {
    title: "User experience insights",
    description: "Identify friction points to make site navigation effortless.",
  },
  {
    title: "Content flow and readability",
    description: "Optimize page structure so your message is easy to digest.",
  },
  {
    title: "The finishing touch",
    description: "A final review to ensure your site offers a seamless visitor experience.",
  },
];

const ServicesDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding pt-32">
        <div className="container-narrow">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            What I Offer
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl">
            I'll help your content sound as good as it looks — online and in print.
          </p>

          <div className="grid gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h2 className="font-heading text-xl md:text-2xl text-foreground mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesDetail;
