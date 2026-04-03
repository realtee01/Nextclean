import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero-header1.jpg';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <h1 className="text-7xl font-bold leading-[0.9] mb-6">Purity in <br/><span className="text-brand">Every Detail.</span></h1>
        <p className="text-slate-500 max-w-sm mb-8">Lagos' most trusted household managers. We clean, you live.</p>
        <button className="bg-brand text-white px-8 py-4 rounded-2xl font-bold">Book a Session</button>
      </motion.div>
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
        <img src={heroImg} className="w-full h-full object-cover" />
      </motion.div>
    </section>
  );
};

export default Hero;
