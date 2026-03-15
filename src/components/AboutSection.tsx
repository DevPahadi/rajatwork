
import React from 'react';
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from './AnimatedSection';

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <FadeUp className="text-center mb-20">
          <span className="mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">About Me</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient">
            Passionate About Security
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated cybersecurity professional with expertise in offensive security and vulnerability exploitation
          </p>
        </FadeUp>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image */}
          <SlideInLeft className="lg:w-5/12">
            <div className="relative group">
              <div className="relative z-10 p-[2px] rounded-2xl bg-gradient-to-tr from-primary via-secondary to-accent">
                <div className="bg-card h-80 md:h-[450px] rounded-2xl overflow-hidden">
                  <img
                    src="https://i.postimg.cc/RF5LJ3TL/Photo-Casual.jpg"
                    alt="Rajat Tripathi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-xl animate-spin-slow" style={{ animationDuration: '20s' }} />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-lg blur-xl" />
            </div>
          </SlideInLeft>

          {/* Content */}
          <SlideInRight className="lg:w-7/12">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-3 text-gradient">Rajat Tripathi</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['CEH v12 Certified', 'MCA Graduate', 'Security Specialist'].map((badge, i) => (
                    <span key={badge} className="glass px-3 py-1.5 rounded-full text-xs font-medium text-primary">
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I am a dedicated cybersecurity professional with a passion for understanding system vulnerabilities and creating robust defensive strategies. My expertise spans offensive security, vulnerability assessment, and system hardening, allowing me to identify and mitigate potential security risks before they can be exploited.
                </p>
              </div>

              {/* Cards */}
              <StaggerContainer className="grid md:grid-cols-2 gap-6">
                <StaggerItem>
                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                      <h5 className="font-bold text-lg">Education</h5>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-sm block">MCA</span>
                          <span className="text-xs text-muted-foreground">Graphic Era University (2024)</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-sm block">B.Sc. Information Technology</span>
                          <span className="text-xs text-muted-foreground">Graphic Era Hill University (2022)</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
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
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-sm block">L2 Systems Engineer/Administrator (Present)</span>
                          <span className="text-xs text-muted-foreground">NoisyLion</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-sm block">IT Infrastructure Specialist Intern</span>
                          <span className="text-xs text-muted-foreground">MaxVal IP Services</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-sm block">Associate Server Administrator Trainee</span>
                          <span className="text-xs text-muted-foreground">RightWave InfoSolutions</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '5+', label: 'Security Projects', color: 'text-primary' },
                  { value: '30%', label: 'Vulnerability Reduction', color: 'text-secondary' },
                  { value: '99.9%', label: 'System Uptime', color: 'text-accent' },
                ].map((stat) => (
                  <FadeUp key={stat.label} className="text-center glass-card rounded-2xl p-4">
                    <div className={`text-3xl md:text-4xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </FadeUp>
                ))}
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
