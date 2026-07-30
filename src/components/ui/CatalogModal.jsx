import React, { useState } from 'react';
import { X, Search, Sparkles, Eye, MessageCircle, ShoppingCart, Star } from 'lucide-react';
import { PLANTS_DATA, PLANT_CATEGORIES } from '../../data/plantCatalog';
import { generatePlantWhatsAppLink } from '../../utils/whatsappHelper';

// Color theme per category for visual card header
const CATEGORY_COLORS = {
  orchard:    { from: '#15803D', to: '#166534', emoji: '🏡' },
  palms:      { from: '#166534', to: '#14532D', emoji: '🌴' },
  indoor:     { from: '#0284C7', to: '#0369A1', emoji: '🪴' },
  outdoor:    { from: '#78350F', to: '#451A03', emoji: '🌲' },
  fruit:      { from: '#EA580C', to: '#C2410C', emoji: '🍊' },
  flowering:  { from: '#BE185D', to: '#9D174D', emoji: '🌸' },
  bonsai:     { from: '#0F766E', to: '#115E59', emoji: '🎋' },
  medicinal:  { from: '#4D7C0F', to: '#3F6212', emoji: '🌿' },
  supplies:   { from: '#65A30D', to: '#4D7C0F', emoji: '🌾' },
  succulent:  { from: '#B45309', to: '#78350F', emoji: '🌵' },
};

const DIFFICULTY_COLOR = {
  'Easiest': 'bg-emerald-100 text-emerald-900 font-bold',
  'Very Easy': 'bg-green-100 text-green-900 font-bold',
  'Easy':    'bg-lime-100 text-lime-900 font-bold',
  'Moderate':'bg-amber-100 text-amber-900 font-bold',
  'Advanced':'bg-purple-100 text-purple-900 font-bold',
};

export const CatalogModal = ({ isOpen, onClose, onSelectPlantForInspection, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [plantQuantities, setPlantQuantities] = useState({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const getQty = (plantId) => plantQuantities[plantId] || 1;
  const setQty = (plantId, val) => {
    const newQty = Math.max(1, Math.min(999, val));
    setPlantQuantities((prev) => ({ ...prev, [plantId]: newQty }));
  };

  if (!isOpen) return null;

  const filteredPlants = PLANTS_DATA.filter((plant) => {
    const matchesCategory = activeCategory === 'all' || plant.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      plant.name.toLowerCase().includes(query) ||
      (plant.description || '').toLowerCase().includes(query) ||
      (plant.latinName || '').toLowerCase().includes(query) ||
      (plant.badge || '').toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-emerald-950/75 backdrop-blur-md pointer-events-auto">
      <div
        className="bg-white w-full max-w-6xl max-h-[94vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-emerald-200"
        style={{ animation: 'fadeIn 0.2s ease-out' }}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-emerald-100 flex items-center justify-between bg-white">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black text-amber-700 uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A-Z CATALOG • PAKISTAN PLANTS HUB • LAHORE • SAHIWAL</span>
            </div>
            <h2 className="font-serif text-xl sm:text-3xl font-black text-emerald-950">
              Full Botanical Collection
            </h2>
            <p className="text-xs text-emerald-800 font-bold mt-0.5">
              {PLANTS_DATA.length} Varieties • Indoor, Outdoor, Palms, Fruits, Flowers, Cactus & Timber
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-100 text-emerald-950 hover:bg-emerald-100 transition-colors border border-slate-200"
            title="Close Catalog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-3 sm:p-4 border-b border-slate-200 bg-slate-50 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Touch-scrollable category pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full pb-1 scrollbar-none">
            {PLANT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-black whitespace-nowrap transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-md'
                    : 'bg-white text-emerald-950 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Click-to-Open Search Trigger OR Input */}
          {isSearchOpen ? (
            <div className="relative w-full md:w-64 flex-shrink-0 flex items-center gap-1.5">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-emerald-700 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search 100+ plants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-full text-xs bg-white border border-emerald-500 text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-bold shadow-sm"
                />
              </div>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="px-2.5 py-1 rounded-full text-[11px] font-black bg-slate-200 text-slate-700 hover:bg-slate-300"
              >
                Close
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="px-3.5 py-1.5 rounded-full bg-white text-emerald-950 hover:bg-emerald-50 border border-slate-300 transition-all font-black text-xs flex items-center justify-center gap-1.5 shadow-sm flex-shrink-0"
            >
              <Search className="w-3.5 h-3.5 text-emerald-700" />
              <span>Search</span>
            </button>
          )}
        </div>

        {/* Plant Cards Grid */}
        <div className="p-3 sm:p-5 md:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 bg-slate-50/70">
          {filteredPlants.length === 0 ? (
            <div className="col-span-full text-center py-16 text-emerald-900 font-black">
              No plants found matching "{searchQuery}". Try another keyword or select "All Plants A-Z".
            </div>
          ) : filteredPlants.map((plant) => {
            const catColor = CATEGORY_COLORS[plant.category] || CATEGORY_COLORS.indoor;
            const diffClass = DIFFICULTY_COLOR[plant.difficulty] || 'bg-gray-100 text-gray-800';

            return (
              <div
                key={plant.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-all duration-200"
              >
                {/* Header strip */}
                <div>
                  <div
                    className="px-4 py-3 flex items-center justify-between text-white"
                    style={{ background: `linear-gradient(135deg, ${catColor.from}, ${catColor.to})` }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{catColor.emoji}</span>
                      <div>
                        <div className="text-[9px] uppercase tracking-widest text-amber-300 font-black">
                          {plant.category.toUpperCase()}
                        </div>
                        <div className="text-[10px] font-black text-white/90 flex items-center gap-1">
                          <Star className="w-2.5 h-2.5 fill-amber-300 text-amber-300" />
                          <span>{plant.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-serif text-lg font-black text-white leading-tight">
                        PKR {plant.pricePKR.toLocaleString()}
                      </div>
                      <div className="text-[9px] text-amber-200 font-black">
                        {plant.pricePKR >= 30000 ? 'LUXURY SPECIMEN' : plant.pricePKR >= 5000 ? 'PREMIUM' : 'VALUE'}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-900 text-[10px] font-black uppercase border border-emerald-200 mb-2">
                      {plant.badge}
                    </span>

                    <h3 className="font-serif text-base font-black text-emerald-950 leading-snug mb-0.5">
                      {plant.name}
                    </h3>
                    <p className="text-[11px] italic text-slate-500 font-bold mb-2.5">{plant.latinName}</p>

                    <p className="text-xs text-emerald-900 line-clamp-2 mb-3 leading-relaxed font-bold">
                      {plant.description}
                    </p>

                    <div className="grid grid-cols-2 gap-1.5 text-[10px] font-bold text-emerald-950">
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-1.5">
                        <span className="text-amber-500">☀️</span> {plant.sunlight}
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-1.5">
                        <span className="text-blue-500">💧</span> {plant.watering}
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-1.5">
                        <span className="text-emerald-600">📏</span> {plant.height}
                      </div>
                      <div className={`rounded-lg p-1.5 ${diffClass}`}>
                        Care: {plant.difficulty}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="p-4 pt-0 border-t border-slate-100 flex flex-col gap-2">
                  <div className="flex items-center justify-between bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl">
                    <span className="text-[10px] font-black text-emerald-950 uppercase">Quantity:</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setQty(plant.id, getQty(plant.id) - 1)}
                        className="w-6 h-6 rounded bg-white border border-slate-300 font-black text-xs text-emerald-950 hover:bg-slate-200"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-xs font-black text-emerald-950">
                        {getQty(plant.id)}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(plant.id, getQty(plant.id) + 1)}
                        className="w-6 h-6 rounded bg-white border border-slate-300 font-black text-xs text-emerald-950 hover:bg-slate-200"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <a
                    href={generatePlantWhatsAppLink({
                      plantName: plant.name,
                      plantPrice: plant.pricePKR,
                      quantity: getQty(plant.id),
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 transition-colors text-xs font-black flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>WhatsApp Order ({getQty(plant.id)} Unit{getQty(plant.id) > 1 ? 's' : ''})</span>
                  </a>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onAddToCart && onAddToCart(plant, getQty(plant.id))}
                      className="flex-1 py-2 rounded-xl text-xs font-black flex items-center justify-center gap-1 bg-slate-100 text-emerald-950 hover:bg-emerald-50 border border-slate-200 transition-colors"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 text-amber-600" />
                      <span>Add to Cart</span>
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onSelectPlantForInspection(plant.id);
                      }}
                      className="py-2 px-3.5 rounded-xl text-xs font-black text-emerald-950 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
