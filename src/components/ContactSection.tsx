
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactOption = ({ 
  icon, 
  title, 
  value, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  link?: string 
}) => {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card transition-all hover:border-cyber-primary/50 hover:shadow-sm">
      <div className="text-cyber-primary mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-sm mb-1">{title}</h4>
        {link ? (
          <a href={link} className="text-muted-foreground hover:text-cyber-primary text-sm transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-muted-foreground text-sm">{value}</p>
        )}
      </div>
    </div>
  );
};

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30 section-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or need cybersecurity consulting? Let's discuss how I can help.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-5/12 space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <ContactOption 
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
              title="Email"
              value="secure.rajat@gmail.com"
              link="mailto:secure.rajat@gmail.com"
            />
            
            <ContactOption 
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C18.4536 21.9599 16.9675 21.6581 15.59 21.08C14.3078 20.5366 13.1469 19.7617 12.17 18.8C11.2082 17.8226 10.4332 16.6612 9.89 15.38C9.31063 14.0042 9.00756 12.5188 9 11.01C9 10.4601 9.21071 9.93096 9.58579 9.55589C9.96086 9.18082 10.49 8.97011 11.05 8.97H14.05C14.5104 8.96987 14.9557 9.14471 15.2924 9.46492C15.6291 9.78513 15.8284 10.2254 15.85 10.69C15.8973 11.6374 16.0597 12.5769 16.33 13.49C16.4558 13.9197 16.4298 14.3779 16.2566 14.7918C16.0833 15.2057 15.7724 15.5525 15.37 15.78L14.18 16.52C15.0891 17.649 16.2157 18.5926 17.49 19.29L18.25 18.07C18.4817 17.6714 18.8319 17.3658 19.2473 17.1972C19.6628 17.0287 20.121 17.0069 20.55 17.13C21.4585 17.4001 22.4024 17.5624 23.35 17.61C23.8201 17.6333 24.2632 17.8389 24.5821 18.1835C24.9011 18.5282 25.0695 18.9823 25.06 19.45L25 19.4L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
              title="Phone"
              value="+91 9528547912"
              link="tel:+919528547912"
            />
            
            <ContactOption 
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37C16 12.46 15.58 13.5 14.83 14.25C14.08 15 13.04 15.42 11.95 15.42C10.86 15.42 9.82 15 9.07 14.25C8.32 13.5 7.9 12.46 7.9 11.37C7.9 10.28 8.32 9.24 9.07 8.49C9.82 7.74 10.86 7.32 11.95 7.32C13.04 7.32 14.08 7.74 14.83 8.49C15.58 9.24 16 10.28 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 7.5V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
              title="LinkedIn"
              value="linkedin.com/in/rajat-tripathi"
              link="https://linkedin.com/in/rajat-tripathi"
            />
            
            <ContactOption 
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 22V18C15.1391 16.7473 14.7757 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27114 6.51588 3.91409 7.75279 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 18C4.49 20 4 16 2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
              title="GitHub"
              value="github.com/rajat-tripathi"
              link="https://github.com/rajat-tripathi"
            />
            
            <div className="pt-8">
              <Card className="bg-gradient-to-tr from-cyber-primary to-cyber-secondary text-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Ready to enhance your security?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    I'm available for freelance work and consulting. Let's collaborate on securing your digital assets.
                  </p>
                  <Button variant="secondary" className="bg-white text-cyber-primary hover:bg-white/90">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-7/12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can I help you?" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell me about your project..." rows={5} required />
                  </div>
                  
                  <Button type="submit" className="bg-cyber-primary hover:bg-cyber-primary/90 w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
