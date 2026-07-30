import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Chaudhry Tariq Mahmood',
      city: 'DHA Phase 6, Lahore',
      rating: 5,
      comment: 'Rahman Nursery transformed our 2-Kanal villa lawn. Their 18ft Royal Palms and stone stream make our entrance look like a 5-star Dubai resort. Extraordinary service and healthy plants!'
    },
    {
      name: 'Dr. Ayesha Malik',
      city: 'Bahria Agro Farms, Islamabad',
      rating: 5,
      comment: 'I ordered Monstera Deliciosa and Italian Olive trees on WhatsApp. The delivery was fast, plants arrived in pristine wooden crates, and the live catalog on their site matched the real plants 100%!'
    },
    {
      name: 'Sheraz Khan',
      city: 'Emaar Oceanfront, Karachi',
      rating: 5,
      comment: 'Their team designed a salt-resilient rooftop green garden for our penthouse. The drip irrigation and lighting integration were handled professionally within budget.'
    }
  ];

  return (
    <section className="relative z-10 py-20 px-4 md:px-12 max-w-7xl mx-auto pointer-events-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-black text-amber-700 uppercase tracking-widest block mb-2">
          CLIENT TESTIMONIALS
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-black text-emerald-950">
          Trusted by Pakistan’s Finest Estates
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden bg-white border border-emerald-200 shadow-xl hover:shadow-2xl hover:border-amber-400 transition-all duration-300"
          >
            <Quote className="w-20 h-20 text-emerald-900/5 absolute -right-2 -top-2" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Verified Buyer
                </span>
              </div>
              <p className="text-xs md:text-sm text-emerald-950 leading-relaxed italic font-bold mb-6">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h4 className="font-serif font-black text-emerald-950 text-base">{rev.name}</h4>
              <p className="text-xs text-amber-700 font-black">{rev.city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
