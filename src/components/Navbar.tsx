
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm shadow-sm py-4' 
        : 'py-6'
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gradient">Rajat Tripathi</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm font-medium hover:text-cyber-primary transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium hover:text-cyber-primary transition-colors">About</a>
          <a href="#skills" className="text-sm font-medium hover:text-cyber-primary transition-colors">Skills</a>
          <a href="#services" className="text-sm font-medium hover:text-cyber-primary transition-colors">Services</a>
          <a href="#portfolio" className="text-sm font-medium hover:text-cyber-primary transition-colors">Portfolio</a>
          <a href="#contact">
            <Button variant="default" className="bg-cyber-primary hover:bg-cyber-primary/90">
              Contact
            </Button>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {!mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-sm font-medium hover:text-cyber-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="text-sm font-medium hover:text-cyber-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#skills" className="text-sm font-medium hover:text-cyber-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#services" className="text-sm font-medium hover:text-cyber-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-cyber-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="default" className="bg-cyber-primary hover:bg-cyber-primary/90 w-full">
                Contact
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
