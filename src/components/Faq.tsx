import React from 'react';
import { Badge } from './ui/Badge';
import { Disclosure } from '@headlessui/react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is Xerweon?',
    answer: 'Xerweon is a SaaS platform designed to streamline operations for Akshaya Centers using AI-powered tools for bidding, queue management, billing, and analytics.',
  },
  {
    question: 'How does the smart bidding system work?',
    answer: 'Our smart bidding system allows centers to outsource services they don\'t offer. When a request comes in, it\'s broadcasted to partner centers who can bid to fulfill it, ensuring no customer is turned away.',
  },
  {
    question: 'Can I track my service requests?',
    answer: 'Yes, our platform provides real-time tracking for all service requests, giving you full visibility from initiation to completion.',
  },
  {
    question: 'How are invoices generated?',
    answer: 'Invoices are automatically generated for every transaction. They are digital, accurate, and can be easily shared with customers, ensuring transparency and easy record-keeping.',
  },
  {
    question: 'What benefits do centers get from using Xerweon?',
    answer: 'Centers benefit from increased efficiency, reduced operational costs, improved customer satisfaction, and new revenue streams through our collaborative service model.',
  },
];

const Faq = () => {
  return (
    <motion.section 
      id="faq" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Badge>FAQs</Badge>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium mb-4">We’re here to help</h2>
        <p className="text-lg text-text-secondary mb-16">FAQs designed to provide the information you need.</p>
        
        <div className="max-w-4xl mx-auto text-left space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="bg-card-bg border border-border-color rounded-2xl p-1 backdrop-blur-sm">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-lg font-medium">
                    <span>{faq.question}</span>
                    {open ? <Minus className="w-6 h-6 text-brand-cyan" /> : <Plus className="w-6 h-6 text-brand-cyan" />}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-4 text-text-secondary">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;
