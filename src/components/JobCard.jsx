import React from 'react';
import { motion } from 'framer-motion';

const JobCard = ({ image, title, desc }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }} 
      className="bg-slate-50 rounded-[2rem] p-4 border border-slate-100"
    >
      <div className="rounded-[1.5rem] overflow-hidden h-60 mb-6">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-500 text-sm">{desc}</p>
    </motion.div>
  );
};

export default JobCard;
