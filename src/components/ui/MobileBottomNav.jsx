import React from 'react';
import { Home, Store, TreePine, Wrench, PhoneCall } from 'lucide-react';

const TABS = [
  { id: 'home',     label: 'Home',    icon: Home },
  { id: 'shop',     label: 'Store',   icon: Store },
  { id: 'orchard',  label: 'Bagh',    icon: TreePine },
  { id: 'services', label: 'Services',icon: Wrench },
  { id: 'contact',  label: 'Contact', icon: PhoneCall },
];

export const MobileBottomNav = ({ activeTab, onTabChange }) => {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 flex items-stretch"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.10)',
      }}
    >
      {TABS.map(({ id, label, icon: Icon }) => {
        const isActive = activeTab === id;
        return (
          <button
            key={id}
            onClick={() => {
              onTabChange(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-all relative
              ${isActive ? 'text-green-700' : 'text-gray-400'}
            `}
            style={{ minHeight: 56 }}
          >
            {/* Active indicator pill */}
            {isActive && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-green-700" />
            )}
            <span
              className={`flex items-center justify-center w-9 h-7 rounded-xl transition-all
                ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-400'}
              `}
            >
              <Icon className={`transition-all ${isActive ? 'w-5 h-5' : 'w-[18px] h-[18px]'}`} />
            </span>
            <span
              className={`text-[10px] font-bold leading-none transition-all
                ${isActive ? 'text-green-700 font-black' : 'text-gray-400'}
              `}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
