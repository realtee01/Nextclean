const Header = ({ onContactClick }) => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md px-6 md:px-10 py-4 flex justify-between items-center border-b border-slate-100"
    >
      <h1 className="text-xl md:text-2xl font-black text-green-600 tracking-tighter">
        Nextclean<span className="text-slate-900">.</span>
      </h1>
      
      {/* Hide these on small screens (hidden), show on medium (md:flex) */}
      <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Services</button>
        <a href="#">Company</a>
      </div>
      
      <motion.button 
        onClick={onContactClick}
        whileTap={{ scale: 0.95 }}
        className="bg-slate-900 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold"
      >
        Contact
      </motion.button>
    </motion.nav>
  );
};
