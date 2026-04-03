import React from 'react';

const FilterBar = () => {
  const cats = ["All Services", "Residential", "Commercial", "Deep Clean", "Gardening"];
  return (
    <div className="max-w-7xl mx-auto px-10 py-10 overflow-x-auto whitespace-nowrap space-x-4">
      {cats.map((c) => (
        <button key={c} className="px-6 py-2 rounded-full border border-slate-200 text-sm font-medium hover:bg-slate-50">
          {c}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
