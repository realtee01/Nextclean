import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ onContactClick }) => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md px-6 md:px-10 py-4 flex justify-between items-center border-b border-slate-50"
    >
      <h1 className="text-xl md:text-2xl font-black text-green-600 tracking-tighter">
        Nextclean<span className="text-slate-900">.</span>
      </h1>
      <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Services</button>
        <a href="#">Company</a>
      </div>
      <motion.button 
        onClick={onContactClick}
        whileTap={{ scale: 0.95 }}
        className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold"
      >
        Contact
      </motion.button>
    </motion.nav>
  );
};

export default Header; // <--- THE FIX
