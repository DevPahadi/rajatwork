import React from 'react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-to-r from-cyber-dark via-cyber-secondary to-cyber-dark text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-2 h-full w-full p-4">
          {Array.from({
          length: 48
        }).map((_, i) => <div key={i} className="bg-white rounded animate-pulse" style={{
          animationDelay: `${i * 0.1}s`
        }}></div>)}
        </div>
      </div>
      
      <div className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <a href="#" className="text-2xl font-bold mb-4 inline-block">
                Rajat<span className="text-cyber-accent"> Tripathi</span>
              </a>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Certified Ethical Hacker & Cybersecurity Professional
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Dedicated to securing digital infrastructure through offensive security, vulnerability assessment, and system hardening. Protecting businesses from evolving cyber threats.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-6">
                <a href="https://linkedin.com/in/rajat-tripathi" className="text-white/70 hover:text-cyber-accent transition-colors transform hover:scale-110">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 11.37C16 12.46 15.58 13.5 14.83 14.25C14.08 15 13.04 15.42 11.95 15.42C10.86 15.42 9.82 15 9.07 14.25C8.32 13.5 7.9 12.46 7.9 11.37C7.9 10.28 8.32 9.24 9.07 8.49C9.82 7.74 10.86 7.32 11.95 7.32C13.04 7.32 14.08 7.74 14.83 8.49C15.58 9.24 16 10.28 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 7.5V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="https://github.com/rajat-tripathi" className="text-white/70 hover:text-cyber-accent transition-colors transform hover:scale-110">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 22V18C15.1391 16.7473 14.7757 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27114 6.51588 3.91409 7.75279 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 18C4.49 20 4 16 2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="mailto:secure.rajat@gmail.com" className="text-white/70 hover:text-cyber-accent transition-colors transform hover:scale-110">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-white/70 hover:text-cyber-accent transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-cyber-accent rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform"></span>
                  Home
                </a></li>
                <li><a href="#about" className="text-white/70 hover:text-cyber-accent transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-cyber-accent rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform"></span>
                  About
                </a></li>
                <li><a href="#skills" className="text-white/70 hover:text-cyber-accent transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-cyber-accent rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform"></span>
                  Skills
                </a></li>
                <li><a href="#services" className="text-white/70 hover:text-cyber-accent transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-cyber-accent rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform"></span>
                  Services
                </a></li>
                <li><a href="#portfolio" className="text-white/70 hover:text-cyber-accent transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-cyber-accent rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform"></span>
                  Portfolio
                </a></li>
                <li><a href="#contact" className="text-white/70 hover:text-cyber-accent transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-cyber-accent rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform"></span>
                  Contact
                </a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-bold text-xl mb-6">Services</h3>
              <ul className="space-y-3">
                <li><span className="text-white/70 flex items-center">
                  <span className="w-2 h-2 bg-cyber-primary rounded-full mr-3"></span>
                  Penetration Testing
                </span></li>
                <li><span className="text-white/70 flex items-center">
                  <span className="w-2 h-2 bg-cyber-secondary rounded-full mr-3"></span>
                  Vulnerability Assessment
                </span></li>
                <li><span className="text-white/70 flex items-center">
                  <span className="w-2 h-2 bg-cyber-accent rounded-full mr-3"></span>
                  Security Consulting
                </span></li>
                <li><span className="text-white/70 flex items-center">
                  <span className="w-2 h-2 bg-cyber-primary rounded-full mr-3"></span>
                  System Hardening
                </span></li>
                <li><span className="text-white/70 flex items-center">
                  <span className="w-2 h-2 bg-cyber-secondary rounded-full mr-3"></span>
                  Security Training
                </span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="border-t border-white/10 py-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 mb-4 md:mb-0">
              &copy; {currentYear} Rajat Tripathi. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-cyber-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-cyber-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-cyber-accent transition-colors">Security Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;