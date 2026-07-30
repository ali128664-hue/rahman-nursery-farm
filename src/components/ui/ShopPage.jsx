import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Eye, MessageCircle, Star, SlidersHorizontal, ArrowUpDown, Check, ShoppingCart, Leaf, Filter, X } from 'lucide-react';
import { PLANTS_DATA, PLANT_CATEGORIES } from '../../data/plantCatalog';
import { generatePlantWhatsAppLink } from '../../utils/whatsappHelper';

// Category color themes and icons for visual cards
const CATEGORY_META = {
  all:       { emoji: '🌿', title: 'All Botanical Collection', desc: 'Browse our full catalog of 50+ acclimatized plants, fruit trees, date palms, and timber trees.' },
  orchard:   { emoji: '🏡', title: 'Bagh Lagwao Orchard Service', desc: 'Complete turn-key fruit orchard planting service for 1-Kanal to 100+ Acres in Punjab & Sindh.' },
  fruit:     { emoji: '🍊', title: 'Fruit Trees & Grafted Saplings', desc: 'Grafted Chaunsa Mango, China Guava, Kinnu Citrus, Kandhari Anar, Ber, and sweet fruit trees.' },
  palms:     { emoji: '🌴', title: 'Royal Palms & Estate Specimens', desc: '25ft Mature Royal Date Palms, Washingtonia, Foxtail, and landmark estate palms.' },
  indoor:    { emoji: '🪴', title: 'Indoor Air-Purifying Sanctuary', desc: 'Monstera Deliciosa, Ficus Lyrata, Sansevieria Snake Plant, Areca Palm, and air cleaners.' },
  outdoor:   { emoji: '🌲', title: 'Timber & Shade Canopy Trees', desc: 'Teak Wood Sagaun, Sheesham, Neem, Moringa, and Pink Cassia Nodosa trees.' },
  flowering: { emoji: '🌸', title: 'Flowers, Fragrant Motia & Climbers', desc: 'Pakistani Motia Jasmine, fiery Bougainvillea climbers, Desi Gulab, and Champa.' },
  bonsai:    { emoji: '🎋', title: 'Exotic Bonsai & Living Sculpture', desc: '20-Year Master Japanese Juniper Bonsai and 15-Year Sculpted Ancient Italian Olive trees.' },
  medicinal: { emoji: '🌿', title: 'Medicinal & Herbal Garden', desc: 'Pure Aloe Vera gel plants, Neem, Tulsi, and traditional Pakistani medicinal flora.' },
  supplies:  { emoji: '🌾', title: 'Lawn Grass & Organic Fertilizers', desc: 'Zoysia Lawn Grass, Fine Bermuda Turf, Leaf Mold compost, and planter pots.' },
};

const CATEGORY_COLORS = {
  orchard:    { from: '#15803D', to: '#166534', badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
  palms:      { from: '#166534', to: '#14532D', badgeBg: 'bg-green-100 text-green-900 border-green-300' },
  indoor:     { from: '#0284C7', to: '#0369A1', badgeBg: 'bg-sky-100 text-sky-900 border-sky-300' },
  outdoor:    { from: '#78350F', to: '#451A03', badgeBg: 'bg-amber-100 text-amber-900 border-amber-300' },
  fruit:      { from: '#EA580C', to: '#C2410C', badgeBg: 'bg-orange-100 text-orange-900 border-orange-300' },
  flowering:  { from: '#BE185D', to: '#9D174D', badgeBg: 'bg-pink-100 text-pink-900 border-pink-300' },
  bonsai:     { from: '#0F766E', to: '#115E59', badgeBg: 'bg-teal-100 text-teal-900 border-teal-300' },
  medicinal:  { from: '#4D7C0F', to: '#3F6212', badgeBg: 'bg-lime-100 text-lime-900 border-lime-300' },
  supplies:   { from: '#65A30D', to: '#4D7C0F', badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
};

const DIFFICULTY_COLOR = {
  'Easiest': 'bg-emerald-100 text-emerald-900 font-black',
  'Very Easy': 'bg-green-100 text-green-900 font-black',
  'Easy':    'bg-lime-100 text-lime-900 font-black',
  'Moderate':'bg-amber-100 text-amber-900 font-black',
  'Advanced':'bg-purple-100 text-purple-900 font-black',
};

export const ShopPage = ({
  onSelectPlantForInspection,
  onAddToCart,
  initialCategory = 'all',
  onCloseShopView
}) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Category items count mapping
  const categoryCounts = useMemo(() => {
    const counts = { all: PLANTS_DATA.length };
    PLANTS_DATA.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered and sorted plants list
  const filteredPlants = useMemo(() => {
    return PLANTS_DATA.filter((plant) => {
      const matchesCategory = activeCategory === 'all' || plant.category === activeCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || plant.difficulty === selectedDifficulty;
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        plant.name.toLowerCase().includes(query) ||
        (plant.description || '').toLowerCase().includes(query) ||
        (plant.latinName || '').toLowerCase().includes(query) ||
        (plant.badge || '').toLowerCase().includes(query);

      return matchesCategory && matchesDifficulty && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.pricePKR - b.pricePKR;
      if (sortBy === 'price-high') return b.pricePKR - a.pricePKR;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // Default featured order
    });
  }, [activeCategory, selectedDifficulty, searchQuery, sortBy]);

  const currentCategoryMeta = CATEGORY_META[activeCategory] || CATEGORY_META.all;

  return (
    <div className="min-h-screen pt-24 pb-20 px-3 sm:px-6 lg:px-12 bg-[#FDFBF7] text-emerald-950 pointer-events-auto">
      <div className="max-w-7xl mx-auto">

        {/* Top Header & Breadcrumb */}
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white shadow-2xl border border-amber-400/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black text-amber-300 bg-amber-950/60 border border-amber-400/40 mb-3 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL NURSERY SHOP • CHAK HASSAN ARAIN, PATTOKI HUB</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-2 leading-tight">
              {currentCategoryMeta.emoji} {currentCategoryMeta.title}
            </h1>
            <p className="text-xs sm:text-sm text-emerald-200 font-bold max-w-3xl leading-relaxed">
              {currentCategoryMeta.desc}
            </p>
          </div>

          {onCloseShopView && (
            <button
              onClick={onCloseShopView}
              className="px-5 py-2.5 rounded-full text-xs font-black bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 flex items-center gap-2 self-end md:self-auto"
            >
              <X className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          )}
        </div>

        {/* Category Pills Slider / Filter Bar */}
        <div className="mb-8 p-3 rounded-2xl bg-white border border-emerald-200 shadow-md">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {PLANT_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-800 to-emerald-900 text-white border-emerald-800 shadow-lg scale-105'
                      : 'bg-slate-50 text-emerald-950 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                    isActive ? 'bg-amber-400 text-emerald-950' : 'bg-slate-200 text-emerald-900'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search, Sort & Filter Toolbar */}
        <div className="mb-8 p-4 rounded-2xl bg-white border border-emerald-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-emerald-700 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search plant name, fruit, timber, palms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-300 text-emerald-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-black text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Controls: Difficulty & Sort */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {/* Filter by Difficulty */}
            <div className="flex items-center gap-1.5 text-xs font-black text-emerald-900">
              <Filter className="w-3.5 h-3.5 text-amber-600" />
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-300 text-emerald-950 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">All Care Levels</option>
                <option value="Easiest">Easiest Care</option>
                <option value="Very Easy">Very Easy</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate Care</option>
                <option value="Advanced">Advanced Care</option>
              </select>
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center gap-1.5 text-xs font-black text-emerald-900">
              <ArrowUpDown className="w-3.5 h-3.5 text-emerald-700" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-300 text-emerald-950 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="featured">Sort: Nursery Bestsellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Customer Rating</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs font-black text-emerald-900">
          <span>Showing <strong>{filteredPlants.length}</strong> plants matching your selection</span>
          {searchQuery && (
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); setSelectedDifficulty('all'); }}
              className="text-amber-700 hover:underline flex items-center gap-1"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredPlants.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-emerald-200 p-8 shadow-lg">
            <div className="text-5xl mb-4">🌿🔍</div>
            <h3 className="font-serif text-2xl font-black text-emerald-950 mb-2">No plants found</h3>
            <p className="text-xs text-emerald-900 font-bold max-w-md mx-auto mb-6">
              We couldn't find any plants matching "{searchQuery}". Try searching for Amrood, Mango, Kinnu, Palms, or Monstera.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); setSelectedDifficulty('all'); }}
              className="px-6 py-3 rounded-full text-xs font-black bg-emerald-700 text-white hover:bg-emerald-800 transition-all shadow-md"
            >
              Show All 50+ Plants
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredPlants.map((plant) => {
              const catColor = CATEGORY_COLORS[plant.category] || CATEGORY_COLORS.indoor;
              const diffClass = DIFFICULTY_COLOR[plant.difficulty] || 'bg-gray-100 text-gray-800';

              return (
                <div
                  key={plant.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-emerald-200/90 flex flex-col justify-between hover:shadow-2xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-1.5 group"
                >
                  {/* Card Header Strip with Gradient & Price */}
                  <div>
                    <div
                      className="px-5 py-4 flex items-center justify-between text-white"
                      style={{ background: `linear-gradient(135deg, ${catColor.from}, ${catColor.to})` }}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">🌱</span>
                        <div>
                          <div className="text-[9px] uppercase tracking-widest text-amber-300 font-black">
                            {plant.category.toUpperCase()}
                          </div>
                          <div className="text-[10px] font-black text-white/90 flex items-center gap-1">
                            {[...Array(Math.round(plant.rating))].map((_, i) => (
                              <Star key={i} className="w-2.5 h-2.5 fill-amber-300 text-amber-300" />
                            ))}
                            <span className="ml-0.5">{plant.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-serif text-xl font-black text-white leading-tight">
                          PKR {plant.pricePKR.toLocaleString()}
                        </div>
                        <div className="text-[9px] text-amber-200 font-black">
                          {plant.pricePKR >= 30000 ? 'LUXURY SPECIMEN' : plant.pricePKR >= 5000 ? 'PREMIUM' : 'BEST VALUE'}
                        </div>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5">
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-[10px] font-black uppercase tracking-wide border border-emerald-200 mb-2.5">
                        {plant.badge}
                      </span>

                      <h3 className="font-serif text-lg font-black text-emerald-950 mb-0.5 leading-snug group-hover:text-emerald-700 transition-colors">
                        {plant.name}
                      </h3>
                      <p className="text-[11px] italic text-slate-500 font-bold mb-3">{plant.latinName}</p>

                      <p className="text-xs text-emerald-900 line-clamp-3 mb-4 leading-relaxed font-bold">
                        {plant.description}
                      </p>

                      {/* Quick specs grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4 text-[11px]">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 font-bold text-emerald-950">
                          <span className="text-amber-500">☀️</span> {plant.sunlight}
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 font-bold text-emerald-950">
                          <span className="text-blue-500">💧</span> {plant.watering}
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 font-bold text-emerald-950">
                          <span className="text-emerald-600">📏</span> {plant.height}
                        </div>
                        <div className={`rounded-xl p-2 text-[10px] ${diffClass}`}>
                          Care: {plant.difficulty}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Footer */}
                  <div className="p-5 pt-0 border-t border-slate-100 flex flex-col gap-2">
                    {/* Direct 1-Click WhatsApp Order Button */}
                    <a
                      href={generatePlantWhatsAppLink({
                        plantName: plant.name,
                        plantPrice: plant.pricePKR,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-md"
                      title="Direct 1-Click Order via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      <span>Direct WhatsApp Order (03040450065)</span>
                    </a>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onAddToCart && onAddToCart(plant)}
                        className="flex-1 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 bg-slate-100 text-emerald-950 hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 transition-colors"
                      >
                        <ShoppingCart className="w-3.5 h-3.5 text-amber-600" />
                        <span>Add to Cart</span>
                      </button>

                      <button
                        onClick={() => onSelectPlantForInspection(plant.id)}
                        className="py-2.5 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-1 text-emerald-950 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200"
                        title="Inspect plant details & growth guide"
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
        )}

      </div>
    </div>
  );
};
