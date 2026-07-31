import React, { useState } from 'react';

import { Navbar }                from './components/ui/Navbar';
import { MobileTopBar }          from './components/ui/MobileTopBar';
import { MobileBottomNav }       from './components/ui/MobileBottomNav';
import { HeroOverlay }           from './components/ui/HeroOverlay';
import { StorySections }         from './components/ui/StorySections';
import { ShopPage }              from './components/ui/ShopPage';
import { BlogPage }              from './components/ui/BlogPage';
import { ContactPage }           from './components/ui/ContactPage';
import { BaghPackagesPage }      from './components/ui/BaghPackagesPage';
import { ServicesPage }          from './components/ui/ServicesPage';
import { CatalogModal }          from './components/ui/CatalogModal';
import { PlantInspectorModal }   from './components/ui/PlantInspectorModal';
import { AIGardenPlannerModal }  from './components/ui/AIGardenPlannerModal';
import { LandscapingShowcase }   from './components/ui/LandscapingShowcase';
import { FeaturesAndWhyUs }      from './components/ui/FeaturesAndWhyUs';
import { OrchardBaghSection }    from './components/ui/OrchardBaghSection';
import { FamilyHeritagSection }  from './components/ui/FamilyHeritagSection';
import { ReviewsSection }        from './components/ui/ReviewsSection';
import { ContactModal }          from './components/ui/ContactModal';
import { CartDrawer }            from './components/ui/CartDrawer';
import { Footer }                from './components/ui/Footer';
import { WhatsAppSelectorModal } from './components/ui/WhatsAppSelectorModal';
import { PLANTS_DATA }           from './data/plantCatalog';
import { MessageCircle, ShoppingCart, Store, Home } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from './utils/whatsappHelper';

export default function App() {
  const [selectedPlant, setSelectedPlant]   = useState(null);
  const [activePotType, setActivePotType]   = useState('terracotta');
  const [activeTab, setActiveTab]           = useState('home');
  const [globalSearch, setGlobalSearch]     = useState('');

  // Modals & Drawers
  const [isCatalogOpen, setIsCatalogOpen]           = useState(false);
  const [isAIPlannerOpen, setIsAIPlannerOpen]       = useState(false);
  const [isLandscapingOpen, setIsLandscapingOpen]   = useState(false);
  const [isContactOpen, setIsContactOpen]           = useState(false);
  const [isCartOpen, setIsCartOpen]                 = useState(false);
  const [isWhatsAppSelectorOpen, setIsWhatsAppSelectorOpen] = useState(false);
  const [whatsAppMessageText, setWhatsAppMessageText]       = useState('');

  // Cart State
  const [cart, setCart]           = useState([]);
  const [cartToast, setCartToast] = useState(null);

  const handleAddToCart = (plant, addQty = 1) => {
    const qty = Math.max(1, parseInt(addQty) || 1);
    setCart((prev) => {
      const existing = prev.find((item) => item.plant.id === plant.id);
      if (existing) {
        return prev.map((item) =>
          item.plant.id === plant.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { plant, quantity: qty }];
    });
    setCartToast(`Added ${qty} × ${plant.name} to cart! 🛒`);
    setTimeout(() => setCartToast(null), 3000);
  };

  const handleUpdateQuantity = (plantId, newQty) => {
    if (newQty <= 0) { handleRemoveItem(plantId); return; }
    setCart((prev) =>
      prev.map((item) => (item.plant.id === plantId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem   = (plantId) => setCart((prev) => prev.filter((item) => item.plant.id !== plantId));
  const handleClearCart    = ()        => setCart([]);

  const handleSelectPlantById = (id) => {
    const plant = PLANTS_DATA.find((p) => p.id === id);
    if (plant) setSelectedPlant(plant);
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const triggerWhatsApp = (text = '') => {
    setWhatsAppMessageText(text || 'Assalam o Alaikum! Main Rahman Nursery Farm se contact karna chahta hun.');
    setIsWhatsAppSelectorOpen(true);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#F7F8F5] text-gray-900 overflow-x-hidden font-sans">

      {/* ── DESKTOP NAVBAR (hidden on mobile) ── */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={globalSearch}
        onSearchChange={(q) => {
          setGlobalSearch(q);
          if (activeTab !== 'shop') setActiveTab('shop');
        }}
        onOpenWhatsAppModal={triggerWhatsApp}
      />

      {/* ── MOBILE TOP APP BAR (hidden on desktop) ── */}
      <MobileTopBar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWhatsAppModal={triggerWhatsApp}
        searchQuery={globalSearch}
        onSearchChange={(q) => {
          setGlobalSearch(q);
          if (activeTab !== 'shop') setActiveTab('shop');
        }}
      />

      {/* ── PAGE CONTENT ── */}
      {/* pb-20 = space for mobile bottom nav; md:pb-0 = none on desktop */}
      <div className="pb-20 md:pb-0">

        {activeTab === 'shop' ? (
          <ShopPage
            onSelectPlantForInspection={(id) => handleSelectPlantById(id)}
            onAddToCart={handleAddToCart}
            initialCategory="all"
            onCloseShopView={() => handleTabChange('home')}
            externalSearch={globalSearch}
            onClearExternalSearch={() => setGlobalSearch('')}
          />
        ) : activeTab === 'blog' ? (
          <BlogPage onOpenStore={() => handleTabChange('shop')} />
        ) : activeTab === 'contact' ? (
          <ContactPage onOpenWhatsAppModal={triggerWhatsApp} />
        ) : activeTab === 'orchard' ? (
          <BaghPackagesPage onOpenWhatsAppModal={triggerWhatsApp} />
        ) : activeTab === 'services' ? (
          <ServicesPage onOpenContact={() => handleTabChange('contact')} onOpenWhatsAppModal={triggerWhatsApp} />
        ) : activeTab === 'about' ? (
          <div className="pt-16 md:pt-36 min-h-screen">
            <FamilyHeritagSection onOpenContact={() => handleTabChange('contact')} />
            <ReviewsSection />
          </div>
        ) : (
          /* ── HOME TAB ── */
          <>
            <HeroOverlay
              onExploreClick={() => handleTabChange('orchard')}
              onOpenCatalog={() => handleTabChange('shop')}
              onOpenAIPlanner={() => setIsAIPlannerOpen(true)}
              onOpenWhatsAppModal={triggerWhatsApp}
            />
            {/* Clean Botanical Collections */}
            <StorySections
              onOpenCatalog={() => handleTabChange('shop')}
              onSelectPlantById={(id) => handleSelectPlantById(id)}
              onOpenLandscaping={() => handleTabChange('services')}
            />

            {/* About Us & 50+ Years Family Heritage Section */}
            <FamilyHeritagSection onOpenContact={() => handleTabChange('contact')} />

            {/* Clean Verified Reviews */}
            <ReviewsSection />
          </>
        )}

        {/* Footer — hidden on mobile (bottom nav replaces it) */}
        <div className="hidden md:block">
          <Footer
            onNavigateTab={handleTabChange}
            onOpenWhatsAppModal={triggerWhatsApp}
          />
        </div>

        {/* Mobile Footer — minimal strip */}
        <div className="md:hidden px-4 py-6 bg-gray-900 text-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto mx-auto mb-2 object-contain" />
          <div className="text-white text-xs font-black mb-0.5">RAHMAN NURSERY FARM</div>
          <div className="text-amber-400 text-[10px] font-bold mb-3">50+ Years • Chak Hassan Arain, Arifwala</div>
          <button
            onClick={() => triggerWhatsApp('Assalam o Alaikum! Main Rahman Nursery Farm se rabta karna chahta hun.')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-700 text-white font-black text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>WhatsApp Us Now</span>
          </button>
          <div className="mt-3 text-[10px] text-gray-500">
            © 2025 Rahman Nursery Farm. All rights reserved.
          </div>
        </div>

      </div>

      {/* ── MOBILE BOTTOM NAV (hidden on desktop) ── */}
      <MobileBottomNav
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* ── DESKTOP Floating WhatsApp Button (hidden on mobile — bottom nav handles it) ── */}
      <div className="hidden md:flex fixed bottom-5 right-5 z-30 items-center gap-3 pointer-events-auto">
        <button
          onClick={() => triggerWhatsApp('Assalam o Alaikum, I am visiting Rahman Nursery Farm website and would like to inquire/order plants!')}
          className="p-4 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all shadow-2xl border border-green-400 hover:scale-105"
          title="WhatsApp Us"
        >
          <MessageCircle className="w-6 h-6 fill-white/20" />
        </button>
      </div>

      {/* ── Toast ── */}
      {cartToast && (
        <div className="fixed bottom-24 md:bottom-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-emerald-950 text-white border border-amber-400 text-xs font-black shadow-2xl flex items-center gap-2 whitespace-nowrap">
          <span>{cartToast}</span>
        </div>
      )}

      {/* ── MODALS ── */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onSelectPlantForInspection={(id) => handleSelectPlantById(id)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {selectedPlant && (
        <PlantInspectorModal
          plant={selectedPlant}
          activePotType={activePotType}
          onPotChange={(potId) => setActivePotType(potId)}
          onClose={() => setSelectedPlant(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <AIGardenPlannerModal
        isOpen={isAIPlannerOpen}
        onClose={() => setIsAIPlannerOpen(false)}
        onSelectPlantForInspection={(id) => handleSelectPlantById(id)}
      />

      <LandscapingShowcase
        isOpen={isLandscapingOpen}
        onClose={() => setIsLandscapingOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <WhatsAppSelectorModal
        isOpen={isWhatsAppSelectorOpen}
        onClose={() => setIsWhatsAppSelectorOpen(false)}
        messageText={whatsAppMessageText}
      />
    </div>
  );
}
