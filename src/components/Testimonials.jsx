import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    { name: "Ayo Bankole", role: "Homeowner, Ikoyi", text: "Nextclean is the only service I trust in Lagos. Their attention to detail is actually insane. My house sparkles every time.", img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=100&h=100&fit=crop" },
    { name: "Sarah J.", role: "Tech Lead, Yaba", text: "The standard clean was perfect for my busy schedule. Reliable staff and seamless booking. Highly recommended!", img: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=100&h=100&fit=crop" },
    { name: "Tunde Ednut", role: "Business Owner", text: "Professionalism at its peak. They handled my office sanitization with zero disruption to our workflow.", img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop" },
    { name: "Grace Opeyemi", role: "Parent, Lekki", text: "The post-construction clean was a lifesaver. Moving into our new home was stress-free thanks to Nextclean.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
    { name: "Musa Audu", role: "Real Estate, Abuja", text: "Consistent quality and great customer support. They set the standard for domestic excellence in Nigeria.", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black tracking-tighter mb-16">What our clients say.</h2>
        {/* Swipable horizontal scroll area */}
        <div className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="min-w-[320px] md:min-w-[420px] bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 snap-center"
            >
              <p className="text-slate-600 italic mb-8">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={rev.img} 
                  className="w-12 h-12 rounded-full object-cover shadow-inner" 
                  alt={rev.name} 
                />
                <div>
                  <h4 className="font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{rev.role}</p>
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
