const Hero = ({ onBookClick }) => {
  return (
    <section className="pt-28 pb-10 md:pt-36 md:pb-20 px-6 md:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        {/* Mobile text is 4xl, Desktop is 7xl */}
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] md:leading-[0.9] tracking-tighter mb-6">
          Purity in <br/><span className="text-green-600">Every Detail.</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg max-w-sm mb-8 leading-relaxed">
          Lagos' most trusted household managers. We clean, you live.
        </p>
        
        <motion.button 
          onClick={onBookClick}
          whileHover={{ scale: 1.05 }}
          className="w-full md:w-auto bg-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg"
        >
          Book a Session
        </motion.button>
      </motion.div>
      
      {/* On mobile, we might want to adjust image height */}
      <motion.div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px] md:h-[500px]">
        <img src={heroImg} className="w-full h-full object-cover" />
      </motion.div>
    </section>
  );
};
