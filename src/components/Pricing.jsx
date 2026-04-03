import React from 'react';
import { motion } from 'framer-motion';

const Pricing = ({ onBookClick }) => {
  const plans = [
    { name: "Standard", price: "15k", features: ["Vacuuming", "Mopping", "Bathroom", "Kitchen Surface"] },
    { name: "Deep Clean", price: "35k", features: ["Inside Oven", "Window Tracks", "Baseboards", "Sanitization"] },
    { name: "Office", price: "50k", features: ["Desk Detailing", "Common Areas", "Waste Removal", "After-hours"] }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black tracking-tighter">Simple Pricing.</h2>
        <p className="text-slate-400 mt-2">No hidden fees. Just a clean home.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className={`p-8 rounded-[2.5rem] border ${plan.name === "Deep Clean" ? "bg-slate-900 text-white border-slate-900 shadow-2xl" : "bg-white border-slate-100"}`}
          >
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
            <div className="text-4xl font-black mb-6">₦{plan.price}<span className="text-sm font-normal opacity-60">/session</span></div>
            <ul className="space-y-4 mb-8">
              {plan.features.map(f => (
                <li key={f} className="text-sm flex items-center gap-2">
                  <span className="text-green-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <button 
              onClick={onBookClick}
              className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.name === "Deep Clean" ? "bg-green-600 text-white" : "bg-slate-50 text-slate-900 hover:bg-slate-100"}`}
            >
              Select Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
