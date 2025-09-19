import React from 'react';
import { PageData } from '../utils/router';

interface SEOHeadProps {
  pageData: PageData;
}

export function SEOHead({ pageData }: SEOHeadProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "DSCR Loan Requirements",
    "description": pageData.metaDescription,
    "url": pageData.canonical,
    "serviceType": "DSCR Loan",
    ...(pageData.params.state && pageData.params.city && {
      "areaServed": {
        "@type": "City",
        "name": pageData.params.city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        "addressRegion": pageData.params.state.toUpperCase()
      }
    })
  };

  return (
    <>
      <title>{pageData.title}</title>
      <meta name="description" content={pageData.metaDescription} />
      <link rel="canonical" href={pageData.canonical} />
      <meta property="og:title" content={pageData.title} />
      <meta property="og:description" content={pageData.metaDescription} />
      <meta property="og:url" content={pageData.canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageData.title} />
      <meta name="twitter:description" content={pageData.metaDescription} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}