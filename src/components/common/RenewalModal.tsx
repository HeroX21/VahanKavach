import React, { useState } from 'react';
import { X, RefreshCw, CheckCircle2, AlertTriangle, Shield, Search, ArrowRight, Clock, Calendar } from 'lucide-react';

interface RenewalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRegNumber?: string;
}

export const RenewalModal: React.FC<RenewalModalProps> = ({
  isOpen,
  onClose,
  initialRegNumber = '',
}) => {
  const [regNumber, setRegNumber] = useState<string>(initialRegNumber || 'DL 01 AB 4821');
  const [policyNumber, setPolicyNumber] = useState<string>('VK-2025-984210');
  const [mobileNumber, setMobileNumber] = useState<string>('9876543210');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [lookupResult, setLookupResult] = useState<any | null>(null);

  if (!isOpen) return null;

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setLookupResult({
        regNumber,
        policyNumber: policyNumber || 'VK-2025-984210',
        insuredVehicle: 'Hyundai Creta 1.5 SX (2023)',
        currentPlan: 'Comprehensive Package Cover with Zero Dep',
        expiryDate: '28 Sep 2026',
        daysRemaining: 26,
        accumulatedNCB: '25% No Claim Bonus',
        status: 'Active (Renewal Due Soon)',
        currentIDV: '₹8,10,000',
      });
    }, 800);
  };

  const resetLookup = () => {
    setLookupResult(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
        id="renewal-modal-container"
      >
        {/* Header */}
        <div className="bg-[#0B1B3D] text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Policy Renewal Portal
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  Instant Verification
                </span>
              </h2>
              <p className="text-xs text-slate-300">
                Keep your vehicle protection active without lapses
              </p>
            </div>
          </div>

          <button
            onClick={resetLookup}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-slate-800">
          {!lookupResult ? (
            <form onSubmit={handleLookup} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Vehicle Registration Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={regNumber}
                    onChange={e => setRegNumber(e.target.value.toUpperCase())}
                    placeholder="e.g. DL 01 AB 4821"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono font-bold tracking-wider text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    required
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Existing Policy Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={policyNumber}
                    onChange={e => setPolicyNumber(e.target.value)}
                    placeholder="e.g. VK-2025-XXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Registered Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={e => setMobileNumber(e.target.value)}
                    placeholder="10-digit mobile"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Shield className="w-4 h-4 text-blue-600" />
                  Why timely renewal is critical:
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1 text-[11px]">
                  <li>Avoid driving uninsured and incurring statutory traffic penalties.</li>
                  <li>Retain accumulated No Claim Bonus (NCB) discounts (lapse within 90 days).</li>
                  <li>Prevent mandatory vehicle break-in inspection fees and surveyor delays.</li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSearching}
                className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-75"
              >
                {isSearching ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Locating Policy Records...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Check Policy Status & Renew
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-900">
                    Active Policy Record Found
                  </h4>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Your vehicle is currently protected under policy #{lookupResult.policyNumber}.
                  </p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl divide-y divide-slate-100 text-xs">
                <div className="flex justify-between p-3 bg-slate-50">
                  <span className="text-slate-500">Insured Vehicle:</span>
                  <span className="font-bold text-slate-900">{lookupResult.insuredVehicle}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-slate-500">Registration Number:</span>
                  <span className="font-mono font-bold text-slate-900">{lookupResult.regNumber}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-slate-500">Current Coverage Tier:</span>
                  <span className="font-semibold text-slate-800">{lookupResult.currentPlan}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-slate-500">Policy Expiry Date:</span>
                  <span className="font-bold text-amber-700 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {lookupResult.expiryDate} ({lookupResult.daysRemaining} days remaining)
                  </span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-slate-500">Eligible NCB on Renewal:</span>
                  <span className="font-bold text-emerald-600">35% NCB (+10% step-up applied)</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50">
                  <span className="text-slate-500">Recommended Revised IDV:</span>
                  <span className="font-bold text-slate-900">{lookupResult.currentIDV}</span>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs text-blue-900">
                <strong>One-Click Renewal:</strong> You can instantly review your renewal schedule, add or adjust add-on covers (e.g. Zero Dep or RSA), and complete renewal seamlessly.
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setLookupResult(null)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
                >
                  Search Another Vehicle
                </button>
                <button
                  onClick={() => {
                    alert('Renewal proceeding initiated with verified NCB bonus transfer.');
                    resetLookup();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-colors shadow-md flex items-center justify-center gap-1.5"
                >
                  Proceed with Renewal
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
