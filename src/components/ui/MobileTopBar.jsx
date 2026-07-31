import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, Search, X, Menu, Bell } from 'lucide-react';

const MENU_LINKS = [
  { id: 'home',     label: 'Home Page',           icon: '🏠' },
  { id: 'shop',     label: 'Nursery Store (100+)',icon: '🌿' },
  { id: 'orchard',  label: 'Bagh Packages',       icon: '🏡' },
  { id: 'services', label: 'Landscaping & Services',icon: '🛠️' },
  { id: 'about',    label: 'About Us & Heritage', icon: '📜' },
  { id: 'blog',     label: 'Blog & Plant Guides', icon: '📖' },
  { id: 'contact',  label: 'Contact & Helpline',  icon: '📞' },
];

export const MobileTopBar = ({
  cartCount = 0,
  onOpenCart,
  onOpenWhatsAppModal,
  onOpenReminderModal,
  searchQuery = '',
  onSearchChange,
  activeTab,
  onTabChange,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const PAGE_TITLES = {
    home:     { title: 'Rahman Nursery Farm', sub: 'Pakistan\'s Premier Plant Hub' },
    shop:     { title: 'Nursery Store',        sub: '100+ Certified Plants' },
    orchard:  { title: 'Bagh Packages',        sub: 'Commercial Orchard Installation' },
    services: { title: 'Our Services',         sub: 'Expert Horticulture Teams' },
    contact:  { title: 'Contact Us',           sub: 'Chak Hassan Arain, Arifwala' },
    blog:     { title: 'Blog & Guides',        sub: 'Gardening Knowledge Hub' },
    about:    { title: 'About Us',             sub: '50+ Years Family Heritage' },
  };

  const current = PAGE_TITLES[activeTab] || PAGE_TITLES.home;

  const handleSelectTab = (tabId) => {
    if (onTabChange) onTabChange(tabId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white"
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}
      >
        {/* Thin top accent bar */}
        <div className="h-0.5 bg-gradient-to-r from-green-700 via-amber-400 to-green-700" />

        {showSearch ? (
          /* ── Search Mode ── */
          <div className="flex items-center gap-2 px-3 py-2.5">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search plants, fruits, palms..."
                value={searchQuery}
                onChange={e => { if (onSearchChange) onSearchChange(e.target.value); }}
                className="w-full pl-9 pr-4 py-2.5 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <button
              onClick={() => { setShowSearch(false); if (onSearchChange) onSearchChange(''); }}
              className="p-2.5 rounded-full bg-gray-100 text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* ── Normal Mode ── */
          <div className="flex items-center px-3 py-2.5 gap-2">

            {/* Menu Hamburger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-xl bg-gray-100 text-gray-700 border border-gray-200 flex-shrink-0 min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo + Title */}
            <div className="flex items-center gap-2 flex-1 min-w-0" onClick={() => handleSelectTab('home')}>
              <img
                src="/logo.png"
                alt="Logo"
                className="h-9 w-9 object-contain flex-shrink-0 rounded-xl bg-white p-0.5 border border-gray-100 shadow-sm"
              />
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-black text-gray-900 leading-tight truncate">
                  {current.title}
                </div>
                <div className="text-[9px] font-bold text-green-700 leading-tight truncate">
                  {current.sub}
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {/* Daily Watering Reminder Bell */}
              <button
                onClick={onOpenReminderModal}
                className="p-2 rounded-full bg-amber-50 text-amber-800 border border-amber-300 min-h-[40px] min-w-[40px] flex items-center justify-center"
                title="7 AM & 6 PM Plant Care Reminders"
              >
                <Bell className="w-4 h-4 text-amber-700" />
              </button>

              {/* Search toggle */}
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 rounded-full bg-gray-100 text-gray-600 min-h-[40px] min-w-[40px] flex items-center justify-center"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Cart */}
              <button
                onClick={onOpenCart}
                className="relative p-2 rounded-full bg-gray-100 text-gray-700 min-h-[40px] min-w-[40px] flex items-center justify-center"
              >
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-amber-500 text-white text-[9px] font-black flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>

              {/* WhatsApp */}
              <button
                onClick={() => onOpenWhatsAppModal && onOpenWhatsAppModal('Assalam o Alaikum! Main Rahman Nursery Farm se rabta karna chahta hun.')}
                className="p-2 rounded-full bg-green-700 text-white min-h-[40px] min-w-[40px] flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Slide-Over Mobile Menu Drawer ── */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="bg-white w-[290px] h-full shadow-2xl flex flex-col mobile-menu-enter">
            {/* Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" className="h-9 w-auto object-contain" />
                <div className="text-sm font-black text-gray-900">RAHMAN <span className="text-green-700">NURSERY</span></div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-gray-100 text-gray-700 min-h-[40px] min-w-[40px] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
              {MENU_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleSelectTab(link.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-2xl text-sm font-bold flex items-center gap-3 transition min-h-[50px] ${
                    activeTab === link.id
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                  {activeTab === link.id && <span className="ml-auto text-amber-400 font-black">✓</span>}
                </button>
              ))}
            </div>

            {/* WhatsApp Footer */}
            <div className="p-4 border-t border-gray-100 space-y-2 safe-pb">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenWhatsAppModal && onOpenWhatsAppModal('Assalam o Alaikum! Main Rahman Nursery Farm se contact karna chahta hun.');
                }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-green-700 text-white font-black text-sm shadow min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>WhatsApp Order Now</span>
              </button>
              <div className="text-center text-[10px] font-bold text-gray-400">
                📞 Ansar Hussain: 0304-0450065
              </div>
            </div>
          </div>
          <div className="flex-1 bg-black/50" onClick={() => setIsMenuOpen(false)} />
        </div>
      )}
    </>
  );
};
