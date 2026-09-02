import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  CLAIM_STEPS,
  DOCUMENT_CHECKLISTS,
  EMERGENCY_HELPLINES,
} from '../data/insuranceData';
import {
  ShieldAlert,
  ShieldCheck,
  FileCheck2,
  PhoneCall,
  Clock,
  ArrowRight,
  AlertTriangle,
  Building2,
  CreditCard,
  FileText,
  HelpCircle,
  Camera,
  Car,
  CheckCircle2,
  Key,
  Users,
} from 'lucide-react';

interface ClaimsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenEmergency: () => void;
  onOpenQuote: () => void;
}

export const ClaimsPage: React.FC<ClaimsPageProps> = ({
  onNavigate,
  onOpenEmergency,
  onOpenQuote,
}) => {
  const [activeDocTab, setActiveDocTab] = useState<'accident' | 'theft' | 'third-party'>('accident');

  const selectedDocList = DOCUMENT_CHECKLISTS.find(d => d.claimType === activeDocTab);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0B1B3D] to-slate-900 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-3.5 py-1 rounded-full border border-orange-500/30">
            Claims Protocol & Guidance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Claim Guidance When It Matters Most.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Step-by-step clarity for accidental damage, cashless repair networks, third-party incidents, and total-theft claims.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenEmergency}
              className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-lg flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Emergency & Roadside Help Directory
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE 4-STEP CLAIM JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">
            The Claim Settlement Flow
          </h2>
          <p className="text-xs text-slate-500">
            Standard 4-stage lifecycle for motor own-damage and cashless insurance claims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLAIM_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 relative hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-slate-200">0{step.stepNumber}</span>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    {idx === 0 && <Clock className="w-5 h-5" />}
                    {idx === 1 && <Camera className="w-5 h-5" />}
                    {idx === 2 && <Building2 className="w-5 h-5" />}
                    {idx === 3 && <CreditCard className="w-5 h-5" />}
                  </div>
                </div>

                <h3 className="font-bold text-base text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-orange-700 bg-orange-50/60 p-2.5 rounded-lg font-medium">
                <strong>Action:</strong> {step.actionItem}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CASHLESS VS REIMBURSEMENT COMPARISON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">
            Cashless Garage vs Reimbursement Claims
          </h2>
          <p className="text-xs text-slate-500">
            Choose how your repair costs are settled based on workshop authorization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cashless Garage Model */}
          <div className="bg-white rounded-2xl p-6 border-2 border-emerald-500 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="w-6 h-6 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900">Cashless Network Garage</h3>
              </div>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full uppercase">
                Recommended
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Vehicle is taken to an authorized network garage affiliated with your insurer. The insurer settles repair invoices directly with the workshop.
            </p>

            <div className="space-y-2 text-xs text-slate-700 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Minimal Out-of-Pocket:</strong> You only pay compulsory deductibles + uncovered items.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Direct Settlement:</strong> Insurer pays labor and approved parts cost directly to garage.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Surveyor Coordination:</strong> Fast digital or physical surveyor clearance at the workshop.</span>
              </div>
            </div>
          </div>

          {/* Reimbursement Model */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Reimbursement Claim</h3>
              </div>
              <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full uppercase">
                Non-Network
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              If your vehicle is repaired at a non-network garage, you pay the repair invoice upfront and file for reimbursement from the insurer afterwards.
            </p>

            <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Any Workshop Choice:</strong> Freedom to repair at local mechanics or specialized custom shops.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Requires Survey Before Repair:</strong> Mandatory surveyor inspection before repairs commence.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Post-Repair Refund:</strong> Submit original tax invoice, payment receipt, and satisfaction voucher.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REQUIRED DOCUMENTS BY CLAIM TYPE (TABBED) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Required Documents Checklist
            </h2>
            <p className="text-xs text-slate-500">
              Prepare the required documentation to ensure seamless surveyor inspection and verification.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start sm:self-auto text-xs font-semibold">
            <button
              onClick={() => setActiveDocTab('accident')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeDocTab === 'accident'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Accidental Damage
            </button>
            <button
              onClick={() => setActiveDocTab('theft')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeDocTab === 'theft'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Vehicle Theft
            </button>
            <button
              onClick={() => setActiveDocTab('third-party')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeDocTab === 'third-party'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Third-Party Claims
            </button>
          </div>
        </div>

        {selectedDocList && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                {activeDocTab === 'accident' && <Car className="w-5 h-5" />}
                {activeDocTab === 'theft' && <Key className="w-5 h-5" />}
                {activeDocTab === 'third-party' && <Users className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{selectedDocList.title}</h3>
                <p className="text-xs text-slate-500">Checklist of mandatory papers for this category</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedDocList.documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-3"
                >
                  <FileText className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 5. LEGAL & PROCESS DISCLAIMER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-slate-300 rounded-2xl p-6 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <AlertTriangle className="w-4 h-4 text-orange-400" />
            <span>Important Claims Notice</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Claim approval, settlement timelines and payable amounts are strictly subject to policy terms, conditions, exceptions, surveyor inspection and insurer underwriting guidelines. VahanKavach provides process assistance and does not guarantee claim approval or settlement values.
          </p>
        </div>
      </section>
    </div>
  );
};
