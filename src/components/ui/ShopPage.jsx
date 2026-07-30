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
  onCloseShopView
}) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [plantQuantities, setPlantQuantities] = useState({});
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  // Filtered & Sorted Plants
  const filteredPlants = useMemo(() => {
    return PLANTS_DATA.filter((plant) => {
      const matchesCat = activeCategory === 'all' || plant.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
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
  }, [activeCategory, searchQuery, selectedDifficulty, sortBy]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-emerald-950 pt-24 pb-20 px-3 sm:px-6 lg:px-12 pointer-events-auto">
      <div className="max-w-7xl mx-auto">

        {/* Top Shopify-Style Banner Header */}
        <div className="mb-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white shadow-2xl border border-amber-400/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black text-amber-300 bg-amber-950/80 border border-amber-400/40 mb-3 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>SHOPIFY BOTANICAL STOREFRONT • PAKISTAN HUB</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-2 leading-tight">
              Official Nursery Store
            </h1>
            <p className="text-xs sm:text-sm text-emerald-200 font-bold max-w-2xl leading-relaxed">
              Browse 100+ certified Pakistani plant varieties, Chaunsa Mango, China Guava, Royal Date Palms, and indoor foliage directly from our fields.
            </p>
          </div>

          {onCloseShopView && (
            <button
              onClick={onCloseShopView}
              className="px-5 py-2.5 rounded-full text-xs font-black bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 flex items-center gap-2 self-end md:self-auto shadow-sm"
            >
              <X className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          )}
        </div>

        {/* E-COMMERCE LAYOUT: Left Category Sidebar + Right Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

          {/* LEFT SIDEBAR: Professional Category List */}
          <aside className="hidden lg:block lg:col-span-1 bg-white rounded-3xl p-6 border border-emerald-200 shadow-xl sticky top-24 space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-serif text-base font-black text-emerald-950 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-emerald-700" />
                <span>Categories</span>
              </h3>
              <span className="text-[11px] font-black text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                {PLANTS_DATA.length} Items
              </span>
            </div>

            {/* Category Navigation List */}
            <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
              {PLANT_CATEGORIES.map((cat) => {
                const count = categoryCounts[cat.id] || 0;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full px-3.5 py-3 rounded-2xl text-xs font-black transition-all flex items-center justify-between border ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-800 to-emerald-900 text-white border-emerald-900 shadow-md scale-[1.02]'
                        : 'bg-slate-50 text-emerald-950 border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{CATEGORY_ICONS[cat.id] || '🌿'}</span>
                      <span className="truncate max-w-[130px]">{cat.label.replace(/^.+?\s—\s/, '').replace(/^.+?\s/, '')}</span>
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                      isActive ? 'bg-amber-400 text-emerald-950' : 'bg-slate-200 text-emerald-900'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Care Level Filter */}
            <div className="pt-4 border-t border-slate-100">
              <label className="text-xs font-black text-emerald-950 block mb-2 uppercase tracking-wide">
                Filter by Care Level:
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-300 text-emerald-950 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option value="all">All Care Levels</option>
                <option value="Easiest">Easiest Care</option>
                <option value="Very Easy">Very Easy</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate Care</option>
                <option value="Advanced">Advanced Care</option>
              </select>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-[11px] leading-relaxed font-bold">
              <span className="font-black block text-emerald-900 mb-1">🌿 Fast Direct Order</span>
              Select quantity on any product card and click WhatsApp Order to chat directly with Ansar Hussain (03040450065)!
            </div>

          </aside>

          {/* RIGHT MAIN PANEL: Search Toolbar & Product Grid */}
          <main className="lg:col-span-3 space-y-6">

            {/* Search Bar Toolbar & Pop-open Search Input */}
            <div className="p-4 rounded-3xl bg-white border border-emerald-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Click-to-Open Search Trigger OR Input */}
              {isSearchOpen ? (
                <div className="relative w-full sm:w-96 flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-emerald-700 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      autoFocus
                      placeholder="Type plant, fruit, or palm name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-8 py-2.5 rounded-2xl text-xs bg-slate-50 border border-emerald-500 text-emerald-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-bold shadow-inner"
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
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="px-3 py-2.5 rounded-2xl text-xs font-black bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-emerald-50 text-emerald-950 hover:bg-emerald-100 border border-emerald-300 transition-all font-black text-xs flex items-center justify-center sm:justify-start gap-2 shadow-sm"
                >
                  <Search className="w-4 h-4 text-emerald-700" />
                  <span>Search Plants (Click to Open)</span>
                  {searchQuery && <span className="px-2 py-0.5 rounded-full bg-amber-400 text-emerald-950 text-[10px]">Active</span>}
                </button>
              )}

              {/* Controls: Sort, View Toggle, Mobile Filter */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
                <button
                  onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                  className="lg:hidden px-3.5 py-2.5 rounded-2xl bg-emerald-800 text-white text-xs font-black flex items-center gap-1.5 shadow-sm"
                >
                  <Filter className="w-4 h-4" />
                  <span>Categories</span>
                </button>

                {/* View Mode Toggle (Grid vs List) */}
                <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-xl text-xs font-black transition-all ${
                      viewMode === 'grid' ? 'bg-white text-emerald-950 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Grid View"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-xl text-xs font-black transition-all ${
                      viewMode === 'list' ? 'bg-white text-emerald-950 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="List/Table View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3.5 py-2.5 rounded-2xl text-xs bg-slate-50 border border-slate-300 text-emerald-950 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-sm"
                >
                  <option value="featured">Sort: Bestsellers</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rating</option>
                  <option value="name">Name: A to Z</option>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlants.map((plant) => (
                  <div
                    key={plant.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-md border border-emerald-200 flex flex-col justify-between"
                  >
                    {/* Card Header Strip */}
                    <div>
                      <div className="px-5 py-4 flex items-center justify-between bg-gradient-to-r from-emerald-900 to-emerald-950 text-white">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{CATEGORY_ICONS[plant.category] || '🌱'}</span>
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
                          <div className="font-serif text-xl font-black text-white leading-tight">
                            PKR {plant.pricePKR.toLocaleString()}
                          </div>
                          <div className="text-[9px] text-amber-200 font-black">
                            {plant.pricePKR >= 30000 ? 'SPECIMEN' : plant.pricePKR >= 5000 ? 'PREMIUM' : 'CERTIFIED'}
                          </div>
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-5">
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-[10px] font-black uppercase tracking-wide border border-emerald-200 mb-2.5">
                          {plant.badge}
                        </span>

                        <h3 className="font-serif text-lg font-black text-emerald-950 mb-0.5 leading-snug">
                          {plant.name}
                        </h3>
                        <p className="text-[11px] italic text-slate-500 font-bold mb-3">{plant.latinName}</p>

                        <p className="text-xs text-emerald-900 line-clamp-3 mb-4 leading-relaxed font-bold">
                          {plant.description}
                        </p>

                        {/* Specs grid */}
                        <div className="grid grid-cols-2 gap-2 mb-2 text-[11px] font-bold text-emerald-950">
                          <div className="bg-slate-50 border border-slate-200 rounded-xl p-2">
                            <span className="text-amber-500">☀️</span> {plant.sunlight}
                          </div>
                          <div className="bg-slate-50 border border-slate-200 rounded-xl p-2">
                            <span className="text-blue-500">💧</span> {plant.watering}
                          </div>
                          <div className="bg-slate-50 border border-slate-200 rounded-xl p-2">
                            <span className="text-emerald-600">📏</span> {plant.height}
                          </div>
                          <div className="bg-slate-50 border border-slate-200 rounded-xl p-2">
                            Care: {plant.difficulty}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Controls Footer */}
                    <div className="p-5 pt-0 border-t border-slate-100 flex flex-col gap-2.5">
                      
                      {/* Quantity Selector Control */}
                      <div className="flex items-center justify-between bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl">
                        <span className="text-[11px] font-black text-emerald-950 uppercase tracking-wide">
                          Select Quantity:
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setQty(plant.id, getQty(plant.id) - 1)}
                            className="w-7 h-7 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-xs font-black text-emerald-950 hover:bg-slate-200 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-xs font-black text-emerald-950">
                            {getQty(plant.id)}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(plant.id, getQty(plant.id) + 1)}
                            className="w-7 h-7 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-xs font-black text-emerald-950 hover:bg-slate-200 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Direct WhatsApp Order Button */}
                      <a
                        href={generatePlantWhatsAppLink({
                          plantName: plant.name,
                          plantPrice: plant.pricePKR,
                          quantity: getQty(plant.id),
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-md"
                      >
                        <MessageCircle className="w-4 h-4 fill-white/20" />
                        <span>WhatsApp Order ({getQty(plant.id)} Unit{getQty(plant.id) > 1 ? 's' : ''})</span>
                      </a>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onAddToCart && onAddToCart(plant, getQty(plant.id))}
                          className="flex-1 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 bg-slate-100 text-emerald-950 hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 transition-colors"
                        >
                          <ShoppingCart className="w-3.5 h-3.5 text-amber-600" />
                          <span>Add {getQty(plant.id)} to Cart</span>
                        </button>

                        <button
                          onClick={() => onSelectPlantForInspection(plant.id)}
                          className="py-2.5 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-1 text-emerald-950 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200"
                        >
                          <Eye className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Inspect</span>
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
