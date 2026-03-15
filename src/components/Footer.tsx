
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/20">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="text-2xl font-bold mb-4 inline-block">
                Rajat<span className="text-primary"> Tripathi</span>
              </a>
              <p className="text-muted-foreground text-sm mb-4">
                Certified Ethical Hacker & Cybersecurity Professional
              </p>
              <p className="text-muted-foreground/60 text-sm mb-8 leading-relaxed max-w-md">
                Dedicated to securing digital infrastructure through offensive security, vulnerability assessment, and system hardening.
              </p>
              <div className="flex space-x-4">
                {[
                  { href: "https://www.linkedin.com/in/rajat-tripathi-00/", label: "LinkedIn", path: "M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z", extra: <><rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" /><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" /></> },
                  { href: "https://github.com/DevPahadi", label: "GitHub", path: "M15 22V18C15.1391 16.7473 14.7757 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27114 6.51588 3.91409 7.75279 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22", extra: <path d="M9 18C4.49 20 4 16 2 16" stroke="currentColor" strokeWidth="2" /> },
                  { href: "mailto:secure.rajat@gmail.com", label: "Email", path: "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={social.path} />
                      {social.extra}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-6 text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-6 text-foreground">Services</h3>
              <ul className="space-y-3">
                {['Penetration Testing', 'Vulnerability Assessment', 'Security Consulting', 'System Hardening', 'Security Training'].map((service) => (
                  <li key={service} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-secondary rounded-full" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border/20 py-6 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/60 text-sm">
            &copy; {currentYear} Rajat Tripathi. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            {['Privacy Policy', 'Terms of Service', 'Security Policy'].map((item) => (
              <a key={item} href="#" className="text-muted-foreground/50 hover:text-primary transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
