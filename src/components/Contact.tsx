import React from 'react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-24 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-radial-glow-purple opacity-30"></div>
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Badge>Contacts</Badge>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-4 !leading-tight">Ask whatever you have in your mind</h2>
            <p className="text-lg text-text-secondary mb-12">Whether you have questions or are ready to discuss your business, we’re here to help. Reach out today.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-brand-cyan" />
                <a href="mailto:admin@xerweon.com" className="text-lg text-text-secondary hover:text-white transition">admin@xerweon.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-brand-cyan" />
                <a href="tel:+19698198061" className="text-lg text-text-secondary hover:text-white transition">(969) 819-8061</a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-brand-cyan" />
                <p className="text-lg text-text-secondary">43 Roselle St. New York</p>
              </div>
            </div>
          </div>
          <div className="bg-card-bg/50 border border-border-color rounded-2xl p-8 backdrop-blur-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Name</label>
                <input type="text" id="name" placeholder="Jane Smith" className="w-full bg-dark-bg border border-border-color rounded-lg p-3 focus:ring-brand-cyan focus:border-brand-cyan transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email</label>
                <input type="email" id="email" placeholder="jane@example.com" className="w-full bg-dark-bg border border-border-color rounded-lg p-3 focus:ring-brand-cyan focus:border-brand-cyan transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                <textarea id="message" rows={4} placeholder="Hi, I am reaching out for..." className="w-full bg-dark-bg border border-border-color rounded-lg p-3 focus:ring-brand-cyan focus:border-brand-cyan transition"></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
