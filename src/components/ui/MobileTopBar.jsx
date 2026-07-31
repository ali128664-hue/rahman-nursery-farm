import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, Search, X } from 'lucide-react';

export const MobileTopBar = ({
  cartCount = 0,
  onOpenCart,
  onOpenWhatsAppModal,
  searchQuery = '',
  onSearchChange,
  activeTab,
}) => {
  const [showSearch, setShowSearch] = useState(false);

  const PAGE_TITLES = {
    home:     { title: 'Rahman Nursery Farm', sub: 'Pakistan\'s Premier Plant Hub' },
    shop:     { title: 'Nursery Store',        sub: '100+ Certified Plants' },
    orchard:  { title: 'Bagh Packages',        sub: 'Commercial Orchard Installation' },
    services: { title: 'Our Services',         sub: 'Expert Horticulture Teams' },
    contact:  { title: 'Contact Us',           sub: 'Chak Hassan Arain, Arifwala' },
    blog:     { title: 'Blog & Guides',        sub: 'Gardening Knowledge Hub' },
    about:    { title: 'Our Heritage',         sub: '50+ Years Baba Shareef Legacy' },
  };

  const current = PAGE_TITLES[activeTab] || PAGE_TITLES.home;

  return (
    <div
      className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white"
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      }}
    >
      {/* Thin top accent bar */}
      <div className="h-0.5 bg-gradient-to-r from-green-700 via-amber-400 to-green-700" />

      {showSearch ? (
        /* ── Search Mode ── */
        <div className="flex items-center gap-2 px-3 py-2.5">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              autoFocus
              type="text"
              placeholder="Search plants, fruits, palms..."
              value={searchQuery}
              onChange={e => { if (onSearchChange) onSearchChange(e.target.value); }}
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <button
            onClick={() => { setShowSearch(false); if (onSearchChange) onSearchChange(''); }}
            className="p-2.5 rounded-full bg-gray-100 text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* ── Normal Mode ── */
        <div className="flex items-center px-4 py-2.5 gap-3">
          {/* Logo + Title */}
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-9 w-9 object-contain flex-shrink-0 rounded-xl bg-white p-0.5 border border-gray-100 shadow-sm"
            />
            <div className="min-w-0">
              <div className="text-sm font-black text-gray-900 leading-tight truncate">
                {current.title}
              </div>
              <div className="text-[10px] font-bold text-green-700 leading-tight truncate">
                {current.sub}
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Search toggle */}
            <button
              onClick={() => setShowSearch(true)}
              className="p-2.5 rounded-full bg-gray-100 text-gray-600 min-h-[40px] min-w-[40px] flex items-center justify-center"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Cart */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-gray-100 text-gray-700 min-h-[40px] min-w-[40px] flex items-center justify-center"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-amber-500 text-white text-[9px] font-black flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>

            {/* WhatsApp */}
            <button
              onClick={() => onOpenWhatsAppModal && onOpenWhatsAppModal('Assalam o Alaikum! Main Rahman Nursery Farm se rabta karna chahta hun.')}
              className="p-2.5 rounded-full bg-green-700 text-white min-h-[40px] min-w-[40px] flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
