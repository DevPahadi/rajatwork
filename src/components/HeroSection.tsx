
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Server, Lock } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyber-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyber-secondary/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyber-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(67,97,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(67,97,238,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyber-primary rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyber-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 right-10 w-2 h-2 bg-cyber-secondary rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-cyber-primary/70 rounded-full animate-float" style={{ animationDelay: '2.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Status badge */}
            <Badge variant="secondary" className="mb-6 bg-cyber-primary/10 text-cyber-primary border-cyber-primary/20 px-4 py-2">
              <div className="w-2 h-2 bg-cyber-primary rounded-full mr-2 animate-pulse" />
              Available for Projects
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Rajat</span>
                <span className="block bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent bg-clip-text text-transparent animate-gradient-x">
                  Tripathi
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground font-medium">
                <span className="inline-block">Certified Ethical Hacker</span>
                <span className="mx-3 text-cyber-accent">•</span>
                <span className="inline-block">Cybersecurity Expert</span>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Transforming security challenges into robust solutions through 
                <span className="text-cyber-primary font-semibold"> offensive security</span>, 
                <span className="text-cyber-primary font-semibold"> vulnerability assessment</span>, and 
                <span className="text-cyber-primary font-semibold"> system hardening</span>. 
                CEH v12 certified professional with hands-on experience in penetration testing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyber-primary to-cyber-secondary hover:from-cyber-primary/90 hover:to-cyber-secondary/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Portfolio
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-white px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            
            {/* Tech stack badges */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4 font-medium">Specialized In</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Shield, label: "VAPT" },
                  { icon: Lock, label: "OWASP" },
                  { icon: Code, label: "CEH v12" },
                  { icon: Server, label: "Network Security" }
                ].map((item, index) => (
                  <div 
                    key={item.label}
                    className="group flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-sm font-medium hover:border-cyber-primary/50 hover:bg-cyber-primary/5 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="w-4 h-4 text-cyber-primary group-hover:text-cyber-primary transition-colors" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Hero Visual with Profile Picture */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main profile container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyber-primary via-cyber-accent to-cyber-secondary p-1 animate-gradient-x">
                  <div className="bg-background rounded-full w-full h-full overflow-hidden relative">
                    {/* Profile image */}
                    <img 
                      src="https://i.postimg.cc/PxbtMZzf/RAJAT-PHOTO.jpg" 
                      alt="Rajat Tripathi - Cybersecurity Expert"
                      className="w-full h-full object-cover rounded-full"
                    />
                    
                    {/* Inner glow effect */}
                    <div className="absolute inset-4 rounded-full border border-cyber-primary/20 animate-pulse-slow" />
                  </div>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyber-accent p-3 rounded-lg shadow-xl">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }}>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-cyber-primary p-3 rounded-lg shadow-xl">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Floating tech icons */}
                <div className="absolute -top-8 -right-8 bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl shadow-2xl animate-float">
                  <Server className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-2xl shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                  <Code className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Background decorative rings */}
              <div className="absolute inset-0 -m-8 border-2 border-dashed border-cyber-primary/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-0 -m-16 border border-cyber-secondary/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
