import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, Menu, X, Search } from 'lucide-react';
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
  onOpenWhatsAppModal,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (tab) => {
    if (onTabChange) onTabChange(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-40 pointer-events-auto">

      {/* ── Row 1: Announcement Bar ── */}
      <div className="bg-gray-900 text-amber-300 py-1 px-3 text-center text-[10px] font-bold tracking-widest uppercase overflow-hidden">
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <span>🌿 RAHMAN NURSERY FARM</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">🚚 NATIONWIDE DISPATCH</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">📞 0304-0450065</span>
          <span className="hidden lg:inline">•</span>
          <span className="hidden lg:inline">📍 CHAK HASSAN ARAIN</span>
        </div>
      </div>

      {/* ── Row 2: Logo + Search + Actions ── */}
      <div className="bg-white border-b border-gray-200 px-3 py-2 sm:px-6 sm:py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3">

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(v => !v)}
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
            onClick={() => handleNav('home')}
          >
            <div className="h-10 sm:h-11 bg-white px-1 py-0.5 rounded-xl shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/logo.png" alt="Rahman Nursery Farm Logo" className="h-full w-auto object-contain" />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-black text-gray-900 tracking-tight">
                <span>RAHMAN</span> <span className="text-green-700">NURSERY</span>
              </div>
              <div className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">
                50+ YRS • PAKISTAN HUB
              </div>
            </div>
          </div>

          {/* Global Search */}
          <div className="flex-1 min-w-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search plants..."
                value={searchQuery}
                onChange={e => { if (onSearchChange) onSearchChange(e.target.value); }}
                className="w-full pl-9 pr-8 py-2.5 rounded-full border border-gray-300 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => { if (onSearchChange) onSearchChange(''); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 font-black"
                >✕</button>
              )}
            </div>
          </div>

          {/* Cart */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-1 px-3 py-2.5 rounded-full bg-gray-900 text-white font-bold text-xs shadow hover:bg-gray-800 transition flex-shrink-0 min-h-[44px]"
          >
            <ShoppingCart className="w-4 h-4 text-amber-300" />
            <span className="hidden sm:inline font-black">Cart</span>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black ${cartCount > 0 ? 'bg-amber-400 text-gray-900' : 'bg-gray-700 text-gray-300'}`}>
              {cartCount}
            </span>
          </button>

          {/* WhatsApp */}
          <button
            onClick={() => onOpenWhatsAppModal && onOpenWhatsAppModal('Assalam o Alaikum! Main Rahman Nursery Farm website visit kar raha hun, please guide me about plants and orders.')}
            className="flex items-center gap-1.5 px-3 py-2.5 rounded-full bg-green-700 text-white font-black text-xs shadow hover:bg-green-800 transition flex-shrink-0 min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span className="hidden lg:inline">WhatsApp</span>
          </button>
        </div>
      </div>

      {/* ── Row 3: Page Navigation Strip (desktop) ── */}
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

      {/* ── Mobile Full-Screen Slide-Over Menu ── */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="bg-white w-[280px] h-full shadow-2xl flex flex-col mobile-menu-enter">
            {/* Menu Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" className="h-9 w-auto object-contain" />
                <div className="text-sm font-black text-gray-900">RAHMAN <span className="text-green-700">NURSERY</span></div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full bg-gray-100 min-h-[40px] min-w-[40px] flex items-center justify-center"
              >
                <X className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-2xl text-sm font-bold flex items-center gap-3 transition min-h-[52px] ${
                    activeTab === link.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                  {activeTab === link.id && <span className="ml-auto text-amber-400">✓</span>}
                </button>
              ))}
            </div>

            {/* Mobile WhatsApp CTA */}
            <div className="p-4 border-t border-gray-100 space-y-2 safe-pb">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenWhatsAppModal && onOpenWhatsAppModal('Assalam o Alaikum! Main Rahman Nursery Farm website visit kar raha hun, please guide me.');
                }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-green-700 text-white font-black text-sm shadow min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>WhatsApp Order Now</span>
              </button>
              <div className="text-center text-[10px] font-bold text-gray-400">
                📞 Ansar: 0304-0450065
              </div>
            </div>
          </div>
          <div className="flex-1 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}

    </header>
  );
};
