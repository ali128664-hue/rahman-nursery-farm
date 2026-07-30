import React, { useState } from 'react';
import { X, Sparkles, Sun, Droplets, Wind, ShieldAlert, CheckCircle2, MessageCircle, Calendar, HeartPulse, Globe2, Citrus, Leaf, ShieldCheck } from 'lucide-react';
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

  // Determine specific benefits based on plant category
  const isFruit = plant.category === 'fruit' || plant.category === 'orchard';
  const isMedicinal = plant.category === 'medicinal' || plant.name.toLowerCase().includes('neem') || plant.name.toLowerCase().includes('aloe') || plant.name.toLowerCase().includes('tulsi');

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl p-3 sm:p-6 flex flex-col pointer-events-auto">
      <div className="bg-white text-emerald-950 h-full rounded-3xl p-5 sm:p-8 overflow-y-auto flex flex-col justify-between shadow-2xl border border-emerald-300">
        
        {/* Header Bar */}
        <div>
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
            <div className="inline-flex items-center gap-2 text-xs font-black text-emerald-900 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>OFFICIAL BOTANICAL SPECIFICATION PAGE</span>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-emerald-950 transition-colors border border-slate-200"
              title="Close product page"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Plant Title, Urdu Name & Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-black uppercase border border-emerald-300 mb-1.5">
                {plant.badge}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-black text-emerald-950 leading-tight">
                {plant.name}
              </h2>
              <p className="text-xs italic text-slate-500 font-bold mt-1">{plant.latinName}</p>
            </div>

            <div className="bg-emerald-950 text-white p-4 rounded-2xl text-right flex-shrink-0">
              <div className="text-[10px] text-amber-300 font-black uppercase">Unit Base Price</div>
              <div className="font-serif text-2xl font-black">PKR {plant.pricePKR.toLocaleString()}</div>
            </div>
          </div>

          {/* Plant Description */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-emerald-950 leading-relaxed font-bold mb-6">
            {plant.description}
          </div>

          {/* 🌿 HEALTH & MEDICAL BENEFITS SECTION */}
          <div className="mb-6 p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-3">
            <h4 className="font-serif text-sm font-black text-emerald-950 uppercase tracking-wide flex items-center gap-2">
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
                <span>Oxygen Generation & Dust Absorption</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{isMedicinal ? 'Ayurvedic Herbal Immunity Booster' : 'Stress & Blood Pressure Reduction'}</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Natural Humidity & Sleep Quality Booster</span>
              </div>
            </div>
          </div>

          {/* 🌎 NATURE & ECOLOGICAL IMPACT SECTION */}
          <div className="mb-6 p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
            <h4 className="font-serif text-sm font-black text-emerald-950 uppercase tracking-wide flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-amber-700" />
              <span>Environmental & Nature Impact</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-emerald-950">
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-amber-200">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Urban Summer Heat Reduction (3-5°C Cooler)</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-amber-200">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Soil Moisture Retention & Erosion Control</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-amber-200">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>{isFruit ? 'Pollinator & Honeybee Habitat Creator' : 'High Carbon Sequestration Rate'}</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-amber-200">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Acclimatized to Extreme Punjab Heat & Frost</span>
              </div>
            </div>
          </div>

          {/* 1. Pot Customizer Selector */}
          <div className="mb-6 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="text-xs font-black text-emerald-950 uppercase tracking-wider mb-3">
              Choose Planter Container:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {POT_OPTIONS.map((pot) => (
                <button
                  key={pot.id}
                  onClick={() => onPotChange(pot.id)}
                  className={`p-3 rounded-xl text-left border text-xs transition-all ${
                    activePotType === pot.id
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-black shadow-sm'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-inner"
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

          {/* 2. Growth Timeline Simulator */}
          <div className="mb-6 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-black text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-700" />
                Growth & Maturity Timeline
              </h4>
              <span className="text-[10px] text-slate-500 font-bold">Select Age</span>
            </div>

            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl mb-3 border border-slate-200">
              {Object.keys(plant.growthTimeline || { '1 Year': 'Standard Growth' }).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedTimeline(key)}
                  className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${
                    selectedTimeline === key
                      ? 'bg-emerald-900 text-white shadow-md'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            <p className="text-xs text-emerald-950 font-bold bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              "{(plant.growthTimeline && plant.growthTimeline[selectedTimeline]) || 'Healthy root development and canopy growth.'}"
            </p>
          </div>

          {/* 3. Botanical Care Guide Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
              <Sun className="w-5 h-5 text-amber-500" />
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-black">Sunlight</div>
                <div className="text-xs font-black text-emerald-950">{plant.sunlight}</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
              <Droplets className="w-5 h-5 text-blue-500" />
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-black">Watering</div>
                <div className="text-xs font-black text-emerald-950">{plant.watering}</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
              <Wind className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-black">Air Score</div>
                <div className="text-xs font-black text-emerald-950">{plant.airPurifying}% Score</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-orange-500" />
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-black">Pet Safety</div>
                <div className="text-xs font-black text-emerald-950">
                  {plant.petFriendly ? 'Pet Safe' : 'Keep Away Pets'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Order Form & WhatsApp Button */}
        <div className="pt-4 border-t border-slate-200 bg-white space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-black">
                TOTAL ORDER ESTIMATE
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-black text-emerald-950">
                PKR {totalPrice.toLocaleString()}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 bg-slate-100 rounded-full px-4 py-2 border border-slate-300">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-lg font-black text-emerald-950 hover:scale-110"
              >
                -
              </button>
              <span className="text-sm font-black text-emerald-950 w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-lg font-black text-emerald-950 hover:scale-110"
              >
                +
              </button>
            </div>
          </div>

          {/* Customer Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <input
              type="text"
              placeholder="Your Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-300 text-emerald-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-bold"
            />
            <input
              type="tel"
              placeholder="0304-0450065"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-300 text-emerald-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-bold"
            />
            <select
              value={customerCity}
              onChange={(e) => setCustomerCity(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-300 text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-bold"
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

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => {
                if (onAddToCart) onAddToCart(plant, quantity);
              }}
              className="flex-1 py-3.5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 bg-slate-100 text-emerald-950 hover:bg-emerald-50 border border-slate-300 transition-all"
            >
              🛒 Add {quantity} to Cart
            </button>

            <button
              onClick={handleOrderWhatsApp}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3.5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-xl hover:from-emerald-700 hover:to-emerald-800 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Order ({quantity} Unit{quantity > 1 ? 's' : ''})</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
