import React, { useState } from 'react';
import {
  ShoppingCart, MessageCircle, MapPin, Store, TreePine,
  Home, Users, BookOpen, Wrench, Menu, X, Search, ChevronDown
} from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

const NAV_LINKS = [
  { id: 'home',     label: 'Home',              icon: '🏠' },
  { id: 'shop',     label: 'Nursery Store',      icon: '🏬' },
  { id: 'orchard',  label: 'Bagh Packages',      icon: '🏡' },
  { id: 'services', label: 'Services',            icon: '🛠️' },
  { id: 'blog',     label: 'Blog & Guides',       icon: '📖' },
  { id: 'about',    label: '50+ Yrs Heritage',    icon: '📜' },
  { id: 'contact',  label: 'Contact Us',          icon: '📞' },
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

      {/* ── Row 1: Announcement Banner ── */}
      <div className="bg-emerald-950 text-amber-300 py-1.5 px-4 text-center text-[10px] sm:text-[11px] font-black tracking-widest uppercase border-b border-amber-400/20">
        🚚 NATIONWIDE EXPRESS DISPATCH &nbsp;•&nbsp; PAKISTAN HUB &nbsp;•&nbsp; HELPLINE: 0304-0450065
      </div>

      {/* ── Row 2: Logo + Search + Cart/WA ── */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-3 sm:gap-5">

          {/* Hamburger (mobile) */}
          <button
            className="sm:hidden p-2 rounded-xl border border-slate-200 bg-slate-50 text-emerald-900"
            onClick={() => setIsMobileMenuOpen(v => !v)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Brand Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer flex-shrink-0"
            onClick={() => handleNav('home')}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center font-serif font-black text-xl text-white border-2 border-amber-400 shadow">
              R
            </div>
            <div className="hidden sm:block">
              <div className="font-serif text-base font-black text-emerald-950 leading-tight tracking-tight">
                RAHMAN <span className="text-emerald-700">NURSERY</span>
              </div>
              <div className="text-[9px] font-black text-amber-700 uppercase tracking-widest">
                50+ YRS HERITAGE • PAKISTAN HUB
              </div>
            </div>
          </div>

          {/* ── Global Search Bar (Shopify-style centre piece) ── */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search 100+ plants, mango, date palm, lawn grass..."
                value={searchQuery}
                onChange={e => {
                  if (onSearchChange) onSearchChange(e.target.value);
                }}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 bg-slate-50 text-sm text-emerald-950 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-inner transition"
              />
              {searchQuery && (
                <button
                  onClick={() => { if (onSearchChange) onSearchChange(''); }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 font-black text-sm"
                >✕</button>
              )}
            </div>
          </div>

          {/* Cart + WhatsApp */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-emerald-900 text-white font-black text-xs shadow hover:bg-emerald-800 transition border border-emerald-700"
            >
              <ShoppingCart className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Cart</span>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black ${cartCount > 0 ? 'bg-amber-400 text-emerald-950 animate-bounce' : 'bg-emerald-800 text-white'}`}>
                {cartCount}
              </span>
            </button>

            <a
              href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Ansar Hussain (0304-0450065), I am visiting Rahman Nursery Farm website and want to place an order.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-emerald-600 text-white font-black text-xs shadow hover:bg-emerald-700 transition border border-emerald-500"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Row 3: Horizontal Page Navigation Category Strip ── */}
      <div className="hidden sm:block bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-0 overflow-x-auto scrollbar-none">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-xs font-black whitespace-nowrap border-b-2 transition-all ${
                activeTab === link.id
                  ? 'border-emerald-700 text-emerald-900 bg-emerald-50/60'
                  : 'border-transparent text-slate-700 hover:text-emerald-800 hover:bg-slate-50'
              }`}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Mobile Slide-Over Full Menu ── */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-50 flex">
          <div className="bg-white w-72 h-full shadow-2xl flex flex-col">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div className="font-serif text-base font-black text-emerald-950">Navigation</div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full bg-slate-100">
                <X className="w-4 h-4 text-slate-700" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-black flex items-center gap-3 transition ${
                    activeTab === link.id
                      ? 'bg-emerald-900 text-white'
                      : 'bg-slate-50 text-emerald-950 hover:bg-emerald-50'
                  }`}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
            <div className="p-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-emerald-700 text-white font-black text-sm shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>WhatsApp: 0304-0450065</span>
              </a>
            </div>
          </div>
          <div className="flex-1 bg-black/40" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}

    </header>
  );
};
