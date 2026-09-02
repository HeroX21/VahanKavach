import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PLAN_TIERS, ADD_ONS_DATA } from '../data/insuranceData';
import {
  Shield,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Info,
  Layers,
  Cpu,
  Wrench,
  FileSpreadsheet,
  TrendingUp,
  Key,
  Disc,
  Plus,
  Check,
  SlidersHorizontal,
} from 'lucide-react';

interface PlansPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuote: () => void;
}

export const PlansPage: React.FC<PlansPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  // Interactive Add-on Builder state
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'zero-dep',
    'engine-protection',
    'roadside-assistance',
  ]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const addonIconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    Cpu: <Cpu className="w-5 h-5 text-purple-500" />,
    Wrench: <Wrench className="w-5 h-5 text-orange-500" />,
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-blue-500" />,
    Layers: <Layers className="w-5 h-5 text-indigo-500" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-500" />,
    Key: <Key className="w-5 h-5 text-amber-500" />,
    Disc: <Disc className="w-5 h-5 text-rose-500" />,
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0B1B3D] to-slate-900 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-3.5 py-1 rounded-full border border-orange-500/30">
            Protection Architecture
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Choose Protection That Fits Your Vehicle.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From statutory third-party liability to comprehensive package coverage and specialized add-on shields, customize your Kavach with complete clarity.
          </p>
        </div>
      </section>

      {/* 2. THREE PRIMARY PLAN CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Standard Protection Tiers</h2>
          <p className="text-xs text-slate-500">
            Premium calculated based on vehicle, location, coverage, insurer and other applicable underwriting factors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PLAN_TIERS.map(tier => (
            <div
              key={tier.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all flex flex-col justify-between space-y-6 relative ${
                tier.popular
                  ? 'border-2 border-orange-500 shadow-xl ring-4 ring-orange-500/10'
                  : 'border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {tier.badge}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">{tier.name}</h3>
                  <p className="text-xs font-semibold text-orange-600">{tier.tagline}</p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 leading-relaxed border border-slate-100">
                  <strong className="text-slate-900 block mb-0.5">Best Suited For:</strong>
                  {tier.suitableFor}
                </div>

                {/* Features list */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">
                    Core Inclusions:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions list */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                    Key Limitations:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    {tier.exclusions.map((excl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{excl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer & CTA */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="text-center text-[11px] text-slate-500 italic">
                  Premium calculated via vehicle & location factors
                </div>
                <button
                  onClick={onOpenQuote}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${
                    tier.popular
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/20'
                      : 'bg-[#0B1B3D] hover:bg-slate-800 text-white'
                  }`}
                >
                  {tier.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ADD-ON BUILDER (INTERACTIVE UI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Build Your Kavach
                </h2>
                <span className="text-xs bg-orange-500/20 text-orange-300 font-bold px-2.5 py-0.5 rounded-full border border-orange-500/30">
                  Interactive Configurator
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Select and attach add-on shields to see how comprehensive protection fortifies your vehicle.
              </p>
            </div>

            <button
              onClick={() => setSelectedAddons(ADD_ONS_DATA.map(a => a.id))}
              className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1 self-start md:self-auto"
            >
              Select All 8 Shields
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Selectable Add-on Cards (8 Cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ADD_ONS_DATA.map(addon => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                      isSelected
                        ? 'border-orange-500 bg-orange-500/10 ring-1 ring-orange-500/40'
                        : 'border-slate-800 bg-slate-800/60 hover:bg-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center">
                          {addonIconMap[addon.iconName] || <Shield className="w-5 h-5 text-orange-400" />}
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
                            isSelected
                              ? 'bg-orange-500 border-orange-500 text-white'
                              : 'border-slate-600 bg-slate-800'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-sm text-white">{addon.name}</h4>
                        <p className="text-[11px] text-orange-300/90 font-medium mt-0.5">
                          {addon.tagline}
                        </p>
                      </div>

                      <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
                        {addon.description}
                      </p>
                    </div>

                    <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
                      <strong>Ideal for:</strong> {addon.idealFor}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Selected Protection Summary (4 Cols) */}
            <div className="lg:col-span-4 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-5 sticky top-24">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Configuration Summary
                </span>
                <h3 className="text-lg font-bold text-white">Selected Protection</h3>
              </div>

              {/* Dynamic shield count badge */}
              <div className="p-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl border border-orange-500/30 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-orange-400 font-mono">
                    {selectedAddons.length} / {ADD_ONS_DATA.length}
                  </span>
                  <span className="text-xs text-slate-300 block font-medium">Add-on Shields Active</span>
                </div>
                <ShieldCheck className="w-8 h-8 text-orange-400" />
              </div>

              {/* List of active add-ons */}
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1 text-xs">
                {selectedAddons.length === 0 ? (
                  <div className="text-slate-500 italic py-4 text-center">
                    No optional add-ons selected. Click any shield on the left to include it.
                  </div>
                ) : (
                  selectedAddons.map(id => {
                    const addon = ADD_ONS_DATA.find(a => a.id === id);
                    if (!addon) return null;
                    return (
                      <div
                        key={id}
                        className="flex items-center justify-between p-2 bg-slate-900 rounded-lg border border-slate-800"
                      >
                        <span className="font-semibold text-slate-200">{addon.name}</span>
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            toggleAddon(id);
                          }}
                          className="text-[10px] text-slate-400 hover:text-rose-400 p-1"
                        >
                          Remove
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="pt-2 space-y-3 border-t border-slate-800">
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Add-on availability depends on vehicle age, make, and the underwriting criteria of the participating insurer.
                </p>

                <button
                  onClick={onOpenQuote}
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Get Quote with Selected Shields
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POLICY COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">
            Multi-Product Comparison Framework
          </h2>
          <p className="text-xs text-slate-500">
            Review side-by-side parameters across standard policy structures.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white divide-x divide-slate-800">
                  <th className="py-3.5 px-4 font-bold uppercase text-[10px]">Parameter</th>
                  <th className="py-3.5 px-4 font-bold uppercase text-[10px]">Third-Party (TP)</th>
                  <th className="py-3.5 px-4 font-bold uppercase text-[10px]">Comprehensive Package</th>
                  <th className="py-3.5 px-4 font-bold uppercase text-[10px]">Standalone OD</th>
                  <th className="py-3.5 px-4 font-bold uppercase text-[10px]">Bundled (New Vehicle)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Insured Declared Value (IDV)</td>
                  <td className="py-3.5 px-4 text-slate-500">Not Applicable</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Agreed Sum Insured (Tariff)</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Agreed Sum Insured (Tariff)</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Annual Depreciated IDV</td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Standard Deductible</td>
                  <td className="py-3.5 px-4 text-slate-500">Nil on third-party claims</td>
                  <td className="py-3.5 px-4">Compulsory (₹1k–₹2k) + Voluntary</td>
                  <td className="py-3.5 px-4">Compulsory (₹1k–₹2k) + Voluntary</td>
                  <td className="py-3.5 px-4">Standard tariff deductible</td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Key Benefits</td>
                  <td className="py-3.5 px-4">Statutory legal compliance, PA cover</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">Accident, Theft, Fire, Flood, TP</td>
                  <td className="py-3.5 px-4">Accident, Theft, Fire, Calamities</td>
                  <td className="py-3.5 px-4">1-Yr OD + 3/5-Yr Multi-Year TP</td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Add-On Compatibility</td>
                  <td className="py-3.5 px-4 text-slate-500">None permitted by regulations</td>
                  <td className="py-3.5 px-4 font-bold text-orange-600">All 8 Add-on Shields Supported</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700">Supported (subject to age)</td>
                  <td className="py-3.5 px-4 font-bold text-orange-600">Zero Dep & RTI Recommended</td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Network Garages</td>
                  <td className="py-3.5 px-4 text-slate-500">Not Applicable</td>
                  <td className="py-3.5 px-4 font-semibold text-blue-700">Cashless Network Garages</td>
                  <td className="py-3.5 px-4 font-semibold text-blue-700">Cashless Network Garages</td>
                  <td className="py-3.5 px-4 font-semibold text-blue-700">Authorized OEM Workshops</td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Action</td>
                  <td className="py-3.5 px-4">
                    <button onClick={onOpenQuote} className="text-xs font-bold text-blue-700 hover:underline">
                      Quote TP
                    </button>
                  </td>
                  <td className="py-3.5 px-4">
                    <button onClick={onOpenQuote} className="text-xs font-bold text-orange-600 hover:underline">
                      Quote Comprehensive
                    </button>
                  </td>
                  <td className="py-3.5 px-4">
                    <button onClick={onOpenQuote} className="text-xs font-bold text-blue-700 hover:underline">
                      Quote OD
                    </button>
                  </td>
                  <td className="py-3.5 px-4">
                    <button onClick={onOpenQuote} className="text-xs font-bold text-blue-700 hover:underline">
                      Quote Bundled
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600">
            <strong>Disclosure:</strong> Information shown is subject to insurer product availability and final underwriting. Terms, conditions, deductibles and add-on endorsements are governed by individual insurer policy wordings.
          </div>
        </div>
      </section>
    </div>
  );
};
