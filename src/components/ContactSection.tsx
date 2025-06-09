
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactOption = ({ 
  icon, 
  title, 
  value, 
  link,
  gradient 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  link?: string;
  gradient: string;
}) => {
  const Component = link ? 'a' : 'div';
  const props = link ? { href: link } : {};
  
  return (
    <Component {...props} className="block">
      <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-gradient-to-br from-card to-muted/30 transition-all hover:border-cyber-primary/50 hover:shadow-lg hover:-translate-y-1 group">
        <div className={`text-white p-3 rounded-xl bg-gradient-to-r ${gradient} group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-1 group-hover:text-cyber-primary transition-colors">{title}</h4>
          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
            {value}
          </p>
        </div>
      </div>
    </Component>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Rajat Tripathi'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30 section-pattern relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-cyber-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyber-accent/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
            Contact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or need cybersecurity consulting? Let's discuss how I can help secure your digital assets.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Enhanced Contact Info */}
          <div className="lg:w-5/12 space-y-8">
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <ContactOption 
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
                title="Email Address"
                value="secure.rajat@gmail.com"
                link="mailto:secure.rajat@gmail.com"
                gradient="from-cyber-primary to-cyber-secondary"
              />
              
              <ContactOption 
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C18.4536 21.9599 16.9675 21.6581 15.59 21.08C14.3078 20.5366 13.1469 19.7617 12.17 18.8C11.2082 17.8226 10.4332 16.6612 9.89 15.38C9.31063 14.0042 9.00756 12.5188 9 11.01C9 10.4601 9.21071 9.93096 9.58579 9.55589C9.96086 9.18082 10.49 8.97011 11.05 8.97H14.05C14.5104 8.96987 14.9557 9.14471 15.2924 9.46492C15.6291 9.78513 15.8284 10.2254 15.85 10.69C15.8973 11.6374 16.0597 12.5769 16.33 13.49C16.4558 13.9197 16.4298 14.3779 16.2566 14.7918C16.0833 15.2057 15.7724 15.5525 15.37 15.78L14.18 16.52C15.0891 17.649 16.2157 18.5926 17.49 19.29L18.25 18.07C18.4817 17.6714 18.8319 17.3658 19.2473 17.1972C19.6628 17.0287 20.121 17.0069 20.55 17.13C21.4585 17.4001 22.4024 17.5624 23.35 17.61C23.8201 17.6333 24.2632 17.8389 24.5821 18.1835C24.9011 18.5282 25.0695 18.9823 25.06 19.45L25 19.4L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
                title="Phone Number"
                value="+91 9528547912"
                link="tel:+919528547912"
                gradient="from-cyber-secondary to-cyber-accent"
              />
              
              <ContactOption 
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16 12.46 15.58 13.5 14.83 14.25C14.08 15 13.04 15.42 11.95 15.42C10.86 15.42 9.82 15 9.07 14.25C8.32 13.5 7.9 12.46 7.9 11.37C7.9 10.28 8.32 9.24 9.07 8.49C9.82 7.74 10.86 7.32 11.95 7.32C13.04 7.32 14.08 7.74 14.83 8.49C15.58 9.24 16 10.28 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 7.5V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
                title="LinkedIn Profile"
                value="linkedin.com/in/rajat-tripathi"
                link="https://linkedin.com/in/rajat-tripathi"
                gradient="from-cyber-accent to-cyber-primary"
              />
              
              <ContactOption 
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 22V18C15.1391 16.7473 14.7757 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27114 6.51588 3.91409 7.75279 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 18C4.49 20 4 16 2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
                title="GitHub Repository"
                value="github.com/rajat-tripathi"
                link="https://github.com/rajat-tripathi"
                gradient="from-cyber-primary to-cyber-secondary"
              />
            </div>
            
            {/* Enhanced CTA Card */}
            <div className="pt-8">
              <Card className="border-0 bg-gradient-to-br from-cyber-primary via-cyber-secondary to-cyber-accent shadow-2xl overflow-hidden relative">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-6 gap-2 h-full w-full p-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="bg-white rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                </div>
                
                <CardContent className="pt-8 pb-8 text-white relative">
                  <h3 className="text-2xl font-bold mb-4">Ready to Enhance Security?</h3>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    I'm available for freelance work and consulting. Let's collaborate on securing your digital assets.
                  </p>
                  <Button className="bg-white text-cyber-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Enhanced Contact Form */}
          <div className="lg:w-7/12">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-card to-muted/30">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-3xl font-bold mb-8 text-gradient">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                        Full Name *
                      </label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        required 
                        className="h-12 border-2 border-border focus:border-cyber-primary transition-colors rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                        Email Address *
                      </label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com" 
                        required 
                        className="h-12 border-2 border-border focus:border-cyber-primary transition-colors rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground">
                      Subject *
                    </label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can I help you?" 
                      required 
                      className="h-12 border-2 border-border focus:border-cyber-primary transition-colors rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or security needs..." 
                      rows={6} 
                      required 
                      className="border-2 border-border focus:border-cyber-primary transition-colors rounded-xl resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-gradient-to-r from-cyber-primary to-cyber-secondary hover:from-cyber-primary/90 hover:to-cyber-secondary/90 w-full h-12 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                    {!isLoading && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                        <path d="m22 2-7 20-4-9-9-4Z"/>
                        <path d="M22 2 11 13"/>
                      </svg>
                    )}
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
