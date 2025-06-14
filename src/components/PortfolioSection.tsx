
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    description: "Research exploring ML model vulnerabilities and defense techniques, focusing on adversarial attacks and model security.",
    technologies: ["Python", "TensorFlow", "Machine Learning", "Security"]
  },
  {
    id: 2,
    title: "AI-Based Wildlife Security Surveillance",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    description: "Real-time wildlife zone monitoring system using IoT and Raspberry Pi for detection and alert of unauthorized entries.",
    technologies: ["IoT", "Raspberry Pi", "Computer Vision", "Security Systems"]
  },
  {
    id: 3,
    title: "One-Tap Doctor",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    description: "Mobile application for emergency medical services in Uttarakhand with real-time booking and AWS cloud deployment.",
    technologies: ["React", "Node.js", "AWS", "Mobile App"]
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden card-hover group">
      <div className="h-48 bg-muted relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button variant="secondary" size="sm" className="bg-cyber-accent text-cyber-dark hover:bg-cyber-accent/90">
            View Project
          </Button>
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{project.title}</h3>
          <Badge variant="outline" className="bg-cyber-primary/10 text-cyber-primary text-xs border-cyber-primary/30">
            {project.category}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
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
  const categories = ["All", "Research", "IoT", "Web App"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyber-secondary/5 to-cyber-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyber-primary/5 to-cyber-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my cybersecurity projects and technical implementations
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={filter === category ? "bg-cyber-primary hover:bg-cyber-primary/90" : "hover:bg-cyber-primary/10 hover:text-cyber-primary"}
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
