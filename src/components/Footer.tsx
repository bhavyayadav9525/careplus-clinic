import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-medical-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-medical-blue rounded-xl flex items-center justify-center text-white font-bold text-xl">
                C+
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">
                CarePlus
              </span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Providing world-class healthcare services with a commitment to excellence and compassion. Your health is our priority.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-medical-blue transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About Us', 'Testimonials', 'Book Appointment'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Working Hours</h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white font-medium">08:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-medium">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-medium">Emergency Only</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-medical-blue" />
                </div>
                <span className="text-white/50">123 Medical Plaza, Health City, ST 12345</span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-medical-blue" />
                </div>
                <span className="text-white/50">+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-medical-blue" />
                </div>
                <span className="text-white/50">contact@careplus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm">
            © 2026 CarePlus Clinic. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
