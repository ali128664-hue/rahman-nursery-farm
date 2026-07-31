import React, { useState } from 'react';
import { X, Sparkles, Sun, Droplets, Wind, ShieldAlert, CheckCircle2, MessageCircle, Calendar, HeartPulse, Globe2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { POT_OPTIONS } from '../../data/plantCatalog';
import { generatePlantWhatsAppLink } from '../../utils/whatsappHelper';

export const PlantInspectorModal = ({
  plant,
  activePotType,
  onPotChange,
  onClose,
  onAddToCart,
}) => {
  const [selectedTimeline, setSelectedTimeline] = useState('1 Year');
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('Lahore');
  const [customerPhone, setCustomerPhone] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!plant) return null;

  const currentPot = POT_OPTIONS.find((p) => p.id === activePotType) || POT_OPTIONS[0];
  const totalPrice = (plant.pricePKR + currentPot.priceBonus) * quantity;

  const handleOrderWhatsApp = () => {
    const link = generatePlantWhatsAppLink({
      plantName: plant.name,
      plantPrice: plant.pricePKR,
      potName: currentPot.name,
      potPrice: currentPot.priceBonus,
      customerName,
      city: customerCity,
      phone: customerPhone,
      quantity
    });
    window.open(link, '_blank');
  };

  const isFruit = plant.category === 'fruit' || plant.category === 'orchard';
  const isMedicinal = plant.category === 'medicinal' || plant.name.toLowerCase().includes('neem') || plant.name.toLowerCase().includes('aloe') || plant.name.toLowerCase().includes('tulsi');

  return (
    <div className="fixed inset-0 md:inset-y-0 md:left-auto md:right-0 z-50 w-full md:max-w-2xl bg-white md:bg-transparent md:p-6 flex flex-col pointer-events-auto">
      
      {/* Mobile App Container */}
      <div className="bg-white text-emerald-950 h-full md:rounded-3xl p-4 sm:p-8 overflow-y-auto flex flex-col justify-between shadow-2xl border-0 md:border md:border-emerald-300 pb-28 md:pb-6">
        
        {/* Sticky Mobile App Top Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md pt-2 pb-3 mb-4 border-b border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-emerald-950 font-black text-xs border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="text-center">
            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest block">PLANT SPECIFICATION</span>
            <span className="text-xs font-black text-gray-900 truncate max-w-[160px] inline-block">{plant.name}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 text-emerald-950 font-black border border-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div>
          {/* Badge & Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-[10px] font-black uppercase border border-emerald-300 mb-1">
                {plant.badge}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-black text-emerald-950 leading-tight">
                {plant.name}
              </h2>
              <p className="text-xs italic text-slate-500 font-bold mt-0.5">{plant.latinName}</p>
            </div>

            {/* Price Box */}
            <div className="bg-emerald-950 text-white p-3.5 rounded-2xl text-right flex-shrink-0 self-start sm:self-auto">
              <div className="text-[9px] text-amber-300 font-black uppercase">Unit Price</div>
              <div className="font-serif text-xl sm:text-2xl font-black">PKR {plant.pricePKR.toLocaleString()}</div>
            </div>
          </div>

          {/* Plant Description */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-emerald-950 leading-relaxed font-bold mb-5">
            {plant.description}
          </div>

          {/* 🌿 HEALTH & WELLNESS BENEFITS */}
          <div className="mb-5 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2.5">
            <h4 className="font-serif text-xs font-black text-emerald-950 uppercase tracking-wide flex items-center gap-1.5">
              <HeartPulse className="w-4 h-4 text-red-600" />
              <span>Health & Wellness Benefits</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-emerald-950">
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{plant.airPurifying}% NASA Indoor Air Cleaner</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Oxygen Generation & Dust Filter</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{isMedicinal ? 'Ayurvedic Herbal Immunity' : 'Stress & Blood Pressure Control'}</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Natural Room Humidity Booster</span>
              </div>
            </div>
          </div>

          {/* 🌎 ENVIRONMENT & ECOLOGY IMPACT */}
          <div className="mb-5 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2.5">
            <h4 className="font-serif text-xs font-black text-emerald-950 uppercase tracking-wide flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-amber-700" />
              <span>Environmental & Climate Impact</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-emerald-950">
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-amber-200">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Urban Heat Reduction (3-5°C Cooler)</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-amber-200">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Soil Protection & Erosion Control</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-amber-200">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>{isFruit ? 'Honeybee & Pollinator Habitat' : 'High Carbon Absorption'}</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-amber-200">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Acclimatized to Extreme Heat & Frost</span>
              </div>
            </div>
          </div>

          {/* Planter Container Selector */}
          <div className="mb-5 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="text-xs font-black text-emerald-950 uppercase tracking-wider mb-2.5">
              Choose Planter Container:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {POT_OPTIONS.map((pot) => (
                <button
                  key={pot.id}
                  onClick={() => onPotChange(pot.id)}
                  className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                    activePotType === pot.id
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-black shadow-sm'
                      : 'border-slate-200 bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span
                      className="w-3 h-3 rounded-full border border-slate-300"
                      style={{ backgroundColor: pot.color }}
                    />
                    <span className="truncate">{pot.name}</span>
                  </div>
                  <div className="text-[10px] text-emerald-800 font-black">
                    +{pot.priceBonus > 0 ? `PKR ${pot.priceBonus}` : 'Included'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Botanical Care Grid */}
          <div className="grid grid-cols-2 gap-2 mb-5 text-xs font-bold">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <div>
                <div className="text-[9px] text-slate-400 uppercase font-black">Sunlight</div>
                <div className="text-emerald-950 text-xs font-black">{plant.sunlight}</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2">
              <Droplets className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <div>
                <div className="text-[9px] text-slate-400 uppercase font-black">Watering</div>
                <div className="text-emerald-950 text-xs font-black">{plant.watering}</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2">
              <Wind className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <div>
                <div className="text-[9px] text-slate-400 uppercase font-black">Air Score</div>
                <div className="text-emerald-950 text-xs font-black">{plant.airPurifying}% Score</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-orange-500 flex-shrink-0" />
              <div>
                <div className="text-[9px] text-slate-400 uppercase font-black">Pet Safety</div>
                <div className="text-emerald-950 text-xs font-black">
                  {plant.petFriendly ? 'Pet Safe' : 'Keep Away'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🚀 STICKY BOTTOM APP BAR FOR ACTION ON MOBILE */}
        <div
          className="fixed md:relative bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 p-3 sm:p-4 shadow-2xl space-y-2.5"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        >
          {/* Price & Quantity Row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[9px] text-slate-400 font-black uppercase">TOTAL ORDER ESTIMATE</div>
              <div className="font-serif text-xl sm:text-2xl font-black text-emerald-950">
                PKR {totalPrice.toLocaleString()}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-1.5 border border-slate-200">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded bg-white text-emerald-950 font-black flex items-center justify-center text-sm shadow-sm"
              >
                -
              </button>
              <span className="text-xs font-black text-emerald-950 w-5 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded bg-white text-emerald-950 font-black flex items-center justify-center text-sm shadow-sm"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                if (onAddToCart) onAddToCart(plant, quantity);
              }}
              className="py-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 bg-slate-100 text-emerald-950 hover:bg-slate-200 border border-slate-300"
            >
              <ShoppingCart className="w-4 h-4 text-amber-600" />
              <span>Cart ({quantity})</span>
            </button>

            <button
              onClick={handleOrderWhatsApp}
              className="py-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 bg-green-700 text-white hover:bg-green-800 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Order</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
