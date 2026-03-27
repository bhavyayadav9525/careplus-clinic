import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200/20 blur-3xl rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 text-medical-blue rounded-full text-sm font-bold mb-6">
            <ShieldCheck className="w-4 h-4" />
            Trusted Healthcare Provider
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-medical-dark leading-[1.1] mb-6">
            Your Health, <br />
            <span className="text-medical-blue italic">Our Priority</span>
          </h1>
          <p className="text-lg text-medical-dark/60 max-w-lg mb-10 leading-relaxed">
            Experience world-class healthcare with a personal touch. Our expert team is dedicated to providing comprehensive medical services tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBookClick}
              className="bg-medical-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all hover:shadow-xl hover:shadow-blue-200 flex items-center justify-center gap-2 group"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services"
              className="bg-white border border-gray-200 text-medical-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
            >
              View Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-medical-dark/40">24/7 Support</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-medical-dark/40">Top Rated</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
              alt="Healthcare Professional"
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Stats Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-medical-blue">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-medical-dark">10k+</span>
            </div>
            <p className="text-xs text-medical-dark/50 font-medium">Satisfied patients treated with excellence.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
