import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md px-10 py-5 flex justify-between items-center"
    >
      <h1 className="text-2xl font-black text-brand tracking-tighter">Nextclean.</h1>
      <div className="flex gap-6 text-sm font-semibold">
        <a href="#">Services</a>
        <a href="#">Company</a>
        <button className="bg-slate-900 text-white px-5 py-2 rounded-full">Get Started</button>
      </div>
    </motion.nav>
  );
};

export default Header;
