import React from 'react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative pt-36 pb-24 text-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow-purple opacity-50"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-radial-glow opacity-30 -translate-x-1/4"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-glow opacity-30 translate-x-1/4"></div>
      
      <motion.img 
        src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/0758/2545/232d7f69082ba5990c28d3849d3833b3?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Gf86TMb4by0xxzgWU-IUHtfrYKynCZ9Pj~V1x6H7q06rHUUZjuLT7D6O4zysRXRdTPjRE9r4PctOLac7zRkgh4LwmilYVDaKpCazB1maa0LIncDx6e2ANmi-2jy6WYxDtxR~lTKTWmn1MW15lD4VOH2j7EwGfNn9Db0TcCZEavmZ0IrGulIJUDFvGpEMUNue6ov6zVKzY6L2pnnn3jOhsi~1S92Mpwa4dzGpOSAEWuifq2eR1CjqVIVuexGPc-tidrxYF8qvqClsB59KYOtecLoYMJAnnBqGu0j~EzncF0m5nMWz5oKL9RyaUT63MTRcnvBokG2zh~NeLcQ1ck4edA__" 
        alt="Pyramid" 
        className="absolute right-0 bottom-0 w-48 md:w-72 h-auto opacity-60" 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.img 
        src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/ce14/5c71/9d05e09fa1000024da697d53739ec646?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uWnFQWbo6bYTriZHL6RFWuXtUcBQW55ZJ-U7PXKrjvdoW5ogLmPuo37g-6be-mUpaSde92MM7-FidjB1rhXodsRoZWQwade6WtGoDE9ub2cbmVMHKpNb9~Sk~qIzwnB1XLwgeqRP06VKUzTqUKF1UVxU7BKNpfXKqvaQSrsTreI~FLfRieidtb1kSbzhGTtSm5CovopfnWwvhActXV9myqsgxcQaS5pjWRvkJc8iqNe5cKuwJKXoKOytPQVT6Y1dQkAJ0islYEhlEjFElyWGyxyLjWAsm4-3jQ~p8gn45SwBTUP27PRIT-mt8lX7Q8ibCtIKyau~oOw~-lHt4iBmSw__" 
        alt="Torus" 
        className="absolute left-4 top-24 w-32 md:w-48 h-auto opacity-50" 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
              <path d="M7.5 0L8.69333 2.66667L11.36 1.46667L10.1667 4.13333L12.8267 5.33333L10.1667 6.53333L11.36 9.2L8.69333 8.06667L7.5 10.6667L6.30667 8.06667L3.64 9.2L4.83333 6.53333L2.17333 5.33333L4.83333 4.13333L3.64 1.46667L6.30667 2.66667L7.5 0Z" fill="white"/>
            </svg>
            <span>Xerweon - Saas Application for Akshaya Centers</span>
          </Badge>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-medium !leading-tight max-w-4xl mx-auto mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Smarter Services. <br /> Stronger Centers.
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Xerweon powers Akshaya Centers with AI tools for bidding, queues, billing, and analytics — delivering faster, simpler, and reliable services.
        </motion.p>

        <motion.div 
          className="flex justify-center items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <Button variant="primary" size="lg">Our Services</Button>
          <Button variant="outline" size="lg">See Plans</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
