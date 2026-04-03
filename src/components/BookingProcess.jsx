import React from 'react';
import { motion } from 'framer-motion';

const BookingProcess = () => {
  const steps = [
    { id: '01', title: 'Choose Plan', desc: 'Select your package.' },
    { id: '02', title: 'Pick Date', desc: 'Real-time scheduling.' },
    { id: '03', title: 'Relax', desc: 'We handle the rest.' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
      {steps.map((step, i) => (
        <div key={i} className="relative">
          <div className="text-6xl font-black text-slate-100 absolute -top-8 -left-2 z-0">{step.id}</div>
          <div className="relative z-10 font-bold text-slate-900">{step.title}</div>
          <p className="text-slate-500 text-sm mt-2">{step.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default BookingProcess; // <--- THE FIX
