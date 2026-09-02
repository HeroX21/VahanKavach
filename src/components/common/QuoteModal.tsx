import React, { useState } from 'react';
import {
  X,
  Car,
  Bike,
  Truck,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Info,
  Sparkles,
  FileCheck,
  Download,
} from 'lucide-react';
import { VehicleCategory, InsuranceType } from '../../types';
import { ADD_ONS_DATA } from '../../data/insuranceData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicleType?: VehicleCategory;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialVehicleType = 'car',
}) => {
  const [step, setStep] = useState<number>(1);
  const [vehicleType, setVehicleType] = useState<VehicleCategory>(initialVehicleType);
  const [regNumber, setRegNumber] = useState<string>('DL 01 AB 4821');
  const [isNewVehicle, setIsNewVehicle] = useState<boolean>(false);
  const [cityRTO, setCityRTO] = useState<string>('Delhi (DL-01)');
  const [makeModel, setMakeModel] = useState<string>('Hyundai Creta 1.5 SX');
  const [registrationYear, setRegistrationYear] = useState<number>(2023);
  const [fuelType, setFuelType] = useState<'petrol' | 'diesel' | 'cng' | 'electric'>('petrol');
  const [insurancePlan, setInsurancePlan] = useState<InsuranceType>('comprehensive');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['zero-dep', 'engine-protection', 'roadside-assistance']);
  const [previousNCB, setPreviousNCB] = useState<number>(25);
  const [hadPreviousClaim, setHadPreviousClaim] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  // Indicative calculated parameters (sample illustrative breakdown for quote display)
  const calculateIndicativeQuote = () => {
    const baseIDVMap: Record<VehicleCategory, number> = {
      car: 850000,
      suv: 1450000,
      bike: 95000,
      ev: 1250000,
      commercial: 650000,
      fleet: 2200000,
    };
    const ageMultiplier = Math.max(0.5, 1 - (2026 - registrationYear) * 0.1);
    const estimatedIDV = Math.round((baseIDVMap[vehicleType] || 800000) * ageMultiplier);
    
    // Transparent components
    const odRate = vehicleType === 'bike' ? 0.015 : 0.019;
    const baseOD = insurancePlan === 'third-party' ? 0 : Math.round(estimatedIDV * odRate);
    const statutoryTP = vehicleType === 'bike' ? 1410 : vehicleType === 'commercial' ? 8400 : 3416;
    const ncbDiscount = hadPreviousClaim ? 0 : Math.round((baseOD * previousNCB) / 100);
    const addOnTotal = insurancePlan === 'third-party' ? 0 : selectedAddOns.length * (vehicleType === 'bike' ? 450 : 1850);
    const netPremium = Math.max(statutoryTP, baseOD - ncbDiscount + addOnTotal + statutoryTP);
    const gst = Math.round(netPremium * 0.18);
    const totalEstimate = netPremium + gst;

    return {
      estimatedIDV,
      baseOD,
      statutoryTP,
      ncbDiscount,
      addOnTotal,
      netPremium,
      gst,
      totalEstimate,
    };
  };

  const quoteCalc = calculateIndicativeQuote();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
        id="quote-modal-container"
      >
        {/* Modal Header */}
        <div className="bg-[#0B1B3D] text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Get Your Vehicle Kavach Quote
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  Instant Preview
                </span>
              </h2>
              <p className="text-xs text-slate-300">
                Transparent Indian motor protection quote engine
              </p>
            </div>
          </div>

          <button
            onClick={resetForm}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Stepper */}
        {!isSubmitted && (
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
            <div className="flex items-center justify-between max-w-lg mx-auto">
              {[
                { num: 1, label: 'Vehicle' },
                { num: 2, label: 'Details' },
                { num: 3, label: 'Coverage & Add-ons' },
                { num: 4, label: 'Quote Breakdown' },
              ].map((s, idx) => (
                <div key={s.num} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      step === s.num
                        ? 'bg-orange-500 text-white shadow-md'
                        : step > s.num
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                  </div>
                  <span
                    className={`text-xs font-medium hidden sm:inline ${
                      step >= s.num ? 'text-slate-900' : 'text-slate-400'
                    }`}
                  >
                    {s.label}
                  </span>
                  {idx < 3 && <div className="w-6 sm:w-10 h-0.5 bg-slate-200 mx-1" />}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-800">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Your Quotation Summary is Ready!
              </h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you. We have structured an indicative quote based on your <strong>{makeModel} ({vehicleType.toUpperCase()})</strong> with selected Kavach protection tiers.
              </p>
              
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs text-slate-700">
                <div className="flex justify-between border-b pb-1">
                  <span className="text-slate-500">Vehicle Reference:</span>
                  <span className="font-semibold">{regNumber || 'New Vehicle'}</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="text-slate-500">Insured Declared Value (IDV):</span>
                  <span className="font-semibold">₹{quoteCalc.estimatedIDV.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="text-slate-500">Selected Plan:</span>
                  <span className="font-semibold capitalize">{insurancePlan}</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="text-slate-500">Add-ons Included:</span>
                  <span className="font-semibold">{selectedAddOns.length} Add-ons</span>
                </div>
                <div className="flex justify-between pt-1 text-sm text-[#0B1B3D]">
                  <span className="font-bold">Estimated Indicative Total:</span>
                  <span className="font-bold text-orange-600">₹{quoteCalc.totalEstimate.toLocaleString('en-IN')}*</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0B1B3D] text-white text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Save Summary
                </button>
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm"
                >
                  Proceed with Application
                </button>
              </div>

              <p className="text-[11px] text-slate-500 max-w-lg mx-auto pt-2">
                *Disclaimer: Figures shown are for demonstration and structured guidance. Final premium, underwriting criteria, and terms are determined by the participating insurance provider upon vehicle verification.
              </p>
            </div>
          ) : (
            <form onSubmit={handleNext}>
              {/* STEP 1: VEHICLE TYPE */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Step 1: Select Your Vehicle Category
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Choose the vehicle type to tailor the appropriate policy structure.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { type: 'car' as VehicleCategory, label: 'Private Car', icon: Car, desc: 'Sedan, Hatchback, MUV' },
                      { type: 'bike' as VehicleCategory, label: 'Two-Wheeler', icon: Bike, desc: 'Motorcycle & Scooter' },
                      { type: 'ev' as VehicleCategory, label: 'Electric (EV)', icon: Zap, desc: 'High-voltage Battery' },
                      { type: 'commercial' as VehicleCategory, label: 'Commercial', icon: Truck, desc: 'Goods / Passenger' },
                    ].map(item => {
                      const Icon = item.icon;
                      const isSelected = vehicleType === item.type;
                      return (
                        <button
                          key={item.type}
                          type="button"
                          onClick={() => setVehicleType(item.type)}
                          className={`p-4 rounded-xl border text-left transition-all flex flex-col items-center justify-center text-center gap-2 group ${
                            isSelected
                              ? 'border-orange-500 bg-orange-50/70 text-[#0B1B3D] ring-2 ring-orange-500/20'
                              : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-orange-500 text-white'
                                : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                            }`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="font-semibold text-sm">{item.label}</span>
                          <span className="text-[11px] text-slate-500">{item.desc}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Vehicle State Toggle */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <span className="text-sm font-semibold text-slate-800">
                        Is this a brand new unregistered vehicle?
                      </span>
                      <p className="text-xs text-slate-500">
                        Brand new vehicles require bundled or multi-year statutory protection.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsNewVehicle(false)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                          !isNewVehicle
                            ? 'bg-[#0B1B3D] text-white'
                            : 'bg-white text-slate-700 border'
                        }`}
                      >
                        Existing / Used
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsNewVehicle(true)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                          isNewVehicle
                            ? 'bg-[#0B1B3D] text-white'
                            : 'bg-white text-slate-700 border'
                        }`}
                      >
                        Brand New
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: REGISTRATION & MAKE DETAILS */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Step 2: Vehicle & Registration Details
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Accurate details help evaluate accurate Insured Declared Value (IDV) and underwriting.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {!isNewVehicle ? (
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Vehicle Registration Number
                        </label>
                        <input
                          type="text"
                          value={regNumber}
                          onChange={e => setRegNumber(e.target.value.toUpperCase())}
                          placeholder="e.g. MH 02 CD 1234"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono font-semibold tracking-wider text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                          required
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          RTO / City of Purchase
                        </label>
                        <select
                          value={cityRTO}
                          onChange={e => setCityRTO(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        >
                          <option value="Delhi (DL-01)">Delhi (DL-01)</option>
                          <option value="Mumbai South (MH-01)">Mumbai South (MH-01)</option>
                          <option value="Bengaluru Urban (KA-01)">Bengaluru Urban (KA-01)</option>
                          <option value="Hyderabad Central (TS-09)">Hyderabad Central (TS-09)</option>
                          <option value="Chennai Central (TN-01)">Chennai Central (TN-01)</option>
                          <option value="Pune (MH-12)">Pune (MH-12)</option>
                          <option value="Ahmedabad (GJ-01)">Ahmedabad (GJ-01)</option>
                          <option value="Kolkata (WB-01)">Kolkata (WB-01)</option>
                        </select>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Vehicle Make & Model
                      </label>
                      <input
                        type="text"
                        value={makeModel}
                        onChange={e => setMakeModel(e.target.value)}
                        placeholder="e.g. Maruti Swift / Tata Nexon / Hyundai Creta"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Registration Year
                      </label>
                      <select
                        value={registrationYear}
                        onChange={e => setRegistrationYear(Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      >
                        {[2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map(yr => (
                          <option key={yr} value={yr}>
                            {yr} {yr === 2026 ? '(Brand New)' : ''}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Fuel / Propulsion Type
                      </label>
                      <div className="grid grid-cols-4 gap-1.5">
                        {(['petrol', 'diesel', 'cng', 'electric'] as const).map(f => (
                          <button
                            key={f}
                            type="button"
                            onClick={() => setFuelType(f)}
                            className={`py-2 px-1 rounded-lg text-xs font-semibold uppercase transition-colors ${
                              fuelType === f
                                ? 'bg-[#0B1B3D] text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Previous NCB and Claim Record */}
                  {!isNewVehicle && (
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-800">
                          Did you make an insurance claim in the past year?
                        </span>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setHadPreviousClaim(false);
                              setPreviousNCB(25);
                            }}
                            className={`px-3 py-1 rounded-md text-xs font-semibold ${
                              !hadPreviousClaim
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            No (Earned NCB)
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setHadPreviousClaim(true);
                              setPreviousNCB(0);
                            }}
                            className={`px-3 py-1 rounded-md text-xs font-semibold ${
                              hadPreviousClaim
                                ? 'bg-rose-600 text-white'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            Yes (Claim Made)
                          </button>
                        </div>
                      </div>

                      {!hadPreviousClaim && (
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                            Existing No Claim Bonus (NCB) Discount on Previous Policy:
                          </label>
                          <div className="flex gap-2">
                            {[0, 20, 25, 35, 45, 50].map(ncb => (
                              <button
                                key={ncb}
                                type="button"
                                onClick={() => setPreviousNCB(ncb)}
                                className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                                  previousNCB === ncb
                                    ? 'bg-orange-500 border-orange-500 text-white'
                                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                                }`}
                              >
                                {ncb}%
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* STEP 3: COVERAGE & ADD-ONS */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Step 3: Select Coverage & Add-on Shields
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Configure base coverage and optional protections suited to your drive.
                    </p>
                  </div>

                  {/* Base Plan Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setInsurancePlan('comprehensive')}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        insurancePlan === 'comprehensive'
                          ? 'border-orange-500 bg-orange-50/50 ring-2 ring-orange-500/20'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-slate-900">Comprehensive Package</span>
                        <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">
                          Recommended
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Own Damage + Third-Party Liability + Fire + Theft + Acts of God.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setInsurancePlan('third-party');
                        setSelectedAddOns([]);
                      }}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        insurancePlan === 'third-party'
                          ? 'border-orange-500 bg-orange-50/50 ring-2 ring-orange-500/20'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-slate-900">Third-Party Only</span>
                        <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-full">
                          Statutory
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Mandatory legal liability for third-party injury, death, and property damage.
                      </p>
                    </button>
                  </div>

                  {/* Add-on Selector */}
                  {insurancePlan !== 'third-party' ? (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                          Select Add-On Covers (Optional)
                        </span>
                        <span className="text-xs text-slate-500">
                          {selectedAddOns.length} of {ADD_ONS_DATA.length} active
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1">
                        {ADD_ONS_DATA.map(addon => {
                          const isSelected = selectedAddOns.includes(addon.id);
                          return (
                            <div
                              key={addon.id}
                              onClick={() => toggleAddOn(addon.id)}
                              className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                                isSelected
                                  ? 'border-orange-500 bg-orange-50/40'
                                  : 'border-slate-200 bg-white hover:bg-slate-50'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                                  isSelected
                                    ? 'bg-orange-500 border-orange-500 text-white'
                                    : 'border-slate-300 bg-white'
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-slate-900 truncate">
                                    {addon.name}
                                  </span>
                                  {addon.recommended && (
                                    <span className="text-[9px] bg-orange-100 text-orange-700 font-semibold px-1.5 py-0.2 rounded">
                                      Popular
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-500 line-clamp-1">
                                  {addon.tagline}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 flex items-center gap-2">
                      <Info className="w-4 h-4 shrink-0 text-amber-600" />
                      <span>
                        Under statutory Indian motor regulations, Own-Damage add-on covers cannot be attached to a standalone Third-Party policy.
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: QUOTE BREAKDOWN & SUMMARY */}
              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Step 4: Indicative Quote Calculation
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Structured breakdown based on vehicle specifications and selected coverage parameters.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[11px] font-medium text-slate-500 block">Vehicle Valuation (IDV)</span>
                      <span className="text-base font-extrabold text-slate-900">
                        ₹{quoteCalc.estimatedIDV.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">
                        {registrationYear} {makeModel}
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[11px] font-medium text-slate-500 block">NCB Discount</span>
                      <span className="text-base font-extrabold text-emerald-600">
                        {previousNCB}% Discount
                      </span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">
                        Saved: ₹{quoteCalc.ncbDiscount.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="p-3 bg-orange-50 rounded-xl border border-orange-200">
                      <span className="text-[11px] font-medium text-orange-800 block">Estimated Indicative Total</span>
                      <span className="text-lg font-black text-orange-600">
                        ₹{quoteCalc.totalEstimate.toLocaleString('en-IN')}*
                      </span>
                      <span className="text-[10px] text-orange-700 block mt-0.5">
                        Incl. 18% GST (₹{quoteCalc.gst.toLocaleString('en-IN')})
                      </span>
                    </div>
                  </div>

                  {/* Itemized Table */}
                  <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                    <div className="bg-slate-100 px-4 py-2 font-bold text-slate-700 flex justify-between">
                      <span>Premium Component</span>
                      <span>Indicative Amount</span>
                    </div>
                    <div className="divide-y divide-slate-100 px-4 py-1">
                      <div className="flex justify-between py-2 text-slate-700">
                        <span>Basic Own Damage (OD) Premium</span>
                        <span className="font-semibold">₹{quoteCalc.baseOD.toLocaleString('en-IN')}</span>
                      </div>
                      {quoteCalc.ncbDiscount > 0 && (
                        <div className="flex justify-between py-2 text-emerald-600">
                          <span>Less: No Claim Bonus ({previousNCB}%)</span>
                          <span className="font-semibold">-₹{quoteCalc.ncbDiscount.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      <div className="flex justify-between py-2 text-slate-700">
                        <span>Statutory Third-Party Liability Premium</span>
                        <span className="font-semibold">₹{quoteCalc.statutoryTP.toLocaleString('en-IN')}</span>
                      </div>
                      {selectedAddOns.length > 0 && (
                        <div className="flex justify-between py-2 text-slate-700">
                          <span>Selected Add-On Covers ({selectedAddOns.length})</span>
                          <span className="font-semibold">₹{quoteCalc.addOnTotal.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      <div className="flex justify-between py-2 text-slate-500">
                        <span>Goods & Services Tax (18% GST)</span>
                        <span>₹{quoteCalc.gst.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-200 text-[11px] text-blue-900 leading-relaxed">
                    <strong>Underwriting Notice:</strong> Insurance products are subject to applicable terms, conditions, exclusions, underwriting and regulatory requirements. No fake prices or guaranteed quotes are presented without final insurer verification.
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0B1B3D] to-blue-900 text-white text-xs font-bold hover:from-slate-900 hover:to-blue-950 transition-all shadow-md flex items-center gap-2"
                >
                  {step === 4 ? 'Confirm & Get Full Quote' : 'Continue'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
