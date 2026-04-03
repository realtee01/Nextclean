import React from 'react';
import { motion } from 'framer-motion';

const JobCard = ({ image, title, desc, category, onCardClick }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      whileHover={{ y: -10 }}
      onClick={onCardClick}
      className="bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow cursor-pointer group"
    >
      <div className="relative rounded-[2rem] overflow-hidden h-64 md:h-72 mb-6">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={image} 
          className="w-full h-full object-cover" 
          alt={title} 
        />
        
        {category && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
            {category}
          </div>
        )}
      </div>

      <div className="px-2 pb-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nextclean Certified</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-green-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {desc}
        </p>
        
        <div className="w-full py-4 rounded-2xl bg-slate-50 text-slate-900 font-bold text-xs md:text-sm flex items-center justify-center gap-2 group-hover:bg-green-600 group-hover:text-white transition-all">
          Book This Service
          <span>→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
