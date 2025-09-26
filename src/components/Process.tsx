import React from 'react';
import { Badge } from './ui/Badge';
import { motion } from 'framer-motion';

const ProcessCard = ({ title, description, children, index }: { title: string; description: string; children: React.ReactNode; index: number }) => (
  <motion.div 
    className="bg-card-bg border border-border-color rounded-3xl p-6 flex flex-col gap-4 text-left backdrop-blur-sm hover:border-brand-cyan/30 transition-all duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="bg-black/20 border border-border-color rounded-xl h-48 flex items-center justify-center overflow-hidden">
        {children}
    </div>
    <h3 className="text-2xl font-medium text-text-primary">{title}</h3>
    <p className="text-text-secondary">{description}</p>
  </motion.div>
);

const Process = () => {
  return (
    <motion.section 
      id="process" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge>Process</Badge>
        </motion.div>
        <motion.h2 
          className="text-4xl md:text-5xl font-medium mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Your path to excellence
        </motion.h2>
        <motion.p 
          className="text-lg text-text-secondary mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A simple, effective approach to deliver excellence.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ProcessCard title="Connect & Request" description="Customers quickly browse and select the services they need at their local center." index={0}>
            <div className="w-full h-full p-4 scale-125">
                {/* Simplified representation of the discovery card graphic */}
                <div className="w-full h-full bg-white/10 rounded-lg p-2 flex gap-2">
                    <div className="w-1/3 flex flex-col gap-2">
                        <div className="h-1/2 bg-white/10 rounded-md p-2 flex items-end gap-1">
                            <div className="w-1/4 h-1/2 bg-white/20 rounded-t-sm"></div>
                            <div className="w-1/4 h-1/4 bg-white/20 rounded-t-sm"></div>
                            <div className="w-1/4 h-3/4 bg-brand-purple/70 rounded-t-sm"></div>
                            <div className="w-1/4 h-full bg-white/20 rounded-t-sm"></div>
                        </div>
                        <div className="h-1/2 bg-white/10 rounded-md p-2 space-y-1">
                            <div className="h-1 w-1/2 bg-white/50 rounded-full"></div>
                            <div className="h-1 w-full bg-white/20 rounded-full"></div>
                            <div className="h-1 w-full bg-white/20 rounded-full"></div>
                            <div className="h-1 w-3/4 bg-white/20 rounded-full"></div>
                        </div>
                    </div>
                    <div className="w-2/3 bg-white/10 rounded-md"></div>
                </div>
            </div>
          </ProcessCard>
          <ProcessCard title="Smart Bidding" description="Centers can outsource unavailable services and collaborate with others seamlessly and efficiently." index={1}>
             <div className="w-full h-full p-4 scale-125">
                {/* Simplified representation */}
                <div className="w-full h-full bg-white/10 rounded-lg p-2 flex flex-col gap-1">
                    <div className="h-1 w-1/4 bg-brand-purple/70 rounded-full"></div>
                    <div className="h-1 w-1/2 bg-white/20 rounded-full"></div>
                    <div className="h-1 w-full bg-white/20 rounded-full"></div>
                    <div className="h-1 w-3/4 bg-white/20 rounded-full"></div>
                    <div className="h-1 w-full bg-white/20 rounded-full"></div>
                    <div className="h-1 w-1/2 bg-white/20 rounded-full"></div>
                </div>
            </div>
          </ProcessCard>
          <ProcessCard title="Clear Billing & Invoices" description="Generate accurate digital invoices for every transaction, keeping everything transparent and organized." index={2}>
            <div className="w-full h-full p-4 scale-125">
                {/* Simplified representation */}
                <div className="w-full h-full bg-white/10 rounded-lg p-2 flex gap-2">
                    <div className="w-1/3 flex flex-col gap-2">
                        <div className="h-1/3 bg-white/20 rounded-md"></div>
                        <div className="h-1/3 bg-brand-purple/70 rounded-md"></div>
                        <div className="h-1/3 bg-white/20 rounded-md"></div>
                    </div>
                    <div className="w-2/3 bg-white/10 rounded-md p-2 space-y-2">
                        <div className="h-2 w-1/2 bg-white/50 rounded-full"></div>
                        <div className="h-1 w-full bg-white/20 rounded-full"></div>
                        <div className="h-1 w-full bg-white/20 rounded-full"></div>
                        <div className="h-1 w-3/4 bg-white/20 rounded-full"></div>
                    </div>
                </div>
            </div>
          </ProcessCard>
        </div>
      </div>
    </motion.section>
  );
};

export default Process;
