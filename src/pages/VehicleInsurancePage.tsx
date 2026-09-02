import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  Sliders,
  DollarSign,
  AlertTriangle,
  FileText,
  Info,
  Car,
  ChevronRight,
} from 'lucide-react';

interface VehicleInsurancePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuote: () => void;
}

export const VehicleInsurancePage: React.FC<VehicleInsurancePageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  // Interactive IDV demo state
  const [vehicleAgeYears, setVehicleAgeYears] = useState<number>(2);
  const [exShowroomPrice, setExShowroomPrice] = useState<number>(1000000);

  // Interactive voluntary deductible state
  const [voluntaryDeductible, setVoluntaryDeductible] = useState<number>(2500);

  // Standard Indian depreciation rate schedule based on vehicle age
  const getDepreciationPercent = (years: number) => {
    if (years <= 0.5) return 5;
    if (years <= 1) return 15;
    if (years <= 2) return 20;
    if (years <= 3) return 30;
    if (years <= 4) return 40;
    if (years <= 5) return 50;
    return 55;
  };

  const currentDep = getDepreciationPercent(vehicleAgeYears);
  const calculatedIDV = Math.round(exShowroomPrice * (1 - currentDep / 100));

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0B1B3D] to-slate-900 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-3.5 py-1 rounded-full border border-orange-500/30">
            Automotive Insurance Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Vehicle Protection, Explained Simply.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Understand the different types of vehicle insurance, what they cover, what they don't, and how to choose appropriately for Indian roads.
          </p>
        </div>
      </section>

      {/* 2. INSURANCE COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">
            Compare Insurance Categories
          </h2>
          <p className="text-xs text-slate-500">
            Core features compared across Third Party, Comprehensive Package, and Standalone Own Damage covers.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white divide-x divide-slate-800">
                  <th className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] w-1/4">
                    Coverage Feature
                  </th>
                  <th className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] w-1/4 bg-slate-800/80">
                    Third Party (TP)
                  </th>
                  <th className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] w-1/4 bg-orange-600">
                    Comprehensive / Package
                  </th>
                  <th className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] w-1/4 bg-blue-900">
                    Standalone Own Damage (OD)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    Third-Party Liability (Injury / Death / Property)
                  </td>
                  <td className="py-4 px-5 font-semibold text-emerald-600 bg-slate-50/50">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Statutory Cover
                    </span>
                  </td>
                  <td className="py-4 px-5 font-semibold text-emerald-600 bg-orange-50/30">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Fully Included
                    </span>
                  </td>
                  <td className="py-4 px-5 text-slate-500">
                    Depends on active separate TP policy
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    Own-Damage (Accidents, Impact & Collision)
                  </td>
                  <td className="py-4 px-5 text-slate-400 bg-slate-50/50">
                    <span className="flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-slate-400" />
                      Not Covered
                    </span>
                  </td>
                  <td className="py-4 px-5 font-semibold text-emerald-600 bg-orange-50/30">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Covered (up to IDV)
                    </span>
                  </td>
                  <td className="py-4 px-5 font-semibold text-emerald-600">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Covered (up to IDV)
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    Total Theft & Burglary
                  </td>
                  <td className="py-4 px-5 text-slate-400 bg-slate-50/50">
                    <span className="flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-slate-400" />
                      Not Covered
                    </span>
                  </td>
                  <td className="py-4 px-5 font-semibold text-emerald-600 bg-orange-50/30">
                    Generally covered subject to policy
                  </td>
                  <td className="py-4 px-5 font-semibold text-slate-700">
                    Subject to policy terms
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    Natural Calamities (Floods, Storms, Earthquakes)
                  </td>
                  <td className="py-4 px-5 text-slate-400 bg-slate-50/50">
                    <span className="flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-slate-400" />
                      Not Covered
                    </span>
                  </td>
                  <td className="py-4 px-5 font-semibold text-emerald-600 bg-orange-50/30">
                    Subject to policy terms & survey
                  </td>
                  <td className="py-4 px-5 font-semibold text-slate-700">
                    Subject to policy terms
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    Add-on Endorsements (Zero Dep, Engine, RSA, RTI)
                  </td>
                  <td className="py-4 px-5 text-slate-500 bg-slate-50/50">
                    Limited / not applicable under law
                  </td>
                  <td className="py-4 px-5 font-semibold text-emerald-700 bg-orange-50/30">
                    Available where offered by insurer
                  </td>
                  <td className="py-4 px-5 font-semibold text-slate-700">
                    Available where offered
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <span className="italic">
              *Coverage varies by product and insurer. Always review the policy wording.
            </span>
            <button
              onClick={onOpenQuote}
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
            >
              Get Custom Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. WHAT IS IDV? (EDUCATIONAL SECTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
              Fundamental Metric
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What is Insured Declared Value (IDV)?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Insured Declared Value (IDV) is an important factor in own-damage motor insurance and is generally relevant to total-loss or unrecovered theft settlements, subject to policy terms. It is the agreed maximum sum insured fixed by the insurer for the vehicle during the policy term.
            </p>
          </div>

          {/* Visual: Vehicle -> IDV -> Premium -> Claim scenario */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
              <div className="text-[10px] font-bold text-orange-400 uppercase tracking-wide">01 • Vehicle</div>
              <h4 className="font-bold text-sm text-white">Manufacturer Ex-Showroom</h4>
              <p className="text-xs text-slate-300">
                The baseline starting point is the manufacturer's listed selling price at the time of insurance.
              </p>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
              <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">02 • IDV Calculation</div>
              <h4 className="font-bold text-sm text-white">Depreciation Deduction</h4>
              <p className="text-xs text-slate-300">
                Statutory depreciation (5% for &lt;6 months to 50% for 5 years) is applied to establish current IDV.
              </p>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
              <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">03 • OD Premium</div>
              <h4 className="font-bold text-sm text-white">Direct Tariff Correlation</h4>
              <p className="text-xs text-slate-300">
                Own Damage premium is calculated as an underwriting percentage of this agreed IDV sum.
              </p>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
              <div className="text-[10px] font-bold text-purple-400 uppercase tracking-wide">04 • Claim Scenario</div>
              <h4 className="font-bold text-sm text-white">Total Loss Settlement</h4>
              <p className="text-xs text-slate-300">
                If the vehicle is stolen or suffers constructive total loss, claim payout is settled against IDV.
              </p>
            </div>
          </div>

          {/* Interactive IDV Depreciation Visualizer */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-orange-400" />
                Interactive IDV Depreciation Simulator
              </h3>
              <span className="text-[11px] text-slate-400">
                Based on Indian Motor Tariff standard depreciation slabs
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Vehicle Age:</span>
                    <span className="text-orange-400 font-bold">{vehicleAgeYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5"
                    step="0.5"
                    value={vehicleAgeYears}
                    onChange={e => setVehicleAgeYears(Number(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>6 Months (5%)</span>
                    <span>2 Years (20%)</span>
                    <span>5 Years (50%)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Original Ex-Showroom Price:</span>
                    <span className="text-white font-mono font-bold">₹{exShowroomPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="3000000"
                    step="50000"
                    value={exShowroomPrice}
                    onChange={e => setExShowroomPrice(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Output computation box */}
              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Depreciation Slab Applied:</span>
                    <span className="text-amber-400 font-bold">{currentDep}%</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Depreciation Amount:</span>
                    <span className="text-rose-400 font-mono">-₹{Math.round((exShowroomPrice * currentDep) / 100).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Calculated IDV Sum Insured</span>
                    <span className="text-xl font-extrabold text-emerald-400 font-mono">
                      ₹{calculatedIDV.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <button
                    onClick={onOpenQuote}
                    className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition-colors"
                  >
                    Quote with this IDV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM FACTORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">
            What Factors Influence Motor Insurance Premiums?
          </h2>
          <p className="text-xs text-slate-500">
            Premiums are assessed through multi-factor underwriting guidelines. Here are the 12 primary determinant factors:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {[
            { title: 'Vehicle Type & Body', desc: 'Hatchback, sedan, SUV, electric vehicle, or heavy commercial chassis.' },
            { title: 'Vehicle Age & Year', desc: 'Determines applicable tariff depreciation and add-on eligibility.' },
            { title: 'Engine Cubic Capacity (CC)', desc: 'Direct statutory determinant for Third-Party tariff schedules.' },
            { title: 'Registration Zone / RTO', desc: 'Zone A (metros with dense traffic) vs Zone B (rural/semi-urban regions).' },
            { title: 'Insured Declared Value (IDV)', desc: 'Base sum insured for computing the Own Damage (OD) premium.' },
            { title: 'Historical Claims Record', desc: 'Frequency of past accident claims filed on the registered vehicle.' },
            { title: 'Accumulated NCB Discount', desc: 'Claim-free discount percentage ranging between 0% and 50%.' },
            { title: 'Chosen Voluntary Deductible', desc: 'Higher voluntary deductible selection reduces net payable premium.' },
            { title: 'Coverage Scope Selected', desc: 'Comprehensive package vs Standalone Third Party vs OD cover.' },
            { title: 'Add-On Shield Endorsements', desc: 'Zero Dep, Engine Protection, RSA, Return to Invoice, Consumables.' },
            { title: 'Vehicle Usage Pattern', desc: 'Personal domestic transit vs commercial passenger/goods carriage.' },
            { title: 'Insurer Underwriting Mandates', desc: 'Actuarial risk tables, safety rating evaluations, and loss ratios.' },
          ].map((factor, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <h4 className="font-bold text-xs text-slate-900">{factor.title}</h4>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">{factor.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. NCB SECTION (PROGRESSION LADDER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-[#0B1B3D] text-white rounded-3xl p-6 sm:p-10 border border-emerald-900/40 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
              Policyholder Reward
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              No Claim Bonus (NCB)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              A reward and discount mechanism associated with eligible claim-free policy periods, subject to applicable rules and policy terms. NCB is earned by the driver/policyholder and stays with you even if you switch insurers or buy a new vehicle.
            </p>
          </div>

          {/* Visual Progression Ladder */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { year: '1st Renewal', discount: '20% NCB', note: 'After 1 claim-free year' },
              { year: '2nd Renewal', discount: '25% NCB', note: 'After 2 claim-free years' },
              { year: '3rd Renewal', discount: '35% NCB', note: 'After 3 claim-free years' },
              { year: '4th Renewal', discount: '45% NCB', note: 'After 4 claim-free years' },
              { year: '5th Renewal', discount: '50% NCB', note: 'Maximum statutory discount cap' },
              { year: 'NCB Protection', discount: 'Shield Add-on', note: 'Preserves slab on 1 claim' },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700/80 text-center space-y-2 flex flex-col justify-between"
              >
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {step.year}
                </span>
                <span className="text-lg font-black text-emerald-400 font-mono block">
                  {step.discount}
                </span>
                <p className="text-[10px] text-slate-400 leading-tight">
                  {step.note}
                </p>
              </div>
            ))}
          </div>

          <div className="p-3 bg-emerald-900/30 rounded-xl border border-emerald-500/30 text-xs text-emerald-200 flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Crucial Rule:</strong> If your policy expires and remains unrenewed for more than 90 days, your accumulated NCB discount will lapse to 0% under Indian motor regulations.
            </span>
          </div>
        </div>
      </section>

      {/* 6. DEDUCTIBLE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">
            What Is a Deductible?
          </h2>
          <p className="text-xs text-slate-500">
            The amount the policyholder is required to bear toward an eligible claim, depending on the policy and type of deductible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Compulsory Deductible */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">Compulsory Deductible</h3>
              <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
                Statutory Mandatory
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mandated by Indian motor tariff regulations. This is the fixed nominal amount deducted from every approved own-damage claim payout.
            </p>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1 text-slate-700">
              <div className="flex justify-between">
                <span>Four-Wheelers (&lt; 1500 cc):</span>
                <span className="font-bold">₹1,000 per claim</span>
              </div>
              <div className="flex justify-between">
                <span>Four-Wheelers (&gt; 1500 cc):</span>
                <span className="font-bold">₹2,000 per claim</span>
              </div>
              <div className="flex justify-between">
                <span>Two-Wheelers:</span>
                <span className="font-bold">₹100 per claim</span>
              </div>
            </div>
          </div>

          {/* Voluntary Deductible */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">Voluntary Deductible</h3>
              <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                Optional Premium Saver
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              An additional amount you voluntarily agree to pay out of pocket in exchange for a direct percentage discount on your Own Damage (OD) premium.
            </p>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1 text-slate-700">
              <div className="flex justify-between">
                <span>Opt for ₹2,500 Voluntary:</span>
                <span className="font-bold text-emerald-600">~20% OD Discount (up to ₹750)</span>
              </div>
              <div className="flex justify-between">
                <span>Opt for ₹5,000 Voluntary:</span>
                <span className="font-bold text-emerald-600">~25% OD Discount (up to ₹1,500)</span>
              </div>
              <div className="flex justify-between">
                <span>Opt for ₹15,000 Voluntary:</span>
                <span className="font-bold text-emerald-600">~35% OD Discount (up to ₹3,000)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COVERAGE VS EXCLUSIONS (TWO-COLUMN LAYOUT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">
            Coverage Scope vs Common Exclusions
          </h2>
          <p className="text-xs text-slate-500">
            Know exactly where protection applies and where standard limitations take effect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Usually Covered */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-emerald-900">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <h3 className="font-bold text-base">Usually Covered (Depending on Product)</h3>
            </div>

            <ul className="space-y-2.5 text-xs text-emerald-950">
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">✓</span>
                <span><strong>Accidental Damage:</strong> Collision, overturning, impact, and external transit damage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">✓</span>
                <span><strong>Total Theft & Burglary:</strong> Complete unrecovered theft covered up to established IDV.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">✓</span>
                <span><strong>Fire & Self-Ignition:</strong> Accidental fire, explosion, or lightning damage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">✓</span>
                <span><strong>Natural Calamities:</strong> Floods, inundation, earthquakes, storms, landslides.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">✓</span>
                <span><strong>Third-Party Liability:</strong> Statutory legal liability for bodily injury, death, and property.</span>
              </li>
            </ul>
          </div>

          {/* Common Exclusions */}
          <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-rose-900">
              <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <h3 className="font-bold text-base">Common Exclusions & Limitations</h3>
            </div>

            <ul className="space-y-2.5 text-xs text-rose-950">
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-700">✗</span>
                <span><strong>Normal Wear & Tear:</strong> Routine aging, tyre wear, brake pads, and general deterioration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-700">✗</span>
                <span><strong>Mechanical / Electrical Breakdown:</strong> Internal mechanical failures unless external accident occurs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-700">✗</span>
                <span><strong>Driving Without Documents:</strong> Driving without a valid driving licence or valid registration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-700">✗</span>
                <span><strong>Driving Under Influence:</strong> Operating vehicle under alcohol or intoxicating substances.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-700">✗</span>
                <span><strong>Excluded Uses:</strong> Speed racing, reliability trials, or unauthorized commercial hire.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-700">✗</span>
                <span><strong>Intentional Damage / Fraud:</strong> Staged incidents or deliberate vehicle destruction.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-2">
          <p className="text-xs text-slate-500 italic max-w-xl mx-auto">
            «Always read the specific policy wording and schedule before purchase. Exclusions and limits are defined by the underwriting insurer.»
          </p>
        </div>
      </section>
    </div>
  );
};
