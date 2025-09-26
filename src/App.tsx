import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black overflow-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Services />
        <Benefits />
        <Pricing />
        <Testimonials />
        <Contact />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
