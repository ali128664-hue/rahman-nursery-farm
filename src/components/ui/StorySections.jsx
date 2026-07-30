import React from 'react';
import { Sparkles, ArrowRight, Eye, ChevronRight, Leaf, Flower2, TreePine } from 'lucide-react';
import { motion } from 'framer-motion';

export const StorySections = ({ onOpenCatalog, onSelectPlantById, onOpenLandscaping }) => {
  return (
    <div className="relative z-10 space-y-16 py-12 px-4 sm:px-6 lg:px-12">
      {/* Zone 1: Greenhouse & Indoor Collection */}
      <section className="min-h-[50vh] flex items-center justify-start max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl max-w-xl border border-emerald-200/90 shadow-2xl bg-white/95 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="text-xs font-black tracking-widest text-emerald-800 uppercase">
              ZONE 01 • BOTANICAL GREENHOUSE
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-sage-950 leading-tight mb-3">
            Air-Purifying Indoor Sanctuary
          </h2>
          <p className="text-xs sm:text-sm text-sage-800 leading-relaxed mb-6 font-semibold">
            Nurtured under micro-controlled temperature & organic humidity, our Monstera, Ficus Lyrata, and Sansevieria collections cleanse indoor air while making architectural design statements in living rooms & offices.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectPlantById('monstera-deliciosa')}
              className="px-4 py-2.5 rounded-full text-xs font-black bg-emerald-700 text-white hover:bg-emerald-800 transition-all flex items-center gap-2 shadow-md"
            >
              <Eye className="w-4 h-4 text-emerald-200" />
              Inspect Monstera Deliciosa
            </button>

            <button
              onClick={() => onSelectPlantById('snake-plant-laurentii')}
              className="px-4 py-2.5 rounded-full text-xs font-bold text-sage-950 bg-emerald-50 hover:bg-emerald-100 transition-all flex items-center gap-1.5 border border-emerald-200"
            >
              Inspect Snake Plant
              <ChevronRight className="w-4 h-4 text-emerald-700" />
            </button>

            <button
              onClick={onOpenCatalog}
              className="px-4 py-2.5 rounded-full text-xs font-bold text-sage-950 bg-white hover:bg-slate-50 transition-all flex items-center gap-1.5 border border-slate-200"
            >
              Browse Indoor Catalog
              <ChevronRight className="w-4 h-4 text-emerald-700" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Zone 2: Tropical Palms & Fruit Orchard */}
      <section className="min-h-[50vh] flex items-center justify-end max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl max-w-xl border border-emerald-200/90 shadow-2xl bg-white/95 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
              <TreePine className="w-5 h-5" />
            </div>
            <span className="text-xs font-black tracking-widest text-emerald-800 uppercase">
              ZONE 02 • PALM AVENUE & ORCHARD
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-sage-950 leading-tight mb-3">
            Royal Palms & Pakistani Fruit Orchard
          </h2>
          <p className="text-xs sm:text-sm text-sage-800 leading-relaxed mb-6 font-semibold">
            From 25-foot Royal Date Palms for grand estate entrances to sweet Multani Chaunsa Mangoes and Kinnu Orange trees acclimatized for Punjab & Sindh climates.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectPlantById('mature-royal-date-palm')}
              className="px-4 py-2.5 rounded-full text-xs font-black bg-emerald-700 text-white hover:bg-emerald-800 transition-all flex items-center gap-2 shadow-md"
            >
              <Eye className="w-4 h-4 text-emerald-200" />
              Inspect Royal Date Palm
            </button>

            <button
              onClick={() => onSelectPlantById('mango-chaunsa-tree')}
              className="px-4 py-2.5 rounded-full text-xs font-bold text-sage-950 bg-amber-50 hover:bg-amber-100 transition-all flex items-center gap-1.5 border border-amber-200"
            >
              Inspect Chaunsa Mango
              <ChevronRight className="w-4 h-4 text-amber-700" />
            </button>

            <button
              onClick={onOpenCatalog}
              className="px-4 py-2.5 rounded-full text-xs font-bold text-sage-950 bg-white hover:bg-slate-50 transition-all flex items-center gap-1.5 border border-slate-200"
            >
              View Fruit Orchard
              <ChevronRight className="w-4 h-4 text-emerald-700" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Zone 3: Exotic Bonsai & Heritage Pavilion */}
      <section className="min-h-[50vh] flex items-center justify-start max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl max-w-xl border border-emerald-200/90 shadow-2xl bg-white/95 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-xl bg-purple-100 text-purple-800">
              <Flower2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-black tracking-widest text-emerald-800 uppercase">
              ZONE 03 • EXOTIC BONSAI PAVILION
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-sage-950 leading-tight mb-3">
            Living Sculpture & Heritage Motia
          </h2>
          <p className="text-xs sm:text-sm text-sage-800 leading-relaxed mb-6 font-semibold">
            Hand-shaped 15-year-old Juniper Bonsai masterworks, fragrant Pakistani Motia Jasmine, and fiery magenta Bougainvillea climbers that turn verandas into floral tapestries.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectPlantById('master-japanese-bonsai-juniper')}
              className="px-4 py-2.5 rounded-full text-xs font-black bg-amber-400 text-sage-950 hover:bg-amber-500 transition-all flex items-center gap-2 shadow-md border border-amber-300"
            >
              <Sparkles className="w-4 h-4 text-sage-950" />
              Inspect Bonsai Masterpiece
            </button>

            <button
              onClick={() => onSelectPlantById('ancient-italian-olive')}
              className="px-4 py-2.5 rounded-full text-xs font-bold text-sage-950 bg-purple-50 hover:bg-purple-100 transition-all flex items-center gap-1.5 border border-purple-200"
            >
              PKR 45,000 Italian Olive
              <ChevronRight className="w-4 h-4 text-purple-700" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Zone 4: Villa Landscaping & Architecture */}
      <section className="min-h-[50vh] flex items-center justify-end max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl max-w-xl border border-emerald-200/90 shadow-2xl bg-white/95 backdrop-blur-md"
        >
          <span className="text-xs font-black tracking-widest text-emerald-800 uppercase mb-2 block">
            ZONE 04 • LANDSCAPE ARCHITECTURE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-sage-950 leading-tight mb-3">
            Luxury Villa & Farmhouse Architecture
          </h2>
          <p className="text-xs sm:text-sm text-sage-800 leading-relaxed mb-6 font-semibold">
            Complete turn-key landscape design, automated drip irrigation, stone waterfalls, and living lawn installations across DHA Lahore, Bahria Town Islamabad & Emaar Karachi.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenLandscaping}
              className="px-5 py-3 rounded-full text-xs sm:text-sm font-black bg-emerald-700 text-white hover:bg-emerald-800 transition-all flex items-center gap-2 shadow-lg"
            >
              <span>Explore Landscaping Showcase</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
