
import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from './AnimatedSection';

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div>
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs mono text-primary">{level}%</span>
    </div>
    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
      />
    </div>
  </div>
);

const SkillCategory = ({
  title,
  icon,
  skills,
}: {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}) => (
  <div className="glass-card rounded-2xl p-6">
    <div className="flex items-center gap-3 mb-6">
      <div className="bg-primary/10 p-3 rounded-xl text-primary">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
    <div className="space-y-4">
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      ),
      skills: [
        { name: "VAPT", level: 95 },
        { name: "OWASP Top 10", level: 90 },
        { name: "MITRE ATT&CK", level: 85 },
        { name: "ISO/IEC 27001", level: 80 },
        { name: "NIST Framework", level: 78 }
      ]
    },
    {
      title: "Network Security",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      skills: [
        { name: "TCP/IP", level: 90 },
        { name: "Endpoint Security", level: 85 },
        { name: "VPNs", level: 88 },
        { name: "IDS/IPS", level: 82 },
        { name: "SIEM", level: 80 },
        { name: "Firewalls", level: 90 }
      ]
    },
    {
      title: "OS & Server Administration",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      skills: [
        { name: "Linux", level: 90 },
        { name: "Windows Server", level: 85 },
        { name: "AWS/Azure/GSuite", level: 75 },
        { name: "Active Directory", level: 80 },
        { name: "IT Support", level: 88 }
      ]
    },
    {
      title: "SOC & Security Tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8a6 6 0 0 0-6-6H8a6 6 0 0 0 0 12h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6" />
        </svg>
      ),
      skills: [
        { name: "Wireshark", level: 85 },
        { name: "Nmap", level: 90 },
        { name: "Metasploit", level: 88 },
        { name: "BurpSuite", level: 85 },
        { name: "Nessus", level: 82 },
        { name: "Splunk", level: 75 }
      ]
    },
    {
      title: "DevOps & DevSecOps",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6" />
        </svg>
      ),
      skills: [
        { name: "CI/CD Fundamentals", level: 70 },
        { name: "Shell Scripting", level: 85 },
        { name: "Bash", level: 88 },
        { name: "Ansible (Basics)", level: 65 },
        { name: "Git", level: 82 },
        { name: "Docker", level: 75 }
      ]
    },
    {
      title: "Programming & Databases",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      skills: [
        { name: "Python", level: 85 },
        { name: "C/C++", level: 78 },
        { name: "Bash", level: 88 },
        { name: "Log Parsing", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 72 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="mono text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">Technical Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Technical expertise and specializations in cybersecurity and related technologies
          </p>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <SkillCategory
                title={category.title}
                icon={category.icon}
                skills={category.skills}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SkillsSection;
