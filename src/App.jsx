import React, { useState } from 'react';

import { Navbar } from './components/ui/Navbar';
import { HeroOverlay } from './components/ui/HeroOverlay';
import { StorySections } from './components/ui/StorySections';
import { ShopPage } from './components/ui/ShopPage';
import { BlogPage } from './components/ui/BlogPage';
import { ContactPage } from './components/ui/ContactPage';
import { BaghPackagesPage } from './components/ui/BaghPackagesPage';
import { ServicesPage } from './components/ui/ServicesPage';
import { CatalogModal } from './components/ui/CatalogModal';
import { PlantInspectorModal } from './components/ui/PlantInspectorModal';
import { AIGardenPlannerModal } from './components/ui/AIGardenPlannerModal';
import { LandscapingShowcase } from './components/ui/LandscapingShowcase';
import { FeaturesAndWhyUs } from './components/ui/FeaturesAndWhyUs';
import { OrchardBaghSection } from './components/ui/OrchardBaghSection';
import { FamilyHeritagSection } from './components/ui/FamilyHeritagSection';
import { ReviewsSection } from './components/ui/ReviewsSection';
import { ContactModal } from './components/ui/ContactModal';
import { CartDrawer } from './components/ui/CartDrawer';
import { Footer } from './components/ui/Footer';
import { WhatsAppSelectorModal } from './components/ui/WhatsAppSelectorModal';
import { PLANTS_DATA } from './data/plantCatalog';
import { MessageCircle, ShoppingCart, Store, Home } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from './utils/whatsappHelper';

export default function App() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [activePotType, setActivePotType] = useState('terracotta');
  const [activeTab, setActiveTab] = useState('home');
  const [globalSearch, setGlobalSearch] = useState('');

  // Modals & Drawers
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isAIPlannerOpen, setIsAIPlannerOpen] = useState(false);
  const [isLandscapingOpen, setIsLandscapingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWhatsAppSelectorOpen, setIsWhatsAppSelectorOpen] = useState(false);
  const [whatsAppMessageText, setWhatsAppMessageText] = useState('');

  // Cart State
  const [cart, setCart] = useState([]);
  const [cartToast, setCartToast] = useState(null);

  // Cart Handlers
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

    // Show quick toast notification
    setCartToast(`Added ${qty} × ${plant.name} to cart! 🛒`);
    setTimeout(() => setCartToast(null), 3000);
  };

  const handleUpdateQuantity = (plantId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(plantId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.plant.id === plantId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (plantId) => {
    setCart((prev) => prev.filter((item) => item.plant.id !== plantId));
  };

  const handleClearCart = () => {
    setCart([]);
  };



  const handleSelectPlantById = (id) => {
    const plant = PLANTS_DATA.find((p) => p.id === id);
    if (plant) {
      setSelectedPlant(plant);
    }
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Central WhatsApp modal trigger
  const triggerWhatsApp = (text = '') => {
    setWhatsAppMessageText(text || 'Assalam o Alaikum! Main Rahman Nursery Farm se contact karna chahta hun.');
    setIsWhatsAppSelectorOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#F7F8F5] text-gray-900 overflow-x-hidden font-sans">
      {/* Background canvas removed — clean white Shopify theme */}


      {/* 2. Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
        }}
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={globalSearch}
        onSearchChange={(q) => {
          setGlobalSearch(q);
          if (activeTab !== 'shop') setActiveTab('shop');
        }}
        onOpenWhatsAppModal={triggerWhatsApp}
      />

      {/* 3. MULTI-PAGE VIEW ROUTING */}
      {activeTab === 'shop' ? (
        <ShopPage
          onSelectPlantForInspection={(id) => handleSelectPlantById(id)}
          onAddToCart={handleAddToCart}
          initialCategory="all"
          onCloseShopView={() => setActiveTab('home')}
          externalSearch={globalSearch}
          onClearExternalSearch={() => setGlobalSearch('')}
        />
      ) : activeTab === 'blog' ? (
        <BlogPage onOpenStore={() => setActiveTab('shop')} />
      ) : activeTab === 'contact' ? (
        <ContactPage onOpenWhatsAppModal={triggerWhatsApp} />
      ) : activeTab === 'orchard' ? (
        <BaghPackagesPage onOpenWhatsAppModal={triggerWhatsApp} />
      ) : activeTab === 'services' ? (
        <ServicesPage onOpenContact={() => setActiveTab('contact')} onOpenWhatsAppModal={triggerWhatsApp} />
      ) : activeTab === 'about' ? (
        <div className="pt-36 min-h-screen">
          <FamilyHeritagSection onOpenContact={() => setActiveTab('contact')} />
          <ReviewsSection />
        </div>
      ) : (
        /* ELEGANT & MINIMAL HOME TAB */
        <>
          {/* Hero Banner Overlay */}
          <HeroOverlay
            onExploreClick={() => setActiveTab('orchard')}
            onOpenCatalog={() => setActiveTab('shop')}
            onOpenAIPlanner={() => setIsAIPlannerOpen(true)}
            onOpenWhatsAppModal={triggerWhatsApp}
          />

          {/* Clean Botanical Collections */}
          <StorySections
            onOpenCatalog={() => setActiveTab('shop')}
            onSelectPlantById={(id) => handleSelectPlantById(id)}
            onOpenLandscaping={() => setActiveTab('services')}
          />

          {/* Clean Verified Reviews */}
          <ReviewsSection />
        </>
      )}

      {/* Footer Section */}
      <Footer
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenWhatsAppModal={triggerWhatsApp}
      />

      {/* Floating Bottom Quick Action Bar (Mobile & Desktop) */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-3 pointer-events-auto">
        
        {/* Toggle to Full Store */}
        <button
          onClick={() => {
            setActiveTab(activeTab === 'shop' ? 'home' : 'shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-800 to-emerald-950 text-white font-black text-xs shadow-2xl hover:scale-105 transition-all border border-emerald-500"
        >
          {activeTab === 'shop' ? <Home className="w-4 h-4 text-amber-300" /> : <Store className="w-4 h-4 text-amber-300" />}
          <span>{activeTab === 'shop' ? 'Home Page' : 'Store (100+)'}</span>
        </button>

        {/* WhatsApp Helpline Button */}
        <button
          onClick={() => {
            setWhatsAppMessageText('Assalam o Alaikum, I am visiting Rahman Nursery Farm website and would like to inquire/order plants!');
            setIsWhatsAppSelectorOpen(true);
          }}
          className="p-3.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-2xl border border-emerald-400 hover:scale-105"
          title="Choose WhatsApp Representative"
        >
          <MessageCircle className="w-5 h-5 fill-white/20" />
        </button>
      </div>

      {/* Toast Notification */}
      {cartToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-emerald-950 text-white border border-amber-400 text-xs font-black shadow-2xl flex items-center gap-2 animate-bounce">
          <span>{cartToast}</span>
        </div>
      )}

      {/* MODALS */}
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
