import React, { useState, useMemo } from 'react';
import { Search, Eye, MessageCircle, Star, ShoppingCart, Filter, X, SlidersHorizontal, ShieldCheck, Grid, List } from 'lucide-react';
import { PLANTS_DATA, PLANT_CATEGORIES } from '../../data/plantCatalog';
import { generatePlantWhatsAppLink } from '../../utils/whatsappHelper';

const CATEGORY_ICONS = {
  all: '🌿',
  orchard: '🏡',
  fruit: '🍊',
  palms: '🌴',
  indoor: '🪴',
  outdoor: '🌲',
  flowering: '🌸',
  bonsai: '🎋',
  succulent: '🌵',
  medicinal: '🌿',
  supplies: '🌾',
};

export const ShopPage = ({
  onSelectPlantForInspection,
  onAddToCart,
  initialCategory = 'all',
  onCloseShopView,
  externalSearch = '',
  onClearExternalSearch,
}) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [plantQuantities, setPlantQuantities] = useState({});
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const getQty = (plantId) => plantQuantities[plantId] || 1;
  const setQty = (plantId, val) => {
    const newQty = Math.max(1, Math.min(999, val));
    setPlantQuantities((prev) => ({ ...prev, [plantId]: newQty }));
  };

  // Category items count mapping
  const categoryCounts = useMemo(() => {
    const counts = { all: PLANTS_DATA.length };
    PLANTS_DATA.forEach((plant) => {
      counts[plant.category] = (counts[plant.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered & Sorted Plants (externalSearch from Navbar takes priority)
  const filteredPlants = useMemo(() => {
    const query = (externalSearch || '').toLowerCase().trim();
    return PLANTS_DATA.filter((plant) => {
      const matchesCat = activeCategory === 'all' || plant.category === activeCategory;
      const matchesSearch =
        !query ||
        plant.name.toLowerCase().includes(query) ||
        (plant.description || '').toLowerCase().includes(query) ||
        (plant.latinName || '').toLowerCase().includes(query) ||
        (plant.badge || '').toLowerCase().includes(query);
      const matchesDiff = selectedDifficulty === 'all' || plant.difficulty === selectedDifficulty;
      return matchesCat && matchesSearch && matchesDiff;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.pricePKR - b.pricePKR;
      if (sortBy === 'price-high') return b.pricePKR - a.pricePKR;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [activeCategory, externalSearch, selectedDifficulty, sortBy]);

  return (
    <div className="min-h-screen bg-[#F7F8F5] text-gray-900 pt-36 pb-20 px-3 sm:px-6 lg:px-12 pointer-events-auto">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="mb-6 p-6 sm:p-8 rounded-2xl bg-gray-900 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black text-amber-300 bg-gray-800 border border-gray-700 mb-3 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>CERTIFIED BOTANICAL STOREFRONT • PAKISTAN HUB</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-black text-white mb-1 leading-tight">
              Official Nursery Store
            </h1>
            <p className="text-sm text-gray-400 font-medium max-w-2xl">
              Browse 100+ certified Pakistani plants — Chaunsa Mango, China Guava, Royal Date Palms, and indoor foliage directly from our farm.
            </p>
          </div>
          {onCloseShopView && (
            <button
              onClick={onCloseShopView}
              className="px-5 py-2.5 rounded-full text-xs font-black bg-white/10 hover:bg-white/20 text-white transition border border-white/20 flex items-center gap-2 self-end md:self-auto"
            >
              <X className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          )}
        </div>

        {/* E-COMMERCE LAYOUT: Left Category Sidebar + Right Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">

          {/* LEFT SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-1 bg-white rounded-2xl p-5 border border-gray-200 shadow-sm sticky top-36 space-y-5">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="font-black text-sm text-gray-900 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-green-700" />
                <span>Categories</span>
              </h3>
              <span className="text-[11px] font-black text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                {PLANTS_DATA.length} Items
              </span>
            </div>

            {/* Category Navigation */}
            <div className="space-y-1 max-h-[55vh] overflow-y-auto pr-1">
              {PLANT_CATEGORIES.map((cat) => {
                const count = categoryCounts[cat.id] || 0;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
                      isActive
                        ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{CATEGORY_ICONS[cat.id] || '🌿'}</span>
                      <span className="truncate max-w-[120px]">{cat.label.replace(/^.+?\s—\s/, '').replace(/^.+?\s/, '')}</span>
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                      isActive ? 'bg-amber-400 text-gray-900' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Care Level Filter */}
            <div className="pt-3 border-t border-gray-100">
              <label className="text-[11px] font-black text-gray-700 block mb-2 uppercase tracking-wide">
                Filter by Care Level:
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-xs bg-gray-50 border border-gray-300 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="all">All Care Levels</option>
                <option value="Easiest">Easiest Care</option>
                <option value="Very Easy">Very Easy</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate Care</option>
                <option value="Advanced">Advanced Care</option>
              </select>
            </div>

            <div className="p-3 rounded-xl bg-green-50 border border-green-200 text-[11px] text-green-800 font-medium">
              <span className="font-black block text-green-900 mb-0.5">💬 Direct WhatsApp Order</span>
              Set quantity on any card and tap "WhatsApp Order" to chat with Ansar Hussain (03040450065).

            </div>

          </aside>

          {/* RIGHT MAIN PANEL: Search Toolbar & Product Grid */}
          <main className="lg:col-span-3 space-y-6">

            {/* Toolbar: Active Search Badge + Sort + View Toggle + Mobile Filter */}
            <div className="p-3 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
              
              {/* Left: Active search indicator or count */}
              <div className="flex items-center gap-2">
                {externalSearch ? (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-xs font-black text-amber-800">
                    <Search className="w-3 h-3 text-amber-600" />
                    <span>Search: "{externalSearch}"</span>
                    <button
                      onClick={() => { if (onClearExternalSearch) onClearExternalSearch(); }}
                      className="ml-1 text-amber-500 hover:text-amber-800 font-black"
                    >✕</button>
                  </div>
                ) : (
                  <span className="text-xs font-black text-emerald-900">
                    <strong>{filteredPlants.length}</strong> Products
                  </span>
                )}
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                  className="lg:hidden px-3.5 py-2 rounded-xl bg-emerald-800 text-white text-xs font-black flex items-center gap-1.5"
                >
                  <Filter className="w-3.5 h-3.5" />
                  <span>Categories</span>
                </button>

                {/* View Mode Toggle */}
                <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white text-emerald-950 shadow-sm' : 'text-slate-400'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white text-emerald-950 shadow-sm' : 'text-slate-400'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-300 text-emerald-950 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="featured">Bestsellers</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name: A–Z</option>
                </select>
              </div>
            </div>

            {/* Mobile Categories Collapsible Drawer */}
            {isMobileFilterOpen && (
              <div className="lg:hidden p-4 rounded-3xl bg-white border border-emerald-200 shadow-xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h4 className="font-serif text-sm font-black text-emerald-950">Select Category</h4>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="text-xs font-black text-slate-400">✕ Close</button>
                </div>
                <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                  {PLANT_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`p-2.5 rounded-xl text-xs font-black text-left border ${
                        activeCategory === cat.id
                          ? 'bg-emerald-800 text-white border-emerald-900'
                          : 'bg-slate-50 text-emerald-950 border-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results Counter */}
            <div className="flex items-center justify-between text-xs font-black text-emerald-900 px-1">
              <span>Showing <strong>{filteredPlants.length}</strong> products</span>
              {(searchQuery || activeCategory !== 'all' || selectedDifficulty !== 'all') && (
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); setSelectedDifficulty('all'); }}
                  className="text-amber-700 hover:underline font-extrabold"
                >
                  Reset All Filters
                </button>
              )}
            </div>

            {/* Product Cards Grid OR List View */}
            {filteredPlants.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-md">
                <div className="text-5xl mb-3">🌱</div>
                <h3 className="font-serif text-xl font-black text-emerald-950 mb-1">No matching plants found</h3>
                <p className="text-xs text-slate-500 font-bold mb-4">Try adjusting your search query or reset category filters.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); setSelectedDifficulty('all'); }}
                  className="px-6 py-2.5 rounded-full text-xs font-black bg-emerald-800 text-white hover:bg-emerald-900 transition-all shadow-md"
                >
                  Show All Products
                </button>
              </div>
            ) : viewMode === 'list' ? (
              /* COMPACT TABLE/LIST VIEW FOR SUPER FAST BROWSING */
              <div className="bg-white rounded-3xl overflow-hidden border border-emerald-200 shadow-lg divide-y divide-slate-100">
                {filteredPlants.map((plant) => (
                  <div key={plant.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{CATEGORY_ICONS[plant.category] || '🌱'}</span>
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-900 text-[10px] font-black uppercase border border-emerald-200 mb-1">
                          {plant.badge}
                        </span>
                        <h4 className="font-serif text-base font-black text-emerald-950 leading-tight">
                          {plant.name}
                        </h4>
                        <p className="text-[11px] italic text-slate-500 font-bold">{plant.latinName}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 justify-between sm:justify-end">
                      <div className="text-right">
                        <div className="font-serif text-lg font-black text-emerald-900">
                          PKR {plant.pricePKR.toLocaleString()}
                        </div>
                        <div className="text-[10px] text-slate-500 font-bold">Care: {plant.difficulty}</div>
                      </div>

                      {/* Quantity + Buttons */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                          <button onClick={() => setQty(plant.id, getQty(plant.id) - 1)} className="w-6 h-6 rounded bg-white font-black text-xs">-</button>
                          <span className="w-5 text-center text-xs font-black">{getQty(plant.id)}</span>
                          <button onClick={() => setQty(plant.id, getQty(plant.id) + 1)} className="w-6 h-6 rounded bg-white font-black text-xs">+</button>
                        </div>

                        <button
                          onClick={() => onAddToCart && onAddToCart(plant, getQty(plant.id))}
                          className="px-3 py-2 rounded-xl text-xs font-black bg-slate-100 text-emerald-950 hover:bg-emerald-50 border border-slate-300"
                          title="Add to Cart"
                        >
                          <ShoppingCart className="w-3.5 h-3.5 text-amber-600" />
                        </button>

                        <a
                          href={generatePlantWhatsAppLink({ plantName: plant.name, plantPrice: plant.pricePKR, quantity: getQty(plant.id) })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 rounded-xl text-xs font-black bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* GRID VIEW */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredPlants.map((plant) => (
                  <div
                    key={plant.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all flex flex-col justify-between"
                  >
                    {/* Card Top: Category + Price */}
                    <div>
                      <div className="px-4 py-3 flex items-center justify-between bg-gray-900 text-white">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{CATEGORY_ICONS[plant.category] || '🌱'}</span>
                          <div>
                            <div className="text-[9px] uppercase tracking-widest text-amber-400 font-black">
                              {plant.category.toUpperCase()}
                            </div>
                            <div className="text-[10px] font-bold text-white/80 flex items-center gap-1">
                              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                              <span>{plant.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-serif text-lg font-black text-white leading-tight">
                            PKR {plant.pricePKR.toLocaleString()}
                          </div>
                          <div className="text-[9px] text-amber-300 font-bold">
                            {plant.pricePKR >= 30000 ? 'SPECIMEN' : plant.pricePKR >= 5000 ? 'PREMIUM' : 'CERTIFIED'}
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-4">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-green-50 text-green-800 text-[10px] font-black uppercase tracking-wide border border-green-200 mb-2">
                          {plant.badge}
                        </span>

                        <h3 className="font-serif text-base font-black text-gray-900 mb-0.5 leading-snug">
                          {plant.name}
                        </h3>
                        <p className="text-[11px] italic text-gray-400 font-medium mb-2">{plant.latinName}</p>

                        <p className="text-xs text-gray-600 line-clamp-3 mb-3 leading-relaxed font-medium">
                          {plant.description}
                        </p>

                        {/* Specs grid */}
                        <div className="grid grid-cols-2 gap-1.5 mb-1 text-[11px] font-medium text-gray-700">
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-1.5">
                            <span>☀️</span> {plant.sunlight}
                          </div>
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-1.5">
                            <span>💧</span> {plant.watering}
                          </div>
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-1.5">
                            <span>📏</span> {plant.height}
                          </div>
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-1.5">
                            Care: {plant.difficulty}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="p-4 pt-0 border-t border-gray-100 flex flex-col gap-2">
                      
                      {/* Quantity Selector */}
                      <div className="flex items-center justify-between bg-gray-50 border border-gray-200 px-3 py-2 rounded-xl">
                        <span className="text-[11px] font-black text-gray-700 uppercase tracking-wide">
                          Quantity:
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setQty(plant.id, getQty(plant.id) - 1)}
                            className="w-7 h-7 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-xs font-black text-gray-900 hover:bg-gray-100 transition"
                          >
                            -
                          </button>
                          <span className="w-7 text-center text-xs font-black text-gray-900">
                            {getQty(plant.id)}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(plant.id, getQty(plant.id) + 1)}
                            className="w-7 h-7 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-xs font-black text-gray-900 hover:bg-gray-100 transition"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* WhatsApp Order */}
                      <a
                        href={generatePlantWhatsAppLink({
                          plantName: plant.name,
                          plantPrice: plant.pricePKR,
                          quantity: getQty(plant.id),
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 bg-green-700 text-white hover:bg-green-800 transition shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                        <span>WhatsApp Order ({getQty(plant.id)} Unit{getQty(plant.id) > 1 ? 's' : ''})</span>
                      </a>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onAddToCart && onAddToCart(plant, getQty(plant.id))}
                          className="flex-1 py-2 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200 transition"
                        >
                          <ShoppingCart className="w-3.5 h-3.5 text-amber-600" />
                          <span>Add {getQty(plant.id)} to Cart</span>
                        </button>

                        <button
                          onClick={() => onSelectPlantForInspection(plant.id)}
                          className="py-2 px-3.5 rounded-xl text-xs font-black flex items-center justify-center gap-1 text-gray-700 bg-gray-100 hover:bg-gray-200 transition border border-gray-200"
                        >
                          <Eye className="w-3.5 h-3.5 text-green-700" />
                          <span>Details</span>
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
};
