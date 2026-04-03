import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing = ({ onBookClick }) => {
  // 1. Track which plan is currently selected (Default to Deep Clean)
  const [selectedPlan, setSelectedPlan] = useState("Deep Clean");

  const plans = [
    { name: "Standard", price: "15k", features: ["Vacuuming", "Mopping", "Bathroom", "Kitchen Surface"] },
    { name: "Deep Clean", price: "35k", features: ["Inside Oven", "Window Tracks", "Baseboards", "Sanitization"] },
    { name: "Office", price: "50k", features: ["Desk Detailing", "Common Areas", "Waste Removal", "After-hours"] }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black tracking-tighter">Simple Pricing.</h2>
        <p className="text-slate-400 mt-2">Click a plan to select your preferred package.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, i) => {
          const isActive = selectedPlan === plan.name;

          return (
            <motion.div 
              key={i}
              layout // Smoothly animate the size change
              onClick={() => setSelectedPlan(plan.name)}
              // --- BOUNCE MOTION ON HOVER & SELECTION ---
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={false}
              animate={{ 
                scale: isActive ? 1.08 : 1,
                backgroundColor: isActive ? "#0f172a" : "#ffffff", // slate-900 or white
                color: isActive ? "#ffffff" : "#0f172a"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`p-8 rounded-[2.5rem] border cursor-pointer transition-shadow duration-500 ${
                isActive ? "z-10 shadow-2xl border-slate-900" : "border-slate-100 shadow-sm"
              }`}
            >
              <h3 className={`text-xl font-bold mb-4 ${isActive ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              
              <div className="text-4xl font-black mb-6">
                ₦{plan.price}
                <span className={`text-sm font-normal opacity-60 ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                  /session
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="text-sm flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>

              <button 
                onClick={(e) => {
                  e.stopPropagation(); // Prevents re-selecting the card when clicking button
                  onBookClick();
                }}
                className={`w-full py-4 rounded-2xl font-bold transition-all transform active:scale-95 ${
                  isActive ? "bg-green-600 text-white shadow-lg" : "bg-slate-50 text-slate-900 hover:bg-slate-100"
                }`}
              >
                {isActive ? "Book Now" : "Select Plan"}
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
