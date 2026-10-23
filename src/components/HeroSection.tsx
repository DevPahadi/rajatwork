
import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain, Bot, Cloud, Shield, Code, Server, Download } from "lucide-react";
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/4 rounded-full blur-[100px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">Available for Projects</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block text-foreground">Rajat</span>
                <span className="block text-gradient glow-text">Tripathi</span>
              </h1>

              <div className="flex items-center gap-3 justify-center lg:justify-start text-lg md:text-xl text-muted-foreground font-medium flex-wrap">
                <span className="mono text-secondary">{'>'}</span>
                <span>AI R&D Engineer</span>
                <span className="text-primary">|</span>
                <span>Systems &amp; Infrastructure Engineer</span>
              </div>

              <p className="text-muted-foreground max-w-xl leading-relaxed text-base md:text-lg">
                R&amp;D and Systems Engineer with 2+ years of experience in AI, GenAI, agentic systems, automation, cloud infrastructure, and cybersecurity. Specializes in converting emerging technologies into practical business solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg glow-primary transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('portfolio')}
                >
                  View Portfolio
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
                <a
                  href="/Rajat_Tripathi_Resume.pdf"
                  download="Rajat_Tripathi_Resume.pdf"
                  className="inline-flex items-center justify-center border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 px-8 py-6 text-lg rounded-md transition-all duration-300 hover:scale-105"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Resume
                </a>
              </div>
            </div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-border/30"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 mono">Specialized In</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Brain, label: "AI & GenAI" },
                  { icon: Bot, label: "Agentic AI" },
                  { icon: Cloud, label: "Cloud Infrastructure" },
                  { icon: Shield, label: "Cybersecurity" }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="glass-card flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium cursor-default"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent p-[3px] animate-gradient-x">
                  <div className="bg-background rounded-full w-full h-full overflow-hidden">
                    <img
                      src="https://i.postimg.cc/PxbtMZzf/RAJAT-PHOTO.jpg"
                      alt="Rajat Tripathi - AI R&D Engineer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Orbit ring */}
                <div className="absolute inset-0 -m-8 border border-primary/20 rounded-full animate-spin-slow" />
                <div className="absolute inset-0 -m-16 border border-dashed border-secondary/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />

                {/* Floating icons */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 glass p-4 rounded-2xl glow-primary"
                >
                  <Server className="w-7 h-7 text-secondary" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl glow-cyan"
                >
                  <Code className="w-7 h-7 text-accent" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 -right-10 -translate-y-1/2 glass p-3 rounded-xl"
                >
                  <Shield className="w-5 h-5 text-primary" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
