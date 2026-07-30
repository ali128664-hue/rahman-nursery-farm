import React, { useState, useEffect } from 'react';
import { NurseryCanvas } from './components/canvas/NurseryCanvas';
import { Navbar } from './components/ui/Navbar';
import { HeroOverlay } from './components/ui/HeroOverlay';
import { StorySections } from './components/ui/StorySections';
import { ShopPage } from './components/ui/ShopPage';
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
import { PLANTS_DATA } from './data/plantCatalog';
import { MessageCircle, ShoppingCart, Check, LayoutGrid, Home } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from './utils/whatsappHelper';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [weatherMode, setWeatherMode] = useState('sunrise');
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [activePotType, setActivePotType] = useState('terracotta');
  const [isFullShopView, setIsFullShopView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modals & Drawers
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isAIPlannerOpen, setIsAIPlannerOpen] = useState(false);
  const [isLandscapingOpen, setIsLandscapingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart State
  const [cart, setCart] = useState([]);
  const [cartToast, setCartToast] = useState(null);

  // Cart Handlers
  const handleAddToCart = (plant) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.plant.id === plant.id);
      if (existing) {
        return prev.map((item) =>
          item.plant.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { plant, quantity: 1 }];
    });

    // Show quick toast notification
    setCartToast(`Added ${plant.name} to cart! 🛒`);
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

  // Scroll listener driving progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectPlantById = (id, overridePosition = null) => {
    const plant = PLANTS_DATA.find((p) => p.id === id);
    if (plant) {
      setSelectedPlant(plant);
    }
  };

  const handleScrollToShop = () => {
    const shopElement = document.getElementById('shop-section');
    if (shopElement) {
      shopElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsFullShopView(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-emerald-950 overflow-x-hidden selection:bg-emerald-200 selection:text-emerald-900 font-sans">
      {/* 1. Ambient Botanical Background Layer */}
      <NurseryCanvas
        scrollProgress={scrollProgress}
        weatherMode={weatherMode}
      />

      {/* 2. Streamlined Floating Navbar */}
      <Navbar
        weatherMode={weatherMode}
        onWeatherChange={(mode) => setWeatherMode(mode)}
        onOpenCatalog={() => setIsFullShopView(true)}
        onOpenContact={() => setIsContactOpen(true)}
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Toggle View: Full Shop Page vs Home View */}
      {isFullShopView ? (
        <ShopPage
          onSelectPlantForInspection={(id) => handleSelectPlantById(id)}
          onAddToCart={handleAddToCart}
          initialCategory={selectedCategory}
          onCloseShopView={() => setIsFullShopView(false)}
        />
      ) : (
        <>
          {/* 3. Hero Banner Overlay */}
          <HeroOverlay
            onExploreClick={handleScrollToShop}
            onOpenCatalog={() => setIsFullShopView(true)}
            onOpenAIPlanner={() => setIsAIPlannerOpen(true)}
          />

          {/* 4. DEDICATED FULL SHOP SECTION ON HOME PAGE */}
          <section id="shop-section" className="relative z-10">
            <ShopPage
              onSelectPlantForInspection={(id) => handleSelectPlantById(id)}
              onAddToCart={handleAddToCart}
              initialCategory="all"
            />
          </section>

          {/* 5. Storytelling Zones */}
          <StorySections
            onOpenCatalog={() => setIsFullShopView(true)}
            onSelectPlantById={(id) => handleSelectPlantById(id)}
            onOpenLandscaping={() => setIsLandscapingOpen(true)}
          />

          {/* 6. Orchard / Bagh Lagwao Section */}
          <OrchardBaghSection />

          {/* 7. Features, Care Masterclasses & FAQs */}
          <FeaturesAndWhyUs />

          {/* 8. Family Heritage — About Us Section (50+ Years) */}
          <FamilyHeritagSection onOpenContact={() => setIsContactOpen(true)} />

          {/* 9. Customer Testimonials Section */}
          <ReviewsSection />

          {/* 10. Footer Section */}
          <Footer
            onOpenCatalog={() => setIsFullShopView(true)}
            onOpenAIPlanner={() => setIsAIPlannerOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        </>
      )}

      {/* --- MODALS & DRAWERS LAYER --- */}

      {/* Full Catalog Modal */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onSelectPlantForInspection={(id) => handleSelectPlantById(id)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Selected Plant Inspector Drawer */}
      {selectedPlant && (
        <PlantInspectorModal
          plant={selectedPlant}
          activePotType={activePotType}
          onPotChange={(potId) => setActivePotType(potId)}
          onClose={() => setSelectedPlant(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* AI Garden Planner & Estimator Modal */}
      <AIGardenPlannerModal
        isOpen={isAIPlannerOpen}
        onClose={() => setIsAIPlannerOpen(false)}
        onSelectPlantForInspection={(id) => handleSelectPlantById(id)}
      />

      {/* Landscaping Before/After Showcase Modal */}
      <LandscapingShowcase
        isOpen={isLandscapingOpen}
        onClose={() => setIsLandscapingOpen(false)}
      />

      {/* Farm Locations & Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Cart Quick Toast Notification */}
      {cartToast && (
        <div
          className="fixed bottom-24 right-6 z-50 px-5 py-3.5 rounded-2xl bg-emerald-900 text-white font-black text-xs shadow-2xl flex items-center gap-2 border border-amber-400 pointer-events-auto"
          style={{ animation: 'fadeIn 0.2s ease' }}
        >
          <Check className="w-4 h-4 text-amber-300" />
          <span>{cartToast}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 underline text-amber-300 hover:text-amber-200"
          >
            View Cart
          </button>
        </div>
      )}

      {/* Floating Sticky Navigation Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 pointer-events-auto">
        <button
          onClick={() => setIsFullShopView(!isFullShopView)}
          className="px-4 py-3 rounded-2xl bg-amber-500 text-emerald-950 shadow-2xl hover:bg-amber-400 hover:scale-105 transition-all flex items-center gap-2 border-2 border-amber-300 font-black text-xs"
          title="Toggle Full Shop Page"
        >
          {isFullShopView ? <Home className="w-4 h-4" /> : <LayoutGrid className="w-4 h-4" />}
          <span className="hidden sm:inline">{isFullShopView ? 'Home View' : 'Full Shop'}</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="px-4 py-3 rounded-2xl bg-emerald-800 text-white shadow-2xl hover:bg-emerald-700 hover:scale-105 transition-all flex items-center gap-2 border-2 border-emerald-600 font-black text-xs"
          title="Open Cart"
        >
          <ShoppingCart className="w-5 h-5 text-amber-300" />
          <span className="hidden sm:inline">Cart</span>
          <span className="w-5 h-5 rounded-full bg-amber-400 text-emerald-950 font-black text-[11px] flex items-center justify-center">
            {totalCartItems}
          </span>
        </button>

        <a
          href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('Assalam o Alaikum Ansar Bhai (03040450065), Main aapki website visit kar raha hun aur plants order karna chahta hun!')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-2xl bg-emerald-600 text-white shadow-2xl hover:bg-emerald-700 hover:scale-105 transition-all flex items-center gap-2 border-2 border-white"
          title="Quick WhatsApp Order: 03040450065 Ansar Hussain"
        >
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span className="text-xs font-black hidden sm:inline">03040450065</span>
        </a>
      </div>
    </div>
  );
}
