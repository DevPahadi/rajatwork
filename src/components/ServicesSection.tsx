
import React from 'react';
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerContainer, StaggerItem } from './AnimatedSection';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

const ServiceCard = ({ icon, title, description, features }: Service) => (
  <div className="glass-card rounded-2xl p-8 group relative overflow-hidden">
    {/* Top accent line */}
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

    <div className="bg-primary/10 text-primary p-4 rounded-2xl inline-block mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{description}</p>
    <div className="space-y-2">
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
          <span className="text-muted-foreground">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

const ServicesSection = () => {
  const services: Service[] = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>,
      title: "Vulnerability Assessment",
      description: "Comprehensive scanning and assessment to identify security vulnerabilities in your systems and applications.",
      features: ["Network scanning", "Web application testing", "Database security", "Compliance reporting"],
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>,
      title: "Penetration Testing",
      description: "Simulated cyber attacks to evaluate the security of IT systems by safely exploiting vulnerabilities.",
      features: ["Black box testing", "White box testing", "Social engineering", "Detailed reporting"],
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-6-6H8a6 6 0 0 0 0 12h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6" /></svg>,
      title: "Security Consulting",
      description: "Expert guidance on security strategy, compliance requirements, and best practices.",
      features: ["Security audits", "Policy development", "Risk assessment", "Training programs"],
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /></svg>,
      title: "System Hardening",
      description: "Implementation of security configurations and controls to reduce the attack surface.",
      features: ["Server configuration", "Access controls", "Patch management", "Monitoring setup"],
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
      title: "Security Audits",
      description: "In-depth review of security controls, policies, and procedures to identify gaps.",
      features: ["Compliance audits", "Gap analysis", "Best practices", "Remediation plans"],
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><line x1="2" y1="12" x2="22" y2="12" /></svg>,
      title: "Security Training",
      description: "Customized security awareness and technical training programs for your team.",
      features: ["Awareness training", "Technical workshops", "Phishing simulations", "Custom curricula"],
    },
  ];

  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/3 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeUp className="text-center mb-20">
          <span className="mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">Services</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient">
            Cybersecurity Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert cybersecurity services to protect your systems, data, and digital infrastructure
          </p>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <ServiceCard {...service} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeUp delay={0.4} className="mt-16">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-90" />
            <div className="relative p-12 text-center">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Secure Your Business?</h3>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Get a comprehensive security assessment and personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact">
                  <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-8 font-semibold">
                    Get Free Consultation
                  </Button>
                </a>
                <a href="#portfolio">
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
                    View Case Studies
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default ServicesSection;
