import React from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, Truck, Sparkles, Star, Compass, Leaf, PhoneCall, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroOverlay = ({ onExploreClick, onOpenCatalog, onOpenAIPlanner }) => {
  const FEATURED_HIGHLIGHTS = [
    {
      id: 'cassia-nodosa-medium',
      name: 'Pink Cassia Nodosa (Pink Shower)',
      tag: '⭐ Nursery Bestseller',
      img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
      price: 'PKR 850 - 4,500',
      spec: 'All Sizes (Sapling to Mature Tree)'
    },
    {
      id: 'kinnu-orange-grafted',
      name: 'Pakistani Grafted Kinnu Citrus',
      tag: '🍊 Heavy Fruiting Variety',
      img: 'https://images.unsplash.com/photo-1582979512210-99b6a53385f9?auto=format&fit=crop&w=600&q=80',
      price: 'PKR 650',
      spec: 'Sweetest Sargodha/Pattoki Breed'
    },
    {
      id: 'mature-royal-date-palm',
      name: 'Mature Royal Date Palm (Khajoor)',
      tag: '🌴 Villa & Landscaping Special',
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
      price: 'PKR 12,000+',
      spec: 'Transplanted Rooted Palms'
    },
    {
      id: 'master-japanese-bonsai-juniper',
      name: 'Master Juniper Bonsai (15+ Yrs)',
      tag: '👑 Luxury Collector Piece',
      img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80',
      price: 'PKR 18,500',
      spec: 'Ceramic Pot Included'
    }
  ];

  return (
    <section className="relative pt-28 pb-14 px-4 sm:px-6 lg:px-12 pointer-events-auto">
      
      {/* Top Main Hero Block */}
      <div className="max-w-6xl mx-auto text-center mt-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs sm:text-sm font-black text-emerald-950 border border-amber-400/80 shadow-lg bg-gradient-to-r from-amber-100 via-white to-emerald-100 mb-6"
        >
          <Award className="w-4 h-4 text-amber-600 animate-pulse" />
          <span className="tracking-wide">50+ YEARS BOTANICAL HERITAGE • PAKISTANI PLANTS HUB</span>
        </motion.div>

        {/* End-Level High Impact Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-emerald-950 leading-[1.06] tracking-tight mb-6 drop-shadow-sm"
        >
          LUXURY GREENERY <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-600 to-amber-600 underline decoration-amber-400 decoration-wavy decoration-2">
            FOR YOUR HOMES & LAND
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-emerald-950 max-w-3xl mx-auto font-bold leading-relaxed mb-9 bg-white/95 backdrop-blur-xl p-6 rounded-3xl border border-amber-300/40 shadow-xl text-center"
        >
          Explore 100+ acclimatized plant varieties, Cassia Nodosa trees, Guava & Mango fruit orchards, Royal Date Palms, and turn-key villa landscaping by <strong className="text-emerald-800 underline">Rahman Nursery Farm (Pakistan Hub)</strong>.
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
            className="px-8 py-4.5 rounded-full text-sm sm:text-base font-black flex items-center gap-3 shadow-2xl btn-luxury-primary border border-emerald-500 hover:scale-105 transition-all"
          >
            <Leaf className="w-5 h-5 text-amber-300" />
            <span>Explore A-Z Plant Catalog</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
          
          <button
            onClick={onOpenAIPlanner}
            className="px-8 py-4.5 rounded-full text-sm sm:text-base font-black flex items-center gap-3 shadow-2xl btn-luxury-gold hover:scale-105 transition-all"
          >
            <Compass className="w-5 h-5 text-white" />
            <span>AI Garden & Budget Planner</span>
          </button>

          <a
            href="https://wa.me/923040450065?text=Assalam%20o%20Alaikum%20Ansar%20Bhai,%20mujhe%20plants%20ki%20details%20chahiye"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4.5 rounded-full text-sm font-black text-emerald-950 bg-white border border-emerald-300 shadow-lg hover:bg-emerald-50 transition-all flex items-center gap-2.5"
          >
            <PhoneCall className="w-4 h-4 text-emerald-700" />
            <span>Ansar Bhai (03040450065)</span>
          </a>
        </motion.div>

        {/* Featured Showcase Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto text-left mb-12"
        >
          {FEATURED_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              onClick={onOpenCatalog}
              className="group cursor-pointer rounded-3xl bg-white/95 backdrop-blur-xl p-4 border border-emerald-200/80 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-3.5 bg-emerald-50">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-950/90 text-amber-300 backdrop-blur-md border border-amber-400/40 shadow-sm">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-emerald-950 group-hover:text-emerald-700 transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-[11px] text-emerald-800 font-semibold mb-2">{item.spec}</p>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-2.5">
                <span className="text-xs font-black text-emerald-900">{item.price}</span>
                <span className="text-[10px] font-black text-amber-600 group-hover:underline flex items-center gap-1">
                  Order Now <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Live Farm Stats Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/95 backdrop-blur-xl p-5 sm:p-7 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-4 border border-emerald-300/80 max-w-5xl mx-auto shadow-2xl"
        >
          <div className="text-center border-r border-slate-200/80 last:border-0">
            <div className="font-serif text-2xl sm:text-4xl font-black text-emerald-900">500,000+</div>
            <div className="text-[10px] sm:text-[11px] font-black text-amber-700 uppercase tracking-widest">Plants Cultivated</div>
          </div>
          <div className="text-center border-r border-slate-200/80 last:border-0">
            <div className="font-serif text-2xl sm:text-4xl font-black text-amber-600">50+ Years</div>
            <div className="text-[10px] sm:text-[11px] font-black text-amber-700 uppercase tracking-widest">Botanical Heritage</div>
          </div>
          <div className="text-center border-r border-slate-200/80 last:border-0">
            <div className="font-serif text-2xl sm:text-4xl font-black text-emerald-900">50+ Cities</div>
            <div className="text-[10px] sm:text-[11px] font-black text-amber-700 uppercase tracking-widest">Wooden Crate Express PK</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-2xl sm:text-4xl font-black text-emerald-800 flex items-center justify-center gap-1">
              4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline" />
            </div>
            <div className="text-[10px] sm:text-[11px] font-black text-amber-700 uppercase tracking-widest">Verified Customer Reviews</div>
          </div>
        </motion.div>
      </div>

      {/* Feature Badges & Scroll Prompter */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4 mt-10">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          <div className="px-4 py-2.5 rounded-2xl flex items-center gap-2.5 text-xs font-black text-emerald-950 bg-white/95 border border-emerald-200 shadow-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Acclimatized Pattoki Soil</span>
          </div>

          <div className="px-4 py-2.5 rounded-2xl flex items-center gap-2.5 text-xs font-black text-emerald-950 bg-white/95 border border-emerald-200 shadow-md">
            <Truck className="w-4 h-4 text-amber-600" />
            <span>Safe Express Delivery All Over Pakistan</span>
          </div>
        </div>

        {/* Scroll Prompt Button */}
        <div
          onClick={onExploreClick}
          className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black text-emerald-950 border border-emerald-300 hover:bg-white hover:scale-105 transition-all shadow-md bg-white/95"
        >
          <span>EXPLORE FARMS & CATALOG</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-emerald-700" />
        </div>
      </div>
    </section>
  );
};
