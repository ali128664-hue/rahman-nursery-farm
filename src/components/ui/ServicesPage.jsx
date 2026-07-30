import React, { useState } from 'react';
import { Wrench, Sparkles, CheckCircle2, MessageCircle, ShieldCheck, TreePine, Shovel, Sprout, Home, Layers } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const ServicesPage = ({ onOpenContact }) => {
  const SERVICES = [
    {
      id: 'orchard-planting',
      title: '🏡 Turn-Key Commercial Orchard Planting',
      urdu: 'تجارتی باغبان کی تنصیب',
      badge: 'Most Popular Service',
      desc: 'Complete turn-key commercial fruit orchard planting (1 Kanal to 100+ Acres) across Punjab & Sindh. Includes pit digging, organic leaf compost mixture, grafted saplings, and drip irrigation setup.',
      features: [
        '3ft x 3ft Pits Digging & Soil Treatment',
        'Certified Grafted Mango, Guava & Kinnu Saplings',
        'Organic Leaf Mold & Neem Cake Compost',
        '12-Month Horticulturist Growth Warranty'
      ],
      price: 'PKR 145,000 / Acre'
    },
    {
      id: 'estate-palm-transplant',
      title: '🌴 Royal Date Palm & Mature Tree Transplanting',
      urdu: 'پرانے اور بڑے درختاں کی ترسیل',
      badge: 'Villa & Farmhouse Special',
      desc: 'Specialized crane lifting and root-ball transplanting of 20ft-30ft Mature Royal Date Palms, Washingtonia, and ancient Olive trees for estate entrances.',
      features: [
        'Heavy Crane Lifting & Protective Root Wrapping',
        'Transplant Anti-Shock Root Fertilizer Application',
        'On-Site Landscaping Alignment',
        '100% Tree Survival Rate Guarantee'
      ],
      price: 'PKR 12,000+ per Tree'
    },
    {
      id: 'villa-landscaping',
      title: '🏛️ Architectural Villa & Farmhouse Landscaping',
      urdu: 'ویلز اور فارم ہاؤس لینڈ سکیپنگ',
      badge: 'Turn-Key Landscaping',
      desc: 'End-to-end landscape design and execution for luxury villas, commercial plazas, and private estate farmhouses.',
      features: [
        'Custom 2D/3D Garden Master Plan',
        'Zoysia Fine Lawn Grass Turf Laying',
        'Automated Sprinkler System Setup',
        'Seasonal Flowering Plants & Hedge Planting'
      ],
      price: 'Custom Project Quote'
    },
    {
      id: 'lawn-grass-installation',
      title: '🌾 Fine Zoysia & Bermuda Lawn Grass Turf',
      urdu: 'فائن لان گھاس کی تنصیب',
      badge: 'Premium Lawn Turf',
      desc: 'Freshly harvested fine Zoysia and Bermuda lawn grass carpet rolls delivered and laid directly on treated topsoil.',
      features: [
        'Fresh Carpet Roll Harvesting from Nursery Fields',
        'Leveling & Topsoil Sand Preparation',
        'First Week Intensive Watering Setup',
        'Weed-Free Soft Velvet Finish'
      ],
      price: 'PKR 25 - 45 / Sq. Ft.'
    }
  ];

  const handleServiceWhatsApp = (serviceTitle) => {
    const text = `*COMMERCIAL SERVICE INQUIRY — RAHMAN NURSERY FARM*
------------------------------------------------
• *Service Selected:* ${serviceTitle}
------------------------------------------------
Hello Ansar Hussain (0304-0450065)!
I am submitting a commercial service inquiry from Rahman Nursery Farm website. Please share consultation details, field visit timeline, and cost quotation. Thank you!`;

    window.open(`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-emerald-950 pt-36 pb-20 px-4 sm:px-6 lg:px-12 pointer-events-auto">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Top Header Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white shadow-2xl border border-amber-400/30">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black text-amber-300 bg-amber-950/80 border border-amber-400/40 mb-3 uppercase tracking-wider">
            <Wrench className="w-4 h-4 text-amber-400" />
            <span>50+ YEARS EXPERT SERVICES • PAKISTAN HUB</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-2 leading-tight">
            Nursery Services & Villa Landscaping
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200 font-bold max-w-3xl leading-relaxed">
            Professional orchard installation, mature palm tree transplanting, and luxury farmhouse landscaping executed by senior horticulturists.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-[10px] font-black uppercase">
                    {srv.badge}
                  </span>
                  <span className="text-xs font-black text-amber-700">{srv.urdu}</span>
                </div>

                <h3 className="font-serif text-2xl font-black text-emerald-950 mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 font-bold leading-relaxed mb-6">
                  {srv.desc}
                </p>

                <div className="space-y-2 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-[10px] font-black text-emerald-900 uppercase tracking-wide block mb-1">What's Included:</span>
                  {srv.features.map((feat, i) => (
                    <div key={i} className="text-xs font-bold text-slate-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-slate-400 font-black uppercase">Estimated Rate</div>
                  <div className="font-serif text-lg font-black text-emerald-900">{srv.price}</div>
                </div>

                <button
                  onClick={() => handleServiceWhatsApp(srv.title)}
                  className="px-5 py-3 rounded-2xl text-xs font-black bg-emerald-800 text-white hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Book Service Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
