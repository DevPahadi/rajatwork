
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillCategory = ({ 
  title, 
  icon, 
  skills 
}: { 
  title: string; 
  icon: React.ReactNode; 
  skills: { name: string; level: number }[] 
}) => {
  return (
    <Card className="card-hover">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-cyber-primary/10 p-3 rounded-full text-cyber-primary">
            {icon}
          </div>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

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
        { name: "ISO 27001", level: 80 }
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
        { name: "VPN", level: 85 },
        { name: "Firewalls", level: 90 },
        { name: "SIEM", level: 80 }
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
        { name: "AWS/Azure", level: 75 },
        { name: "Server Hardening", level: 90 }
      ]
    },
    {
      title: "SOC Tools & Programming",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8a6 6 0 0 0-6-6H8a6 6 0 0 0 0 12h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6" />
        </svg>
      ),
      skills: [
        { name: "Wireshark", level: 85 },
        { name: "Metasploit", level: 90 },
        { name: "BurpSuite", level: 85 },
        { name: "Python & Bash", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technical expertise and specializations in cybersecurity and related technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory 
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
