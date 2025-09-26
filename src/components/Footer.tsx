import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook, Send } from 'lucide-react';

const SocialLink = ({ href, icon: Icon }: { href: string, icon: React.ElementType }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 transition-colors w-10 h-10 rounded-lg flex items-center justify-center">
    <Icon className="w-5 h-5 text-white" />
  </a>
);

const Footer = () => {
  const sections = ['Process', 'Services', 'Benefits', 'Plans', 'Contact'];
  const pages = ['Home', 'Coming soon', '404'];
  const socials = [
    { href: '#', icon: Linkedin },
    { href: '#', icon: Twitter },
    { href: '#', icon: Instagram },
    { href: '#', icon: Facebook },
    { href: '#', icon: Send },
  ];

  return (
    <footer className="border-t-2 border-border-color">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L23.0577 6.70213L30.1604 3.68871L27.147 10.7914L34.2496 13.8048L27.147 16.8182L30.1604 23.9209L23.0577 20.9075L20 27.6096L16.9423 20.9075L9.83964 23.9209L12.853 16.8182L5.75036 13.8048L12.853 10.7914L9.83964 3.68871L16.9423 6.70213L20 0Z" fill="white"/>
              </svg>
              <span className="text-3xl font-medium">Xerweon</span>
            </div>
            <p className="text-text-secondary mb-6 max-w-sm">Your trusted partner in AI solutions, creating smarter systems for smarter businesses.</p>
            <div className="flex items-center gap-3">
              {socials.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium text-lg mb-4">Sections</h4>
              <ul className="space-y-3">
                {sections.map(link => <li key={link}><a href={`#${link.toLowerCase()}`} className="text-text-secondary hover:text-white transition">{link}</a></li>)}
              </ul>
            </div>
             <div>
              <h4 className="font-medium text-lg mb-4">Pages</h4>
              <ul className="space-y-3">
                {pages.map(link => <li key={link}><a href="#" className="text-text-secondary hover:text-white transition">{link}</a></li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border-color">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
          <p>© 2025 Xerweon. All rights reserved.</p>
          <p>Visioned and Crafted by Kanishk Dubey</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
