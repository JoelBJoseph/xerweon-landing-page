import React, { useState } from 'react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Check, Star, Gem, Building } from 'lucide-react';
import { Switch } from '@headlessui/react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: 'Basic',
      icon: Star,
      price: { monthly: 45, yearly: 480 },
      description: 'Essential tools and features for starting your journey with ease.',
      features: [
        'Basic workflow automation',
        'Basic chatbot development',
        '60 content requests',
        'E-mail support',
        '1 consultation a month',
      ],
    },
    {
      name: 'Professional',
      icon: Gem,
      price: { monthly: 90, yearly: 960 },
      description: 'Advanced capabilities designed to meet growing business needs.',
      features: [
        'Advanced workflow automation',
        'Advanced chatbot development',
        '150 content requests',
        'Priority e-mail support',
        '2 consultations a month',
      ],
    },
    {
      name: 'Enterprises',
      icon: Building,
      price: { monthly: 'Custom', yearly: 'Custom' },
      description: 'Comprehensive solutions tailored for large-scale business success.',
      features: [
        'Custom workflow automation',
        'Custom chatbot development',
        'Unlimited content requests',
        '24/7 priority support',
        'Unlimited consultations',
      ],
    },
  ];

  return (
    <motion.section 
      id="plans" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Badge>Plans</Badge>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium mb-4">Flexible plans for growth</h2>
        <p className="text-lg text-text-secondary mb-10">Transparent pricing designed to fit your requirements.</p>
        
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={cn('text-lg', !isYearly && 'text-white')}>Monthly</span>
          <Switch
            checked={isYearly}
            onChange={setIsYearly}
            className="bg-dark-bg relative inline-flex h-10 w-20 items-center rounded-full border border-border-color"
          >
            <span
              className={`${
                isYearly ? 'translate-x-10' : 'translate-x-1'
              } inline-block h-8 w-8 transform rounded-full bg-brand-cyan transition`}
            />
          </Switch>
          <span className={cn('text-lg', isYearly && 'text-white')}>Annually</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name} 
              className="bg-card-gradient border border-border-color rounded-3xl p-8 flex flex-col text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", index === 2 ? 'bg-brand-cyan' : 'bg-white/20')}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium">{plan.name}</h3>
              </div>
              <div className="mb-4">
                {typeof plan.price.monthly === 'number' ? (
                  <p className="text-4xl font-bold">
                    ${isYearly ? (plan.price.yearly / 12).toFixed(0) : plan.price.monthly}
                    <span className="text-lg font-normal text-text-secondary">/month</span>
                  </p>
                ) : (
                  <p className="text-4xl font-bold">Custom</p>
                )}
              </div>
              <p className="text-text-secondary mb-8 h-12">{plan.description}</p>
              <Button variant="primary" className="w-full mb-8">
                {plan.name === 'Enterprises' ? 'Schedule a call' : 'Go with this plan'}
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-brand-cyan" />
                    <span className="text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
