import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }

    setSending(true);

    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:codingvicki@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setFormData({ name: "", email: "", message: "" });
      
      toast({ title: "Your email client should have opened. Thank you!" });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-surface-neutral px-[32px] py-[48px]">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Let's Work Together
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Ready to give your content (website and/or print) the polished, professional finish it deserves? I'd love to hear about your project.
          </p>

          <a
            href="/printable-questionnaire.pdf"
            download="Discovery-Questionnaire.pdf"
            className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors text-lg inline-block mb-10"
          >
            Discovery Questionnaire
          </a>

          <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
            Contact
          </h3>

          <Button size="lg" className="group" asChild>
            <a href="mailto:codingvicki@gmail.com">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Email Me
            </a>
          </Button>

          <p className="text-muted-foreground text-lg mt-12">
            or fill in the contact form below to send me a message
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-12 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              maxLength={100}
              className="bg-card border-border"
            />
            <Input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              maxLength={255}
              className="bg-card border-border"
            />
          </div>
          <Textarea
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            maxLength={1000}
            rows={5}
            className="bg-card border-border resize-none"
          />
          <div className="text-center">
            <Button type="submit" size="lg" disabled={sending}>
              <Send className="w-4 h-4 mr-2" />
              {sending ? "Opening email..." : "Click to Send"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;