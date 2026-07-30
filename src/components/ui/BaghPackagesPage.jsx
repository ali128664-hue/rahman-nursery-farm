import React, { useState } from 'react';
import { TreePine, Sparkles, CheckCircle2, MessageCircle, Calculator, ShieldCheck, ChevronRight, Sprout, ArrowRight } from 'lucide-react';
import { ORCHARD_SERVICES } from '../../data/plantCatalog';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const BaghPackagesPage = () => {
  // Calculator state
  const [landAcres, setLandAcres] = useState(1);
  const [selectedFruit, setSelectedFruit] = useState('mango');

  const FRUIT_SPECS = {
    mango: { name: 'Multani Chaunsa Mango (Grafted)', plantsPerAcre: 40, costPerAcre: 185000, yieldPerAcrePKR: 350000, startYear: 3 },
    guava: { name: 'White & Red China Guava (High Density)', plantsPerAcre: 110, costPerAcre: 145000, yieldPerAcrePKR: 450000, startYear: 1.5 },
    kinnu: { name: 'Pakistani Grafted Kinnu Citrus', plantsPerAcre: 75, costPerAcre: 165000, yieldPerAcrePKR: 400000, startYear: 3 },
    palms: { name: 'Mature Royal Date Palms (Khajoor)', plantsPerAcre: 50, costPerAcre: 450000, yieldPerAcrePKR: 650000, startYear: 4 },
    anar:  { name: 'Kandhari Red Anar (Pomegranate)', plantsPerAcre: 90, costPerAcre: 155000, yieldPerAcrePKR: 380000, startYear: 2 },
  };

  const spec = FRUIT_SPECS[selectedFruit];
  const totalPlants = spec.plantsPerAcre * landAcres;
  const totalPackageCost = spec.costPerAcre * landAcres;
  const projectedYield = spec.yieldPerAcrePKR * landAcres;

  const handleWhatsAppBooking = (packageTitle, priceText) => {
    const text = `Assalam o Alaikum Ansar Hussain Bhai (0304-0450065)!
Main Rahman Nursery Farm website se Commercial Orchard Package ki inquiry kar raha hu:

• *Package Selected:* ${packageTitle}
• *Price Estimate:* ${priceText}
• *Calculated Land Size:* ${landAcres} Acre(s) (${spec.name})
• *Estimated Saplings:* ${totalPlants} Plants

Kripya installation timeline aur field team visit date confirm kar dein. Shukriya!`;

    window.open(`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-emerald-950 pt-28 pb-20 px-4 sm:px-6 lg:px-12 pointer-events-auto">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Top Header Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white shadow-2xl border border-amber-400/30">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black text-amber-300 bg-amber-950/80 border border-amber-400/40 mb-3 uppercase tracking-wider">
            <TreePine className="w-4 h-4 text-amber-400" />
            <span>BAGH LAGWAO • TURN-KEY ORCHARD INSTALLATION PACKAGES</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-2 leading-tight">
            Commercial Fruit Orchard Packages
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200 font-bold max-w-3xl leading-relaxed">
            From 1-Kanal villa orchards to 100+ acres commercial agro-farms — full turn-key pit digging, organic soil enrichment, sapling planting, and 12-month horticulturist warranty.
          </p>
        </div>

        {/* 🧮 INTERACTIVE BAGH INVESTMENT & YIELD CALCULATOR */}
        <div className="p-8 rounded-3xl bg-white border border-emerald-200 shadow-2xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-black shadow-md">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block">INTERACTIVE CALCULATOR</span>
              <h3 className="font-serif text-2xl font-black text-emerald-950">Orchard Cost & Yield Estimator</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Controls */}
            <div className="space-y-5">
              <div>
                <label className="text-xs font-black text-emerald-950 block mb-2 uppercase tracking-wide">
                  1. Select Land Size (in Acres):
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={landAcres}
                    onChange={(e) => setLandAcres(parseInt(e.target.value))}
                    className="w-full accent-emerald-800"
                  />
                  <span className="px-4 py-2 rounded-xl bg-emerald-900 text-white font-black text-sm whitespace-nowrap">
                    {landAcres} Acre{landAcres > 1 ? 's' : ''} ({landAcres * 8} Kanals)
                  </span>
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-emerald-950 block mb-2 uppercase tracking-wide">
                  2. Select Fruit Variety Package:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.entries(FRUIT_SPECS).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedFruit(key)}
                      className={`p-3 rounded-2xl text-left border text-xs font-black transition-all ${
                        selectedFruit === key
                          ? 'bg-emerald-900 text-white border-emerald-900 shadow-md scale-[1.02]'
                          : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-emerald-50'
                      }`}
                    >
                      <div>{item.name}</div>
                      <div className="text-[10px] opacity-80 mt-0.5">~{item.plantsPerAcre} plants/acre</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between">
              <h4 className="font-serif text-base font-black text-emerald-950">Package Breakdown & Yield Projection</h4>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
                  <div className="text-[10px] text-slate-400 uppercase font-black">Total Saplings</div>
                  <div className="text-lg font-black text-emerald-950">{totalPlants} Plants</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
                  <div className="text-[10px] text-slate-400 uppercase font-black">Harvest Starts In</div>
                  <div className="text-lg font-black text-emerald-950">{spec.startYear} Years</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
                  <div className="text-[10px] text-slate-400 uppercase font-black">Total Installation Cost</div>
                  <div className="text-base font-black text-emerald-900">PKR {totalPackageCost.toLocaleString()}</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
                  <div className="text-[10px] text-amber-700 uppercase font-black">Est. Annual Harvest</div>
                  <div className="text-base font-black text-amber-600">PKR {projectedYield.toLocaleString()} / Year</div>
                </div>
              </div>

              <button
                onClick={() => handleWhatsAppBooking(`Calculator Estimate for ${landAcres} Acres ${spec.name}`, `PKR ${totalPackageCost.toLocaleString()}`)}
                className="w-full py-3.5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-800 to-emerald-950 text-white hover:from-emerald-700 hover:to-emerald-900 transition-all shadow-xl"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Book This Package on WhatsApp (03040450065)</span>
              </button>
            </div>
          </div>
        </div>

        {/* 📦 OFFICIAL COMMERCIAL ORCHARD PACKAGES GRID */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-black text-emerald-950 text-center">
            Standard Commercial Orchard Installation Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ORCHARD_SERVICES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl border border-emerald-200 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all"
              >
                <div>
                  <div
                    className="p-6 text-white"
                    style={{ background: `linear-gradient(135deg, ${pkg.color}ee, ${pkg.color})` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl">{pkg.emoji}</span>
                      <span className="text-xs font-black uppercase text-amber-300 tracking-wider">{pkg.urdu}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-black">{pkg.title}</h3>
                    <div className="text-xl font-serif font-black mt-2 text-amber-200">
                      PKR {pkg.pricePerAcre.toLocaleString()} <span className="text-xs font-bold text-white/80">/ Acre</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-slate-600 font-bold leading-relaxed">{pkg.description}</p>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-emerald-900 uppercase tracking-wide block">Package Features Included:</span>
                      {pkg.features.map((feat, i) => (
                        <div key={i} className="text-xs font-bold text-emerald-950 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <button
                    onClick={() => handleWhatsAppBooking(pkg.title, `PKR ${pkg.pricePerAcre.toLocaleString()} / Acre`)}
                    className="w-full py-3.5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 bg-emerald-800 text-white hover:bg-emerald-900 transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Inquire About {pkg.title}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
