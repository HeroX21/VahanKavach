import React, { useState, useEffect } from 'react';
import { PageRoute, VehicleCategory } from './types';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { QuoteModal } from './components/common/QuoteModal';
import { RenewalModal } from './components/common/RenewalModal';
import { EmergencySupportModal } from './components/common/EmergencySupportModal';
import { CustomerDashboardModal } from './components/common/CustomerDashboardModal';

import { HomePage } from './pages/HomePage';
import { VehicleInsurancePage } from './pages/VehicleInsurancePage';
import { PlansPage } from './pages/PlansPage';
import { ClaimsPage } from './pages/ClaimsPage';
import { AboutPage } from './pages/AboutPage';
import { PhoneCall, Shield } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [initialVehicleType, setInitialVehicleType] = useState<VehicleCategory>('car');
  const [isRenewalOpen, setIsRenewalOpen] = useState<boolean>(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState<boolean>(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(false);

  // Sync with browser URL hash or history if needed
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '') as PageRoute;
      if (['home', 'vehicle-insurance', 'plans', 'claims', 'about'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (vehicleType?: VehicleCategory) => {
    if (vehicleType) {
      setInitialVehicleType(vehicleType);
    }
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Notification / Regulatory Trust Bar */}
      <div className="bg-[#071228] text-slate-300 text-[11px] py-1.5 px-4 text-center border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline-block text-slate-400">
            «Vehicle + Kavach + Journey + Trust + Technology»
          </span>
          <span className="mx-auto sm:mx-0 font-medium text-slate-300">
            वाहनकवच — Digital Protection Platform for Indian Motorists
          </span>
          <button
            onClick={() => setIsEmergencyOpen(true)}
            className="hidden md:flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-bold"
          >
            <PhoneCall className="w-3 h-3" />
            24×7 Roadside Assistance
          </button>
        </div>
      </div>

      {/* Global Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        onOpenRenewal={() => setIsRenewalOpen(true)}
        onOpenDashboard={() => setIsDashboardOpen(true)}
      />

      {/* Page Content Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
            onOpenRenewal={() => setIsRenewalOpen(true)}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
          />
        )}

        {currentPage === 'vehicle-insurance' && (
          <VehicleInsurancePage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'plans' && (
          <PlansPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'claims' && (
          <ClaimsPage
            onNavigate={handleNavigate}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        onOpenRenewal={() => setIsRenewalOpen(true)}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* Floating Emergency / Roadside Quick Action FAB */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsEmergencyOpen(true)}
          className="px-4 py-2.5 rounded-full bg-slate-900/95 hover:bg-black text-white text-xs font-bold shadow-xl border border-slate-700/80 backdrop-blur-md transition-all transform hover:scale-105 flex items-center gap-2"
          title="Emergency Roadside & Claim Help"
        >
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
          <span>Emergency Help</span>
        </button>
      </div>

      {/* Core Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialVehicleType={initialVehicleType}
      />

      <RenewalModal
        isOpen={isRenewalOpen}
        onClose={() => setIsRenewalOpen(false)}
        onOpenNewQuote={() => {
          setIsRenewalOpen(false);
          setIsQuoteOpen(true);
        }}
      />

      <EmergencySupportModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />

      <CustomerDashboardModal
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        onOpenQuote={() => {
          setIsDashboardOpen(false);
          setIsQuoteOpen(true);
        }}
        onOpenRenewal={() => {
          setIsDashboardOpen(false);
          setIsRenewalOpen(true);
        }}
        onOpenEmergency={() => {
          setIsDashboardOpen(false);
          setIsEmergencyOpen(true);
        }}
      />
    </div>
  );
}
