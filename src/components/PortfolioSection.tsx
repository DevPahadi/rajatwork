
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Security Aspects in AI Thesis",
    category: "Research",
    image: "",
    description: "Research exploring ML model vulnerabilities and defense techniques, focusing on adversarial attacks and model security.",
    technologies: ["Python", "TensorFlow", "Machine Learning", "Security"]
  },
  {
    id: 2,
    title: "AI-Based Wildlife Security Surveillance",
    category: "IoT",
    image: "",
    description: "Real-time wildlife zone monitoring system using IoT and Raspberry Pi for detection and alert of unauthorized entries.",
    technologies: ["IoT", "Raspberry Pi", "Computer Vision", "Security Systems"]
  },
  {
    id: 3,
    title: "One-Tap Doctor",
    category: "Web App",
    image: "",
    description: "Mobile application for emergency medical services in Uttarakhand with real-time booking and AWS cloud deployment.",
    technologies: ["React", "Node.js", "AWS", "Mobile App"]
  },
  {
    id: 4,
    title: "Network Intrusion Detection System",
    category: "Security",
    image: "",
    description: "Custom NIDS using machine learning to detect anomalous network traffic patterns and potential security breaches.",
    technologies: ["Python", "ML", "Network Security", "Data Analysis"]
  },
  {
    id: 5,
    title: "Web Application Firewall",
    category: "Security",
    image: "",
    description: "Implementation of a WAF to protect web applications from various attacks including XSS and SQL injection.",
    technologies: ["ModSecurity", "NGINX", "Rule Sets", "Web Security"]
  },
  {
    id: 6,
    title: "Secure DevOps Pipeline",
    category: "DevOps",
    image: "",
    description: "Integration of security checks and controls into CI/CD pipelines for automated vulnerability detection.",
    technologies: ["Jenkins", "Docker", "OWASP", "DevSecOps"]
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden card-hover group">
      <div className="h-48 bg-muted relative">
        {/* Project image would go here */}
        <div className="absolute inset-0 flex items-center justify-center bg-cyber-primary/10 text-cyber-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="sm" className="bg-cyber-accent text-cyber-dark hover:bg-cyber-accent/90">
            View Project
          </Button>
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{project.title}</h3>
          <span className="bg-cyber-primary/10 text-cyber-primary text-xs px-2 py-1 rounded-full">{project.category}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Research", "IoT", "Web App", "Security", "DevOps"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of my cybersecurity projects and technical implementations
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={filter === category ? "bg-cyber-primary hover:bg-cyber-primary/90" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
