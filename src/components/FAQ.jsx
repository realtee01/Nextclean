import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    { q: "Do I need to provide cleaning supplies?", a: "No, Nextclean provides all professional-grade equipment and eco-friendly solutions." },
    { q: "Are your cleaners vetted?", a: "Yes, every team member undergoes a strict background check and 2-week training in Lagos." },
    { q: "What if I'm not satisfied?", a: "Our 24-hour guarantee means we return to re-clean any area for free if you aren't happy." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black tracking-tighter mb-12 text-center">Frequently Asked.</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-100">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left font-bold flex justify-between items-center text-slate-900"
              >
                {faq.q}
                <span className="text-green-600 text-xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="px-6 pb-6 text-slate-500 text-sm"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
