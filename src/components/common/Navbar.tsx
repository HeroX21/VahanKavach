import React, { useState, useEffect } from 'react';
import { PageRoute } from '../../types';
import { Logo } from './Logo';
import {
  Menu,
  X,
  Shield,
  FileCheck2,
  RefreshCw,
  PhoneCall,
  Sparkles,
  ArrowRight,
  User,
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenQuote: () => void;
  onOpenRenewal: () => void;
  onOpenDashboard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote,
  onOpenRenewal,
  onOpenDashboard,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Vehicle Insurance', page: 'vehicle-insurance' },
    { label: 'Plans & Add-Ons', page: 'plans' },
    { label: 'Claims & Process', page: 'claims' },
    { label: 'About & Contact', page: 'about' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
      id="main-navigation-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Logo
          size={isScrolled ? 'sm' : 'md'}
          variant="dark"
          showHindi={true}
          onClick={() => handleNavClick('home')}
        />

        {/* Center / Right: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map(link => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-orange-600 bg-orange-50/70 font-bold'
                    : 'text-slate-700 hover:text-[#0B1B3D] hover:bg-slate-100/70'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          {/* Direct Quick Action: Renew Policy */}
          <button
            onClick={onOpenRenewal}
            className="px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50/50 transition-all flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5 text-orange-500" />
            Renew Policy
          </button>
        </nav>

        {/* Right Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Dashboard Portal Demo Trigger */}
          <button
            onClick={onOpenDashboard}
            className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-1.5"
            title="Access My Policies & Garage"
          >
            <User className="w-3.5 h-3.5 text-blue-600" />
            My Portal
          </button>

          {/* Primary CTA: Get a Quote */}
          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs xl:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
          >
            Get a Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Action & Hamburger Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenQuote}
            className="px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-bold shadow-sm"
          >
            Get Quote
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="space-y-1">
            {navLinks.map(link => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-orange-50 text-orange-600 font-bold'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenRenewal();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 bg-slate-50"
            >
              <RefreshCw className="w-4 h-4 text-orange-500" />
              Check Policy Renewal
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDashboard();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-blue-200 text-blue-900 text-xs font-bold flex items-center justify-center gap-2 bg-blue-50"
            >
              <User className="w-4 h-4 text-blue-600" />
              Open Customer Portal Prototype
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-bold shadow-md flex items-center justify-center gap-2"
            >
              Get Your Instant Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
