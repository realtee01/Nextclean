import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ onContactClick }) => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md px-10 py-5 flex justify-between items-center border-b border-slate-100"
    >
      <h1 className="text-2xl font-black text-green-600 tracking-tighter">Nextclean<span className="text-slate-900">.</span></h1>
      <div className="flex gap-8 text-sm font-semibold text-slate-600 items-center">
        {/* Function: Smooth Scroll to Services Section */}
        <button 
          onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
          className="hover:text-green-600 transition-colors"
        >
          Services
        </button>
        
        <a href="#" className="hover:text-green-600 transition-colors">Company</a>
        
        {/* Function: Open Modal on Click */}
        <motion.button 
          onClick={onContactClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-slate-900 text-white px-6 py-2.5 rounded-full"
        >
          Contact Us
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Header;
