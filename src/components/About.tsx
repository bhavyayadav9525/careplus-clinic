import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, GraduationCap, Calendar } from 'lucide-react';
import { MAIN_DOCTOR, CLINIC_STATS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-medical-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src={MAIN_DOCTOR.image}
                alt={MAIN_DOCTOR.name}
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-medical-blue/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-medical-green/10 rounded-full blur-3xl -z-10" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-medical-dark">Board Certified</div>
                  <div className="text-xs text-medical-dark/50">Excellence in Care</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-medical-blue font-bold uppercase tracking-widest text-sm">About the Clinic</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-medical-dark mt-4 mb-6">
              Leading the Way in <br />
              <span className="text-medical-blue">Medical Excellence</span>
            </h2>
            <p className="text-lg text-medical-dark/60 mb-8 leading-relaxed">
              {MAIN_DOCTOR.bio}
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-medical-blue shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-medical-dark">Qualifications</h4>
                  <ul className="mt-2 space-y-1">
                    {MAIN_DOCTOR.qualifications.map((q, i) => (
                      <li key={i} className="text-sm text-medical-dark/60 flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-medical-green" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-medical-green shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-medical-dark">Experience</h4>
                  <p className="text-sm text-medical-dark/60 mt-1">{MAIN_DOCTOR.experience} of dedicated service in various medical fields.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {CLINIC_STATS.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-medical-dark">{stat.value}</div>
                  <div className="text-xs text-medical-dark/40 font-bold uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
