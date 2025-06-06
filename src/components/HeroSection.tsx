
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-cyber-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyber-secondary/10 rounded-full blur-3xl -z-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-cyber-accent rounded-full animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyber-primary rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-4 h-4 bg-cyber-secondary/70 rounded-full animate-pulse-slow" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="lg:w-1/2 lg:pr-12">
            <p className="text-cyber-primary font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">
              Rajat Tripathi
              <span className="block text-gradient">Cyber Security Expert</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Certified Ethical Hacker (CEH v12) specializing in offensive security, 
              vulnerability assessment, and system hardening. Transforming security 
              challenges into robust solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-cyber-primary hover:bg-cyber-primary/90 text-white px-6">
                View Portfolio
              </Button>
              <Button variant="outline" className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10">
                Contact Me
              </Button>
            </div>
            
            {/* Tech badges */}
            <div className="mt-12 flex flex-wrap gap-3">
              <div className="bg-background border border-border px-4 py-2 rounded-full text-sm">VAPT</div>
              <div className="bg-background border border-border px-4 py-2 rounded-full text-sm">OWASP</div>
              <div className="bg-background border border-border px-4 py-2 rounded-full text-sm">CEH v12</div>
              <div className="bg-background border border-border px-4 py-2 rounded-full text-sm">Network Security</div>
              <div className="bg-background border border-border px-4 py-2 rounded-full text-sm">Metasploit</div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              {/* Main image placeholder - replace with Rajat's actual image */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-cyber-primary to-cyber-secondary p-1 mx-auto">
                <div className="bg-background rounded-full w-full h-full overflow-hidden">
                  <div className="w-full h-full bg-muted flex items-center justify-center text-cyber-primary">
                    {/* This is where the profile image would go */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                      <path d="M20 22a8 8 0 0 0-16 0" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-dashed border-cyber-primary/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-dashed border-cyber-secondary/30 rounded-full animate-spin-slow"></div>
              
              {/* Floating elements */}
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-cyber-accent p-4 rounded-lg shadow-lg animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <div className="absolute top-1/4 -right-3 bg-cyan-100 p-3 rounded-lg shadow-lg animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              </div>
              <div className="absolute bottom-1/4 -right-10 p-3 bg-purple-100 rounded-lg shadow-lg animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8a6 6 0 0 0-6-6H8a6 6 0 0 0 0 12h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
