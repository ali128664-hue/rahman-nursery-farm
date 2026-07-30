import React from 'react';
import { MessageCircle, Phone, MapPin, Send, Map } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const Footer = ({ onNavigateTab }) => {

  const nav = (tab) => {
    if (onNavigateTab) onNavigateTab(tab);
  };

  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8 px-4 md:px-8 pointer-events-auto">
      <div className="max-w-7xl mx-auto">

        {/* Newsletter Row */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gray-800 border border-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-amber-400 font-black mb-1">WhatsApp VIP Newsletter</div>
            <h3 className="font-serif text-xl sm:text-2xl font-black text-white">Get Seasonal Planting Alerts & Discounts</h3>
            <p className="text-sm text-gray-400 font-medium mt-1">Join 5,000+ Pakistani gardeners for monthly care guides.</p>
          </div>
          <a
            href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I want to subscribe to Rahman Nursery Farm WhatsApp updates for seasonal plant discounts.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-full bg-amber-500 text-gray-900 hover:bg-amber-400 font-black text-sm flex items-center gap-2 shadow-lg transition"
          >
            <Send className="w-4 h-4" />
            <span>Subscribe on WhatsApp</span>
          </a>
        </div>

        {/* Main Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-amber-400 flex items-center justify-center font-serif font-black text-xl text-amber-400">R</div>
              <div>
                <div className="font-serif text-base font-black text-white">RAHMAN <span className="text-green-400">NURSERY</span></div>
                <div className="text-[9px] font-bold text-amber-400 uppercase tracking-widest">50+ YRS HERITAGE • PAKISTAN HUB</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">
              Founded by <strong className="text-white">Muhammad Shareef (Late)</strong> — Baba Shareef — in Chak Hassan Arain. Continued by the Saleem family and horticulturist Ansar Hussain.
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <Map className="w-3.5 h-3.5" /> Pages
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 font-medium">
              {[
                { id: 'home',     label: '🏠 Home' },
                { id: 'shop',     label: '🌿 Nursery Store (100+)' },
                { id: 'orchard',  label: '🏡 Bagh Packages' },
                { id: 'services', label: '🛠️ Services' },
                { id: 'blog',     label: '📖 Blog & Guides' },
                { id: 'about',    label: '📜 50+ Yrs Heritage' },
                { id: 'contact',  label: '📞 Contact Us' },
              ].map(item => (
                <li key={item.id}>
                  <button onClick={() => nav(item.id)} className="hover:text-white transition">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Plant Categories */}
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4">Botanical Stock</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-medium">
              <li>🍊 Grafted Chaunsa & Anwar Ratol</li>
              <li>🍐 White & Red China Guava</li>
              <li>🪴 Indoor Air Purifiers</li>
              <li>🌴 Royal Date Palms (Khajoor)</li>
              <li>🌸 Desi Gulab & Motia Jasmine</li>
              <li>🌲 Teak, Sheesham & Pink Cassia</li>
              <li>🌾 Zoysia & Bermuda Lawn Turf</li>
            </ul>
          </div>

          {/* Helplines & Location */}
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4">Direct Helplines</h4>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-amber-300 font-bold text-sm transition"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>Ansar Hussain: 0304-0450065</span>
              </a>
              <a href="tel:+923445155160" className="flex items-center gap-2 text-gray-400 hover:text-white font-medium text-sm transition">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Bashart Saleem: 0344-5155160</span>
              </a>
              <a href="tel:+923041001600" className="flex items-center gap-2 text-gray-400 hover:text-white font-medium text-sm transition">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Kashir Saleem: 0304-1001600</span>
              </a>
              <div className="pt-3 border-t border-gray-800">
                <div className="flex items-start gap-2 text-gray-400 font-medium text-xs">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Chak Hassan Arain, Tehsil Arifwala, District Pakpattan, Punjab, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <div>© {new Date().getFullYear()} Rahman Nursery Farm. All rights reserved.</div>
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1.5 rounded-lg bg-gray-800 text-amber-300 font-bold text-[11px] border border-gray-700">💵 Cash on Delivery</span>
            <span className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 font-bold text-[11px] border border-gray-700">🏦 Bank Transfer</span>
            <span className="px-3 py-1.5 rounded-lg bg-gray-800 text-green-400 font-bold text-[11px] border border-gray-700">📱 WhatsApp Order</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
