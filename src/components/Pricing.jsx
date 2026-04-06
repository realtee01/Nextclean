import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing = ({ onBookClick }) => {
  const [selectedPlan, setSelectedPlan] = useState("Deep Clean");

  const plans = [
    { name: "Standard", price: "15k", features: ["Vacuuming", "Mopping", "Bathroom", "Kitchen Surface"] },
    { name: "Deep Clean", price: "35k", features: ["Inside Oven", "Window Tracks", "Baseboards", "Sanitization"] },
    { name: "Office", price: "50k", features: ["Desk Detailing", "Common Areas", "Waste Removal", "After-hours"] }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black tracking-tighter text-slate-900 italic">Simple Pricing.</h2>
        <p className="text-slate-400 mt-2 font-medium tracking-wide">Pick the perfect plan for your space.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, i) => {
          const isSelected = selectedPlan === plan.name;

          return (
            <motion.div 
              key={i}
              layout
              onClick={() => setSelectedPlan(plan.name)}
              // --- ELITE PHYSICS: FLIPS COLOR ON HOVER & SELECTED ---
              whileHover={{ 
                scale: 1.05, 
                y: -12,
                backgroundColor: "#0f172a", // Slate-900
                color: "#ffffff",
                boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.3)",
                transition: { type: "spring", stiffness: 400, damping: 15 } 
              }}
              animate={{ 
                scale: isSelected ? 1.08 : 1,
                backgroundColor: isSelected ? "#0f172a" : "#ffffff",
                color: isSelected ? "#ffffff" : "#0f172a",
                boxShadow: isSelected 
                  ? "0 30px 60px -12px rgba(15, 23, 42, 0.4)" 
                  : "0 0px 0px 0px rgba(0,0,0,0)",
                zIndex: isSelected ? 10 : 1
              }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`p-8 md:p-10 rounded-[3rem] border cursor-pointer group transition-colors duration-300 ${
                isSelected ? "border-slate-900" : "border-slate-100"
              }`}
            >
              <h3 className={`text-[11px] font-black uppercase tracking-[0.2em] mb-4 ${isSelected ? "text-green-400" : "text-slate-400"}`}>
                {plan.name} Package
              </h3>
              
              <div className="text-5xl font-black mb-8 flex items-baseline gap-1 tracking-tighter">
                ₦{plan.price}
                <span className={`text-sm font-normal opacity-60 ${isSelected ? "text-slate-400" : "text-slate-500"}`}>
                  /session
                </span>
              </div>

              <ul className="space-y-5 mb-10">
                {plan.features.map(f => (
                  <li key={f} className="text-sm flex items-center gap-3 font-medium">
                    <span className="text-green-500 font-bold text-lg">✓</span> 
                    <span className={isSelected ? "opacity-90" : "opacity-70"}>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.button 
                onClick={(e) => {
                  e.stopPropagation();
                  onBookClick();
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.15em] transition-all duration-300 ${
                  isSelected 
                  ? "bg-green-600 text-white shadow-lg shadow-green-600/30" 
                  : "bg-slate-100 text-slate-900 group-hover:bg-green-600 group-hover:text-white"
                }`}
              >
                {isSelected ? "Book Session Now" : "Select This Plan"}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
