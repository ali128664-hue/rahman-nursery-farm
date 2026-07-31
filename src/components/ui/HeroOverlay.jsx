import React from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, Leaf, Store, TreePine, MessageCircle, Package, Star } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

const TRUST_POINTS = [
  { icon: '🏅', title: '50+ Years Expertise', desc: 'Since 1970s, Baba Shareef legacy' },
  { icon: '🌱', title: '100% Certified Stock', desc: 'Grafted & acclimatized plants' },
  { icon: '🚚', title: 'Nationwide Dispatch', desc: 'Cargo to all major cities' },
  { icon: '📱', title: 'Direct Farm Prices', desc: 'No middleman, WhatsApp order' },
];

export const HeroOverlay = ({ onExploreClick, onOpenCatalog, onOpenAIPlanner, onOpenWhatsAppModal }) => {
  return (
    <section className="relative pt-44 pb-20 px-4 sm:px-6 lg:px-12 pointer-events-auto bg-[#F7F8F5]">
      <div className="max-w-5xl mx-auto text-center">

        {/* Official Brand Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-2 shadow-md border border-green-200 flex items-center justify-center">
            <img src="/logo.png" alt="Rahman Nursery Farm Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-300 text-green-800 text-xs font-black uppercase tracking-wider mb-6 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-green-700" />
          <span>50+ Years Botanical Heritage • Pakistan Hub • Since 1970s</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-5">
          Pakistan's Premier
          <br />
          <span className="text-green-700">Nursery & Fruit Orchard</span>
          <br />
          <span className="text-amber-600">Farm Store</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
          Direct farm prices on 100+ certified plants — Chaunsa Mango, China Guava, Royal Date Palms, 
          Pink Cassia Nodosa, and turn-key commercial orchard planting by <strong className="text-gray-900">Rahman Nursery Farm</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <button
            onClick={onOpenCatalog}
            className="px-7 py-3.5 rounded-full text-sm font-black flex items-center gap-2.5 shadow-lg bg-gray-900 text-white hover:bg-gray-800 transition border border-gray-800"
          >
            <Store className="w-4 h-4 text-amber-400" />
            <span>Shop Plants (100+)</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>

          <button
            onClick={onExploreClick}
            className="px-7 py-3.5 rounded-full text-sm font-black flex items-center gap-2.5 shadow-lg bg-amber-500 text-white hover:bg-amber-600 transition border border-amber-500"
          >
            <TreePine className="w-4 h-4" />
            <span>Bagh Packages</span>
          </button>

          <button
            onClick={() => onOpenWhatsAppModal && onOpenWhatsAppModal('Assalam o Alaikum! Main Rahman Nursery Farm website se plant order karna chahta hun. Please guide karein.')}
            className="px-7 py-3.5 rounded-full text-sm font-black flex items-center gap-2.5 shadow-lg bg-green-700 text-white hover:bg-green-800 transition border border-green-700"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>WhatsApp Order</span>
          </button>
        </div>

        {/* Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {TRUST_POINTS.map((pt, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm text-left">
              <div className="text-2xl mb-2">{pt.icon}</div>
              <div className="font-black text-gray-900 text-xs mb-0.5">{pt.title}</div>
              <div className="text-[11px] text-gray-500 font-medium">{pt.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
