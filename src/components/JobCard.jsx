import React from 'react';
import { motion } from 'framer-motion';

const JobCard = ({ image, title, desc, category, onCardClick }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      onClick={onCardClick}
      className="bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-sm cursor-pointer"
    >
      <div className="relative rounded-[2rem] overflow-hidden h-64 md:h-72 mb-6">
        <img src={image} className="w-full h-full object-cover" alt={title} />
      </div>
      <div className="px-2 pb-2 text-left">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm line-clamp-2">{desc}</p>
      </div>
    </motion.div>
  );
};

export default JobCard; // <--- THE FIX
