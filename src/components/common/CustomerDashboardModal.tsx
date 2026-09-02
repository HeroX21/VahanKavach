import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Car,
  FileText,
  AlertCircle,
  CreditCard,
  User,
  Download,
  Calendar,
  Clock,
  ExternalLink,
  ChevronRight,
  Shield,
  PlusCircle,
} from 'lucide-react';

interface CustomerDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote?: () => void;
  onOpenRenewal?: () => void;
}

export const CustomerDashboardModal: React.FC<CustomerDashboardModalProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
  onOpenRenewal,
}) => {
  const [activeTab, setActiveTab] = useState<'policies' | 'vehicles' | 'claims' | 'documents' | 'profile'>('policies');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[90vh]"
        onClick={e => e.stopPropagation()}
        id="customer-dashboard-container"
      >
        {/* Top Bar */}
        <div className="bg-[#0B1B3D] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold tracking-tight text-white">
                  My VahanKavach Digital Portal
                </h2>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Prototype View
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Single-window management for all vehicle protection policies and claims
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 flex items-center gap-1 overflow-x-auto">
          {[
            { id: 'policies' as const, label: 'My Policies (2)', icon: Shield },
            { id: 'vehicles' as const, label: 'My Vehicles (2)', icon: Car },
            { id: 'claims' as const, label: 'Claims History (1)', icon: AlertCircle },
            { id: 'documents' as const, label: 'Documents & Receipts', icon: FileText },
            { id: 'profile' as const, label: 'Profile & Nominee', icon: User },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
                  isActive
                    ? 'border-orange-500 text-[#0B1B3D] bg-white rounded-t-lg'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-orange-500' : 'text-slate-400'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dashboard Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-50 text-slate-800">
          {/* POLICIES TAB */}
          {activeTab === 'policies' && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Active Vehicle Policies</h3>
                  <p className="text-xs text-slate-500">
                    Review coverage schedules, add-on endorsements, and renewal countdowns.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    if (onOpenQuote) onOpenQuote();
                  }}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                >
                  <PlusCircle className="w-4 h-4" />
                  Add New Policy
                </button>
              </div>

              {/* Policy Card 1 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                      <Car className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-base text-slate-900">Hyundai Creta 1.5 SX (2023)</h4>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                          Active Policy
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-mono">
                        Reg: <strong className="text-slate-800">DL 01 AB 4821</strong> | Policy #VK-2025-984210
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs text-amber-700 font-bold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      Renewal Due in 26 Days
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block text-[10px] font-semibold">PLAN TIER</span>
                    <span className="font-bold text-slate-800">Complete Kavach</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block text-[10px] font-semibold">INSURED VALUE (IDV)</span>
                    <span className="font-bold text-slate-800">₹8,10,000</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block text-[10px] font-semibold">ACTIVE NCB SLAB</span>
                    <span className="font-bold text-emerald-600">25% (Next: 35%)</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block text-[10px] font-semibold">VALID TILL</span>
                    <span className="font-bold text-slate-800">28 Sep 2026</span>
                  </div>
                </div>

                {/* Add-on pills */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">
                    Active Add-On Endorsements:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Zero Depreciation', 'Engine Protection', '24x7 Roadside Assistance', 'Key Cover', 'Consumables'].map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded-md border border-slate-200"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    Cashless claim enabled at 10,000+ verified partner garages
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1">
                      <Download className="w-3.5 h-3.5" />
                      Policy PDF
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        if (onOpenRenewal) onOpenRenewal();
                      }}
                      className="flex-1 sm:flex-none px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-colors shadow-sm"
                    >
                      Renew Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Policy Card 2 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                      <Car className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-base text-slate-900">Royal Enfield Classic 350 (2024)</h4>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                          Active Policy
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-mono">
                        Reg: <strong className="text-slate-800">DL 04 EF 9012</strong> | Policy #VK-2024-419082
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                    Expires: 14 Dec 2026
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block text-[10px] font-semibold">PLAN TIER</span>
                    <span className="font-bold text-slate-800">Smart Comprehensive</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block text-[10px] font-semibold">INSURED VALUE (IDV)</span>
                    <span className="font-bold text-slate-800">₹1,95,000</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block text-[10px] font-semibold">ACCUMULATED NCB</span>
                    <span className="font-bold text-emerald-600">20%</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block text-[10px] font-semibold">PA COVER</span>
                    <span className="font-bold text-slate-800">₹15 Lakh Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VEHICLES TAB */}
          {activeTab === 'vehicles' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Registered Vehicles Garage</h3>
              <p className="text-xs text-slate-500">
                Keep track of your family and commercial vehicles under unified protection.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold bg-slate-900 text-white px-2.5 py-1 rounded-md">
                      DL 01 AB 4821
                    </span>
                    <span className="text-xs text-emerald-600 font-semibold">Insured Active</span>
                  </div>
                  <h4 className="font-bold text-slate-900">Hyundai Creta 1.5 SX (2023)</h4>
                  <div className="text-xs text-slate-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Engine No:</span>
                      <span className="font-mono">G4FLPH19283</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chassis No:</span>
                      <span className="font-mono">MALC28198KZ8910</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fuel Type:</span>
                      <span className="capitalize">Petrol (BS6)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold bg-slate-900 text-white px-2.5 py-1 rounded-md">
                      DL 04 EF 9012
                    </span>
                    <span className="text-xs text-emerald-600 font-semibold">Insured Active</span>
                  </div>
                  <h4 className="font-bold text-slate-900">Royal Enfield Classic 350 (2024)</h4>
                  <div className="text-xs text-slate-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Engine No:</span>
                      <span className="font-mono">J1D8492019</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chassis No:</span>
                      <span className="font-mono">ME3J184910KZ392</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fuel Type:</span>
                      <span className="capitalize">Petrol (BS6)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CLAIMS TAB */}
          {activeTab === 'claims' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Claims History & Status</h3>
              <p className="text-xs text-slate-500">
                Transparent milestone tracking of submitted motor damage claims.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">CLAIM ID #VK-CLM-2025-104</span>
                    <h4 className="font-bold text-slate-900">Minor Rear Bumper & Tail Light Scratch (DL 01 AB 4821)</h4>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full w-fit">
                    Settled Cashless (₹14,200)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2.5 bg-slate-50 rounded-lg">
                    <span className="text-slate-400 block text-[10px]">Incident Date</span>
                    <span className="font-semibold text-slate-800">12 Nov 2025</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg">
                    <span className="text-slate-400 block text-[10px]">Authorized Garage</span>
                    <span className="font-semibold text-slate-800">Hyundai Authorized Body Workshop</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg">
                    <span className="text-slate-400 block text-[10px]">Surveyor Assessment</span>
                    <span className="font-semibold text-slate-800">Completed & Approved</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg">
                    <span className="text-slate-400 block text-[10px]">Out of Pocket Paid</span>
                    <span className="font-semibold text-slate-800">₹1,000 (Compulsory Deductible)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DOCUMENTS TAB */}
          {activeTab === 'documents' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Policy Schedules & Premium Tax Receipts</h3>
              <p className="text-xs text-slate-500">
                Download verified digitally signed policy certificates for DigiLocker and RTO inspection.
              </p>

              <div className="space-y-2">
                {[
                  { title: 'Motor Insurance Certificate cum Policy Schedule (Creta)', date: '29 Sep 2025', size: '240 KB', id: 'POL-2025-984210.pdf' },
                  { title: 'Tax Invoice cum Premium Receipt (GST 18% Compliant)', date: '29 Sep 2025', size: '110 KB', id: 'INV-2025-984210.pdf' },
                  { title: 'Two-Wheeler Comprehensive Policy Schedule (Classic 350)', date: '15 Dec 2024', size: '220 KB', id: 'POL-2024-419082.pdf' },
                  { title: 'NCB Transfer Certificate (Previous Insurer Retention)', date: '15 Dec 2024', size: '95 KB', id: 'NCB-2024-CERT.pdf' },
                ].map((doc, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-xs text-slate-900">{doc.title}</h5>
                        <span className="text-[10px] text-slate-500">
                          Issued: {doc.date} • {doc.size}
                        </span>
                      </div>
                    </div>

                    <button className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Personal & Nominee Profile</h3>
              <p className="text-xs text-slate-500">
                Owner-driver credentials and mandatory Personal Accident (PA) nominee specifications.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="text-slate-400 block text-[10px] font-semibold mb-0.5">FULL LEGAL NAME</label>
                  <span className="font-bold text-slate-900 text-sm">Abhishek Kumar</span>
                </div>
                <div>
                  <label className="text-slate-400 block text-[10px] font-semibold mb-0.5">REGISTERED MOBILE</label>
                  <span className="font-bold text-slate-900 text-sm">+91 98765 43210</span>
                </div>
                <div>
                  <label className="text-slate-400 block text-[10px] font-semibold mb-0.5">EMAIL ADDRESS</label>
                  <span className="font-bold text-slate-900 text-sm">abhishek.gh2000@gmail.com</span>
                </div>
                <div>
                  <label className="text-slate-400 block text-[10px] font-semibold mb-0.5">DRIVING LICENCE NO.</label>
                  <span className="font-mono font-bold text-slate-900 text-sm">DL-0420180019284</span>
                </div>
                <div>
                  <label className="text-slate-400 block text-[10px] font-semibold mb-0.5">PA COVER NOMINEE</label>
                  <span className="font-bold text-slate-900 text-sm">Sunita Kumar (Spouse, Age: 32)</span>
                </div>
                <div>
                  <label className="text-slate-400 block text-[10px] font-semibold mb-0.5">COMMUNICATION CITY</label>
                  <span className="font-bold text-slate-900 text-sm">New Delhi, Delhi NCR - 110001</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
