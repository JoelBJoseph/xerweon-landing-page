import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';

const Logo = () => (
  <motion.a 
    href="#" 
    className="flex items-center gap-2"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <motion.svg 
      width="28" 
      height="28" 
      viewBox="0 0 28 28" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.3 }}
    >
      <path d="M14 0L16.2933 5.02667L21.32 2.73333L19.0267 7.76L24.0533 10.0533L19.0267 12.3467L21.32 17.3733L16.2933 15.08L14 20.1067L11.7067 15.08L6.68 17.3733L8.97333 12.3467L3.94667 10.0533L8.97333 7.76L6.68 2.73333L11.7067 5.02667L14 0Z" fill="white"/>
    </motion.svg>
    <span className="text-xl font-medium text-white">Xerweon</span>
  </motion.a>
);

const NavLinks = ({ isMobile, closeMenu, activeSection }: { isMobile?: boolean; closeMenu?: () => void; activeSection: string | null }) => {
  const links = ['Process', 'Services', 'Benefits', 'Plans', 'Contact'];
  const baseClasses = "hover:text-white transition-colors duration-300";
  const mobileClasses = "block py-2 text-lg";
  const desktopClasses = "text-sm relative";

  const handleClick = (link: string) => {
    const element = document.getElementById(link.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (closeMenu) closeMenu();
  };

  return (
    <>
      {links.map((link, index) => {
        const linkId = link.toLowerCase();
        const isActive = activeSection === linkId;

        return (
          <motion.a 
            key={link} 
            onClick={() => handleClick(link)}
            className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${isActive ? 'text-white' : 'text-white/80'} cursor-pointer group`}
            initial={isMobile ? { opacity: 0, x: -20 } : false}
            animate={isMobile ? { opacity: 1, x: 0 } : (isActive ? "active" : "inactive")}
            whileHover="hover"
            transition={isMobile ? { delay: index * 0.1 } : {}}
          >
            {link}
            {!isMobile && (
              <motion.div
                className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-brand-cyan"
                variants={{
                  inactive: { scaleX: 0 },
                  active: { scaleX: 1 },
                  hover: { scaleX: 1 }
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ originX: 0.5 }}
              />
            )}
          </motion.a>
        );
      })}
    </>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const sectionIds = ['home', 'about', 'process', 'services', 'benefits', 'plans', 'testimonials', 'contact', 'faq', 'cta'];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks activeSection={activeSection} />
          </nav>
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary">Get in touch</Button>
            </motion.div>
          </div>
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="transition-colors duration-200 hover:bg-white/10 p-2 rounded-lg"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-black/90 backdrop-blur-xl absolute top-20 left-0 right-0 border-b border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.nav 
              className="flex flex-col items-center gap-4 p-6"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <NavLinks isMobile closeMenu={() => setIsMenuOpen(false)} activeSection={activeSection} />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button variant="primary" className="w-full mt-4">Get in touch</Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
