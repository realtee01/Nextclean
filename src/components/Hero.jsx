import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero-header1.jpg';

const Hero = ({ onBookClick }) => {
  return (
    <section className="pt-36 pb-20 px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        <h1 className="text-7xl font-bold leading-[0.9] tracking-tighter mb-6">Purity in <br/><span className="text-green-600">Every Detail.</span></h1>
        <p className="text-slate-500 max-w-sm mb-10 leading-relaxed">Lagos' most trusted household managers. We clean, you live.</p>
        
        {/* --- BOUNCY BOOKING BUTTON --- */}
        <motion.button 
          onClick={onBookClick}
          whileHover={{ 
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 10 } // Bouncy spring
          }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-green-200"
        >
          Book a Session
        </motion.button>
      </motion.div>
      
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
        <img src={heroImg} className="w-full h-full object-cover" />
      </motion.div>
    </section>
  );
};

export default Hero;
