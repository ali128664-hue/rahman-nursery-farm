import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Building2, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const ContactPage = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCity, setCustomerCity] = useState('Lahore');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    const text = `*DIRECT CONSULTATION INQUIRY — RAHMAN NURSERY FARM*
------------------------------------------------
• *Customer Name:* ${customerName || 'Valued Visitor'}
• *Phone Number:* ${customerPhone || 'Shared in chat'}
• *Delivery City:* ${customerCity}
• *Inquiry Message:* ${message || 'Plant pricing and orchard consultation query.'}
------------------------------------------------
Hello Ansar Hussain (0304-0450065)!
I am submitting a consultation inquiry from Rahman Nursery Farm website. Please get in touch to discuss plant pricing and consultation. Thank you!`;

    window.open(`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F8F5] text-gray-900 pt-36 pb-20 px-4 sm:px-6 lg:px-12 pointer-events-auto">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white shadow-2xl border border-amber-400/30">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black text-amber-300 bg-amber-950/80 border border-amber-400/40 mb-3 uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>OFFICIAL FARM LOCATIONS & DIRECT HELPLINE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-2 leading-tight">
            Contact & Farm Locations
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200 font-bold max-w-2xl leading-relaxed">
            Visit our 100+ acre nursery fields in Chak Hassan Arain or contact horticulturist Ansar Hussain directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Farm Location Cards */}
          <div className="space-y-6">
            
            {/* Primary Farm Hub */}
            <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-700 font-black">MAIN HEADQUARTERS</span>
                  <h3 className="font-serif text-xl font-black text-gray-900">Rahman Nursery Farm</h3>
                </div>
              </div>

              <div className="space-y-2 text-xs font-bold text-slate-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Chak Hassan Arain, Tehsil Arifwala, District Pakpattan, Punjab, Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>Ansar Hussain: <strong>0304-0450065</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Open 7 Days a Week: 7:00 AM – 7:00 PM</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('Assalam o Alaikum Ansar Bhai (03040450065)! Main Rahman Nursery Farm location and plant availability info lena chahta hu.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl text-xs font-black flex items-center justify-center gap-2 bg-emerald-700 text-white hover:bg-emerald-800 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat Direct on WhatsApp (03040450065)</span>
              </a>
            </div>

            {/* Regional Dispatch Hubs & Leadership Contacts */}
            <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-xl space-y-4">
              <h4 className="font-serif text-base font-black text-gray-900">Digital Leadership & Management Team</h4>
              
              <div className="space-y-3 text-xs font-bold">
                {/* Ansar Hussain Card */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="font-black text-gray-900 text-sm">📱 Ansar Hussain</div>
                      <div className="text-[11px] text-emerald-800 font-bold">Senior Sales & Digital Delivery Manager</div>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/chansarhussain/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-[#0A66C2] text-white text-[11px] font-black flex items-center gap-1 hover:bg-[#004182] transition shadow"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1-2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                    Leads online plant dispatches, customer consultation, WhatsApp plant orders, commercial orchard bookings, and nationwide cargo tracking across Pakistan.
                  </p>
                  <div className="text-xs font-black text-emerald-950">📞 Direct Line: 0304-0450065</div>
                </div>

                {/* Muhammad Kashif Card */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-700 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="font-black text-blue-300 text-sm">💻 Muhammad Kashif</div>
                      <div className="text-[11px] text-slate-300 font-bold">Senior Software Engineer & Digital Tech Lead</div>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/muhammad-kashif-a3a6a0144/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-[#0A66C2] text-white text-[11px] font-black flex items-center gap-1 hover:bg-[#004182] transition shadow"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1-2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
                    Son of Muhammad Saleem, brother of Bashart Saleem & Kashir Saleem (grandson of Baba Shareef Late). Senior Software Engineer working at a software house; heads IT architecture, e-commerce web platform, and farm digital systems.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                    <div className="font-black text-emerald-900">🏡 Bashart Saleem</div>
                    <div className="text-[10px] text-emerald-700">Qaboola Branch Manager</div>
                    <div className="text-[11px] font-black text-emerald-950 mt-0.5">📞 0344-5155160</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                    <div className="font-black text-emerald-900">🏡 Kashir Saleem</div>
                    <div className="text-[10px] text-emerald-700">Pakpattan Rd Branch Manager</div>
                    <div className="text-[11px] font-black text-emerald-950 mt-0.5">📞 0304-1001600</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="p-8 rounded-3xl bg-white border border-emerald-200 shadow-xl space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-black text-gray-900 mb-1">
                Direct Nursery Consultation Form
              </h3>
              <p className="text-xs text-slate-500 font-bold">
                Fill out your requirements below and our lead horticulturist will contact you on WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-gray-900 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-black">Inquiry Composed Successfully!</h4>
                <p className="text-xs font-bold text-slate-600">WhatsApp window has been opened to connect directly with Ansar Hussain.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div>
                  <label className="text-xs font-black text-gray-900 block mb-1">Your Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Chaudhry Tariq"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl text-xs bg-slate-50 border border-slate-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-bold"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-gray-900 block mb-1">Phone / WhatsApp Number:</label>
                  <input
                    type="tel"
                    required
                    placeholder="0300-1234567"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl text-xs bg-slate-50 border border-slate-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-bold"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-gray-900 block mb-1">Delivery City:</label>
                  <select
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl text-xs bg-slate-50 border border-slate-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-bold"
                  >
                    <option value="Lahore">📍 Lahore</option>
                    <option value="Arifwala">📍 Arifwala</option>
                    <option value="Sahiwal">📍 Sahiwal</option>
                    <option value="Pakpattan">📍 Pakpattan</option>
                    <option value="Okara">📍 Okara</option>
                    <option value="Multan">📍 Multan</option>
                    <option value="Islamabad">📍 Islamabad / Rawalpindi</option>
                    <option value="Faisalabad">📍 Faisalabad</option>
                    <option value="Karachi">📍 Karachi</option>
                    <option value="Peshawar">📍 Peshawar</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-black text-gray-900 block mb-1">Your Requirements / Message:</label>
                  <textarea
                    rows={4}
                    placeholder="E.g. I need 20 Grafted Chaunsa Mango saplings and 5 Royal Date Palms for my farmhouse."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl text-xs bg-slate-50 border border-slate-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-bold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl text-xs font-black flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-800 to-emerald-950 text-white hover:from-emerald-700 hover:to-emerald-900 transition-all shadow-xl"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Send Inquiry to Ansar Hussain (03040450065)</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

