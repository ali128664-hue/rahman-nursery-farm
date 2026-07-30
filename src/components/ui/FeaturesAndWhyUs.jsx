import React, { useState } from 'react';
import { ShieldCheck, Truck, UserCheck, Sparkles, Sprout, Award, ChevronDown, ChevronUp, BookOpen, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BOTANICAL_CARE_GUIDES, FREQUENTLY_ASKED_QUESTIONS } from '../../data/plantCatalog';

export const FeaturesAndWhyUs = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const features = [
    {
      icon: ShieldCheck,
      title: 'Acclimatized Plants',
      description: 'Grown and conditioned specifically for Pakistani weather variations in Lahore, Islamabad, Karachi, and Peshawar.'
    },
    {
      icon: UserCheck,
      title: 'Expert Horticulturists',
      description: 'Over 50 years of continuous agricultural experience crafting healthy root systems and leaf foliage.'
    },
    {
      icon: Truck,
      title: 'Nationwide Express Delivery',
      description: 'Specialized protective wooden crate packaging ensuring zero damage during transport across all major PK cities.'
    },
    {
      icon: Sprout,
      title: 'Organic Soil Formulations',
      description: 'Enriched with natural leaf mold, neem cake, and micronutrients for vigorous root growth.'
    },
    {
      icon: Award,
      title: '1-Year Landscape Guarantee',
      description: 'All villa & farmhouse landscaping projects include free quarterly maintenance checkups & plant replacement warranty.'
    },
    {
      icon: Sparkles,
      title: 'Direct WhatsApp Service',
      description: 'No complicated registration required. Order via WhatsApp (0304-0450065) directly with real plant photos sent before dispatch.'
    }
  ];

  return (
    <div className="relative z-10 pointer-events-auto space-y-16 py-16 px-4 md:px-12 max-w-7xl mx-auto">
      {/* 1. VIP Features Grid */}
      <section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-amber-700 uppercase tracking-widest block mb-2">
            THE RAHMAN NURSERY DIFFERENCE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-emerald-950 leading-tight">
            Why Luxury Homeowners & Growers Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-3xl flex flex-col justify-between group hover:border-amber-400 bg-white border border-emerald-200/80 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-800 text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6 text-amber-300" />
                  </div>
                  <h3 className="font-serif text-lg font-black text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-emerald-900 leading-relaxed font-bold">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. Seasonal Botanical Care Masterclass */}
      <section className="p-8 md:p-10 rounded-3xl border border-amber-300/60 shadow-2xl bg-white/95 backdrop-blur-xl">
        <div className="flex items-center gap-3 text-amber-700 font-black text-xs uppercase tracking-widest mb-2">
          <BookOpen className="w-4 h-4 text-emerald-700" />
          <span>HORTICULTURAL CARE MASTERCLASS</span>
        </div>
        <h2 className="font-serif text-2xl md:text-4xl font-black text-emerald-950 mb-8">
          Pakistani Seasonal Botanical Guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BOTANICAL_CARE_GUIDES.map((guide, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="text-3xl mb-3">{guide.icon}</div>
              <div className="text-[10px] font-black text-amber-700 uppercase mb-1 tracking-wider">{guide.season}</div>
              <h3 className="font-serif font-black text-emerald-950 text-lg mb-3">{guide.title}</h3>
              <ul className="space-y-2.5 text-xs text-emerald-900 font-bold">
                {guide.tips.map((tip, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-black">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Frequently Asked Questions (FAQ) Accordion */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-amber-700 font-black text-xs uppercase tracking-widest mb-2">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>EXPERT ANSWERS</span>
          </div>
          <h2 className="font-serif text-2xl md:text-4xl font-black text-emerald-950">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FREQUENTLY_ASKED_QUESTIONS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-emerald-200 bg-white shadow-md"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left font-serif font-black text-emerald-950 text-base md:text-lg flex items-center justify-between gap-4"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs md:text-sm text-emerald-900 font-bold leading-relaxed border-t border-slate-100 bg-slate-50/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
