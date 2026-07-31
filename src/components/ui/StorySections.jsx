import React from 'react';
import { ArrowRight, Eye, Store, TreePine, Leaf, Flower2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const StorySections = ({ onOpenCatalog, onSelectPlantById, onOpenLandscaping }) => {
  const FEATURED_COLLECTIONS = [
    {
      id: 'fruit',
      title: '🍊 Commercial Fruit Orchards',
      subtitle: 'Chaunsa Mango, White Guava, Kinnu Citrus & Anar',
      desc: 'Grafted fruit trees acclimatized to Punjab soil. Early fruit bearing within 12-18 months.',
      badge: 'High Profit Yield',
      bgGradient: 'from-orange-900 via-amber-900 to-emerald-950',
      actionPlantId: 'anwar-ratol-mango'
    },
    {
      id: 'indoor',
      title: '🪴 Indoor Air-Purifying Sanctuary',
      subtitle: 'Monstera Deliciosa, Snake Plant, Peace Lily & ZZ',
      desc: 'NASA certified 99% indoor dust and chemical toxin filters for air-conditioned rooms.',
      badge: 'NASA Air Score 99%',
      bgGradient: 'from-emerald-950 via-teal-900 to-emerald-900',
      actionPlantId: 'monstera-deliciosa'
    },
    {
      id: 'palms',
      title: '🌴 Royal Date Palms & Estate Trees',
      subtitle: '25ft Transplanted Royal Date Palms & Washingtonia',
      desc: 'Architectural estate palms for farmhouses, villas, and highway boulevard projects.',
      badge: 'Landscaping Favorite',
      bgGradient: 'from-amber-950 via-emerald-950 to-green-950',
      actionPlantId: 'mature-royal-date-palm'
    },
    {
      id: 'flowering',
      title: '🌸 Fragrant Flowers & Motia Jasmine',
      subtitle: 'Desi Gulab, Motia, Bougainvillea & Pink Cassia',
      desc: 'Fiery flowering climbers and traditional Pakistani fragrant blooms.',
      badge: 'Fragrant Blooms',
      bgGradient: 'from-pink-950 via-rose-900 to-emerald-950',
      actionPlantId: 'pink-cassia-nodosa'
    }
  ];

  return (
    <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl sm:text-5xl font-black text-emerald-950 mb-3">
          Explore Certified Botanical Collections
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-bold max-w-2xl mx-auto">
          Over 100+ acclimatized plant varieties grown and direct-dispatched from Chak Hassan Arain fields.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {FEATURED_COLLECTIONS.map((col) => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-5 sm:p-8 rounded-3xl bg-gradient-to-br ${col.bgGradient} text-white shadow-2xl border border-amber-400/30 flex flex-col justify-between hover:scale-[1.01] transition-transform group`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-amber-400 text-emerald-950 text-[10px] font-black uppercase tracking-wider">
                  {col.badge}
                </span>
                <span className="text-xs font-black text-amber-300">Verified Field Rates</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
                {col.title}
              </h3>
              <p className="text-xs font-black text-amber-200 mb-3">{col.subtitle}</p>
              <p className="text-xs text-white/90 font-semibold leading-relaxed mb-6">
                {col.desc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={onOpenCatalog}
                className="px-5 py-3 rounded-full text-xs font-black bg-white text-emerald-950 hover:bg-amber-300 transition-all flex items-center gap-2 shadow-md min-h-[44px]"
              >
                <Store className="w-4 h-4 text-emerald-800" />
                <span>Shop This Category</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onSelectPlantById(col.actionPlantId)}
                className="px-4 py-3 rounded-full text-xs font-black text-white bg-white/10 hover:bg-white/20 transition-all border border-white/20 flex items-center gap-1.5 min-h-[44px]"
              >
                <Eye className="w-3.5 h-3.5 text-amber-300" />
                <span>Inspect Specimen</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
