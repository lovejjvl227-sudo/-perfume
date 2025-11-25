import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-serif text-xl tracking-wide text-gray-900">
          Scent<span className="italic text-gray-400">Duplicate</span>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-sans uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-black transition-colors">Collection</a>
          <a href="#" className="hover:text-black transition-colors">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;