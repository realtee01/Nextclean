import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero-header1.jpg';

const Hero = ({ onBookClick }) => {
  return (
    <section className="pt-28 pb-12 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter mb-6 text-slate-900">
          Purity in <br/><span className="text-green-600">Every Detail.</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg max-w-sm mb-8 leading-relaxed">
          Lagos' most trusted household managers. We clean, you live.
        </p>
        <motion.button 
          onClick={onBookClick}
          whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.95 }}
          className="w-full md:w-fit bg-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-green-100"
        >
          Book a Session
        </motion.button>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full relative">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] md:border-[16px] border-slate-50 aspect-square md:aspect-auto md:h-[550px]">
          <img src={heroImg} className="w-full h-full object-cover object-center" alt="Cleaning Professional" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; // <--- THE FIX
