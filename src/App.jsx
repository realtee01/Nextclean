import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import JobCard from './components/JobCard';
import BookingProcess from './components/BookingProcess';
import ContactModal from './components/ContactModal';

// Image Imports
import cleaning5 from './assets/Cleaning-5.jpg';
import cleaning4 from './assets/Cleaning-4.jpg';
import cleaning6 from './assets/Cleaning-6.jpg';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("All Services");

  const services = [
    { id: 1, category: "Deep Clean", title: "Deep Residential", image: cleaning5, desc: "A 50-point checklist covering baseboards, vents, and behind appliances." },
    { id: 2, category: "Residential", title: "Standard Care", image: cleaning4, desc: "Consistent maintenance for busy homes. Dusting, mopping, and sanitization." },
    { id: 3, category: "Commercial", title: "Office Sparkle", image: cleaning6, desc: "Late-night cleaning for corporate hubs. Zero disruption to your workflow." },
  ];

  const filteredData = filter === "All Services" 
    ? services 
    : services.filter(item => item.category === filter);

  // Common function to open the modal
  const openBookingModal = () => setIsModalOpen(true);

  return (
    <div className="bg-white min-h-screen selection:bg-green-100 selection:text-green-900 overflow-x-hidden">
      
      {/* Function: Pass modal trigger to Header */}
      <Header onContactClick={openBookingModal} />
      
      {/* Function: Pass modal trigger to Hero */}
      <Hero onBookClick={openBookingModal} />

      {/* --- TRUST BAR --- */}
      <div className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Happy Homes", val: "500+" },
            { label: "Expert Cleaners", val: "20+" },
            { label: "Satisfaction", val: "100%" },
            { label: "Lagos Locations", val: "12+" }
          ].map((stat, i) => (
            <div key={i}>
              <h4 className="text-4xl font-black text-slate-900 mb-1">{stat.val}</h4>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- VALUE PROP SECTION --- */}
      <section className="max-w-7xl mx-auto px-10 py-24 grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-[0.95] tracking-tighter mb-8 text-slate-900">
            More than just a <br/>
            <span className="text-green-600 italic underline decoration-green-200">mop and bucket.</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed">
            Nextclean provides a full-suite household management experience. From high-pressure steaming to eco-friendly sanitization, we handle the logistics of a clean lifestyle.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {['Vetted Staff', 'Hospital Grade', 'Custom Checklists', 'Insured Services'].map((item) => (
              <div key={item} className="flex items-center gap-3 font-bold text-slate-800 text-sm">
                <span className="h-5 w-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px]">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
        
        <motion.div 
          whileHover={{ rotate: -1 }}
          className="bg-green-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">The Nextclean Guarantee</h3>
            <p className="opacity-90 leading-relaxed mb-8 text-lg">
              If you aren't 100% satisfied with the sparkle of your home, we'll come back and re-clean for free. No questions asked.
            </p>
            {/* Function: Guarantee Section Button triggers Modal */}
            <motion.button 
              onClick={openBookingModal}
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 } // Bouncy spring
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-black text-sm hover:bg-slate-100 transition-colors shadow-lg"
            >
              Start Now
            </motion.button>
          </div>
          <div className="absolute -bottom-20 -right-20 h-64 w-64 bg-green-500 rounded-full opacity-50 blur-3xl"></div>
        </motion.div>
      </section>

      <BookingProcess />

      {/* --- SERVICES grid (with ID for smooth scrolling) --- */}
      <section id="services" className="bg-slate-50 py-24 px-10 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter">Our Services.</h2>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-4 md:pb-0">
              {["All Services", "Residential", "Commercial", "Deep Clean"].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    filter === cat 
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-200" 
                    : "bg-white border border-slate-200 text-slate-400 hover:border-slate-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode='popLayout'>
              {filteredData.map((service) => (
                <JobCard 
                  key={service.id}
                  image={service.image}
                  title={service.title}
                  desc={service.desc}
                  category={service.category}
                  {/* Function: Pass modal trigger to all JobCards */}
                  onCardClick={openBookingModal} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 text-center bg-white border-t border-slate-100">
        <div className="text-2xl font-black text-green-600 mb-4">Nextclean.</div>
        <p className="text-slate-400 font-medium text-sm">Redefining Domestic Excellence. Lagos, Nigeria.</p>
      </footer>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default App;
