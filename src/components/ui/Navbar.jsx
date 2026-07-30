import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, MapPin, Store, TreePine, Home, Users, BookOpen, Wrench, Menu, X, Search } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

const NAV_LINKS = [
  { id: 'home',     label: 'Home',           icon: '🏠' },
  { id: 'shop',     label: 'Nursery Store',   icon: '🌿' },
  { id: 'orchard',  label: 'Bagh Packages',   icon: '🏡' },
  { id: 'services', label: 'Services',         icon: '🛠️' },
  { id: 'blog',     label: 'Blog & Guides',    icon: '📖' },
  { id: 'about',    label: '50+ Yrs Heritage', icon: '📜' },
  { id: 'contact',  label: 'Contact Us',       icon: '📞' },
];

export const Navbar = ({
  activeTab = 'home',
  onTabChange,
  cartCount = 0,
  onOpenCart,
  searchQuery = '',
  onSearchChange,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (tab) => {
    if (onTabChange) onTabChange(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-auto">

      {/* ── Row 1: Announcement Bar ── */}
      <div className="bg-gray-900 text-amber-300 py-1.5 px-4 text-center text-[11px] font-bold tracking-widest uppercase overflow-hidden">
        <div className="flex items-center justify-center gap-4">
          <span>🌿 RAHMAN NURSERY FARM</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">🚚 NATIONWIDE CARGO DISPATCH</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">📞 HELPLINE: 0304-0450065</span>
          <span className="hidden lg:inline">•</span>
          <span className="hidden lg:inline">📍 CHAK HASSAN ARAIN, ARIFWALA</span>
        </div>
      </div>

      {/* ── Row 2: Logo + Search + Actions ── */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-3">

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(v => !v)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Brand */}
          <div
            className="flex items-center gap-2.5 cursor-pointer flex-shrink-0"
            onClick={() => handleNav('home')}
          >
            <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center font-serif font-black text-xl text-amber-400 shadow border-2 border-amber-400">
              R
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-black text-gray-900 tracking-tight">
                RAHMAN <span className="text-green-700">NURSERY</span>
              </div>
              <div className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">
                50+ YRS HERITAGE • PAKISTAN HUB
              </div>
            </div>
          </div>

          {/* Global Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search plants, mango, date palm, roses..."
                value={searchQuery}
                onChange={e => { if (onSearchChange) onSearchChange(e.target.value); }}
                className="w-full pl-10 pr-9 py-2.5 rounded-full border border-gray-300 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => { if (onSearchChange) onSearchChange(''); }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 text-sm font-black"
                >✕</button>
              )}
            </div>
          </div>

          {/* Cart */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-gray-900 text-white font-bold text-xs shadow hover:bg-gray-800 transition flex-shrink-0"
          >
            <ShoppingCart className="w-4 h-4 text-amber-300" />
            <span className="hidden sm:inline font-black">Cart</span>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black ${cartCount > 0 ? 'bg-amber-400 text-gray-900' : 'bg-gray-700 text-gray-300'}`}>
              {cartCount}
            </span>
          </button>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Ansar Hussain (0304-0450065), I am visiting Rahman Nursery Farm website and want to place an order.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-green-700 text-white font-black text-xs shadow hover:bg-green-800 transition flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ── Row 3: Page Navigation Strip ── */}
      <div className="hidden md:block bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center overflow-x-auto scrollbar-none">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-[13px] font-bold whitespace-nowrap border-b-2 transition-all ${
                activeTab === link.id
                  ? 'border-green-700 text-green-800 bg-green-50/70'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span className="text-base">{link.icon}</span>
              <span>{link.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Mobile Slide-Over Menu ── */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="bg-white w-72 h-full shadow-2xl flex flex-col mobile-menu-enter">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <div className="font-black text-base text-gray-900">Navigation</div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full bg-gray-100">
                <X className="w-4 h-4 text-gray-700" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-3 transition ${
                    activeTab === link.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100">
              <a
                href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-700 text-white font-black text-sm shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>WhatsApp: 0304-0450065</span>
              </a>
            </div>
          </div>
          <div className="flex-1 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}

    </header>
  );
};
