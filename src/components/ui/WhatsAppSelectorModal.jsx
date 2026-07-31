import React from 'react';
import { X, MessageCircle, Phone } from 'lucide-react';

export const WhatsAppSelectorModal = ({ isOpen, onClose, messageText = '' }) => {
  if (!isOpen) return null;

  const REPRESENTATIVES = [
    {
      name: 'Ansar Hussain',
      role: 'Online Sales & Nationwide Dispatch Manager',
      urdu: 'انصر حسین (آن لائن و ڈسپیچ انچارج)',
      phone: '923040450065',
      displayPhone: '0304-0450065',
      badge: 'TOP PRIORITY — ONLINE ORDERS & CARGO',
      badgeColor: 'bg-amber-400 text-emerald-950',
      icon: '📱',
      color: 'from-emerald-900 via-emerald-800 to-emerald-950 border-amber-400',
    },
    {
      name: 'Bashart Saleem',
      role: 'Main Nursery Lead & Qaboola Branch Manager',
      urdu: 'بشارت سلیم (مین نرسری فارم انچارج)',
      phone: '923445155160',
      displayPhone: '0344-5155160',
      badge: 'MAIN FARM & PHYSICAL NURSERY LEAD',
      badgeColor: 'bg-emerald-100 text-emerald-900',
      icon: '🏡',
      color: 'from-slate-900 via-gray-900 to-slate-950 border-emerald-500',
    },
    {
      name: 'Kashir Saleem',
      role: 'Physical Nursery Manager — Pakpattan Road Ada 17',
      urdu: 'کاشر سلیم (پاکپتن روڈ برانچ انچارج)',
      phone: '923041001600',
      displayPhone: '0304-1001600',
      badge: 'PAKPATTAN RD BRANCH & DISPATCH',
      badgeColor: 'bg-slate-100 text-slate-900',
      icon: '🏡',
      color: 'from-gray-800 via-slate-900 to-gray-950 border-slate-600',
    },
  ];

  const handleSelectRep = (rep) => {
    const textToUse = messageText || `Assalam o Alaikum ${rep.name}, main Rahman Nursery Farm website se contact kar raha hun.`;
    const url = `https://wa.me/${rep.phone}?text=${encodeURIComponent(textToUse)}`;
    window.open(url, '_blank');
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-black text-amber-300 uppercase tracking-widest mb-1">
              <MessageCircle className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              <span>SELECT WHATSAPP REPRESENTATIVE</span>
            </div>
            <h3 className="font-serif text-xl font-black text-white">
              Choose Representative To Message
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Reps list */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-xs font-bold text-gray-600">
            Select a representative below to direct your WhatsApp order or inquiry:
          </p>

          <div className="space-y-3">
            {REPRESENTATIVES.map((rep, idx) => (
              <div
                key={idx}
                onClick={() => handleSelectRep(rep)}
                className={`p-4 rounded-2xl border bg-gradient-to-r ${rep.color} text-white cursor-pointer hover:scale-[1.02] transition-all shadow-md flex items-center justify-between gap-3`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{rep.icon}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${rep.badgeColor}`}>
                      {rep.badge}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-black text-white">{rep.name}</h4>
                  <p className="text-[11px] font-bold text-white/80">{rep.role}</p>
                  <p className="text-[10px] text-amber-300 font-bold">{rep.urdu}</p>
                </div>

                <div className="flex-shrink-0 text-right space-y-1.5">
                  <div className="text-xs font-black text-white flex items-center gap-1 bg-white/10 px-3 py-1 rounded-xl">
                    <Phone className="w-3 h-3 text-amber-300" />
                    <span>{rep.displayPhone}</span>
                  </div>
                  <button
                    type="button"
                    className="w-full py-1.5 px-3 rounded-xl bg-amber-400 text-emerald-950 font-black text-[11px] shadow hover:bg-amber-300 transition flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3 fill-emerald-950/20" />
                    <span>Chat Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-[11px] font-bold text-gray-500">
          📍 Rahman Nursery Farm • Chak Hassan Arain, Arifwala • 24/7 WhatsApp Lines
        </div>

      </div>
    </div>
  );
};
