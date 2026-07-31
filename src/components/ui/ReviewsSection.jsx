import React from 'react';
import { Star, Quote, CheckCircle2, MapPin, Building2, ShieldCheck } from 'lucide-react';

export const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Chaudhry Tariq Mahmood',
      designation: 'Commercial Developer & Farm Owner',
      city: 'DHA Phase 6, Lahore',
      rating: 5,
      comment: 'Rahman Nursery transformed our 5-Kanal DHA villa garden and 15-Acre Chaunsa Mango orchard in Sahiwal. Their 18ft Royal Date Palms and grafted fruit saplings have a 100% survival rate. Ansar Hussain managed nationwide truck cargo and installation perfectly!'
    },
    {
      name: 'Malik Hammad Awais',
      designation: 'Commercial Orchard Developer',
      city: 'Royal Palm City & Qaboola, Arifwala',
      rating: 5,
      comment: 'Purchased 400 grafted China Guava (Amrood) saplings for our high-density commercial orchard. Plant quality was top-tier directly from Baba Shareef\'s Chak Hassan Arain fields. Commercial harvest started in under 14 months!'
    },
    {
      name: 'Dr. Ayesha Malik & Engr. Kamran',
      designation: 'Farmhouse Estate Owners',
      city: 'Bahria Agro Farms & Gulberg Greens, Islamabad',
      rating: 5,
      comment: 'Ordered mature Pink Cassia Nodosa flowering trees and exotic Monsteras for our Islamabad farmhouse. The plants arrived in pristine protective wooden crates via express dispatch. Unmatched quality and horticulture guidance!'
    },
    {
      name: 'Sardar Jahangir Khan',
      designation: 'Fruit Exporter & Agro Estate Owner',
      city: 'Multan Citrus & Mango Agro Estate',
      rating: 5,
      comment: 'We planted 25 Acres of Export Quality Multani Chaunsa & Sindhri grafted trees through Rahman Nursery\'s turn-key Bagh Packages. Deep pit preparation, organic leaf manure, and drip line layout were executed flawlessly.'
    },
    {
      name: 'Syed Murtaza Shah',
      designation: 'Real Estate Investor',
      city: 'Emaar Oceanfront & Creek Vistas, Karachi',
      rating: 5,
      comment: 'Ordered coastal-acclimatized Royal Palms, Washingtonia, and Bougainvillea for our seafront penthouse rooftop. Excellent salt-resilient stock and fast direct WhatsApp order coordination with Ansar Hussain.'
    },
    {
      name: 'Chaudhry Waseem Akram',
      designation: 'Textile Industrialist',
      city: 'Canal Expressway, Faisalabad',
      rating: 5,
      comment: 'Installed Zoysia lawn turf, indoor air-purifier foliage, and mature Ficus canopy trees across our industrial unit and personal residence. Rahman Nursery Farm delivers authentic direct farm prices without middleman markups.'
    },
    {
      name: 'Mian Muhammad Farooq',
      designation: 'Landowner & Progressive Farmer',
      city: 'Okara Bypass & Renala Khurd',
      rating: 5,
      comment: 'Being in the agricultural belt, I only buy from certified growers. Baba Shareef\'s family at Chak Hassan Arain has been the gold standard for over 50 years. Best grafted fruit saplings in Punjab!'
    },
    {
      name: 'Brigadier (R) Tariq Hameed',
      designation: 'Villa Resident',
      city: 'Sector F-7/2 & Naval Anchorage, Islamabad',
      rating: 5,
      comment: 'Superb variety of certified fruit plants and ornamental flowering trees. Ansar Hussain provided 24/7 care guidance on WhatsApp. Highly recommended for commercial and home planting across Pakistan.'
    }
  ];

  return (
    <section className="relative z-10 py-20 px-4 md:px-12 max-w-7xl mx-auto pointer-events-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black text-amber-800 border border-amber-300 bg-amber-50 mb-3">
          <ShieldCheck className="w-4 h-4 text-amber-600" />
          <span>VERIFIED CLIENT TESTIMONIALS & REVIEWS</span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-black text-gray-900 mb-3">
          Trusted by Pakistan’s Premier Estates & Farmers
        </h2>
        <p className="text-sm text-gray-600 font-medium">
          From 100-Acre commercial fruit orchards to DHA luxury villas and Karachi oceanfront penthouses.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl flex flex-col justify-between relative overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300"
          >
            <Quote className="w-16 h-16 text-gray-200/50 absolute -right-2 -top-2" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-green-50 text-green-800 border border-green-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                  Verified Buyer
                </span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed italic font-medium mb-5">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-3 border-t border-gray-100">
              <h4 className="font-serif font-black text-gray-900 text-sm">{rev.name}</h4>
              <p className="text-[11px] text-gray-500 font-bold">{rev.designation}</p>
              <div className="text-[10px] text-amber-700 font-black flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-amber-600" />
                <span>{rev.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

