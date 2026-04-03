import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    { name: "Ayo Bankole", role: "Homeowner, Ikoyi", text: "Nextclean is the only service I trust. Their attention to detail is actually insane.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    { name: "Sarah J.", role: "Tech Lead", text: "The deep clean was worth every Naira. My apartment feels brand new again.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { name: "Tunde Ednut", role: "Business Owner", text: "Professional staff and seamless booking. Highly recommended for busy people.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black tracking-tighter mb-16">What our clients say.</h2>
        <div className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="min-w-[300px] md:min-w-[400px] bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100"
            >
              <p className="text-slate-600 italic mb-8">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <img src={rev.img} className="w-12 h-12 rounded-full object-cover" alt={rev.name} />
                <div>
                  <h4 className="font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-xs text-slate-400 font-medium uppercase">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
