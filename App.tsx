import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ComparisonCard from './components/ComparisonCard';
import { PERFUME_COMPARISONS } from './constants';

const App: React.FC = () => {
  
  // Smooth scroll behavior for the html element
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-gray-100 selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <section className="px-4 py-10 md:px-8">
          {PERFUME_COMPARISONS.map((comparison, index) => (
            <ComparisonCard 
              key={comparison.id} 
              data={comparison} 
              index={index} 
            />
          ))}
        </section>
      </main>

      <footer className="py-20 border-t border-gray-50 text-center">
        <div className="font-serif text-2xl mb-4 text-gray-900">ScentDuplicate</div>
        <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mb-8">
          Find your signature scent for less
        </p>
        <p className="font-sans text-[10px] text-gray-300">
          © {new Date().getFullYear()} ScentDuplicate. All data sourced from public reviews.
        </p>
      </footer>
    </div>
  );
};

export default App;