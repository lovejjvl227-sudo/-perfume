import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-white relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl -top-20 -left-20 pointer-events-none"
      />
       <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute w-[400px] h-[400px] bg-gray-50 rounded-full blur-3xl bottom-0 right-0 pointer-events-none"
      />

      <div className="z-10 text-center px-4 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-gray-400 mb-6"
        >
          Curated Fragrance Alternatives
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-gray-900 leading-tight mb-8"
        >
          The Art of <br/> <span className="italic font-light text-gray-400">Duplication</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans font-light text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto"
        >
          探索大品牌香水的平替選擇。同樣迷人的香調，更親民的價格。
          <br className="hidden md:block" />
          為您精選市場上相似度最高的香氛對比。
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <svg 
          className="w-6 h-6 text-gray-300" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;