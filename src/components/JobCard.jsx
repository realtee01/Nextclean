import React from 'react';
import { motion } from 'framer-motion';

const JobCard = ({ image, title, desc, category }) => {
  return (
    <motion.div 
      // Scroll Reveal Animation
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      
      // Hover Lift Effect
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-shadow duration-500 group"
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative rounded-[2rem] overflow-hidden h-72 mb-6">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          src={image} 
          className="w-full h-full object-cover" 
          alt={title} 
        />
        
        {/* Floating Category Badge */}
        {category && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
            {category}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nextclean Certified</span>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-green-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {desc}
        </p>
        
        <button className="w-full py-4 rounded-2xl bg-slate-50 text-slate-900 font-bold text-sm hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
          View Details
          <span className="text-lg">→</span>
        </button>
      </div>
    </motion.div>
  );
};

export default JobCard;
