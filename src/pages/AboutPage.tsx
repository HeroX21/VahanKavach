import React, { useState } from 'react';
import { PageRoute } from '../types';
import { FAQS_DATA } from '../data/insuranceData';
import {
  Shield,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  HelpCircle,
  Building,
  HeartHandshake,
  Cpu,
  Lock,
  Sparkles,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  // Interactive FAQ state
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Contact Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleNo: '',
    inquiryType: 'general',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    const generatedTicket = `VK-TKT-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0B1B3D] to-slate-900 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-3.5 py-1 rounded-full border border-orange-500/30">
            Our Purpose & Vision
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Protection Built on Trust, Technology, and Clarity.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            VahanKavach (वाहनकवच) is designed to make vehicle insurance simpler, transparent, and more accessible for every driver across India.
          </p>
        </div>
      </section>

      {/* 2. BRAND STORY & THE 5 PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
              The Brand Story
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Why We Built <span className="text-orange-600">VahanKavach</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              In Sanskrit and Hindi, <strong className="text-slate-900 font-bold">«Vahan» (वाहन)</strong> represents the vehicle that carries your family, business, and livelihood forward, while <strong className="text-slate-900 font-bold">«Kavach» (कवच)</strong> is the timeless armor that shields against adversity.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              For decades, vehicle insurance in India has been bogged down by dense legalese, confusing exclusions, obscure NCB rules, and stressful claim procedures. VahanKavach was founded with a singular objective: to transform motor protection into an intuitive, transparent, and human-centric digital experience.
            </p>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0B1B3D] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-orange-400">
              The 5 Foundational Pillars
            </h3>
            <div className="space-y-3">
              {[
                { label: 'VEHICLE', desc: 'The physical asset enabling your freedom and daily livelihood.' },
                { label: 'KAVACH', desc: 'The comprehensive defensive shield guarding against unexpected perils.' },
                { label: 'JOURNEY', desc: 'Every road, highway, commute, and city route you navigate.' },
                { label: 'TRUST', desc: 'Absolute transparency with zero hidden deductibles or false promises.' },
                { label: 'TECHNOLOGY', desc: 'Instant digital quotes, paperless renewals, and rapid claims assistance.' },
              ].map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-orange-400 font-black text-xs mt-0.5">0{idx + 1}</span>
                  <div>
                    <h4 className="font-bold text-xs text-white">{pillar.label}</h4>
                    <p className="text-[11px] text-slate-300">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & CORE VALUES */}
      <section className="bg-slate-50 border-y border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                Our Mission
              </span>
              <h3 className="text-xl font-bold text-slate-900">Demystify Motor Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To empower Indian vehicle owners with crystal-clear policy education, unbiased plan comparisons, personalized add-on recommendations, and reliable claims guidance without deceptive jargon.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full">
                Our Vision
              </span>
              <h3 className="text-xl font-bold text-slate-900">India's Most Dependable Kavach</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To build the country's most trusted digital vehicle shield platform where every driver, fleet operator, and business can manage and renew automotive protection with complete confidence.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 text-center">Our Core Operating Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h4 className="font-bold text-sm text-slate-900">Absolute Transparency</h4>
                <p className="text-xs text-slate-600">No hidden exclusions. We display deductibles, IDV formulas, and policy wordings openly.</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-sm text-slate-900">Tech-Driven Simplicity</h4>
                <p className="text-xs text-slate-600">Intuitive digital workflows that respect your time and provide instant paperless certificates.</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <HeartHandshake className="w-5 h-5 text-orange-600" />
                <h4 className="font-bold text-sm text-slate-900">Empathetic Support</h4>
                <p className="text-xs text-slate-600">Dedicated assistance during emergency roadside breakdowns and accident claim intimations.</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <Lock className="w-5 h-5 text-purple-600" />
                <h4 className="font-bold text-sm text-slate-900">Uncompromising Privacy</h4>
                <p className="text-xs text-slate-600">Encrypted data security compliant with Indian digital data protection standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
            Answers & Clarity
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500">
            Common questions regarding vehicle insurance types, NCB discounts, and claim procedures in India.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map(faq => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-orange-500 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. CONTACT & SUPPORT FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Contact Information (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B1B3D] text-white p-6 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
                Help & Grievance Desk
              </span>
              <h3 className="text-2xl font-bold text-white">Get in Touch With Us</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Have questions regarding policy selection, add-on configurations, renewal schedules, or claim processes? Our team is here to assist.
              </p>

              <div className="space-y-4 pt-4 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>support@vahankavach.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>VahanKavach Digital Operations, Outer Ring Road, Bengaluru, Karnataka 560103</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-[11px] text-slate-400">
              For immediate roadside emergencies, please access the 24×7 Roadside Assistance helpline.
            </div>
          </div>

          {/* Right Interactive Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Message Received</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry has been assigned support reference{' '}
                  <span className="font-mono font-bold text-orange-600">{ticketId}</span>. Our team will get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      vehicleNo: '',
                      inquiryType: 'general',
                      message: '',
                    });
                  }}
                  className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-lg font-bold text-slate-900">Send an Inquiry</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                    >
                      <option value="quote">New Vehicle Quote Assistance</option>
                      <option value="renewal">Policy Renewal & NCB Query</option>
                      <option value="claims">Claim Guidance & Intimation</option>
                      <option value="addons">Add-On Shields Information</option>
                      <option value="general">Grievance / General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Vehicle Registration Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. MH02CD5678"
                    value={formData.vehicleNo}
                    onChange={e => setFormData({ ...formData, vehicleNo: e.target.value.toUpperCase() })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs uppercase font-mono focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Question *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please provide details about your inquiry..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
