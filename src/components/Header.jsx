const Header = ({ onContactClick }) => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md px-5 py-4 flex justify-between items-center border-b border-slate-50"
    >
      {/* Logo Area */}
      <h1 className="text-xl font-black text-green-600 tracking-tighter">
        Nextclean<span className="text-slate-900">.</span>
      </h1>
      
      {/* Action Area */}
      <div className="flex items-center gap-4">
        {/* These links only show on Desktop (md:flex) */}
        <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-600 mr-4">
          <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Services</button>
          <a href="#">Company</a>
        </div>
        
        <motion.button 
          onClick={onContactClick}
          whileTap={{ scale: 0.95 }}
          className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold"
        >
          Contact
        </motion.button>
      </div>
    </motion.nav>
  );
};
