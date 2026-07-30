import React from 'react';
import { ShoppingCart, MessageCircle, MapPin, Store, TreePine, Home, Users, BookOpen, Wrench } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const Navbar = ({
  activeTab = 'home',
  onTabChange,
  cartCount = 0,
  onOpenCart,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 pointer-events-auto">
      {/* Top Shopify Announcement Bar */}
      <div className="bg-emerald-950 text-amber-300 py-1.5 px-4 text-center text-[10px] sm:text-xs font-black tracking-widest uppercase border-b border-amber-400/30 flex items-center justify-center gap-2 shadow-md">
        <span>🚚 NATIONWIDE CARGO DISPATCH • CHAK HASSAN ARAIN, PAKISTAN HUB</span>
        <span className="hidden md:inline">• HELPLINE: 0304-0450065</span>
      </div>

      <div className="px-3 py-2 md:px-8 md:py-2.5">
        <nav className="max-w-7xl mx-auto rounded-full px-4 py-2 md:px-6 md:py-2.5 flex items-center justify-between border border-emerald-500/25 shadow-2xl bg-white/95 backdrop-blur-xl">

          {/* Brand Logo & Name */}
          <div
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => {
              if (onTabChange) onTabChange('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-950 text-white flex items-center justify-center font-serif font-black text-xl shadow-lg border-2 border-amber-400 group-hover:scale-105 transition-transform">
              R
            </div>
            <div>
              <span className="font-serif text-base md:text-lg font-black tracking-tight text-emerald-950 block leading-tight">
                RAHMAN <span className="text-emerald-700">NURSERY</span>
              </span>
              <span className="text-[10px] tracking-widest text-amber-700 uppercase font-black block flex items-center gap-1">
                <span>50+ YEARS HERITAGE</span>
                <span className="w-1 h-1 rounded-full bg-emerald-600 inline-block" />
                <span>PAKISTAN HUB</span>
              </span>
            </div>
          </div>

          {/* Main Multi-Page Navigation Headings */}
          <div className="hidden xl:flex items-center gap-1 text-xs font-black text-emerald-950">
            
            <button
              onClick={() => {
                if (onTabChange) onTabChange('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all border ${
                activeTab === 'home'
                  ? 'bg-emerald-900 text-white border-emerald-900 shadow-md font-black'
                  : 'bg-transparent text-emerald-950 border-transparent hover:bg-emerald-50'
              }`}
            >
              <Home className="w-3.5 h-3.5 text-amber-500" />
              <span>Home</span>
            </button>

            <button
              onClick={() => {
                if (onTabChange) onTabChange('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all border ${
                activeTab === 'shop'
                  ? 'bg-emerald-900 text-white border-emerald-900 shadow-md font-black'
                  : 'bg-emerald-50 text-emerald-950 border-emerald-300 hover:bg-emerald-100'
              }`}
            >
              <Store className="w-3.5 h-3.5 text-amber-500" />
              <span>Nursery Store</span>
            </button>

            <button
              onClick={() => {
                if (onTabChange) onTabChange('orchard');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all border ${
                activeTab === 'orchard'
                  ? 'bg-emerald-900 text-white border-emerald-900 shadow-md font-black'
                  : 'bg-transparent text-emerald-950 border-transparent hover:bg-emerald-50'
              }`}
            >
              <TreePine className="w-3.5 h-3.5 text-emerald-700" />
              <span>Bagh Packages</span>
            </button>

            <button
              onClick={() => {
                if (onTabChange) onTabChange('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all border ${
                activeTab === 'services'
                  ? 'bg-emerald-900 text-white border-emerald-900 shadow-md font-black'
                  : 'bg-transparent text-emerald-950 border-transparent hover:bg-emerald-50'
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-emerald-700" />
              <span>Services</span>
            </button>

            <button
              onClick={() => {
                if (onTabChange) onTabChange('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all border ${
                activeTab === 'blog'
                  ? 'bg-emerald-900 text-white border-emerald-900 shadow-md font-black'
                  : 'bg-transparent text-emerald-950 border-transparent hover:bg-emerald-50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Blog & Guides</span>
            </button>

            <button
              onClick={() => {
                if (onTabChange) onTabChange('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all border ${
                activeTab === 'about'
                  ? 'bg-emerald-900 text-white border-emerald-900 shadow-md font-black'
                  : 'bg-transparent text-emerald-950 border-transparent hover:bg-emerald-50'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-emerald-700" />
              <span>50+ Yrs Heritage</span>
            </button>

            <button
              onClick={() => {
                if (onTabChange) onTabChange('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all border ${
                activeTab === 'contact'
                  ? 'bg-emerald-900 text-white border-emerald-900 shadow-md font-black'
                  : 'bg-transparent text-emerald-950 border-transparent hover:bg-emerald-50'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Contact Us</span>
            </button>

          </div>

          {/* Right Tools: Shopping Cart + WhatsApp */}
          <div className="flex items-center gap-2 md:gap-3">

            {/* Mobile Store Button */}
            <button
              onClick={() => {
                if (onTabChange) onTabChange('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="xl:hidden p-2 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950"
              title="Open Store"
            >
              <Store className="w-4 h-4 text-emerald-800" />
            </button>

            {/* Prominent Cart Button with Count Badge */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-emerald-800 to-emerald-900 text-white hover:from-emerald-700 hover:to-emerald-800 transition-all font-black text-xs shadow-lg hover:scale-105 border border-emerald-600"
              title="Open Shopping Cart"
            >
              <ShoppingCart className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 ? (
                <span className="w-5 h-5 rounded-full bg-amber-400 text-emerald-950 font-black text-[11px] flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              ) : (
                <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-300 font-bold text-[10px] flex items-center justify-center">
                  0
                </span>
              )}
            </button>

            {/* Direct WhatsApp Contact Button */}
            <a
              href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('Assalam o Alaikum Ansar Bhai (03040450065), I am visiting Rahman Nursery Farm website and would like to order plants!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all text-xs font-black shadow-md border border-emerald-500"
              title="Direct WhatsApp Helpline"
            >
              <MessageCircle className="w-4 h-4 fill-white/20 text-white" />
              <span className="hidden sm:inline">03040450065</span>
            </a>

          </div>

        </nav>
      </div>
    </header>
  );
};
