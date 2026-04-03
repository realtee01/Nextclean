import React, { useState } from 'react';
// ... keep your other imports (Header, Hero, etc.)

const allServicesData = [
  { id: 1, category: "Deep Clean", title: "Deep Residential", image: cleaning5, desc: "Total home refresh." },
  { id: 2, category: "Residential", title: "Standard Care", image: cleaning4, desc: "Weekly maintenance." },
  { id: 3, category: "Commercial", title: "Office Sparkle", image: cleaning6, desc: "Professional workspace care." },
  // Add more items here to make it "plenty"!
];

const App = () => {
  const [filter, setFilter] = useState("All Services");

  const filteredData = filter === "All Services" 
    ? allServicesData 
    : allServicesData.filter(item => item.category === filter);

  return (
    <div>
      <Header />
      <Hero />
      
      {/* Filtering Buttons */}
      <div className="max-w-7xl mx-auto px-10 py-10 overflow-x-auto flex gap-4">
        {["All Services", "Residential", "Commercial", "Deep Clean"].map((cat) => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 rounded-full border transition-all font-semibold ${
              filter === cat ? "bg-green-600 text-white border-green-600 shadow-lg" : "border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Animated Grid */}
      <section className="max-w-7xl mx-auto px-10 pb-20 grid md:grid-cols-3 gap-8">
        {filteredData.map((service) => (
          <JobCard 
            key={service.id}
            image={service.image}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </section>
    </div>
  );
};
