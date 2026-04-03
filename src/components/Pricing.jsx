import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing = ({ onBookClick }) => {
  // Set "Deep Clean" as the default selected plan
  const [selectedPlan, setSelectedPlan] = useState("Deep Clean");

  const plans = [
    { name: "Standard", price: "15k", features: ["Vacuuming", "Mopping", "Bathroom", "Kitchen Surface"] },
    { name: "Deep Clean", price: "35k", features: ["Inside Oven", "Window Tracks", "Baseboards", "Sanitization"] },
    { name: "Office", price: "50k", features: ["Desk Detailing", "Common Areas", "Waste Removal", "After-hours"] }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black tracking-tighter text-slate-900">Simple Pricing.</h2>
        <p className="text-slate-400 mt-2">Pick the perfect plan for your space.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, i) => {
          const isSelected = selectedPlan === plan.name;

          return (
            <motion.div 
              key={i}
              layout
              onClick={() => setSelectedPlan(plan.name)}
              // --- HOVER & SELECTED LOGIC ---
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#0f172a", // slate-900
                color: "#ffffff",
                transition: { type: "spring", stiffness: 400, damping: 10 } 
              }}
              animate={{ 
                scale: isSelected ? 1.08 : 1,
                backgroundColor: isSelected ? "#0f172a" : "#ffffff",
                color: isSelected ? "#ffffff" : "#0f172a",
                zIndex: isSelected ? 10 : 1
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`p-8 rounded-[3rem] border cursor-pointer group shadow-sm ${
                isSelected ? "border-slate-900 shadow-2xl" : "border-slate-100"
              }`}
            >
              <h3 className="text-xl font-bold mb-4 tracking-tight">
                {plan.name}
              </h3>
              
              <div className="text-4xl font-black mb-6 flex items-baseline gap-1">
                ₦{plan.price}
                <span className="text-sm font-normal opacity-60">/session</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map(f => (
                  <li key={f} className="text-sm flex items-center gap-3">
                    <span className="text-green-500 font-bold">✓</span> 
                    <span className="opacity-80">{f}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onBookClick();
                }}
                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                  isSelected 
                  ? "bg-green-600 text-white shadow-lg shadow-green-900/20" 
                  : "bg-slate-100 text-slate-900 group-hover:bg-green-600 group-hover:text-white"
                }`}
              >
                {isSelected ? "Book Now" : "Select Plan"}
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
