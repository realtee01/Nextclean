import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import JobCard from './components/JobCard';
import BookingProcess from './components/BookingProcess';
import ContactModal from './components/ContactModal';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';

import cleaning5 from './assets/Cleaning-5.jpg';
import cleaning4 from './assets/Cleaning-4.jpg';
import cleaning6 from './assets/Cleaning-6.jpg';
import cleaning3 from './assets/Cleaning-3.jpg';
import gardening1 from './assets/gardening-1.jpg';
import moving1 from './assets/Moving-1.jpg';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("All Services");

  const services = [
    { id: 1, category: "Deep Clean", title: "Deep Residential", image: cleaning5, desc: "A 50-point checklist covering baseboards, vents, and behind appliances." },
    { id: 2, category: "Residential", title: "Standard Care", image: cleaning4, desc: "Consistent maintenance for busy homes. Dusting, mopping, and sanitization." },
    { id: 3, category: "Commercial", title: "Office Sparkle", image: cleaning6, desc: "Late-night cleaning for corporate hubs. Zero disruption to your workflow." },
    { id: 4, category: "Residential", title: "Kitchen Specialized", image: cleaning3, desc: "Degreasing, appliance detailing, and cabinet organization." },
    { id: 5, category: "Gardening", title: "Garden Grooming", image: gardening1, desc: "Lawn mowing, hedge trimming, and outdoor space clearing." },
    { id: 6, category: "Moving", title: "Move-in/Move-out", image: moving1, desc: "Ensuring your new home is sterile and your old one is deposit-ready." },
  ];

  const categories = ["All Services", "Residential", "Deep Clean", "Commercial", "Gardening", "Moving"];
  const filteredData = filter === "All Services" ? services : services.filter(s => s.category === filter);

  const openBooking = () => setIsModalOpen(true);

  return (
    <div className="bg-white min-h-screen selection:bg-green-100 overflow-x-hidden">
      <Header onContactClick={openBooking} />
      
      <Hero onBookClick={openBooking} />

      <div className="bg-slate-50 py-12 md:py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Happy Homes", val: "500+" },
            { label: "Expert Cleaners", val: "20+" },
            { label: "Satisfaction", val: "100%" },
            { label: "Lagos Locations", val: "12+" }
          ].map((stat, i) => (
            <div key={i}>
              <h4 className="text-2xl md:text-4xl font-black text-slate-900">{stat.val}</h4>
              <p className="text-slate-400 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-slate-900 leading-tight">
            More than just a <br/>
            <span className="text-green-600 italic underline decoration-green-100">mop and bucket.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg mb-8 leading-relaxed">
            Nextclean handles the logistics of a clean lifestyle so you don't have to.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {['Vetted Staff', 'Hospital Grade', 'Custom Checklists', 'Insured'].map((item) => (
              <div key={item} className="flex items-center gap-2 font-bold text-slate-800 text-xs md:text-sm">
                <span className="h-4 w-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[8px]">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <motion.div whileHover={{ rotate: -1 }} className="bg-green-600 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-4">The Nextclean Guarantee</h3>
          <p className="opacity-90 text-sm md:text-base mb-8">100% satisfied or we re-clean for free within 24 hours.</p>
          <button onClick={openBooking} className="bg-white text-green-600 px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">Start Now</button>
        </motion.div>
      </section>

      <BookingProcess />

      <Pricing onBookClick={openBooking} />

      <section id="services" className="bg-slate-50 py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Services.</h2>
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                    filter === cat ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <AnimatePresence mode='popLayout'>
              {filteredData.map((service) => (
                <JobCard 
                  key={service.id}
                  image={service.image}
                  title={service.title}
                  desc={service.desc}
                  category={service.category}
                  onCardClick={openBooking} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <FAQ />

      <footer className="py-12 text-center bg-white border-t border-slate-100">
          <div className="text-xl font-black text-green-600 mb-2">Nextclean.</div>
        <p className="text-slate-400 font-medium text-xs">Redefining Domestic Excellence. Lagos, Nigeria.</p>
            <p className="text-slate-400 font-medium text-xs">(c) 2026 Nextclean </p>
        </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
