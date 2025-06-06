
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  accent: string;
};

const ServiceCard = ({ icon, title, description, features, accent }: ServiceCardProps) => {
  return (
    <Card className="card-hover relative group overflow-hidden border-0 bg-gradient-to-br from-card to-muted/30 shadow-xl">
      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
      
      {/* Floating background elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyber-primary/5 to-cyber-secondary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
      
      <CardContent className="pt-8 pb-8 relative">
        <div className="bg-gradient-to-br from-cyber-primary/10 to-cyber-secondary/10 text-cyber-primary p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-4 group-hover:text-cyber-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{description}</p>
        
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-cyber-accent rounded-full"></div>
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      title: "Vulnerability Assessment",
      description: "Comprehensive scanning and assessment to identify security vulnerabilities in your systems and applications before they can be exploited.",
      features: ["Network scanning", "Web application testing", "Database security", "Compliance reporting"],
      accent: "from-cyber-primary to-cyber-secondary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      ),
      title: "Penetration Testing",
      description: "Simulated cyber attacks to evaluate the security of IT systems by safely exploiting vulnerabilities to assess potential business impacts.",
      features: ["Black box testing", "White box testing", "Social engineering", "Detailed reporting"],
      accent: "from-cyber-secondary to-cyber-accent"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8a6 6 0 0 0-6-6H8a6 6 0 0 0 0 12h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6" />
        </svg>
      ),
      title: "Security Consulting",
      description: "Expert guidance on security strategy, compliance requirements, and best practices to strengthen your overall security posture.",
      features: ["Security audits", "Policy development", "Risk assessment", "Training programs"],
      accent: "from-cyber-accent to-cyber-primary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="2" x2="9" y2="4" />
          <line x1="15" y1="2" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="22" />
          <line x1="15" y1="20" x2="15" y2="22" />
          <line x1="20" y1="9" x2="22" y2="9" />
          <line x1="20" y1="15" x2="22" y2="15" />
          <line x1="2" y1="9" x2="4" y2="9" />
          <line x1="2" y1="15" x2="4" y2="15" />
        </svg>
      ),
      title: "System Hardening",
      description: "Implementation of security configurations and controls to reduce the attack surface and strengthen defenses of servers and applications.",
      features: ["Server configuration", "Access controls", "Patch management", "Monitoring setup"],
      accent: "from-cyber-primary to-cyber-accent"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      ),
      title: "Security Audits",
      description: "In-depth review of security controls, policies, and procedures to identify gaps and provide recommendations for improvement.",
      features: ["Compliance audits", "Gap analysis", "Best practices", "Remediation plans"],
      accent: "from-cyber-secondary to-cyber-primary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      ),
      title: "Security Training",
      description: "Customized security awareness and technical training programs to educate your team about threats and defensive strategies.",
      features: ["Awareness training", "Technical workshops", "Phishing simulations", "Custom curricula"],
      accent: "from-cyber-accent to-cyber-secondary"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyber-primary/5 to-cyber-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyber-accent/5 to-cyber-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
            Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Cybersecurity Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert cybersecurity services to protect your systems, data, and digital infrastructure
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              accent={service.accent}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-cyber-primary to-cyber-secondary shadow-2xl">
            <CardContent className="p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h3>
              <p className="text-xl mb-8 opacity-90">
                Get a comprehensive security assessment and personalized recommendations for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-cyber-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
                >
                  Get Free Consultation
                </a>
                <a 
                  href="#portfolio" 
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyber-primary transition-colors"
                >
                  View Case Studies
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
