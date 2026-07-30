import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, ChevronDown, ChevronUp, MapPin, Leaf, Sparkles, Award } from 'lucide-react';
import { ORCHARD_SERVICES } from '../../data/plantCatalog';

const WHATSAPP_NUMBER = '923040450065';

export const OrchardBaghSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  const buildWhatsApp = (orchard) => {
    const text = `Assalam o Alaikum Ansar Bhai (03040450065),

Main aapki website se contact kar raha hun.

*Bagh Inquiry:* ${orchard.title}
*Price:* PKR ${orchard.pricePerAcre.toLocaleString()} per acre

Mujhe is bagh ke baare mein detail chahiye.

Shukriya — Rahman Nursery Farm website`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="orchard" className="relative z-10 pointer-events-auto py-20 px-4 md:px-12 bg-gradient-to-b from-[#FDFBF7] via-[#F3F8F4] to-[#FDFBF7] border-t border-emerald-200/60">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black text-emerald-950 border border-emerald-300 bg-emerald-50 mb-3">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>BAGH LAGWAO — FULL ORCHARD PLANTING SERVICE</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-emerald-950 mb-4">
            Turn-Key Fruit Orchard Installation
          </h2>
          <p className="text-base text-emerald-900 max-w-3xl mx-auto font-bold leading-relaxed">
            From a single kanal to 100+ acres —{' '}
            <strong className="text-emerald-800 underline">Rahman Nursery Farm</strong> provides
            full turn-key Amrood, Mango, Kinnu, Anar, Ber & timber orchard planting
            services across Lahore, Sahiwal, Pakpattan, Arifwala & all Punjab.
          </p>

          {/* Key stats */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {[
              { label: 'Orchards Planted', value: '500+ Acres', icon: '🌳' },
              { label: 'Varieties Available', value: '20+ Fruit Types', icon: '🍊' },
              { label: 'Districts Covered', value: 'All Punjab', icon: '📍' },
              { label: 'Direct Call / WhatsApp', value: '03040450065', icon: '📱' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/95 border border-emerald-200 rounded-2xl px-4 py-3 shadow-md">
                <span className="text-2xl">{stat.icon}</span>
                <div className="text-left">
                  <div className="text-[10px] text-amber-700 font-black uppercase tracking-wider">{stat.label}</div>
                  <div className="text-sm font-black text-emerald-950">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Orchard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ORCHARD_SERVICES.map((orchard, idx) => {
            const isOpen = expanded === orchard.id;
            return (
              <motion.div
                key={orchard.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white rounded-3xl border border-emerald-200 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card top strip */}
                  <div
                    className="px-6 py-5 flex items-center justify-between"
                    style={{ background: `linear-gradient(135deg, ${orchard.color}ee, ${orchard.color})` }}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-3xl">{orchard.emoji}</span>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-amber-300 font-black">
                          {orchard.urdu}
                        </div>
                        <h3 className="font-serif font-black text-white text-lg leading-tight">
                          {orchard.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <div className="text-[10px] text-white/80 font-bold">Starting From</div>
                      <div className="font-serif text-xl font-black text-white">
                        PKR {orchard.pricePerAcre.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-amber-300 font-extrabold">per acre</div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <p className="text-xs text-emerald-950 leading-relaxed font-bold mb-5">
                      {orchard.description}
                    </p>

                    {/* Quick info row */}
                    <div className="grid grid-cols-2 gap-2.5 mb-5 text-[11px]">
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5">
                        <span className="font-black text-emerald-900 block">🌱 Saplings</span>
                        <span className="text-emerald-800 font-bold">{orchard.saplingCount}</span>
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5">
                        <span className="font-black text-emerald-900 block">📏 Spacing</span>
                        <span className="text-emerald-800 font-bold">{orchard.spacing}</span>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5">
                        <span className="font-black text-amber-900 block">🍊 First Fruit</span>
                        <span className="text-emerald-800 font-bold">{orchard.firstFruit}</span>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5">
                        <span className="font-black text-amber-900 block">📊 Yield/Acre</span>
                        <span className="text-emerald-800 font-bold">{orchard.yieldPerAcre}</span>
                      </div>
                    </div>

                    {/* Best for */}
                    <div className="flex items-start gap-2 mb-5 text-[11px] bg-slate-50 border border-slate-200 rounded-xl p-3">
                      <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-black text-emerald-950">Best For: </span>
                        <span className="text-emerald-900 font-bold">{orchard.bestFor}</span>
                      </div>
                    </div>

                    {/* Expandable includes list */}
                    <button
                      onClick={() => toggle(orchard.id)}
                      className="w-full flex items-center justify-between text-xs font-black text-emerald-900 hover:text-emerald-700 transition-colors mb-3"
                    >
                      <span>📦 What's Included in Service</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-amber-600" /> : <ChevronDown className="w-4 h-4 text-amber-600" />}
                    </button>

                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-2 mb-5 overflow-hidden"
                      >
                        {orchard.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-emerald-900 font-bold">
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                        <li className="pt-2 flex flex-wrap gap-1.5">
                          {orchard.varieties.map((v, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-black border border-emerald-200">
                              {v}
                            </span>
                          ))}
                        </li>
                      </motion.ul>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                  <a
                    href={buildWhatsApp(orchard)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 text-white transition-all shadow-md hover:opacity-95"
                    style={{ background: `linear-gradient(135deg, ${orchard.color}ee, ${orchard.color})` }}
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    Order This Bagh — WhatsApp 03040450065
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 border border-amber-400/60 rounded-3xl p-8 md:p-10 text-white text-center shadow-2xl"
        >
          <div className="text-4xl mb-3">🌳🍊🥭🍐❤️</div>
          <h3 className="font-serif text-2xl md:text-3xl font-black mb-3 text-amber-300">
            Custom Bagh & Mixed Orchard Planning
          </h3>
          <p className="text-sm text-emerald-100 font-bold max-w-2xl mx-auto mb-6 leading-relaxed">
            Want a mix of China Guava + Mango + Kinnu + Date Palms on your land? We design{' '}
            <strong className="text-white underline">custom mixed orchards</strong> tailored to your soil,
            water quality, and budget. Free site visit for orders above 2 acres.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Assalam o Alaikum Ansar Bhai (03040450065), mujhe apni zameen par bagh lagwana hai. Kripya detail aur quotation bhejein. Rahman Nursery Farm website se contact kar raha hun.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 btn-luxury-gold px-9 py-4 rounded-full text-sm font-black text-white shadow-xl hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Get Free Bagh Quotation — 03040450065</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
