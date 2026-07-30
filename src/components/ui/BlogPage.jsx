import React from 'react';
import { BookOpen, Sparkles, Calendar, ChevronRight, Sprout, Sun, Droplets, ShieldCheck } from 'lucide-react';
import { BOTANICAL_CARE_GUIDES } from '../../data/plantCatalog';

export const BlogPage = ({ onOpenStore }) => {
  const BLOG_POSTS = [
    {
      id: 'mango-planting-guide',
      title: 'Complete Guide to Planting Grafted Chaunsa & Anwar Ratol Mango Orchards',
      category: 'Fruit Orchard Masterclass',
      date: 'July 2026',
      author: 'Horticulturist Ansar Hussain',
      readTime: '6 min read',
      excerpt: 'Learn the exact pit preparation method, leaf compost ratios, and irrigation scheduling required to harvest sweet commercial mangoes in Punjab soil.',
      tips: [
        'Dig 3ft x 3ft pits 20 days prior to planting',
        'Mix 50% loamy soil with 30% organic leaf mold and 20% river sand',
        'Water deeply every 3 days during summer heat'
      ]
    },
    {
      id: 'indoor-air-purifier-plants',
      title: 'Top 7 NASA-Approved Indoor Air Purifying Plants for Pakistani Homes',
      category: 'Indoor Sanctuary',
      date: 'June 2026',
      author: 'Rahman Nursery Research Team',
      readTime: '4 min read',
      excerpt: 'How Monstera Deliciosa, Snake Plants, and Peace Lilies absorb chemical toxins like Formaldehyde and Benzene from air-conditioned rooms.',
      tips: [
        'Wipe leaves once a week with moist cloth for maximum photosynthesis',
        'Keep Snake Plants in bedrooms for night oxygen release',
        'Avoid overwatering: check soil dryness 2 inches deep'
      ]
    },
    {
      id: 'cassia-nodosa-landscape-guide',
      title: 'Pink Cassia Nodosa: The Ultimate Shade & Flowering Tree for Pakistani Villas',
      category: 'Landscape Architecture',
      date: 'May 2026',
      author: 'Senior Botanist Baba Shareef Legacy',
      readTime: '5 min read',
      excerpt: 'Why Pink Cassia Nodosa (Pink Shower Tree) is the most sought-after ornamental flowering tree across Lahore, Islamabad, and Faisalabad.',
      tips: [
        'Flowers profusely from May to September with fiery pink clusters',
        'Extremely heat tolerant up to 48°C in summer',
        'Prune lower branches in winter for clean canopy elevation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F8F5] text-gray-900 pt-36 pb-20 px-4 sm:px-6 lg:px-12 pointer-events-auto">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white shadow-2xl border border-amber-400/30">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black text-amber-300 bg-amber-950/80 border border-amber-400/40 mb-3 uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>BOTANICAL KNOWLEDGE HUB • CARE GUIDES & BLOG</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-2 leading-tight">
            Nursery Blog & Botanical Guides
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200 font-bold max-w-2xl leading-relaxed">
            Practical advice from 50+ years of hands-on agricultural experience in Chak Hassan Arain fields.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl p-6 border border-emerald-200 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-black text-amber-700 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 uppercase">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-serif text-xl font-black text-gray-900 mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2 mb-4">
                  <span className="text-[10px] font-black text-emerald-900 uppercase tracking-wide block">Key Care Takeaways:</span>
                  {post.tips.map((tip, i) => (
                    <div key={i} className="text-[11px] font-bold text-slate-700 flex items-start gap-2">
                      <Sprout className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black">
                <span className="text-slate-400">{post.author}</span>
                {onOpenStore && (
                  <button
                    onClick={onOpenStore}
                    className="text-emerald-800 hover:text-gray-900 flex items-center gap-1 font-black"
                  >
                    <span>Browse Plants</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference Care Guides Table */}
        <div className="p-8 rounded-3xl bg-white border border-emerald-200 shadow-xl space-y-6">
          <h2 className="font-serif text-2xl font-black text-gray-900">
            Botanical Care & Irrigation Reference Table
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BOTANICAL_CARE_GUIDES.map((guide, index) => (
              <div key={index} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-serif text-sm font-black text-gray-900">{guide.title}</h4>
                <div className="text-[11px] font-bold text-emerald-800">☀️ Light: {guide.sunlight}</div>
                <div className="text-[11px] font-bold text-blue-700">💧 Water: {guide.watering}</div>
                <p className="text-[11px] text-slate-600 font-semibold leading-relaxed pt-1 border-t border-slate-200">
                  {guide.proTip}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

