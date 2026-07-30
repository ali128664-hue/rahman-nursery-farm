import React, { useState } from 'react';
import { X, Sparkles, Sun, Droplets, Wind, ShieldAlert, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
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

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xl p-4 md:p-6 flex flex-col pointer-events-auto">
      <div className="glass-panel-bright text-sage-900 h-full rounded-3xl p-6 overflow-y-auto flex flex-col justify-between shadow-2xl border border-cream-200 bg-white/95 backdrop-blur-md">
        {/* Header Bar */}
        <div>
          <div className="flex items-center justify-between mb-4 border-b border-cream-200 pb-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>BOTANICAL PLANT INSPECTOR</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-sage-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Plant Title & Badge */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-sage-950 mb-1">
                {plant.name}
              </h2>
              <p className="text-xs italic text-sage-600">{plant.latinName}</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold border border-emerald-300 whitespace-nowrap">
              {plant.badge}
            </span>
          </div>

          <p className="text-xs md:text-sm text-sage-800 leading-relaxed mb-6">
            {plant.description}
          </p>

          {/* 1. Pot Customizer Selector */}
          <div className="mb-6 p-4 rounded-2xl bg-white border border-cream-200 shadow-sm">
            <h4 className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider mb-3">
              Select Custom Planter Pot
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {POT_OPTIONS.map((pot) => (
                <button
                  key={pot.id}
                  onClick={() => onPotChange(pot.id)}
                  className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                    activePotType === pot.id
                      ? 'border-emerald-600 bg-emerald-50 text-sage-950 font-black shadow-sm'
                      : 'border-cream-200 bg-cream-50 text-sage-700 hover:bg-cream-100'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-sage-300 shadow-inner"
                      style={{ backgroundColor: pot.color }}
                    />
                    <span className="truncate">{pot.name}</span>
                  </div>
                  <div className="text-[10px] text-sage-600 font-semibold">
                    +{pot.priceBonus > 0 ? `PKR ${pot.priceBonus}` : 'Included'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Growth Timeline Simulator */}
          <div className="mb-6 p-4 rounded-2xl bg-white border border-cream-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Growth Timeline Horizon
              </h4>
              <span className="text-[10px] text-sage-600 font-semibold">Select Age Horizon</span>
            </div>

            <div className="flex items-center gap-1 bg-cream-100 p-1 rounded-xl mb-3 border border-cream-200">
              {Object.keys(plant.growthTimeline).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedTimeline(key)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedTimeline === key
                      ? 'bg-emerald-800 text-white shadow-md'
                      : 'text-sage-700 hover:text-sage-900'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            <p className="text-xs text-sage-800 italic bg-cream-50 p-3 rounded-xl border border-cream-200">
              "{plant.growthTimeline[selectedTimeline]}"
            </p>
          </div>

          {/* 3. Botanical Care Guide Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-xl bg-white border border-cream-200 flex items-center gap-3">
              <Sun className="w-5 h-5 text-amber-500" />
              <div>
                <div className="text-[10px] text-sage-600 uppercase font-semibold">Sunlight</div>
                <div className="text-xs font-bold text-sage-950">{plant.sunlight}</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-cream-200 flex items-center gap-3">
              <Droplets className="w-5 h-5 text-blue-500" />
              <div>
                <div className="text-[10px] text-sage-600 uppercase font-semibold">Watering</div>
                <div className="text-xs font-bold text-sage-950">{plant.watering}</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-cream-200 flex items-center gap-3">
              <Wind className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="text-[10px] text-sage-600 uppercase font-semibold">Air Cleaner</div>
                <div className="text-xs font-bold text-sage-950">{plant.airPurifying}% Score</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-cream-200 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-orange-500" />
              <div>
                <div className="text-[10px] text-sage-600 uppercase font-semibold">Pet Safety</div>
                <div className="text-xs font-bold text-sage-950">
                  {plant.petFriendly ? 'Pet Safe' : 'Keep Away Pets'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Order Form & WhatsApp Button */}
        <div className="pt-4 border-t border-cream-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] text-sage-600 uppercase tracking-widest block font-semibold">
                TOTAL ESTIMATED COST
              </span>
              <span className="font-serif text-2xl md:text-3xl font-bold text-emerald-900">
                PKR {totalPrice.toLocaleString()}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 bg-cream-100 rounded-full px-3.5 py-1.5 border border-cream-200">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-lg font-extrabold text-sage-950 hover:scale-110"
              >
                -
              </button>
              <span className="text-sm font-bold text-sage-950 w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-lg font-extrabold text-sage-950 hover:scale-110"
              >
                +
              </button>
            </div>
          </div>

          {/* Customer Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl text-xs bg-white border border-cream-200 text-sage-950 placeholder-sage-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold"
            />
            <input
              type="tel"
              placeholder="0304-0450065"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full px-3 py-2 rounded-xl text-xs bg-white border border-cream-200 text-sage-950 placeholder-sage-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold"
            />
            <select
              value={customerCity}
              onChange={(e) => setCustomerCity(e.target.value)}
              className="w-full px-3 py-2 rounded-xl text-xs bg-white border border-cream-200 text-sage-950 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold"
            >
              <option value="Lahore">📍 Lahore</option>
              <option value="Arifwala">📍 Arifwala</option>
              <option value="Sahiwal">📍 Sahiwal</option>
              <option value="Pakpattan">📍 Pakpattan</option>
              <option value="Okara">📍 Okara</option>
              <option value="Kasur">📍 Kasur</option>
              <option value="Multan">📍 Multan</option>
              <option value="Islamabad">📍 Islamabad / Rawalpindi</option>
              <option value="Faisalabad">📍 Faisalabad</option>
              <option value="Karachi">📍 Karachi</option>
              <option value="Peshawar">📍 Peshawar</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                if (onAddToCart) onAddToCart(plant);
              }}
              className="flex-1 py-3.5 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 bg-emerald-700 text-white hover:bg-emerald-800 transition-all shadow-md"
            >
              🛒 Add to Cart
            </button>

            <button
              onClick={handleOrderWhatsApp}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3.5 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 shadow-xl hover:from-emerald-700 hover:to-teal-800 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              WhatsApp (03040450065)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
