import React from 'react';
import { MessageCircle, Phone, MapPin, ShieldCheck, Send, Map } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const Footer = ({ onNavigateTab }) => {
  return (
    <footer className="relative z-10 bg-emerald-950 text-white pt-16 pb-10 px-4 md:px-12 border-t border-amber-400/30 pointer-events-auto">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* 1. VIP Newsletter Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 border border-amber-400/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-amber-300 font-black block mb-1">
              SHOPIFY BOTANICAL VIP NEWSLETTER
            </span>
            <h3 className="font-serif text-2xl font-black text-white">
              Get Seasonal Planting & Discount Alerts
            </h3>
            <p className="text-xs text-emerald-200 font-bold mt-1">
              Join 5,000+ Pakistani gardeners & orchard owners for monthly care guides.
            </p>
          </div>

          <a
            href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('Assalam o Alaikum! I want to subscribe to Rahman Nursery Farm WhatsApp updates and seasonal plant discounts.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-amber-400 text-emerald-950 hover:bg-amber-300 font-black text-xs flex items-center gap-2 shadow-lg flex-shrink-0 transition-transform hover:scale-105"
          >
            <Send className="w-4 h-4 text-emerald-950" />
            <span>Subscribe on WhatsApp</span>
          </a>
        </div>

        {/* 2. FULL SITE MAP & LINKS (25+ YEARS E-COMMERCE SITEMAP) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-xs">

          {/* Col 1: Brand & Heritage */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-emerald-950 flex items-center justify-center font-serif font-black text-xl shadow-lg">
                R
              </div>
              <div>
                <span className="font-serif text-base font-black tracking-tight text-white block leading-tight">
                  RAHMAN <span className="text-amber-400">NURSERY</span>
                </span>
                <span className="text-[9px] tracking-widest text-amber-300 font-black uppercase block">
                  50+ YEARS HERITAGE • PAKISTAN HUB
                </span>
              </div>
            </div>

            <p className="text-emerald-200 leading-relaxed font-semibold">
              Founded by <strong>Muhammad Shareef (Late) — Baba Shareef</strong> in Chak Hassan Arain fields. Now continued by Saleem brothers and horticulturist Ansar Hussain.
            </p>
          </div>

          {/* Col 2: Site Map - Main Pages */}
          <div>
            <h4 className="font-serif text-sm font-black text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <Map className="w-4 h-4" />
              <span>Page Sitemap</span>
            </h4>
            <ul className="space-y-2 text-emerald-200 font-bold">
              <li>
                <button onClick={() => onNavigateTab && onNavigateTab('home')} className="hover:text-amber-300 transition-colors">
                  🏠 Home Page
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab && onNavigateTab('shop')} className="hover:text-amber-300 transition-colors">
                  🏬 Nursery Store (100+)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab && onNavigateTab('orchard')} className="hover:text-amber-300 transition-colors">
                  🏡 Bagh Packages & Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab && onNavigateTab('services')} className="hover:text-amber-300 transition-colors">
                  🛠️ Nursery Services & Landscaping
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab && onNavigateTab('blog')} className="hover:text-amber-300 transition-colors">
                  📖 Botanical Blog & Care Guides
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab && onNavigateTab('about')} className="hover:text-amber-300 transition-colors">
                  📜 50+ Years Family Heritage
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab && onNavigateTab('contact')} className="hover:text-amber-300 transition-colors">
                  📞 Contact & Farm Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Site Map - Plant Categories */}
          <div>
            <h4 className="font-serif text-sm font-black text-amber-400 uppercase tracking-widest mb-4">
              Botanical Stock
            </h4>
            <ul className="space-y-2 text-emerald-200 font-bold">
              <li>🍊 Grafted Chaunsa & Anwar Ratol</li>
              <li>🍐 White & Red China Guava</li>
              <li>🪴 Indoor Air Purifiers (Monstera/Snake)</li>
              <li>🌴 Royal Date Palms (Khajoor)</li>
              <li>🌸 Desi Gulab & Motia Jasmine</li>
              <li>🌲 Teak, Sheesham & Pink Cassia</li>
              <li>🌾 Zoysia & Bermuda Lawn Turf</li>
            </ul>
          </div>

          {/* Col 4: Customer Helplines */}
          <div>
            <h4 className="font-serif text-sm font-black text-amber-400 uppercase tracking-widest mb-4">
              Direct Phone Helplines
            </h4>
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-amber-300 font-black"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                <span>Ansar Hussain: 0304-0450065</span>
              </a>
              <a href="tel:+923445155160" className="flex items-center gap-2 text-emerald-200 hover:text-white font-bold">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Bashart Saleem: 0344-5155160</span>
              </a>
              <a href="tel:+923041001600" className="flex items-center gap-2 text-emerald-200 hover:text-white font-bold">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Kashir Saleem: 0304-1001600</span>
              </a>
            </div>
          </div>

          {/* Col 5: Primary Hub Location */}
          <div>
            <h4 className="font-serif text-sm font-black text-amber-400 uppercase tracking-widest mb-4">
              Farm Location & Hubs
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-emerald-200 font-semibold">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Chak Hassan Arain, Tehsil Arifwala, District Pakpattan, Punjab, Pakistan</span>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-900/80 border border-emerald-800 text-[11px] text-emerald-200 font-bold">
                🚚 Express Cargo to Lahore, Sahiwal, Multan, Faisalabad, Islamabad, Karachi & Peshawar.
              </div>
            </div>
          </div>

        </div>

        {/* 3. Shopify Payment & Security Badges */}
        <div className="pt-8 border-t border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-300 font-bold">
          <div>
            © {new Date().getFullYear()} Rahman Nursery Farm. World-Class E-Commerce Botanical Storefront.
          </div>
          
          {/* Shopify Payment Badges */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-lg bg-emerald-900 border border-emerald-800 text-[10px] font-black text-amber-300">
              💵 CASH ON DELIVERY
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-900 border border-emerald-800 text-[10px] font-black text-emerald-200">
              🏦 BANK TRANSFER
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-900 border border-emerald-800 text-[10px] font-black text-green-400">
              📱 WHATSAPP ORDER
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
