import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'DSA Profile', href: '#dsa' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.substring(1));
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel flex items-center justify-between px-6 py-3 shadow-lg">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wider cursor-pointer" onClick={() => scrollTo('#home')}>
            Shivaay<span className="text-gradient">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="relative group text-sm font-medium transition-colors"
              >
                <span className={clsx(
                  "relative z-10 transition-colors duration-300",
                  activeSection === link.href.substring(1) ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-gray-400 group-hover:text-white"
                )}>
                  {link.name}
                </span>
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollTo('#contact')}
              className="px-6 py-2 rounded-full text-sm font-medium border border-white/20 hover:border-accent-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all bg-white/5"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl text-gray-300">
              {isMobileMenuOpen ? <HiX /> : <HiMenuAlt4 />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass-panel mt-2 p-4 flex flex-col space-y-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={clsx(
                  "text-left text-sm font-medium px-4 py-3 rounded-lg transition-colors",
                  activeSection === link.href.substring(1) ? "bg-white/10 text-white shadow-inner border border-white/5" : "text-gray-400 hover:bg-white/5"
                )}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('#contact')}
              className="mt-4 px-4 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border border-white/10 text-white"
            >
              Contact Me
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
