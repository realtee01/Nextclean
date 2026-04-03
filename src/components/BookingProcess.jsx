import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Choose a Plan', desc: 'Select the cleaning package that fits your lifestyle.' },
  { id: '02', title: 'Pick a Date', desc: 'Our real-time scheduler lets you choose what works for you.' },
  { id: '03', title: 'Relax & Enjoy', desc: 'Our vetted professionals handle the rest while you live your life.' }
];

const BookingProcess = () => {
  return (
    <section className="max-w-7xl mx-auto px-10 py-24 border-t border-slate-100">
      <div className="text-center mb-16">
        <span className="text-green-600 font-bold uppercase tracking-[0.3em] text-[10px]">Simple Workflow</span>
        <h2 className="text-4xl font-bold text-slate-900 mt-2">How it works.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative"
          >
            <div className="text-8xl font-black text-slate-50 absolute -top-10 -left-4 z-0 select-none">
              {step.id}
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BookingProcess;
