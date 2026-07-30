import React, { useState } from 'react';
import { X, Search, Sparkles, Eye, MessageCircle, Leaf, TreePine, Flower2, Star } from 'lucide-react';
import { PLANTS_DATA, PLANT_CATEGORIES } from '../../data/plantCatalog';
import { generatePlantWhatsAppLink } from '../../utils/whatsappHelper';

// Color theme per category for visual card header
const CATEGORY_COLORS = {
  orchard:    { from: '#2E7D32', to: '#1B5E20', emoji: '🏡' },
  palms:      { from: '#1B5E20', to: '#2E7D32', emoji: '🌴' },
  indoor:     { from: '#1E88E5', to: '#0D47A1', emoji: '🪴' },
  outdoor:    { from: '#5D4037', to: '#3E2723', emoji: '🌲' },
  fruit:      { from: '#E65100', to: '#BF360C', emoji: '🍊' },
  flowering:  { from: '#C2185B', to: '#880E4F', emoji: '🌸' },
  bonsai:     { from: '#006064', to: '#004D40', emoji: '🎋' },
  medicinal:  { from: '#33691E', to: '#1B5E20', emoji: '💊' },
  supplies:   { from: '#558B2F', to: '#33691E', emoji: '🌾' },
};

const DIFFICULTY_COLOR = {
  'Easiest': 'bg-emerald-100 text-emerald-800',
  'Very Easy': 'bg-green-100 text-green-800',
  'Easy':    'bg-lime-100 text-lime-800',
  'Moderate':'bg-amber-100 text-amber-800',
  'Advanced':'bg-red-100 text-red-800',
};

export const CatalogModal = ({ isOpen, onClose, onSelectPlantForInspection, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [plantQuantities, setPlantQuantities] = useState({});

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-8 bg-sage-950/70 backdrop-blur-md pointer-events-auto">
      <div
        className="bg-white w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-cream-200"
        style={{ animation: 'fadeIn 0.25s ease' }}
      >
        {/* Modal Header */}
        <div className="p-5 md:p-7 border-b border-cream-200 flex items-center justify-between bg-white">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A-Z Nursery Catalog • Plant.pk Verified Rates • Pattoki • Lahore • Sahiwal</span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-sage-950">
              Full Botanical Collection
            </h2>
            <p className="text-xs text-sage-600 mt-0.5 font-semibold">
              {PLANTS_DATA.length} varieties • Indoor, Outdoor, Palms, Fruits, Timber, Lawn & More
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-cream-100 text-sage-700 hover:bg-cream-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search */}
        <div className="p-4 border-b border-cream-200 bg-slate-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto w-full pb-1 scrollbar-none">
            {PLANT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-black whitespace-nowrap transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-md'
                    : 'bg-white text-sage-800 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 flex-shrink-0">
            <Search className="w-4 h-4 text-sage-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search plants, timber, grass..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full text-xs bg-white border border-slate-300 text-sage-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold"
            />
          </div>
        </div>

        {/* Plant Cards Grid */}
        <div className="p-5 md:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-slate-50/50">
          {filteredPlants.length === 0 ? (
            <div className="col-span-3 text-center py-16 text-sage-500 font-semibold">
              No plants found. Try a different search or category.
            </div>
          ) : filteredPlants.map((plant) => {
            const catColor = CATEGORY_COLORS[plant.category] || CATEGORY_COLORS.indoor;
            const diffClass = DIFFICULTY_COLOR[plant.difficulty] || 'bg-gray-100 text-gray-700';

            return (
              <div
                key={plant.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Colored header strip with category emoji & price */}
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{ background: `linear-gradient(135deg, ${catColor.from}, ${catColor.to})` }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{catColor.emoji}</span>
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-white/70 font-bold">
                        {plant.category.toUpperCase()}
                      </div>
                      <div className="text-[10px] font-extrabold text-white/90 flex items-center gap-1">
                        {[...Array(Math.round(plant.rating))].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="ml-0.5">{plant.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-xl font-black text-white leading-tight">
                      PKR {plant.pricePKR.toLocaleString()}
                    </div>
                    <div className="text-[9px] text-white/70 font-bold">
                      {plant.pricePKR >= 30000 ? 'LUXURY SPECIMEN' : plant.pricePKR >= 5000 ? 'PREMIUM' : 'GREAT VALUE'}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col flex-1">
                  {/* Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wide border border-emerald-200 mb-2 self-start">
                    {plant.badge}
                  </span>

                  {/* Name & Latin */}
                  <h3 className="font-serif text-base md:text-lg font-bold text-sage-950 mb-0.5 leading-snug">
                    {plant.name}
                  </h3>
                  <p className="text-[11px] italic text-sage-500 mb-2">{plant.latinName}</p>

                  <p className="text-xs text-sage-800 line-clamp-2 mb-3 leading-relaxed flex-1">
                    {plant.description}
                  </p>

                  {/* Quick specs row */}
                  <div className="grid grid-cols-2 gap-1.5 mb-3 text-[11px]">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5">
                      <span className="text-sage-500">☀️</span> {plant.sunlight}
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5">
                      <span className="text-sage-500">💧</span> {plant.watering}
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5">
                      <span className="text-sage-500">📏</span> {plant.height}
                    </div>
                    <div className={`rounded-lg px-2 py-1.5 font-bold text-[10px] ${diffClass}`}>
                      Care: {plant.difficulty}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">

                    {/* Quantity Selector Control */}
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl">
                      <span className="text-[10px] font-black text-emerald-950 uppercase tracking-wide">
                        Qty:
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setQty(plant.id, getQty(plant.id) - 1)}
                          className="w-6 h-6 rounded-md bg-white border border-slate-300 flex items-center justify-center text-xs font-black text-emerald-950 hover:bg-slate-200"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-black text-emerald-950">
                          {getQty(plant.id)}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(plant.id, getQty(plant.id) + 1)}
                          className="w-6 h-6 rounded-md bg-white border border-slate-300 flex items-center justify-center text-xs font-black text-emerald-950 hover:bg-slate-200"
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
                      title="Direct 1-Click Order on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      <span>WhatsApp ({getQty(plant.id)} Unit{getQty(plant.id) > 1 ? 's' : ''})</span>
                    </a>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onAddToCart && onAddToCart(plant, getQty(plant.id))}
                        className="flex-1 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1 bg-slate-100 text-emerald-950 hover:bg-emerald-50 border border-slate-200 transition-colors"
                      >
                        🛒 Add {getQty(plant.id)} to Cart
                      </button>

                      <button
                        onClick={() => {
                          onClose();
                          onSelectPlantForInspection(plant.id);
                        }}
                        className="py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1 text-emerald-950 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Inspect
                      </button>
                    </div>
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
