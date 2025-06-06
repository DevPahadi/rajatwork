
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-cyber-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold">
              Rajat<span className="text-cyber-accent">Tripathi</span>
            </a>
            <p className="text-white/70 text-sm mt-2">
              CyberSecurity Professional & Ethical Hacker
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 mb-6 md:mb-0">
            <a href="#about" className="text-sm text-white/70 hover:text-cyber-accent transition-colors">About</a>
            <a href="#skills" className="text-sm text-white/70 hover:text-cyber-accent transition-colors">Skills</a>
            <a href="#services" className="text-sm text-white/70 hover:text-cyber-accent transition-colors">Services</a>
            <a href="#portfolio" className="text-sm text-white/70 hover:text-cyber-accent transition-colors">Portfolio</a>
            <a href="#contact" className="text-sm text-white/70 hover:text-cyber-accent transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/rajat-tripathi" className="text-white/70 hover:text-cyber-accent transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37C16 12.46 15.58 13.5 14.83 14.25C14.08 15 13.04 15.42 11.95 15.42C10.86 15.42 9.82 15 9.07 14.25C8.32 13.5 7.9 12.46 7.9 11.37C7.9 10.28 8.32 9.24 9.07 8.49C9.82 7.74 10.86 7.32 11.95 7.32C13.04 7.32 14.08 7.74 14.83 8.49C15.58 9.24 16 10.28 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 7.5V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://github.com/rajat-tripathi" className="text-white/70 hover:text-cyber-accent transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 22V18C15.1391 16.7473 14.7757 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27114 6.51588 3.91409 7.75279 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 18C4.49 20 4 16 2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-white/50">
            &copy; {currentYear} Rajat Tripathi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
