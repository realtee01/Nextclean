import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import JobCard from './components/JobCard';

// Image Imports
import cleaning5 from './assets/Cleaning-5.jpg';
import cleaning4 from './assets/Cleaning-4.jpg';
import cleaning6 from './assets/Cleaning-6.jpg';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FilterBar />
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <JobCard 
          image={cleaning5} 
          title="Deep Cleaning" 
          desc="Complete top-to-bottom scrub."
        />
        <JobCard 
          image={cleaning4} 
          title="Standard Care" 
          desc="Perfect for weekly maintenance."
        />
        <JobCard 
          image={cleaning6} 
          title="Post-Construction" 
          desc="We handle the heavy lifting."
        />
      </section>
    </div>
  );
}

export default App;
