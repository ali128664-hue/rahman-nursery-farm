import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote, CheckCircle2, MapPin, ShieldCheck, TrendingUp, Users, Award } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ch. Tariq Mahmood',
    designation: 'Commercial Developer & Farm Owner',
    city: 'DHA Phase 6, Lahore',
    initial: 'T',
    color: 'from-emerald-700 to-emerald-900',
    comment: 'Rahman Nursery transformed our 5-Kanal DHA villa garden and 15-Acre Chaunsa Mango orchard. Their 18ft Royal Date Palms and grafted fruit saplings have a 100% survival rate. Ansar Hussain managed nationwide truck cargo perfectly!',
    rating: 5,
  },
  {
    name: 'Malik Hammad Awais',
    designation: 'Commercial Orchard Developer',
    city: 'Royal Palm City, Arifwala',
    initial: 'H',
    color: 'from-amber-600 to-amber-800',
    comment: 'Purchased 400 grafted China Guava saplings for our high-density commercial orchard. Plant quality was top-tier directly from Chak Hassan Arain fields. Commercial harvest started in under 14 months!',
    rating: 5,
  },
  {
    name: 'Dr. Ayesha & Engr. Kamran',
    designation: 'Farmhouse Estate Owners',
    city: 'Bahria Agro Farms, Islamabad',
    initial: 'A',
    color: 'from-rose-600 to-rose-900',
    comment: 'Ordered mature Pink Cassia Nodosa flowering trees and exotic Monsteras for our Islamabad farmhouse. Plants arrived in pristine protective wooden crates via express dispatch. Unmatched quality and horticulture guidance!',
    rating: 5,
  },
  {
    name: 'Sardar Jahangir Khan',
    designation: 'Fruit Exporter & Agro Estate Owner',
    city: 'Multan Agro Estate',
    initial: 'J',
    color: 'from-orange-600 to-orange-900',
    comment: 'We planted 25 Acres of Export Quality grafted Chaunsa & Sindhri trees via Rahman Nursery\'s turn-key Bagh Packages. Deep pit preparation, organic leaf manure, and drip line layout were executed flawlessly.',
    rating: 5,
  },
  {
    name: 'Syed Murtaza Shah',
    designation: 'Real Estate Investor',
    city: 'Emaar Oceanfront, Karachi',
    initial: 'M',
    color: 'from-blue-700 to-blue-900',
    comment: 'Ordered coastal-acclimatized Royal Palms, Washingtonia, and Bougainvillea for our seafront penthouse rooftop. Excellent salt-resilient stock and fast WhatsApp order coordination with Ansar Hussain.',
    rating: 5,
  },
  {
    name: 'Ch. Waseem Akram',
    designation: 'Textile Industrialist',
    city: 'Canal Expressway, Faisalabad',
    initial: 'W',
    color: 'from-indigo-700 to-indigo-900',
    comment: 'Installed Zoysia lawn turf, indoor air-purifier foliage, and mature Ficus canopy trees across our industrial unit and personal residence. Authentic direct farm prices without middleman markups.',
    rating: 5,
  },
  {
    name: 'Mian Muhammad Farooq',
    designation: 'Landowner & Progressive Farmer',
    city: 'Okara Bypass, Renala Khurd',
    initial: 'F',
    color: 'from-teal-700 to-teal-900',
    comment: 'Being in the agricultural belt, I only buy from certified growers. Baba Shareef\'s family at Chak Hassan Arain has been the gold standard for over 50 years. Best grafted fruit saplings in Punjab!',
    rating: 5,
  },
  {
    name: 'Brig. (R) Tariq Hameed',
    designation: 'Villa Resident & Collector',
    city: 'Naval Anchorage, Islamabad',
    initial: 'T',
    color: 'from-slate-600 to-slate-900',
    comment: 'Superb variety of certified fruit plants and ornamental flowering trees. Ansar Hussain provided 24/7 care guidance on WhatsApp. Highly recommended for commercial and home planting across Pakistan.',
    rating: 5,
  },
];

// Duplicate for seamless loop
const ALL = [...REVIEWS, ...REVIEWS];

const STATS = [
  { icon: <Users className="w-5 h-5" />, value: '5,000+', label: 'Happy Clients' },
  { icon: <TrendingUp className="w-5 h-5" />, value: '50+ Yrs', label: 'Farm Heritage' },
  { icon: <Award className="w-5 h-5" />, value: '100%', label: 'Certified Stock' },
  { icon: <ShieldCheck className="w-5 h-5" />, value: '4.9 / 5', label: 'Avg. Rating' },
];

export const ReviewsSection = () => {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let raf;
    const speed = 0.6;

    const step = () => {
      if (!paused) {
        pos += speed;
        // Reset when we've scrolled half (the duplicated half)
        const half = track.scrollWidth / 2;
        if (pos >= half) pos = 0;
        track.style.transform = `translateX(-${pos}px)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <section className="relative z-10 py-20 overflow-hidden bg-gradient-to-b from-gray-950 via-emerald-950 to-gray-950 pointer-events-auto">

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-emerald-400 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-amber-400 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black text-amber-400 border border-amber-500/50 bg-amber-500/10 mb-4">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>VERIFIED CLIENT TESTIMONIALS — 5,000+ SATISFIED CUSTOMERS</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-white mb-3">
            Pakistan's Most Trusted{' '}
            <span className="text-emerald-400">Nursery Farm</span>
          </h2>
          <p className="text-sm text-gray-400 font-medium max-w-2xl mx-auto">
            From 100-Acre commercial fruit orchards in Multan to DHA luxury villas in Lahore and Karachi oceanfront penthouses — Rahman Nursery Farm delivers.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {STATS.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 text-center flex flex-col items-center gap-2">
              <div className="text-emerald-400">{stat.icon}</div>
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-scroll Marquee */}
      <div
        className="overflow-hidden w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-5 w-max px-6"
          style={{ willChange: 'transform' }}
        >
          {ALL.map((rev, idx) => (
            <div
              key={idx}
              className="w-[320px] flex-shrink-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col justify-between relative overflow-hidden hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300 cursor-default shadow-xl"
            >
              {/* Big faded quote */}
              <Quote className="absolute -right-3 -top-2 w-20 h-20 text-white/5" />

              {/* Avatar + Stars row */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${rev.color} flex items-center justify-center text-white font-black text-base flex-shrink-0 shadow-lg`}>
                  {rev.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif font-black text-white text-sm truncate">{rev.name}</div>
                  <div className="text-[10px] text-gray-400 font-bold truncate">{rev.designation}</div>
                </div>
                <div className="flex-shrink-0 px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span className="text-[9px] font-black text-emerald-400">Verified</span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-xs text-gray-300 leading-relaxed italic flex-1">
                &ldquo;{rev.comment}&rdquo;
              </p>

              {/* Location */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                <span className="text-[10px] font-black text-amber-300 truncate">{rev.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pause hint */}
      <div className="text-center mt-6">
        <span className="text-[10px] text-gray-600 font-medium">Hover to pause · Scroll left/right to explore</span>
      </div>

    </section>
  );
};
