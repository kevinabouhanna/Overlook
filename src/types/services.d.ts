/**
 * TypeScript definitions for services data
 */

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  longDescription: string;
  benefits: string[];
  features: ServiceFeature[];
}

export interface ServicesMap {
  [key: string]: Service;
}
