import React from 'react';
import { Badge } from './ui/Badge';
import { motion } from 'framer-motion';

const About = () => {
  const text = "At Xerweon, we streamline services for Akshaya Centers with efficiency, transparency, and innovation.".split(" ");

  return (
    <motion.section 
      id="about" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Badge>Who We Are</Badge>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-radial-glow opacity-30"></div>
          <motion.h2 
            className="text-3xl md:text-5xl font-medium max-w-4xl mx-auto !leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.05 }}
          >
            {text.map((el, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block"
              >
                {el}{" "}
              </motion.span>
            ))}
          </motion.h2>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
