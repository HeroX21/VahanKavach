import React, { useState } from 'react';
import { X, PhoneCall, AlertOctagon, Wrench, ShieldAlert, Truck, MapPin, CheckCircle, Navigation } from 'lucide-react';

interface EmergencySupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencySupportModal: React.FC<EmergencySupportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
        id="emergency-modal-container"
      >
        {/* Header */}
        <div className="bg-[#0B1B3D] text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <AlertOctagon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Emergency & Roadside Help
              </h2>
              <p className="text-xs text-slate-300">
                Immediate incident response & helpline directory
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-slate-800">
          <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="text-xs text-rose-900 leading-relaxed">
              <span className="font-bold block">Accident or Immediate Danger?</span>
              Prioritize personal safety. Turn on vehicle hazard flashers, move behind the safety barrier if on highway, and contact national emergency services immediately.
            </div>
          </div>

          {/* Quick Action Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              onClick={() => setSelectedAction('rsa')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedAction === 'rsa'
                  ? 'border-orange-500 bg-orange-50/50 ring-2 ring-orange-500/20'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Roadside Towing (RSA)</h4>
                  <span className="text-[11px] text-slate-500">24×7 Network Towing</span>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                Breakdown, battery drain, flat tyre, or accidental immobilization towing to nearest workshop.
              </p>
            </div>

            <div
              onClick={() => setSelectedAction('claims')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedAction === 'claims'
                  ? 'border-blue-500 bg-blue-50/50 ring-2 ring-blue-500/20'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Claim Intimation</h4>
                  <span className="text-[11px] text-slate-500">First Notice of Loss</span>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                Report accidental damage or theft before moving vehicle to initiate cashless survey.
              </p>
            </div>
          </div>

          {/* National Helpline Directory */}
          <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
            <div className="bg-slate-100 px-4 py-2 font-bold text-slate-700">
              National Emergency & Highway Helplines (India)
            </div>
            <div className="divide-y divide-slate-100 p-2">
              <div className="flex items-center justify-between p-2">
                <div>
                  <span className="font-bold text-slate-800 block">National Emergency Response (All-in-One)</span>
                  <span className="text-[11px] text-slate-500">Police, Fire & Medical Services</span>
                </div>
                <span className="px-3 py-1 bg-slate-900 text-white font-mono font-bold rounded-lg text-sm">
                  112
                </span>
              </div>
              <div className="flex items-center justify-between p-2">
                <div>
                  <span className="font-bold text-slate-800 block">National Highways Authority of India (NHAI)</span>
                  <span className="text-[11px] text-slate-500">Highway Emergency & Roadside Crane Assistance</span>
                </div>
                <span className="px-3 py-1 bg-blue-700 text-white font-mono font-bold rounded-lg text-sm">
                  1033
                </span>
              </div>
              <div className="flex items-center justify-between p-2">
                <div>
                  <span className="font-bold text-slate-800 block">VahanKavach Digital Assistance Support</span>
                  <span className="text-[11px] text-slate-500">Dedicated Claim & Policy Concierge Desk</span>
                </div>
                <span className="px-3 py-1 bg-orange-600 text-white font-mono font-bold rounded-lg text-xs">
                  support@vahankavach.in
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              Close Emergency Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
