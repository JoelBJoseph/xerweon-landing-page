import React from 'react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, className, children, index }: { title: string; description: string; className?: string; children: React.ReactNode; index: number }) => (
  <motion.div 
    className={`bg-card-bg border border-border-color rounded-xl p-6 flex flex-col justify-between backdrop-blur-sm hover:border-brand-cyan/30 transition-all duration-300 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      {children}
    </div>
    <div>
      <h3 className="text-2xl font-medium text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary text-base">{description}</p>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <motion.section 
      id="services" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge>Services</Badge>
        </motion.div>
        <motion.h2 
          className="text-4xl md:text-5xl font-medium mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Innovative services for growth
        </motion.h2>
        <motion.p 
          className="text-lg text-text-secondary mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tailored solutions to streamline, innovate, and grow.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ServiceCard 
            title="Bidding System" 
            description="Simplifies outsourcing between centers so every customer request is fulfilled without delays."
            className="lg:col-span-1"
            index={0}
          >
            <div className="p-4 space-y-4">
                <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 shrink-0"></div>
                    <div className="w-full bg-white/10 rounded-lg p-2 space-y-1">
                        <div className="h-2 w-1/4 bg-white/50 rounded-full"></div>
                        <div className="h-2 w-full bg-white/20 rounded-full"></div>
                        <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
                    </div>
                </div>
                 <div className="flex gap-2 justify-end">
                    <div className="w-3/4 bg-brand-purple/20 border border-brand-purple/50 rounded-lg p-2 space-y-1">
                        <div className="h-2 w-1/4 bg-white/50 rounded-full ml-auto"></div>
                        <div className="h-2 w-full bg-white/20 rounded-full"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-purple/50 shrink-0"></div>
                </div>
            </div>
          </ServiceCard>
          <ServiceCard 
            title="Queue Management" 
            description="Clear, real-time task tracking keeps operations organized and efficient for all staff."
            className="lg:col-span-1"
            index={1}
          >
             <div className="p-4 space-y-2">
                <div className="flex items-center gap-4 bg-white/10 p-3 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-white/20"></div>
                    <div className="flex-grow space-y-1">
                        <div className="h-3 w-1/2 bg-white/50 rounded-full"></div>
                        <div className="h-2 w-1/4 bg-white/30 rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-brand-purple/20 border border-brand-purple/50 p-3 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-white/20"></div>
                    <div className="flex-grow space-y-1">
                        <div className="h-3 w-1/2 bg-white/50 rounded-full"></div>
                        <div className="h-2 w-1/4 bg-white/30 rounded-full"></div>
                    </div>
                </div>
             </div>
          </ServiceCard>
          <ServiceCard 
            title="Invoice Creation" 
            description="Generate professional digital invoices quickly for every service request, ensuring accountability."
            className="lg:col-span-1"
            index={2}
          >
            <div className="p-4 flex gap-4 h-full">
                <div className="w-1/4 bg-white/10 rounded-lg p-2 space-y-2">
                    <div className="h-3 w-full bg-white/20 rounded-full"></div>
                    <div className="h-3 w-full bg-brand-purple/50 rounded-full"></div>
                    <div className="h-3 w-full bg-white/20 rounded-full"></div>
                </div>
                <div className="w-3/4 bg-white/10 rounded-lg p-2">
                    <div className="h-1/2 w-full flex items-end gap-1 p-2">
                        <div className="w-1/6 h-1/3 bg-white/20 rounded-t-sm"></div>
                        <div className="w-1/6 h-1/2 bg-white/20 rounded-t-sm"></div>
                        <div className="w-1/6 h-3/4 bg-brand-purple/70 rounded-t-sm"></div>
                        <div className="w-1/6 h-1/2 bg-white/20 rounded-t-sm"></div>
                        <div className="w-1/6 h-2/3 bg-white/20 rounded-t-sm"></div>
                        <div className="w-1/6 h-1/2 bg-white/20 rounded-t-sm"></div>
                    </div>
                </div>
            </div>
          </ServiceCard>
          <ServiceCard 
            title="Analytics Dashboard" 
            description="Gain insights into performance, trends, and service efficiency to make informed decisions."
            className="lg:col-span-1"
            index={3}
          >
            <div className="p-4 flex gap-4 h-full">
                <div className="w-1/3 bg-white/10 rounded-lg p-2 space-y-2">
                    <div className="h-8 w-8 rounded-full bg-green-500/50 self-center"></div>
                    <div className="h-8 w-8 rounded-full bg-white/20 self-center"></div>
                    <div className="h-8 w-8 rounded-full bg-white/20 self-center"></div>
                </div>
                <div className="w-2/3 bg-white/10 rounded-lg p-2 flex flex-col justify-between">
                    <div className="h-10 w-10 rounded-lg bg-brand-purple/50"></div>
                    <div className="h-10 w-10 rounded-lg bg-white/20 self-end"></div>
                </div>
            </div>
          </ServiceCard>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
