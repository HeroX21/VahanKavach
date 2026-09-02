import React, { useState } from 'react';
import { PageRoute, VehicleCategory } from '../types';
import {
  ADD_ONS_DATA,
  COVERAGE_ITEMS,
  TRUST_INDICATORS,
  VEHICLE_CATEGORIES_DATA,
} from '../data/insuranceData';
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  Car,
  Bike,
  Truck,
  Zap,
  CheckCircle2,
  Clock,
  Smartphone,
  Lock,
  Flame,
  CloudRain,
  Users,
  HeartHandshake,
  Building2,
  Cpu,
  Wrench,
  FileSpreadsheet,
  Layers,
  TrendingUp,
  Key,
  Disc,
  Boxes,
  HelpCircle,
  Eye,
  LifeBuoy,
  FileCheck,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuote: (initialType?: VehicleCategory) => void;
  onOpenRenewal: () => void;
  onOpenEmergency: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenRenewal,
  onOpenEmergency,
}) => {
  const [activeCoverageTab, setActiveCoverageTab] = useState<'all' | 'base' | 'addon'>('all');

  const coverageFilter = COVERAGE_ITEMS.filter(item => {
    if (activeCoverageTab === 'all') return true;
    if (activeCoverageTab === 'base') return item.type === 'base' || item.type === 'mandatory';
    if (activeCoverageTab === 'addon') return item.type === 'addon';
    return true;
  });

  const iconLookup: Record<string, React.ReactNode> = {
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-orange-500" />,
    Lock: <Lock className="w-5 h-5 text-blue-500" />,
    Flame: <Flame className="w-5 h-5 text-rose-500" />,
    CloudRain: <CloudRain className="w-5 h-5 text-sky-500" />,
    Users: <Users className="w-5 h-5 text-indigo-500" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-emerald-500" />,
    Truck: <Truck className="w-5 h-5 text-amber-500" />,
    Building2: <Building2 className="w-5 h-5 text-teal-500" />,
    Smartphone: <Smartphone className="w-5 h-5 text-blue-600" />,
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
    <div className="space-y-20 pb-16 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-slate-900 via-[#0B1B3D] to-slate-950 text-white overflow-hidden">
        {/* Subtle Background Kavach Geometry Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px]" />
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 100 0 L 100 900 M 300 0 L 300 900 M 500 0 L 500 900 M 700 0 L 700 900 M 900 0 L 900 900 M 1100 0 L 1100 900"
              stroke="#EA580C"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Brand Positioning Capsule */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-orange-400">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span>वाहनकवच • Vehicle Shield for India</span>
              </div>

              {/* Large Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Protection That{' '}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Moves With You.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Simple, transparent and technology-enabled vehicle protection designed for every journey. Compare comprehensive plans, add curated shields, and manage policies with zero confusion.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onOpenQuote('car')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm shadow-xl shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Get Your Quote
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('plans')}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm backdrop-blur-sm transition-colors flex items-center justify-center gap-2"
                >
                  Explore Coverage
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent Deductibles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cashless Garage Network</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Paperless Process</span>
                </div>
              </div>
            </div>

            {/* Right Hero Automotive Graphic (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* SVG Visual: Vehicle + Road + Kavach Shield Interface */}
                <div className="relative bg-gradient-to-b from-blue-950/60 to-slate-900/80 rounded-3xl p-6 border border-blue-500/20 backdrop-blur-xl shadow-2xl overflow-hidden">
                  {/* Glowing background aura */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

                  {/* Kavach Shield Graphic Component */}
                  <div className="relative h-72 w-full flex items-center justify-center">
                    <svg viewBox="0 0 320 300" className="w-full h-full drop-shadow-2xl" fill="none">
                      {/* Shield Outline Path */}
                      <path
                        d="M 160 20 L 280 60 C 280 200 160 280 160 280 C 160 280 40 200 40 60 L 160 20 Z"
                        fill="#0B1B3D"
                        fillOpacity="0.85"
                        stroke="#EA580C"
                        strokeWidth="3"
                        strokeDasharray="4 2"
                      />

                      {/* Perspective Road converging into horizon */}
                      <path
                        d="M 135 120 L 185 120 L 230 260 L 90 260 Z"
                        fill="#0F172A"
                      />
                      {/* Road Center Line Markings */}
                      <line x1="160" y1="130" x2="160" y2="150" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="6 4" />
                      <line x1="160" y1="165" x2="160" y2="195" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="8 6" />
                      <line x1="160" y1="210" x2="160" y2="250" stroke="#FFFFFF" strokeWidth="5" strokeDasharray="10 8" />

                      {/* Modern Car Silhouette Graphic on Road */}
                      <g transform="translate(100, 110)">
                        {/* Car Silhouette */}
                        <path
                          d="M 20 50 L 32 30 C 36 24 84 24 88 30 L 100 50 L 110 56 C 114 58 116 66 114 74 L 108 78 L 12 78 L 6 74 C 4 66 6 58 10 56 Z"
                          fill="#1E3A8A"
                        />
                        {/* Windshield */}
                        <path
                          d="M 33 48 L 40 33 C 42 30 78 30 80 33 L 87 48 Z"
                          fill="#38BDF8"
                          opacity="0.9"
                        />
                        {/* Headlights */}
                        <circle cx="22" cy="62" r="5" fill="#FEF08A" />
                        <circle cx="98" cy="62" r="5" fill="#FEF08A" />
                        {/* Light beams */}
                        <path d="M 22 62 L -10 90 L 10 90 Z" fill="#FEF08A" opacity="0.3" />
                        <path d="M 98 62 L 110 90 L 130 90 Z" fill="#FEF08A" opacity="0.3" />
                      </g>

                      {/* Protective Digital Ring Wave */}
                      <circle cx="160" cy="150" r="110" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 6" />
                      <circle cx="160" cy="150" r="85" stroke="#EA580C" strokeWidth="1" strokeOpacity="0.5" />
                    </svg>
                  </div>

                  {/* Floating UI Cards */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 border border-slate-700/80 rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-md flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-bold text-white">Policy Active</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-slate-900/90 border border-slate-700/80 rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-md flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-[11px] font-bold text-white">Comprehensive</span>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-slate-900/90 border border-slate-700/80 rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-md flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-[11px] font-bold text-white">24×7 Assistance</span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-slate-700/80 rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-md flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[11px] font-bold text-white">Digital Policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK INSURANCE ACTION CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-2">
            <div>
              <h2 className="text-xl font-bold text-slate-900">What do you need?</h2>
              <p className="text-xs text-slate-500">
                Select your vehicle category for instant quotes and structured protection options.
              </p>
            </div>
            <button
              onClick={onOpenRenewal}
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 self-start sm:self-auto"
            >
              Already have a policy? Renew here
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {/* Car Insurance */}
            <div className="p-5 rounded-xl border border-slate-200 hover:border-orange-500/50 hover:bg-orange-50/20 transition-all group flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900">Car Insurance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Protect your car against eligible own-damage and third-party risks with tailored add-on shields.
                </p>
              </div>
              <button
                onClick={() => onOpenQuote('car')}
                className="w-full py-2.5 rounded-lg bg-[#0B1B3D] group-hover:bg-orange-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                Get Car Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bike Insurance */}
            <div className="p-5 rounded-xl border border-slate-200 hover:border-orange-500/50 hover:bg-orange-50/20 transition-all group flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Bike className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900">Bike Insurance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Simple, dependable protection for your two-wheeler with single-year and multi-year options.
                </p>
              </div>
              <button
                onClick={() => onOpenQuote('bike')}
                className="w-full py-2.5 rounded-lg bg-[#0B1B3D] group-hover:bg-orange-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                Get Bike Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Commercial Vehicle */}
            <div className="p-5 rounded-xl border border-slate-200 hover:border-orange-500/50 hover:bg-orange-50/20 transition-all group flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900">Commercial Vehicle</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Protection options for business logistics, light trucks, taxis, and goods-carrying commercial vehicles.
                </p>
              </div>
              <button
                onClick={() => onOpenQuote('commercial')}
                className="w-full py-2.5 rounded-lg bg-[#0B1B3D] group-hover:bg-orange-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                Get Commercial Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* EV Insurance */}
            <div className="p-5 rounded-xl border border-slate-200 hover:border-orange-500/50 hover:bg-orange-50/20 transition-all group flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900">EV Insurance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Vehicle protection designed for electric mobility, battery pack security, and charging accessories.
                </p>
              </div>
              <button
                onClick={() => onOpenQuote('ev')}
                className="w-full py-2.5 rounded-lg bg-[#0B1B3D] group-hover:bg-orange-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                Get EV Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/80 rounded-2xl p-6 border border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_INDICATORS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white text-orange-600 shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                  {idx === 0 && <Smartphone className="w-5 h-5" />}
                  {idx === 1 && <Eye className="w-5 h-5" />}
                  {idx === 2 && <LifeBuoy className="w-5 h-5" />}
                  {idx === 3 && <ShieldCheck className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INSURANCE TYPES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
            Protection Framework
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            Find the Right Protection for Your Vehicle
          </h2>
          <p className="text-sm text-slate-600">
            Understand the core categories of motor vehicle insurance under Indian regulatory standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Third-Party */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wide bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                Statutory Mandatory
              </span>
              <h3 className="text-lg font-bold text-slate-900">Third-Party Insurance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mandatory liability protection for covered third-party bodily injury, death, and property damage risks, subject to applicable law and policy terms.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Complies with Section 146 MV Act</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Third-party property limit up to ₹7.5L</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('vehicle-insurance')}
              className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 pt-2"
            >
              Learn More
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Comprehensive */}
          <div className="bg-white rounded-2xl p-6 border-2 border-orange-500 shadow-md transition-all space-y-4 flex flex-col justify-between relative">
            <div className="absolute -top-3 right-6 bg-orange-500 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
              Most Preferred
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wide bg-orange-100 text-orange-800 px-2.5 py-1 rounded-md">
                All-Round Protection
              </span>
              <h3 className="text-lg font-bold text-slate-900">Comprehensive / Package Cover</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Combines third-party legal liability with extensive own-damage protection against collisions, fire, theft, and natural calamities, subject to policy terms.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Own Damage + Third Party included</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Add-on endorsements supported</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('plans')}
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 pt-2"
            >
              Explore Comprehensive
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Standalone OD */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wide bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md">
                OD Only
              </span>
              <h3 className="text-lg font-bold text-slate-900">Standalone Own Damage</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated own-damage protection for vehicles that already possess an active multi-year third-party policy from any authorized insurer.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Annual OD renewal flexibility</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero Dep & Engine add-on compatible</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('vehicle-insurance')}
              className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 pt-2"
            >
              Learn More
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: Bundled / Long-Term */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wide bg-purple-100 text-purple-800 px-2.5 py-1 rounded-md">
                New Vehicles
              </span>
              <h3 className="text-lg font-bold text-slate-900">Long-Term / Bundled Options</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Present only where legally and commercially applicable for brand new vehicles (e.g. 1-year OD + 3-year TP for cars, 5-year TP for two-wheelers).
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Regulatory alignment for new purchases</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Protects against future TP tariff hikes</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenQuote('car')}
              className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 pt-2"
            >
              Get Bundled Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. COVERAGE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
              Inclusions & Scope
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Built Around What Matters
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Transparent breakdown of core insured events and roadside protections.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start md:self-auto text-xs font-semibold">
            <button
              onClick={() => setActiveCoverageTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeCoverageTab === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Coverage (9)
            </button>
            <button
              onClick={() => setActiveCoverageTab('base')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeCoverageTab === 'base'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Base Inclusions
            </button>
            <button
              onClick={() => setActiveCoverageTab('addon')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeCoverageTab === 'addon'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Optional Add-ons
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coverageFilter.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-slate-300 shadow-sm transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  {iconLookup[item.icon] || <Shield className="w-5 h-5 text-blue-600" />}
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.type === 'mandatory'
                      ? 'bg-purple-100 text-purple-700'
                      : item.type === 'addon'
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  {item.type === 'mandatory'
                    ? 'Statutory Law'
                    : item.type === 'addon'
                    ? 'Optional Add-on'
                    : 'Base Coverage'}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 font-medium">
                {item.scope}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ADD-ONS SECTION */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Enhanced Armor
            </span>
            <h2 className="text-3xl font-bold text-white">
              Add Protection That Fits Your Drive
            </h2>
            <p className="text-sm text-slate-300">
              Customize your policy with specialized add-on shields. Coverage varies by product and underwriting insurer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADD_ONS_DATA.map(addon => (
              <div
                key={addon.id}
                className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 hover:border-orange-500/60 hover:bg-slate-800 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-700/80 flex items-center justify-center text-orange-400">
                      {iconLookup[addon.iconName] || <Shield className="w-5 h-5 text-orange-400" />}
                    </div>
                    {addon.recommended && (
                      <span className="text-[10px] bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-sm text-white">{addon.name}</h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {addon.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/60 text-[10px] text-slate-400 space-y-1">
                  <div>
                    <strong className="text-slate-200">Key Benefit:</strong> {addon.keyBenefit}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('plans')}
              className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-md inline-flex items-center gap-2"
            >
              Interactive Add-On Kavach Builder
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS (Horizontal on desktop, vertical on mobile) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
            Effortless Journey
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            Protection in 4 Simple Steps
          </h2>
          <p className="text-sm text-slate-600">
            A frictionless digital process from initial quote to active policy management.
          </p>
        </div>

        {/* Horizontal Desktop / Vertical Mobile Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            {
              step: '01',
              title: 'Tell Us About Your Vehicle',
              desc: 'Enter vehicle registration number or select vehicle make, model, age, and location.',
              icon: Car,
            },
            {
              step: '02',
              title: 'Compare Available Options',
              desc: 'Review transparent coverage tiers, IDVs, deductibles, and optional add-on shields.',
              icon: Eye,
            },
            {
              step: '03',
              title: 'Choose Your Protection',
              desc: 'Select your preferred plan, customize add-ons, and review verified NCB discounts.',
              icon: ShieldCheck,
            },
            {
              step: '04',
              title: 'Manage Your Policy Digitally',
              desc: 'Instant digital policy certificate issuance, renewal reminders, and structured claims assistance.',
              icon: Smartphone,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 relative flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-200 group-hover:text-orange-200">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-base text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: `${(idx + 1) * 25}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. WHY VAHANKAVACH */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              The VahanKavach Standard
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Insurance, Without the Confusion.
            </h2>
            <p className="text-sm text-slate-600">
              We engineered a digital motor protection platform that respects your time and intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-black text-lg">
                01
              </div>
              <h3 className="font-bold text-base text-slate-900">Simple</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear explanations in straightforward language instead of convoluted legalese and fine print.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-black text-lg">
                02
              </div>
              <h3 className="font-bold text-base text-slate-900">Digital</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quotes, schedules, endorsements, and policy renewals designed natively for online use.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-lg">
                03
              </div>
              <h3 className="font-bold text-base text-slate-900">Transparent</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Show essential coverage limits, exclusions, deductibles, and claim steps upfront with total clarity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-lg">
                04
              </div>
              <h3 className="font-bold text-base text-slate-900">Human Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated claims guidance and empathetic human assistance when unexpected incidents happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. VEHICLE CATEGORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
            Fleet & Personal Mobility
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            Protection Tailored for Every Vehicle
          </h2>
          <p className="text-sm text-slate-600">
            Whether a daily commuter bike, family SUV, commercial truck, or electric vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VEHICLE_CATEGORIES_DATA.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-sm transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 font-hindi">
                    {item.hindi}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900">{item.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>

              <button
                onClick={() => onOpenQuote(item.id as VehicleCategory)}
                className="w-full py-2 rounded-xl bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                Quote for {item.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FINAL DARK CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0B1B3D] via-blue-950 to-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-blue-900/40 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
              Your Journey Deserves Kavach
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Protect Your Next Journey?
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Explore suitable vehicle-protection options, configure your shields, and choose coverage based on your genuine driving needs.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenQuote('car')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Get Your Quote
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
