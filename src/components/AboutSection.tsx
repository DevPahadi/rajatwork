
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30 section-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Passionate cybersecurity professional with expertise in offensive security and vulnerability exploitation
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="lg:w-5/12">
            <div className="relative">
              {/* Main profile image - replace with actual image */}
              <div className="relative z-10 bg-gradient-to-tr from-cyber-primary to-cyber-secondary p-1 rounded-lg shadow-xl">
                <div className="bg-muted h-80 md:h-96 rounded-lg flex items-center justify-center text-cyber-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                    <path d="M20 22a8 8 0 0 0-16 0" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-cyber-accent rounded-lg -z-10"></div>
              <div className="absolute -top-5 -left-5 w-32 h-32 border-2 border-cyber-primary rounded-lg -z-10"></div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:w-7/12">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Rajat Tripathi</h3>
            <h4 className="text-xl mb-6">Certified Ethical Hacker (CEH v12) & CyberSecurity Specialist</h4>
            
            <p className="text-muted-foreground mb-6">
              I am a dedicated cybersecurity professional with a passion for understanding system vulnerabilities and creating robust defensive strategies. My expertise spans offensive security, vulnerability assessment, and system hardening, allowing me to identify and mitigate potential security risks before they can be exploited.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <h5 className="font-bold mb-2">Education</h5>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">MCA</span> - Graphic Era University (2024)
                    </li>
                    <li className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">B.Sc in IT</span> - Graphic Era Hill University (2022)
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <h5 className="font-bold mb-2">Experience</h5>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">IT Infrastructure Specialist Intern</span> - MaxVal IP Services
                    </li>
                    <li className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Associate Server Administrator Trainee</span> - RightWave InfoSolutions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-cyber-primary">20+</div>
                <p className="text-sm text-muted-foreground">Security Projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-primary">30%</div>
                <p className="text-sm text-muted-foreground">Vulnerability Reduction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-primary">99.9%</div>
                <p className="text-sm text-muted-foreground">System Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
