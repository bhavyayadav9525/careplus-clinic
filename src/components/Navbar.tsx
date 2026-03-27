import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  onBookClick: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-medical-blue rounded-xl flex items-center justify-center text-white font-bold text-xl">
            C+
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-medical-dark">
            CarePlus
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-medical-blue',
                activeSection === link.href.slice(1) ? 'text-medical-blue' : 'text-medical-dark/70'
              )}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onBookClick}
            className="bg-medical-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-200 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-medical-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-medical-dark/80 hover:text-medical-blue"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                onBookClick();
                setIsMobileMenuOpen(false);
              }}
              className="bg-medical-blue text-white px-6 py-3 rounded-xl text-center font-semibold"
            >
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
