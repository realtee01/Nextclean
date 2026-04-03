import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60]"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 100 }}
            className="fixed inset-0 m-auto w-[90%] max-w-lg h-fit bg-white rounded-[3rem] p-10 z-[70] shadow-2xl"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Book Nextclean.</h2>
              <p className="text-slate-500 text-sm mb-8">Leave your details and we'll call you in 5 minutes.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-green-500 outline-none transition-all" />
                <input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-green-500 outline-none transition-all" />
                <textarea placeholder="Tell us about your space..." className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-green-500 h-32 outline-none transition-all" />
                <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-200">
                  Send Request
                </button>
              </form>
              
              <button onClick={onClose} className="mt-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
