import React from 'react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

const Cta = () => {
  return (
    <motion.section 
      id="cta" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        <div className="bg-radial-glow rounded-3xl p-10 md:p-20 text-center flex flex-col items-center gap-6">
          <Badge>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 0L8.69333 2.66667L11.36 1.46667L10.1667 4.13333L12.8267 5.33333L10.1667 6.53333L11.36 9.2L8.69333 8.06667L7.5 10.6667L6.30667 8.06667L3.64 9.2L4.83333 6.53333L2.17333 5.33333L4.83333 4.13333L3.64 1.4667L6.30667 2.66667L7.5 0Z" fill="white"/>
            </svg>
            <span>Xerweon</span>
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium !leading-tight max-w-2xl">Let’s talk about your next big move</h2>
          <p className="text-lg text-text-secondary max-w-lg">Hop on a call with us to see how our services can accelerate your growth.</p>
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary" size="lg">Schedule a quick call</Button>
            <span className="text-sm text-text-secondary">It's Free</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cta;
