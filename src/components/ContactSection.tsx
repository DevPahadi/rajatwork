
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { FadeUp, SlideInLeft, SlideInRight } from './AnimatedSection';

const ContactOption = ({
  icon, title, value, link, 
}: {
  icon: React.ReactNode; title: string; value: string; link?: string;
}) => {
  const Component = link ? 'a' : 'div';
  const props = link ? { href: link, target: link.startsWith('http') ? '_blank' : undefined, rel: link.startsWith('http') ? 'noopener noreferrer' : undefined } : {};
  return (
    <Component {...props} className="block">
      <div className="glass-card flex items-start gap-4 p-5 rounded-2xl group cursor-pointer">
        <div className="bg-primary/10 text-primary p-3 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold mb-0.5 group-hover:text-primary transition-colors">{title}</h4>
          <p className="text-sm text-muted-foreground">{value}</p>
        </div>
      </div>
    </Component>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await emailjs.send(
        'service_p6o5ugg',
        'template_2nghyco',
        { from_name: formData.name, from_email: formData.email, subject: formData.subject, message: formData.message, to_name: 'Rajat Tripathi' },
        'oFeXPJQ_r3Bu7JMHG'
      );
      if (result.text === 'OK') {
        toast({ title: "Message sent successfully!", description: "Thank you! I'll get back to you soon." });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      toast({ title: "Failed to send message", description: "Please try again or contact me directly via email.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeUp className="text-center mb-20">
          <span className="mono text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or need cybersecurity consulting? Let's discuss.
          </p>
        </FadeUp>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <SlideInLeft className="lg:w-5/12 space-y-6">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <ContactOption
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6"/></svg>}
                title="Email" value="secure.rajat@gmail.com" link="mailto:secure.rajat@gmail.com"
              />
              <ContactOption
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C16.4 21.64 13 20.27 10.12 18.01C7.45 15.94 5.26 13.36 3.84 10.34C2.77 7.29 1.92 3.96 2.04 2.04C2.08 1.48 2.3 0.96 2.68 0.58C3.06 0.2 3.58 0 4.12 0H7.12"/></svg>}
                title="Phone" value="+91 9528547912" link="tel:+919528547912"
              />
              <ContactOption
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>}
                title="LinkedIn" value="linkedin.com/in/rajat-tripathi-00/" link="https://www.linkedin.com/in/rajat-tripathi-00/"
              />
              <ContactOption
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22V18C15.1391 16.7473 14.7757 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27114 6.51588 3.91409 7.75279 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22"/></svg>}
                title="GitHub" value="github.com/DevPahadi" link="https://github.com/DevPahadi"
              />
            </div>

            {/* CTA card */}
            <div className="relative rounded-2xl overflow-hidden mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
              <div className="relative p-8">
                <h3 className="text-xl font-bold text-primary-foreground mb-3">Ready to Enhance Security?</h3>
                <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
                  I'm available for freelance work and consulting. Let's collaborate.
                </p>
                <Button className="bg-background text-foreground hover:bg-background/90 font-semibold px-6">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </SlideInLeft>

          {/* Form */}
          <SlideInRight className="lg:w-7/12">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-gradient">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" required className="h-12 bg-muted/50 border-border/50 focus:border-primary rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required className="h-12 bg-muted/50 border-border/50 focus:border-primary rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="How can I help you?" required className="h-12 bg-muted/50 border-border/50 focus:border-primary rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message *</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project..." rows={5} required className="bg-muted/50 border-border/50 focus:border-primary rounded-xl resize-none" />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg font-semibold rounded-xl glow-primary transition-all hover:scale-[1.02] disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                  {!isLoading && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                    </svg>
                  )}
                </Button>
              </form>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
