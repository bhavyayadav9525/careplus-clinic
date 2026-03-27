import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-medical-blue font-bold uppercase tracking-widest text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-medical-dark mt-4 mb-6"
          >
            Comprehensive Medical Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-medical-dark/60"
          >
            We offer a wide range of specialized treatments and general healthcare services to ensure your well-being at every stage of life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[32px] bg-medical-light hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-medical-blue mb-6 shadow-sm group-hover:bg-medical-blue group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold text-medical-dark mb-3">{service.title}</h3>
                <p className="text-medical-dark/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-medical-blue font-bold text-sm flex items-center gap-2 group/btn">
                  Learn More
                  <Icons.ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
