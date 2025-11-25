import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ComparisonData, PerfumeItem } from '../types';

interface Props {
  data: ComparisonData;
  index: number;
}

const ProductColumn: React.FC<{ item: PerfumeItem; type: 'Luxury' | 'Dupe' }> = ({ item, type }) => (
  <div className="flex flex-col items-center justify-center space-y-6 w-full md:w-5/12 p-4 z-10">
    <div className="text-xs tracking-[0.2em] uppercase text-gray-400 font-sans">
      {type === 'Luxury' ? 'The Original' : 'The Alternative'}
    </div>
    
    {/* Bottle Display Container */}
    <div className="relative group w-64 h-[22rem] flex items-end justify-center perspective-1000">
        
        {/* Background Texture/Shape - Layered Behind */}
        <div className="absolute bottom-0 w-full h-[90%] bg-[#F5F5F2] rounded-t-full rounded-b-[2rem] transition-colors duration-700 group-hover:bg-[#EBEBE6] overflow-hidden">
             {/* Subtle Grain or Gradient Overlay */}
             <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-gray-200/50 to-transparent pointer-events-none"></div>
        </div>

        {/* Perfume Image - Layered In Front */}
        {/* mix-blend-multiply helps integrate images with white backgrounds seamlessly */}
        <motion.img 
          src={item.image} 
          alt={item.name} 
          className="relative z-10 w-auto h-[90%] object-contain mix-blend-multiply drop-shadow-xl animate-float filter contrast-[1.05]"
          whileHover={{ scale: 1.05, y: -5, rotate: 1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Shadow Grounding */}
        <div className="absolute bottom-4 w-32 h-4 bg-black/10 blur-xl rounded-[100%]"></div>
    </div>

    <div className="text-center space-y-2 mt-4">
      <h3 className="font-serif text-3xl font-medium text-gray-900 leading-none">{item.brand}</h3>
      <p className="font-sans text-xs text-gray-500 uppercase tracking-widest">{item.name}</p>
      <p className="font-serif text-lg text-luxury-gold italic mt-1">{item.price}</p>
    </div>
  </div>
);

const ComparisonCard: React.FC<Props> = ({ data, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center py-24 border-b border-gray-100 last:border-0"
    >
      <div className="flex flex-col md:flex-row items-center justify-between relative gap-16 md:gap-0">
        
        {/* Luxury Side */}
        <ProductColumn item={data.luxury} type="Luxury" />

        {/* Center VS and Stats */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex flex-col items-center justify-center z-20 space-y-6">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"></div>
          
          <div className="relative flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-sm border border-gray-50">
            <span className="font-serif text-3xl text-gray-300 font-light italic">vs</span>
          </div>

          <div className="flex flex-col items-center gap-2 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-gray-50">
             <div className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">Similarity</div>
             <motion.div 
               initial={{ scale: 0, opacity: 0 }}
               animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
               transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
               className="font-serif text-4xl text-gray-900"
             >
               {data.similarity}%
             </motion.div>
          </div>
          
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"></div>
        </div>

        {/* Dupe Side */}
        <ProductColumn item={data.dupe} type="Dupe" />
      </div>

      {/* Description & Notes */}
      <div className="mt-20 md:mt-24 text-center max-w-3xl mx-auto px-6 space-y-8 bg-gray-50/50 p-10 rounded-3xl">
        <div className="space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-[0.25em] text-gray-400">Fragrance Notes</h4>
            <p className="font-serif text-2xl text-gray-800 italic">
                "{data.notes}"
            </p>
        </div>
        <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        <p className="font-sans text-sm md:text-base font-light leading-loose text-gray-600">
            {data.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ComparisonCard;