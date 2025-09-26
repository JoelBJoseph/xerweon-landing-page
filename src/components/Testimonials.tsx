import React from 'react';
import { Badge } from './ui/Badge';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: '"Xerweon transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!"',
    name: 'Dean Watson',
    title: 'Managing director : Farmland',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/4e51/0dae/1abf8e8c3718a3f069cc4d57497dcc2d?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ESROCG9Jy6eXHmvG~hk3UNX8qm3pHCnk4Jsn738FMtDWzKO~mYi6lyzNpZUymz4BPpuzruNKbkjpUf9oUtbYrexALABII9VqxRPj6yYiQzw3zecuk6iJ-jP30G3Zl0BDoc~sQLKaAold28-ouWYFOCLnCQvcukj3wHGyO0Ww7j231n6N15QbTdvHlkmmh6ffzjsaIWf8egenOUkzI8sqBP5nvWQyJgGKUlQ-obsbrzZQWWy9iyJIX7LFddAHtgoUmB3l~mqxVD0IutQHpcdf3oH5isty1RCdF605~KSqIBM0LQ1Wf1p8wUppYnhJiBowxxUzBae9ah2FtXNtjXOw9A__',
    size: 'lg'
  },
  {
    quote: '"Radison provided game-changing insights that helped us optimize processes and scale operations fast."',
    name: 'Emily Zhang',
    title: 'CEO : Futuresync',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/5e24/ab23/6b2ddb7a1ac61e6536738b711c731e54?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jT8ovkadhghcJVRm5pR8MJ-GbEPxepHwfDH5071xKiLVndxTBmjtAYUuoYc40qoO60ByY4RzqVVdhTzZLAbWU9dKRYo8giLjl8G2Rhvce7sc9sI3titBXwmtam9ievBnZ1C55atxTAmtgRMpScA6kaX~vOfC308tTj8T83ZOXnT4iBp6tbivsAcN6E5lI5CncKZ~MGU4sji75Wu8MbitcDJX9Qd2rvqgJyDz9JTA2Q0qdx44vDQ7xrFBaEvpciePbJYVwn9IpSV-wgQ93LZ5T3URJk4rxVeZeWCcOohNyTtwJ-X2LCMkIEw5RMwOPMxvGL-HwkIKg~YZR8NSTdQLcQ__',
    size: 'sm'
  },
  {
    quote: '"Radison’s AI tools revolutionized how we work, saving time and driving our productivity forward."',
    name: 'James Carter',
    title: 'Marketing director : Innolystic',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/8564/0f51/029464fa4a747ba1962f34ea63061fef?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o-WZFUH3h9R66vnfYIzZGjr6YpX-eAAFMAFKcr7iHUX3Rgarg-rsz7AqRnyUhjQvaBj3XyMJCqvXDx5EQz5goGse4iBBX8oudbZwemC-mVbHqGq3UzzSBE-snq3fXLrF4drSbe-YSUGRj4ErAkXAJqWJqgM3t2eWJEbFGFLVdsnQ3H2FPQm88uzsEwK0R41FzQk4T-q-A9w~khPzgNeA8D05S6HAVNuGMKk5dDzGRg-ZIIqb8gLxZdb-mirGb4irixwRd0v~zEiAIA5oPPdmFCDEARoj7uFNgkHwwsN4Bg~Wr00OokMhN0Bm38AUz7ALPoN1oOKBm8HI0~Ck4PEgDQ__',
    size: 'sm'
  },
  {
    quote: '"Working with Radison has been seamless. Their solutions are both innovative and highly effective."',
    name: 'Liam Walker',
    title: 'Product manager : Brightpath',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/b120/e5bf/25223d0ff8d1f930013a7e14da70f3aa?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lGxpsv7CDkwmiAXNy-2kuuW-B-SbSnf85kzNQu72NeIFr1qpM3p3UIrL6Rqg17IkxQoaPjG12r1nYsdDsuQcMYgLW~0IzDmHVfHOmbwr3PtunT4MNgy8Ey5EaHjlx5BVXCRawLYofEKWOT77PmHDbv-32b66ZtizekZcyGcYrv1nGUuNvkU-DwTUxW3q4nZDj0g8kUEEDUTVm4MIzQiS1ip-i2txCXe~vjmihmUlghKSsCpBc6t19DqWs4GslHH3BM-D6yGq8vA3FDalRhcj1GJRjsjGIciOu5Xgk5aHZQMVybs4QX0QDMwgoaIq5RVthRw7QX3~w6bDEyI82BXlGA__',
    size: 'sm'
  },
  {
    quote: '"Thanks to Radison, we’ve achieved incredible growth by automating tasks and improving accuracy."',
    name: 'Miguel Torres',
    title: 'IT consultant : Alphaedge',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/a399/56ef/6da5cf9a00e74fea5aa6fc37e8e3a40e?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sDw7-7xyQ2qLpwCi025sIeGrRM~TA~BazpIKpWVCZ9f7KrExqKZRtHtwFhlNTlvRFxDY29XaYAVhA9jVRCGM1lgz4eLv-ZcFqvdM6~6VBrxY3ooivxMRy963R0nIqRQlsUiY0xexWboyKMVeDAiVecozs-fVM2AKrzzVU0nCrZPzuxvCJRhvomcP3Toyg5Y6cwCqbKIiGxD-4m0VR~sMC5gs9iws0wPW3x-XbzRzUDAnhKvHL-qkpBFyDQLaFSjY2YsQoVb92NKKJSMjHYbm-YyNlpwv2vN~XSKDvkle7CcUPGUFkhxlICGGlYT56~aShd7-5KEX9hFqldzEPvs4Ag__',
    size: 'lg'
  },
];

const TestimonialCard = ({ quote, name, title, image, index }: { quote: string, name: string, title: string, image: string, index: number }) => (
  <motion.div 
    className="bg-card-bg border border-border-color rounded-3xl p-8 flex flex-col justify-between text-left relative overflow-hidden backdrop-blur-sm"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-radial-glow opacity-50"></div>
    <p className="text-text-secondary text-lg mb-6 flex-grow">"{quote}"</p>
    <div className="flex items-center gap-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <p className="font-medium text-text-primary">{name}</p>
        <p className="text-sm text-text-secondary">{title}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <motion.section 
      id="testimonials" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Badge>Testimonials</Badge>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium mb-4">Trusted by satisfied clients</h2>
        <p className="text-lg text-text-secondary mb-16">Discover how we’ve driven growth and innovation.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
