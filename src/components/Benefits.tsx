import React from 'react';
import { Badge } from './ui/Badge';
import { Zap, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const BenefitCard = ({ icon: Icon, title, description, index }: { icon: React.ElementType, title: string, description: string, index: number }) => (
  <motion.div 
    className="bg-card-bg border border-border-color rounded-3xl p-8 text-left relative overflow-hidden backdrop-blur-sm"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-radial-glow opacity-50"></div>
    <div className="bg-white/10 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-brand-cyan" />
    </div>
    <h3 className="text-2xl font-medium text-text-primary mb-2">{title}</h3>
    <p className="text-text-secondary">{description}</p>
  </motion.div>
);

const Benefits = () => {
  return (
    <motion.section 
      id="benefits" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Badge>Benefits</Badge>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium mb-4">Maximize efficiency and impact</h2>
        <p className="text-lg text-text-secondary mb-16">Discover the key benefits of partnering with us.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={Zap} 
            title="Efficiency First" 
            description="Save time and serve more customers effectively with streamlined processes and automation."
            index={0}
          />
          <BenefitCard 
            icon={Users} 
            title="Easy Collaboration" 
            description="Centers can partner and outsource services through smart bidding, boosting service availability."
            index={1}
          />
          <BenefitCard 
            icon={ShieldCheck} 
            title="Transparency & Trust" 
            description="Everything from invoices to analytics is clear, accurate, and trackable."
            index={2}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;
