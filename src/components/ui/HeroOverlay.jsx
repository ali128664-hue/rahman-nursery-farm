import React from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, Sparkles, Leaf, Store, TreePine, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const HeroOverlay = ({ onExploreClick, onOpenCatalog, onOpenAIPlanner }) => {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-12 pointer-events-auto">
      
      {/* Top Main Hero Block */}
      <div className="max-w-6xl mx-auto text-center mt-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs sm:text-sm font-black text-emerald-950 border border-amber-400/80 shadow-lg bg-gradient-to-r from-amber-100 via-white to-emerald-100 mb-6 uppercase tracking-wider"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-800" />
          <span>50+ YEARS BOTANICAL HERITAGE • PAKISTAN HUB</span>
        </motion.div>

        {/* High-Impact Shopify Store Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-emerald-950 leading-[1.08] tracking-tight mb-6"
        >
          Pakistan’s Premier Certified <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 via-emerald-700 to-amber-600 underline decoration-amber-400 decoration-wavy decoration-2">
            Nursery & Fruit Orchard Store
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-emerald-950 max-w-3xl mx-auto font-bold leading-relaxed mb-9 bg-white/95 backdrop-blur-xl p-6 rounded-3xl border border-amber-300/50 shadow-xl text-center"
        >
          Direct farm prices on 100+ acclimatized Pakistani plants, grafted Chaunsa Mango, China Guava, Pink Cassia Nodosa trees, Royal Date Palms, and turn-key villa landscaping by <strong className="text-emerald-800 underline">Rahman Nursery Farm</strong>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={onOpenCatalog}
            className="px-8 py-4.5 rounded-full text-sm sm:text-base font-black flex items-center gap-3 shadow-2xl bg-gradient-to-r from-emerald-800 to-emerald-950 text-white hover:from-emerald-700 hover:to-emerald-900 border border-emerald-500 hover:scale-105 transition-all"
          >
            <Store className="w-5 h-5 text-amber-300" />
            <span>Nursery Store (100+)</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
          
          <button
            onClick={onExploreClick}
            className="px-8 py-4.5 rounded-full text-sm sm:text-base font-black flex items-center gap-3 shadow-2xl bg-amber-400 text-emerald-950 hover:bg-amber-300 hover:scale-105 transition-all border border-amber-500"
          >
            <TreePine className="w-5 h-5 text-emerald-900" />
            <span>Bagh Lagwao Orchards</span>
          </button>

          <a
            href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('Assalam o Alaikum Ansar Hussain Bhai (0304-0450065)! Main Rahman Nursery Farm website se direct order helpline par contact kar raha hu.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4.5 rounded-full text-sm sm:text-base font-black flex items-center gap-3 shadow-2xl bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105 transition-all border border-emerald-400"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>WhatsApp (03040450065)</span>
          </a>
        </motion.div>

        {/* 4-Point Shopify Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left text-xs font-black text-emerald-950">
          <div className="bg-white/90 p-4 rounded-2xl border border-emerald-200 shadow-md flex items-center gap-2.5">
            <span className="text-xl">🚚</span>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-black">Cargo Service</div>
              <div>Nationwide Dispatch</div>
            </div>
          </div>
          <div className="bg-white/90 p-4 rounded-2xl border border-emerald-200 shadow-md flex items-center gap-2.5">
            <span className="text-xl">🌿</span>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-black">Field Verified</div>
              <div>100% Acclimatized</div>
            </div>
          </div>
          <div className="bg-white/90 p-4 rounded-2xl border border-emerald-200 shadow-md flex items-center gap-2.5">
            <span className="text-xl">📜</span>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-black">Nursery Legacy</div>
              <div>50+ Years Heritage</div>
            </div>
          </div>
          <div className="bg-white/90 p-4 rounded-2xl border border-emerald-200 shadow-md flex items-center gap-2.5">
            <span className="text-xl">💬</span>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-black">Direct Helpline</div>
              <div>0304-0450065</div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
