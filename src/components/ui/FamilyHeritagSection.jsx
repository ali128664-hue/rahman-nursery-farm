import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone, MessageCircle, MapPin, Building2, ShieldCheck, Award, FileCheck } from 'lucide-react';

export const FamilyHeritagSection = ({ onOpenContact }) => {

  // Sons of Muhammad Shareef (Late) — nursery owners/operators
  const nurserySons = [
    {
      name: 'Muhammad Saleem',
      role: 'Co-Owner & Senior Horticulturist',
      urdu: 'محمد سلیم',
      note: 'Son of Muhammad Shareef (Late). With over 30 years of deep botanical knowledge, Muhammad Saleem manages the farm\'s plant cultivation, quality control, and senior horticulture operations at Chak Hassan Arain.',
      icon: '🌿',
    },
    {
      name: 'Muhammad Rafiq',
      role: 'Co-Owner & Cassia Nodosa Specialist',
      urdu: 'محمد رفیق',
      note: 'Son of Muhammad Shareef (Late). Master cultivator specializing in Cassia Nodosa (Pink Shower Tree) of all sizes and heights, along with managing day-to-day nursery growing cycles across Arifwala, Sahiwal, and Pakpattan.',
      icon: '🌿',
    },
    {
      name: 'Abdul Hameed',
      role: 'Son of Muhammad Shareef (Late) — Traditional Healer',
      urdu: 'عبدالحمید',
      note: "Son of Muhammad Shareef (Late). Abdul Hameed continues his father's blessed skill as a <strong>Haddi Jorne Wala (ہڈی جوڑنے والا)</strong> — a traditional bone-setter. Just as Baba Shareef helped people in the community heal broken bones without surgery, Abdul Hameed carries this rare and respected gift forward today.",
      icon: '🦴',
      special: true,
    },
  ];

  // Next generation — currently running operations
  const nextGen = [
    {
      name: 'Bashart Saleem',
      role: 'Physical Nursery Branch Manager — Qaboola & Arifwala',
      urdu: 'بشارت سلیم',
      phone: '0344-5155160',
      icon: '🏡',
      address: 'Barakt Chowk, Opposite Royal Palm City, Qaboola',
      note: 'Manages physical nursery operations, walk-in customers, and plant stock at the Qaboola / Royal Palm City branch.',
    },
    {
      name: 'Kashir Saleem',
      role: 'Physical Nursery Branch Manager — Pakpattan Road',
      urdu: 'کاشر سلیم',
      phone: '0304-1001600',
      icon: '🏡',
      address: 'Ada 17 Wali Puli, Pakpattan Rd, near Al-Madni Cotton Mill, Arifwala (57450)',
      note: 'Manages plant supply, nursery dispatch, and physical sales at the main Pakpattan Road Ada 17 branch in Arifwala.',
    },
    {
      name: 'Ansar Hussain',
      role: 'Senior Sales & Digital Delivery Manager',
      urdu: 'انصر حسین (ڈیجیٹل ڈلیوری و سیلز منیجر)',
      phone: '03040450065',
      linkedin: 'https://www.linkedin.com/in/chansarhussain/',
      icon: '📱',
      highlight: true,
      address: 'Main Head Farm: Chak Hassan Arain (Nationwide Dispatch)',
      note: 'Leads digital sales, customer consultation, plant orders, commercial orchard bookings, express truck cargo dispatches, and nationwide delivery tracking across all major cities of Pakistan.',
    },
    {
      name: 'Muhammad Kashif',
      role: 'Senior Software Engineer & Digital Tech Lead',
      urdu: 'محمد کاشف (سافٹ ویئر انجینئر و ٹیک لیڈ)',
      linkedin: 'https://www.linkedin.com/in/muhammad-kashif-a3a6a0144/',
      icon: '💻',
      isTech: true,
      address: 'Software Engineering & IT Architecture Lead',
      note: 'Brother of Bashart Saleem & Kashir Saleem (sons of Baba Shareef family). Senior Software Engineer working at a leading software house; designs and architects Rahman Nursery Farm\'s e-commerce web platform, digital infrastructure, and smart farm technology.',
    },
  ];

  return (
    <section className="relative z-10 pointer-events-auto py-20 px-4 md:px-12 bg-gradient-to-b from-[#FDFBF7] via-white to-[#FDFBF7] border-t border-emerald-200/60">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black text-amber-800 border border-amber-300 bg-amber-50 mb-3">
            <Heart className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>OVER 50 YEARS OF FAMILY & FARM HERITAGE</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-emerald-950 mb-4">
            50+ Years of Nature's Legacy
          </h2>
          <p className="text-base text-emerald-900 max-w-2xl mx-auto font-bold leading-relaxed">
            Rooted in the soil of{' '}
            <strong className="text-emerald-800 underline">Chak Hassan Arain</strong> — 
            our family has dedicated over 50+ years to growing Pakistan's finest plants,
            nurturing trees, and building green landscapes across the nation.
          </p>
        </motion.div>

        {/* FOUNDER HERO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 rounded-3xl overflow-hidden shadow-2xl border border-amber-400/80"
        >
          {/* Gold top bar */}
          <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 px-6 py-4 flex items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌱</span>
              <span className="text-sm font-black uppercase tracking-widest text-amber-950">
                Founder & Original Owner — Muhammad Shareef (Late)
              </span>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-amber-950/40 text-amber-200 text-xs font-black border border-amber-300/40">
              محمد شریف (مرحوم) — Baba Shareef
            </span>
          </div>

          {/* Body */}
          <div className="bg-gradient-to-br from-[#FFFDF9] via-emerald-50/50 to-amber-50/50 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Biography column */}
              <div className="md:col-span-2">
                <h3 className="font-serif text-2xl md:text-4xl font-black text-emerald-950 mb-2">
                  Muhammad Shareef <span className="text-emerald-700 font-normal text-xl">(Late)</span>
                </h3>
                <p className="text-xs font-black text-amber-700 uppercase tracking-widest mb-4">
                  Founder, Main Owner & Community Healer — Chak Hassan Arain
                </p>

                <p className="text-sm text-emerald-950 leading-relaxed font-bold mb-4">
                  Muhammad Shareef, lovingly known as <strong>Baba Shareef</strong> throughout
                  the community, was the original founder and main owner of what is today
                  Rahman Nursery Farm. He established this nursery from the blessed soil of
                  <strong> Chak Hassan Arain</strong> with a vision to bring greenery,
                  agriculture, and plant life to the people of South Punjab.
                </p>

                <p className="text-sm text-emerald-950 leading-relaxed font-bold mb-4">
                  Beyond the nursery, Baba Shareef was uniquely gifted with a rare traditional
                  skill — he was a revered{' '}
                  <strong className="text-amber-800">Haddi Jorne Wala (ہڈی جوڑنے والا)</strong>, a traditional
                  bone-setter deeply respected across the community. Whenever someone suffered
                  an accidental fracture or broken bone, they would come to Baba Shareef.
                  With steady hands, deep knowledge, and Allah's blessing, he would carefully
                  set, splint, and heal broken bones — without a hospital or surgery.
                </p>

                <p className="text-sm text-emerald-950 leading-relaxed font-bold">
                  He was also generous with <strong>gifts and charitable giving (Hadia)</strong>
                  — regularly sharing plants, saplings, and provisions with those in need around
                  Chak Hassan Arain. His legacy of generosity, craftsmanship, and love for nature
                  lives on through his sons and grandchildren who continue this work today.
                </p>
              </div>

              {/* Legacy badges column */}
              <div className="flex flex-col gap-3">
                <div className="bg-white border border-emerald-200 rounded-2xl p-4 flex items-start gap-3 shadow-md">
                  <span className="text-2xl flex-shrink-0">🌱</span>
                  <div>
                    <p className="text-xs font-black text-emerald-900 uppercase tracking-wide mb-0.5">Nursery Founder</p>
                    <p className="text-xs text-emerald-800 font-bold">
                      Established Rahman Nursery Farm in Chak Hassan Arain — the original main owner who started it all.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-amber-300 rounded-2xl p-4 flex items-start gap-3 shadow-md">
                  <span className="text-2xl flex-shrink-0">🦴</span>
                  <div>
                    <p className="text-xs font-black text-amber-800 uppercase tracking-wide mb-0.5">Haddi Jorne Wala — ہڈی جوڑنے والا</p>
                    <p className="text-xs text-emerald-800 font-bold">
                      Traditional bone-setter revered across Chak Hassan Arain — people with fractures came to him for healing.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-amber-300/80 rounded-2xl p-4 flex items-start gap-3 shadow-md">
                  <span className="text-2xl flex-shrink-0">🎁</span>
                  <div>
                    <p className="text-xs font-black text-amber-700 uppercase tracking-wide mb-0.5">Charitable & Generous (Hadia)</p>
                    <p className="text-xs text-emerald-800 font-bold">
                      Known for regularly giving plants, saplings, and provisions as gifts to neighbours and the community.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* SONS OF MUHAMMAD SHAREEF */}
        <div className="mb-14">
          <h3 className="font-serif text-2xl font-black text-emerald-950 mb-6 text-center">
            Sons of Muhammad Shareef (Late) — Senior Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nurserySons.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-6 border border-emerald-200 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-3.5 mb-3">
                    <span className="text-3xl p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200">{member.icon}</span>
                    <div>
                      <h4 className="font-serif font-black text-lg text-emerald-950">{member.name}</h4>
                      <p className="text-[11px] font-black text-emerald-700 uppercase tracking-wider">{member.role}</p>
                      <p className="text-xs font-bold text-amber-700">{member.urdu}</p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-900 leading-relaxed font-bold" dangerouslySetInnerHTML={{ __html: member.note }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* NEXT GENERATION & BRANCH MANAGERS */}
        <div className="mb-14">
          <h3 className="font-serif text-xl font-black text-emerald-950 mb-6 flex items-center justify-center gap-3">
            <span className="w-12 h-0.5 bg-emerald-600 rounded-full inline-block" />
            Next Generation — Physical Nurseries, Tech & Digital Operations
            <span className="w-12 h-0.5 bg-emerald-600 rounded-full inline-block" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nextGen.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`rounded-3xl p-6 border flex flex-col justify-between shadow-lg ${
                  member.highlight
                    ? 'bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white border-amber-400'
                    : member.isTech
                    ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 text-white border-blue-400/60'
                    : 'bg-white border-emerald-200 text-emerald-950'
                }`}
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl flex-shrink-0">{member.icon}</span>
                    <div>
                      <h4 className={`font-serif font-black text-base leading-tight ${member.highlight ? 'text-amber-300' : member.isTech ? 'text-blue-300' : 'text-emerald-950'}`}>
                        {member.name}
                      </h4>
                      <p className={`text-[10px] font-black uppercase tracking-wider mt-0.5 ${member.highlight ? 'text-emerald-200' : member.isTech ? 'text-blue-200' : 'text-emerald-700'}`}>
                        {member.role}
                      </p>
                      <p className={`text-xs font-bold ${member.highlight ? 'text-white/80' : member.isTech ? 'text-slate-300' : 'text-emerald-800'}`}>{member.urdu}</p>
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed font-bold mb-4 ${member.highlight ? 'text-emerald-100' : member.isTech ? 'text-slate-300' : 'text-emerald-900'}`}>
                    {member.note}
                  </p>

                  <div className={`p-2.5 rounded-2xl text-[11px] font-bold border ${
                    member.highlight
                      ? 'bg-emerald-950/60 border-emerald-700 text-emerald-200'
                      : member.isTech
                      ? 'bg-slate-950/80 border-slate-700 text-blue-200'
                      : 'bg-slate-50 border-slate-200 text-emerald-950'
                  }`}>
                    <MapPin className="w-3.5 h-3.5 inline mr-1 text-amber-500" />
                    {member.address}
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {member.phone && (
                    <a
                      href={`https://wa.me/92${member.phone.replace(/[^0-9]/g, '').slice(-10)}?text=${encodeURIComponent('Assalam o Alaikum, main Rahman Nursery Farm website se contact kar raha hun.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2.5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md transition-all ${
                        member.highlight
                          ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-black'
                          : 'bg-emerald-700 text-white hover:bg-emerald-800'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Contact: {member.phone}
                    </a>
                  )}

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 bg-[#0A66C2] text-white hover:bg-[#004182] transition-all shadow-md"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1-2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
