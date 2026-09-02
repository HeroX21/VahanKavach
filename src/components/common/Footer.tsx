import React from 'react';
import { PageRoute } from '../../types';
import { Logo } from './Logo';
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  Lock,
  FileText,
  AlertCircle,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuote: () => void;
  onOpenRenewal: () => void;
  onOpenEmergency: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenRenewal,
  onOpenEmergency,
}) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1B3D] text-white border-t border-slate-800 pt-16 pb-12 overflow-hidden" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emergency Action Bar */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-2xl p-6 mb-14 border border-blue-900/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need Urgent Roadside or Claim Assistance?</h4>
              <p className="text-xs text-slate-300">
                Access emergency response guidelines, national towing protocols, and surveyor intimation.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenEmergency}
            className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-md shrink-0 flex items-center justify-center gap-2"
          >
            Emergency & Roadside Help
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-slate-300 text-xs">
          {/* Brand Col (2 spans on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" variant="light" showHindi={true} showTagline={true} />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm pt-2">
              A modern Indian digital vehicle-protection platform designed to make motor insurance simpler to understand, compare, purchase, renew, and manage. Built on the core principle of «Vehicle + Kavach + Journey + Trust + Technology».
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <span className="text-[11px] font-semibold text-slate-300">Connect With Us:</span>
              <div className="flex gap-2">
                {['LinkedIn', 'Twitter/X', 'YouTube', 'Instagram'].map(net => (
                  <span
                    key={net}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300 hover:bg-orange-500/20 hover:text-orange-300 hover:border-orange-500/40 cursor-pointer transition-colors"
                  >
                    {net}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-orange-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('vehicle-insurance')} className="hover:text-orange-400 transition-colors">
                  Vehicle Insurance
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('plans')} className="hover:text-orange-400 transition-colors">
                  Protection Plans & Add-ons
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('claims')} className="hover:text-orange-400 transition-colors">
                  Claims Guidance
                </button>
              </li>
              <li>
                <button onClick={onOpenRenewal} className="hover:text-orange-400 transition-colors flex items-center gap-1">
                  Renew Policy
                  <span className="text-[9px] bg-orange-500/30 text-orange-300 px-1.5 py-0.2 rounded">Instant</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-orange-400 transition-colors">
                  About VahanKavach
                </button>
              </li>
            </ul>
          </div>

          {/* Coverage & Vehicle Types */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Protection Types</h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('vehicle-insurance')} className="hover:text-orange-400 transition-colors">
                  Car Insurance
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('vehicle-insurance')} className="hover:text-orange-400 transition-colors">
                  Bike & Two-Wheeler Insurance
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('vehicle-insurance')} className="hover:text-orange-400 transition-colors">
                  Electric Vehicle (EV) Protection
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('vehicle-insurance')} className="hover:text-orange-400 transition-colors">
                  Commercial Vehicle Insurance
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('plans')} className="hover:text-orange-400 transition-colors">
                  Zero Depreciation Cover
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('plans')} className="hover:text-orange-400 transition-colors">
                  Engine & Gearbox Protection
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Legal Disclosures */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Support & Disclosures</h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-orange-400 transition-colors">
                  Contact & Grievance Desk
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-orange-400 transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('claims')} className="hover:text-orange-400 transition-colors">
                  Theft Claim Protocol
                </button>
              </li>
              <li>
                <span className="text-slate-400">Hours: Mon – Sat (9:00 AM – 7:00 PM)</span>
              </li>
              <li>
                <span className="text-slate-400">Desk: support@vahankavach.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer & Transparency Statement */}
        <div className="pt-8 pb-4 text-[11px] text-slate-400 space-y-3 leading-relaxed border-b border-slate-800/80">
          <div className="flex items-start gap-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <AlertCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200 block mb-1">Important Legal & Regulatory Notice:</strong>
              Insurance is the subject matter of solicitation. Insurance products displayed or compared on VahanKavach are subject to applicable terms, conditions, exclusions, underwriting criteria, and regulatory mandates governed by the Insurance Regulatory and Development Authority of India (IRDAI) and the Motor Vehicles Act, 1988. VahanKavach provides structured digital policy management, comparison assistance, and claims guidance. Coverage benefits, claim settlement, and final premium amounts are strictly subject to individual insurer policy schedules, survey assessments, and applicable deductibles.
            </div>
          </div>

          <p>
            VahanKavach does not make unsubstantiated claims of guaranteed claim settlement, guaranteed lowest premiums, or government backing. All product details, Insured Declared Values (IDV), and No Claim Bonus (NCB) discount slabs are presented in strict alignment with prevailing general insurance underwriting practices in India.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <div>
            © {new Date().getFullYear()} VahanKavach (वाहनकवच). All rights reserved. Protection for Every Journey.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Grievance Redressal</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Underwriting Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
