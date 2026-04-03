import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import JobCard from './components/JobCard';
import FilterBar from './components/FilterBar';
import { motion } from 'framer-motion';

// Image Imports
import cleaning5 from './assets/Cleaning-5.jpg';
import cleaning4 from './assets/Cleaning-4.jpg';
import cleaning6 from './assets/Cleaning-6.jpg';

const App = () => {
  const [filter, setFilter] = useState("All Services");

  const allServices = [
    { id: 1, category: "Deep Clean", title: "Deep Residential", image: cleaning5, desc: "A 50-point checklist cleaning including baseboards, inside ovens, and behind appliances." },
    { id: 2, category: "Residential", title: "Standard Care", image: cleaning4, desc: "Perfect for busy professionals. Includes dusting, mopping, and bathroom sanitization." },
    { id: 3, category: "Commercial", title: "Office Sparkle", image: cleaning6, desc: "Late-night cleaning for startups and corporate hubs in Lagos. Zero disruption." },
  ];

  const filteredData = filter === "All Services" 
    ? allServices 
    : allServices.filter(item => item.category === filter);

  return (
    <div className="bg-white">
      <Header />
      <Hero />

      {/* --- A. THE TRUST BAR --- */}
      <div className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl font-black text-slate-900">500+</h4>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Happy Homes</p>
          </div>
          <div>
            <h4 className="text-3xl font-black text-slate-900">20+</h4>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Expert Cleaners</p>
          </div>
          <div>
            <h4 className="text-3xl font-black text-slate-900">100%</h4>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Satisfaction</p>
          </div>
          <div>
            <h4 className="text-3xl font-black text-slate-900">24/7</h4>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Support</p>
          </div>
        </div>
      </div>

      {/* --- THE "WHAT WE DO" DETAIL SECTION --- */}
      <section className="max-w-7xl mx-auto px-10 py-24 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 italic">More than just a <span className="text-green-600">mop and bucket.</span></h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Nextclean provides a full-suite household management experience. From high-pressure steaming to eco-friendly sanitization, we handle the logistics of a clean lifestyle.
          </p>
          <ul className="space-y-4">
            {['Vetted & Background-Checked Staff', 'Hospital-Grade Disinfectants', 'Customized Cleaning Checklists', 'Insured & Bonded Services'].map((item) => (
              <li key={item} className="flex items-center gap-3 font-semibold text-slate-800">
                <span className="h-6 w-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green-600 rounded-[3rem] p-12 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-white">The Nextclean Guarantee</h3>
          <p className="opacity-90 leading-relaxed mb-6">
            If you aren't 100% satisfied with the sparkle of your home, we'll come back and re-clean for free. No questions asked.
          </p>
          <div className="h-px bg-white/20 w-full mb-6"></div>
          <p className="font-mono text-sm tracking-tighter">ESTABLISHED 2026 — LAGOS, NG</p>
        </div>
      </section>

      {/* --- SERVICES WITH FILTERING --- */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-10 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl font-bold tracking-tighter">Our Services.</h2>
            <p className="text-slate-500 mt-2">Select a category to find your perfect fit.</p>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 md:pb-0">
            {["All Services", "Residential", "Commercial", "Deep Clean"].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border text-sm font-bold transition-all ${
                  filter === cat ? "bg-green-600 text-white border-green-600" : "bg-white border-slate-200 text-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="max-w-7xl mx-auto px-10 grid md:grid-cols-3 gap-8"
        >
          {filteredData.map((service) => (
            <JobCard 
              key={service.id}
              image={service.image}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </motion.div>
      </div>

      <footer className="py-20 text-center bg-white border-t border-slate-100">
        <p className="text-slate-400 font-medium">Nextclean. Redefining Domestic Excellence.</p>
      </footer>
    </div>
  );
};

export default App;
