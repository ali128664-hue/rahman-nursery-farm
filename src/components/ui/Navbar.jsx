import React from 'react';
import { ShoppingCart, Leaf, MessageCircle, MapPin, Store, TreePine } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const Navbar = ({
  onOpenCatalog,
  onOpenContact,
  cartCount = 0,
  onOpenCart,
  onToggleShopPage,
  isFullShopView = false,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 py-3 md:px-8 md:py-4 pointer-events-auto">
      <nav className="max-w-7xl mx-auto rounded-full px-4 py-2.5 md:px-6 md:py-3 flex items-center justify-between border border-emerald-500/25 shadow-2xl bg-white/95 backdrop-blur-xl">

        {/* Brand Logo & Name */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => {
            if (isFullShopView && onToggleShopPage) onToggleShopPage();
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

        {/* Main Product Navigation Headings */}
        <div className="hidden lg:flex items-center gap-5 text-xs font-black text-emerald-950">
          <button
            onClick={() => {
              if (onToggleShopPage) onToggleShopPage();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all border shadow-sm ${
              isFullShopView
                ? 'bg-emerald-800 text-white border-emerald-900 shadow-md'
                : 'bg-emerald-50 text-emerald-950 border-emerald-300 hover:bg-emerald-100'
            }`}
          >
            <Store className="w-4 h-4 text-amber-500" />
            <span>Dedicated Shop</span>
          </button>

          <button
            onClick={onOpenCatalog}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-emerald-950 hover:bg-slate-200 transition-all border border-slate-200"
          >
            <Leaf className="w-4 h-4 text-emerald-700" />
            <span>A-Z Plant Catalog</span>
          </button>

          <a
            href="#orchard"
            onClick={(e) => {
              e.preventDefault();
              if (isFullShopView && onToggleShopPage) onToggleShopPage();
              setTimeout(() => {
                document.querySelector('#orchard')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-emerald-700 transition-colors font-black flex items-center gap-1 px-3 py-2"
          >
            <TreePine className="w-4 h-4 text-emerald-700" />
            <span>Bagh Lagwao</span>
          </a>

          <button
            onClick={onOpenContact}
            className="hover:text-emerald-700 transition-colors font-extrabold flex items-center gap-1.5 px-3 py-2"
          >
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>Farm Location</span>
          </button>
        </div>

        {/* Right Tools: Shopping Cart + WhatsApp */}
        <div className="flex items-center gap-2.5 md:gap-3.5">

          {/* Prominent Cart Button with Count Badge */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-800 to-emerald-900 text-white hover:from-emerald-700 hover:to-emerald-800 transition-all font-black text-xs shadow-lg hover:scale-105 border border-emerald-600"
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
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all text-xs font-black shadow-md border border-emerald-500"
            title="Direct WhatsApp Helpline"
          >
            <MessageCircle className="w-4 h-4 fill-white/20 text-white" />
            <span className="hidden sm:inline">03040450065</span>
          </a>

        </div>

      </nav>
    </header>
  );
};
