
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30 section-pattern relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyber-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyber-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Passionate About Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dedicated cybersecurity professional with expertise in offensive security and vulnerability exploitation
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Enhanced Image Column with Square Profile Picture */}
          <div className="lg:w-5/12">
            <div className="relative group">
              {/* Animated background rings */}
              <div className="absolute -inset-8 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-xl opacity-20 animate-pulse-slow"></div>
              <div className="absolute -inset-4 border-2 border-cyber-primary/30 rounded-lg animate-pulse"></div>
              
              {/* Main profile image container */}
              <div className="relative z-10 bg-gradient-to-tr from-cyber-primary via-cyber-secondary to-cyber-accent p-1 rounded-2xl shadow-2xl group-hover:shadow-cyber-primary/25 transition-all duration-500">
                <div className="bg-muted h-80 md:h-96 rounded-xl overflow-hidden relative">
                  {/* Profile image */}
                  <img 
                    src="https://i.postimg.cc/RF5LJ3TL/Photo-Casual.jpg" 
                    alt="Rajat Tripathi - About Me" 
                    className="w-full h-full object-cover" 
                  />
                  
                  {/* Animated background pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 gap-2 h-full w-full p-4">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="bg-cyber-primary rounded animate-pulse" 
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyber-accent rounded-xl animate-float shadow-lg"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-cyber-primary/40 rounded-xl animate-spin-slow"></div>
            </div>
          </div>
          
          {/* Enhanced Content Column */}
          <div className="lg:w-7/12">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-2 text-gradient">Rajat Tripathi</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-cyber-primary/10 text-cyber-primary hover:bg-cyber-primary/20">
                    CEH v12 Certified
                  </Badge>
                  <Badge className="bg-cyber-secondary/10 text-cyber-secondary hover:bg-cyber-secondary/20">
                    MCA Graduate
                  </Badge>
                  <Badge className="bg-cyber-accent/10 text-cyber-accent hover:bg-cyber-accent/20">
                    Security Specialist
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  I am a dedicated cybersecurity professional with a passion for understanding system vulnerabilities and creating robust defensive strategies. My expertise spans offensive security, vulnerability assessment, and system hardening, allowing me to identify and mitigate potential security risks before they can be exploited.
                </p>
              </div>
              
              {/* Enhanced Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <Card className="card-hover border-0 bg-gradient-to-br from-card to-muted/50 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-cyber-primary/10 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-primary">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                      <h5 className="font-bold text-lg">Education</h5>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyber-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-foreground block text-sm">MCA</span>
                          <span className="text-sm text-muted-foreground">Graphic Era University (2024)</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyber-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-foreground block text-sm">B.Sc. Information Technology</span>
                          <span className="text-sm text-muted-foreground">Graphic Era Hill University (2022)</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="card-hover border-0 bg-gradient-to-br from-card to-muted/50 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-cyber-secondary/10 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-secondary">
                          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                          <line x1="6" y1="6" x2="6.01" y2="6" />
                          <line x1="6" y1="18" x2="6.01" y2="18" />
                        </svg>
                      </div>
                      <h5 className="font-bold text-lg">Experience</h5>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyber-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-foreground block text-sm">L2 Systems Engineer/Administrator</span>
                          <span className="text-sm text-muted-foreground">NoisyLion</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyber-accent rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-foreground block text-sm">Associate Server Administrator Trainee</span>
                          <span className="text-sm text-muted-foreground">RightWave InfoSolutions</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="text-4xl font-bold text-cyber-primary mb-2 group-hover:scale-110 transition-transform">5+</div>
                  <p className="text-sm text-muted-foreground">Security Projects</p>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-cyber-secondary mb-2 group-hover:scale-110 transition-transform">30%</div>
                  <p className="text-sm text-muted-foreground">Vulnerability Reduction</p>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-cyber-accent mb-2 group-hover:scale-110 transition-transform">99.9%</div>
                  <p className="text-sm text-muted-foreground">System Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
