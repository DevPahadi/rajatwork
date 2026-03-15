
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './AnimatedSection';

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

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Research", "IoT", "Web App"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-spacing relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my cybersecurity projects and technical implementations
          </p>
        </FadeUp>

        {/* Filters */}
        <FadeUp delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="ghost"
              className={`rounded-full px-6 transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary text-primary-foreground glow-primary'
                  : 'glass text-muted-foreground hover:text-foreground hover:bg-primary/10'
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </FadeUp>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="glass-card rounded-2xl overflow-hidden group">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                        View Project
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
                      <span className="glass px-3 py-1 rounded-full text-xs text-primary font-medium whitespace-nowrap ml-2">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
