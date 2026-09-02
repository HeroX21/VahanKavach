export type PageRoute = 'home' | 'vehicle-insurance' | 'plans' | 'claims' | 'about';

export type VehicleCategory = 'car' | 'bike' | 'suv' | 'ev' | 'commercial' | 'fleet';

export type InsuranceType = 'third-party' | 'comprehensive' | 'standalone-od' | 'bundled';

export interface AddOnItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  eligibleFor: string;
  idealFor: string;
  keyBenefit: string;
  iconName: string;
  category: 'depreciation' | 'engine' | 'assistance' | 'financial' | 'parts';
  recommended?: boolean;
}

export interface CoverageItem {
  id: string;
  title: string;
  description: string;
  type: 'base' | 'addon' | 'mandatory';
  icon: string;
  scope: string;
}

export interface PlanTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  suitableFor: string;
  features: string[];
  exclusions: string[];
  ctaText: string;
  popular?: boolean;
}

export interface QuoteFormData {
  vehicleType: VehicleCategory;
  regNumber: string;
  cityOrRTO: string;
  makeModel: string;
  registrationYear: number;
  fuelType: 'petrol' | 'diesel' | 'cng' | 'electric';
  insuranceType: InsuranceType;
  selectedAddOns: string[];
  previousNCB: number;
  hadPreviousClaim: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'coverage' | 'claims' | 'renewal' | 'legal';
}

export interface ClaimStepItem {
  stepNumber: number;
  title: string;
  description: string;
  actionItem: string;
}

export interface DocumentChecklist {
  claimType: 'accident' | 'theft' | 'third-party';
  title: string;
  documents: string[];
}

export interface EmergencyHelpline {
  category: string;
  title: string;
  number: string;
  availability: string;
  description: string;
}
