import React from 'react';
import { MessageCircle, Phone, MapPin, Heart } from 'lucide-react';

export const Footer = ({ onOpenCatalog, onOpenAIPlanner, onOpenContact }) => {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#FDFBF7] via-[#F3F8F4] to-[#E6F4EA] text-emerald-950 pt-20 pb-10 px-4 md:px-12 border-t border-emerald-300/60 pointer-events-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

        {/* Brand & Family Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-950 text-white flex items-center justify-center font-serif font-black text-xl shadow-lg border-2 border-amber-400">
              R
            </div>
            <div>
              <span className="font-serif text-lg font-black tracking-tight text-emerald-950 block leading-tight">
                RAHMAN <span className="text-emerald-700">NURSERY</span>
              </span>
              <span className="text-[10px] tracking-widest text-amber-700 font-black uppercase block">
                FARM — 50+ YEARS OF EXCELLENCE • PAKISTAN
              </span>
            </div>
          </div>

          <p className="text-xs text-emerald-900 leading-relaxed font-bold mb-4">
            Founded by{' '}
            <strong className="text-emerald-800 underline">Muhammad Shareef (Late) — Baba Shareef</strong> — 
            from{' '}
            <strong className="text-emerald-950">Chak Hassan Arain</strong>.
            Now proudly continued by Muhammad Saleem, Muhammad Rafiq, Abdul Hameed, Bashart Saleem, Kashir Saleem & Ansar Hussain.
          </p>

          <div className="space-y-2 mt-4">
            <a href="https://wa.me/923040450065"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl btn-luxury-primary text-white text-xs font-black w-full justify-center shadow-md">
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Ansar Hussain: 03040450065</span>
            </a>
            <a href="tel:+923445155160"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-emerald-200 text-emerald-950 text-xs font-black hover:bg-emerald-50 transition-colors w-full justify-center shadow-sm">
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Bashart Saleem: 0344-5155160</span>
            </a>
            <a href="tel:+923041001600"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-emerald-200 text-emerald-950 text-xs font-black hover:bg-emerald-50 transition-colors w-full justify-center shadow-sm">
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Kashir Saleem: 0304-1001600</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-sm font-black text-amber-700 uppercase tracking-widest mb-4">
            Quick Navigation
          </h4>
          <ul className="space-y-3 text-xs text-emerald-950 font-bold">
            <li>
              <button onClick={onOpenCatalog} className="hover:text-emerald-700 transition-colors text-left">
                🌿 A-Z Plant Catalog (50+ Varieties)
              </button>
            </li>
            <li>
              <button onClick={onOpenAIPlanner} className="hover:text-emerald-700 transition-colors text-left">
                🤖 AI Garden & Budget Planner
              </button>
            </li>
            <li>
              <button onClick={onOpenContact} className="hover:text-emerald-700 transition-colors text-left">
                📍 Farm Locations & Directions
              </button>
            </li>
            <li>
              <a href="#orchard" className="hover:text-emerald-700 transition-colors">
                🏡 Bagh Lagwao Orchard Service
              </a>
            </li>
          </ul>
        </div>

        {/* Key Plant Collections */}
        <div>
          <h4 className="font-serif text-sm font-black text-amber-700 uppercase tracking-widest mb-4">
            Our Specialties
          </h4>
          <ul className="space-y-2.5 text-xs text-emerald-950 font-bold">
            <li>🌴 Royal Date Palms & Estate Palms</li>
            <li>🍐 China Guava, Mango, Kinnu, Anar</li>
            <li>🪴 Indoor Air Purifier Plants</li>
            <li>🌲 Teak, Sheesham, Neem, Moringa Timber</li>
            <li>🌸 Roses, Motia, Bougainvillea, Champa</li>
            <li>🌾 Zoysia & Bermuda Lawn Grass</li>
            <li>🏡 Turn-Key Villa Landscape Projects</li>
          </ul>
        </div>

        {/* Delivery Cities */}
        <div>
          <h4 className="font-serif text-sm font-black text-amber-700 uppercase tracking-widest mb-4">
            Primary Hubs & Delivery
          </h4>
          <div className="mb-4">
            <p className="text-[10px] uppercase tracking-widest text-emerald-800 mb-1 font-black">Main Farm Address</p>
            <div className="flex items-start gap-1.5 text-xs text-emerald-950 font-black">
              <MapPin className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
              <span>Chak Hassan Arain, Arifwala, Punjab, Pakistan</span>
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-emerald-800 mb-1 font-black">Primary Hub Cities</p>
            <p className="text-xs font-black text-emerald-800 mb-1">
              Lahore • Arifwala • Sahiwal • Pakpattan
            </p>
            <p className="text-xs text-emerald-900 font-bold">
              Okara • Kasur • Multan • Faisalabad • Islamabad • Rawalpindi • Karachi • Peshawar
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-emerald-300/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-900 font-bold">
        <div>
          © {new Date().getFullYear()} Rahman Nursery Farm — Chak Hassan Arain. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5">
          <span>Cultivated with</span>
          <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
          <span>by Muhammad Shareef (Late) Family • Pattoki Hub</span>
        </div>
      </div>
    </footer>
  );
};
