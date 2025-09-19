import React from 'react';

export interface RouteParams {
  state?: string;
  city?: string;
  topic?: string;
}

export interface PageData {
  title: string;
  metaDescription: string;
  h1: string;
  canonical: string;
  breadcrumbs: Array<{ label: string; href: string }>;
  type: 'home' | 'state' | 'city' | 'topic' | 'sitemap';
  params: RouteParams;
}

export const STATES = {
  florida: 'Florida',
  texas: 'Texas', 
  arizona: 'Arizona',
  tennessee: 'Tennessee',
  michigan: 'Michigan',
  indiana: 'Indiana',
  ohio: 'Ohio',
  georgia: 'Georgia'
};

export const CITIES = {
  florida: ['miami', 'fort-lauderdale', 'west-palm-beach', 'tampa', 'orlando', 'jacksonville', 'sarasota', 'naples'],
  texas: ['dallas', 'fort-worth', 'houston', 'austin', 'san-antonio'],
  arizona: ['phoenix', 'scottsdale', 'tucson', 'mesa'],
  tennessee: ['nashville', 'memphis', 'knoxville', 'chattanooga'],
  michigan: ['detroit', 'grand-rapids', 'ann-arbor'],
  indiana: ['indianapolis'],
  ohio: ['columbus', 'cleveland', 'cincinnati'],
  georgia: ['atlanta', 'savannah', 'augusta']
};

export const TOPICS = [
  'dscr-loan',
  'dscr-lender', 
  'dscr-investment',
  'dscr-rates',
  'dscr-requirements',
  'dscr-calculator',
  'investor-loan-rates',
  'investor-loan-requirements', 
  'investor-loan-calculator',
  'investment-loan',
  'dscr-lender-rates',
  'dscr-lender-requirements',
  'dscr-lender-calculator'
];

export function parseRoute(pathname: string): PageData {
  // Remove leading/trailing slashes
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  const segments = cleanPath.split('/').filter(Boolean);

  if (segments.length === 0) {
    // Home page
    return {
      title: 'DSCR Loan Requirements & Rates - Complete Guide',
      metaDescription: 'Complete guide to DSCR loan requirements, rates, and lenders. Get pre-qualified for debt service coverage ratio loans with competitive rates.',
      h1: 'DSCR Loan Requirements: Your Complete Guide to Investment Property Financing',
      canonical: 'https://dscrloanrequirements.com/',
      breadcrumbs: [{ label: 'Home', href: '/' }],
      type: 'home',
      params: {}
    };
  }

  if (segments[0] === 'states' && segments.length === 2) {
    // State hub page
    const state = segments[1];
    const stateName = STATES[state as keyof typeof STATES];
    
    return {
      title: `DSCR Loans in ${stateName}: Requirements, Rates & Lenders`,
      metaDescription: `Find DSCR loan requirements, rates and top lenders in ${stateName}. Compare investment property financing options with competitive debt service coverage ratios.`,
      h1: `DSCR Loans in ${stateName}: Requirements, Rates & Lenders`,
      canonical: `https://dscrloanrequirements.com/states/${state}`,
      breadcrumbs: [
        { label: 'Home', href: '/' },
        { label: stateName, href: `/states/${state}` }
      ],
      type: 'state',
      params: { state }
    };
  }

  if (segments[0] === 'states' && segments.length === 3) {
    // City overview page
    const state = segments[1];
    const city = segments[2];
    const stateName = STATES[state as keyof typeof STATES];
    const cityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return {
      title: `DSCR Loans in ${cityName}, ${stateName} - Requirements & Rates`,
      metaDescription: `Get DSCR loans in ${cityName}, ${stateName}. Find local investment property financing requirements, rates, and qualified lenders for real estate investors.`,
      h1: `DSCR Loans in ${cityName}, ${stateName}`,
      canonical: `https://dscrloanrequirements.com/states/${state}/${city}`,
      breadcrumbs: [
        { label: 'Home', href: '/' },
        { label: stateName, href: `/states/${state}` },
        { label: cityName, href: `/states/${state}/${city}` }
      ],
      type: 'city',
      params: { state, city }
    };
  }

  if (segments[0] === 'states' && segments.length === 4) {
    // City topic page
    const state = segments[1];
    const city = segments[2]; 
    const topic = segments[3];
    const stateName = STATES[state as keyof typeof STATES];
    const cityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const topicTitle = getTopicTitle(topic, cityName);
    
    return {
      title: `${topicTitle} in ${cityName}, ${stateName}`,
      metaDescription: `${topicTitle} in ${cityName}, ${stateName}. Get detailed information about investment property financing options and requirements.`,
      h1: `${topicTitle} in ${cityName}, ${stateName}`,
      canonical: `https://dscrloanrequirements.com/states/${state}/${city}/${topic}`,
      breadcrumbs: [
        { label: 'Home', href: '/' },
        { label: stateName, href: `/states/${state}` },
        { label: cityName, href: `/states/${state}/${city}` },
        { label: getTopicLabel(topic), href: `/states/${state}/${city}/${topic}` }
      ],
      type: 'topic',
      params: { state, city, topic }
    };
  }

  // Default fallback to home
  return parseRoute('/');
}

function getTopicTitle(topic: string, cityName: string): string {
  const topicTitles: Record<string, string> = {
    'dscr-loan': `${cityName} DSCR Loan Requirements`,
    'dscr-lender': `${cityName} DSCR Lenders`,
    'dscr-investment': `${cityName} DSCR Investment Loans`,
    'dscr-rates': `${cityName} DSCR Loan Rates`,
    'dscr-requirements': `${cityName} DSCR Loan Requirements`,
    'dscr-calculator': `${cityName} DSCR Calculator`,
    'investor-loan-rates': `${cityName} Investor Loan Rates`,
    'investor-loan-requirements': `${cityName} Investor Loan Requirements`,
    'investor-loan-calculator': `${cityName} Investor Loan Calculator`,
    'investment-loan': `${cityName} Investment Loans`,
    'dscr-lender-rates': `${cityName} DSCR Lender Rates`,
    'dscr-lender-requirements': `${cityName} DSCR Lender Requirements`,
    'dscr-lender-calculator': `${cityName} DSCR Lender Calculator`
  };
  
  return topicTitles[topic] || `${cityName} DSCR Loans`;
}

function getTopicLabel(topic: string): string {
  const topicLabels: Record<string, string> = {
    'dscr-loan': 'DSCR Loans',
    'dscr-lender': 'DSCR Lenders',
    'dscr-investment': 'Investment Loans',
    'dscr-rates': 'Rates',
    'dscr-requirements': 'Requirements',
    'dscr-calculator': 'Calculator',
    'investor-loan-rates': 'Investor Rates',
    'investor-loan-requirements': 'Investor Requirements',
    'investor-loan-calculator': 'Investor Calculator',
    'investment-loan': 'Investment Loans',
    'dscr-lender-rates': 'Lender Rates',
    'dscr-lender-requirements': 'Lender Requirements',
    'dscr-lender-calculator': 'Lender Calculator'
  };
  
  return topicLabels[topic] || 'DSCR Info';
}