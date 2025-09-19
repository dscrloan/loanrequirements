import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { STATES, CITIES, TOPICS } from '../../utils/router';
import { MapPin, Building, Calculator, Home } from 'lucide-react';

export function SitemapPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1>DSCR Loan Requirements - Site Map</h1>
        <p className="text-lg text-muted-foreground">
          Complete directory of all DSCR loan information pages on our site. Find requirements, rates, 
          and lenders for investment properties across the United States.
        </p>
      </section>

      {/* Home */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Home Page
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a 
              href="/" 
              className="text-primary hover:underline font-medium"
            >
              DSCR Loan Requirements: Complete Guide to Investment Property Financing
            </a>
          </CardContent>
        </Card>
      </section>

      {/* States */}
      <section className="space-y-6">
        <h2>State Guides</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(STATES).map(([stateKey, stateName]) => (
            <Card key={stateKey}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {stateName}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href={`/states/${stateKey}`}
                  className="block text-primary hover:underline font-medium"
                >
                  DSCR Loans in {stateName}: Requirements, Rates & Lenders
                </a>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Cities in {stateName}:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {(CITIES[stateKey as keyof typeof CITIES] || []).map((city) => {
                      const cityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                      return (
                        <a 
                          key={city}
                          href={`/states/${stateKey}/${city}`}
                          className="text-sm text-muted-foreground hover:text-primary hover:underline"
                        >
                          {cityName} DSCR Loans
                        </a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sample City Topics */}
      <section className="space-y-6">
        <h2>DSCR Loan Topics</h2>
        <p className="text-muted-foreground">
          Each city page includes detailed information on the following DSCR loan topics:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {TOPICS.map((topic) => {
            const topicTitle = topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            return (
              <Card key={topic}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Calculator className="h-4 w-4" />
                    <span className="text-sm font-medium">{topicTitle}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-muted/50 p-6 rounded-lg">
          <h3 className="mb-2">Example Topic Pages</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Topic pages are available for every city. Here are some examples:
          </p>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="/states/florida/miami/dscr-loan" className="text-sm text-primary hover:underline">
              Miami DSCR Loan Requirements
            </a>
            <a href="/states/texas/austin/dscr-rates" className="text-sm text-primary hover:underline">
              Austin DSCR Loan Rates
            </a>
            <a href="/states/florida/miami/dscr-calculator" className="text-sm text-primary hover:underline">
              Miami DSCR Calculator
            </a>
            <a href="/states/texas/austin/dscr-lender" className="text-sm text-primary hover:underline">
              Austin DSCR Lenders
            </a>
          </div>
        </div>
      </section>

      {/* Page Structure */}
      <section className="space-y-6">
        <h2>Page Structure Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                State Hub Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Overview of DSCR loan requirements, rates, and market conditions for each state.
              </p>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">URL Pattern:</div>
                <div className="text-sm font-mono">/states/[state-name]</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                City Overview Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Local market insights and DSCR loan information for specific cities.
              </p>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">URL Pattern:</div>
                <div className="text-sm font-mono">/states/[state]/[city]</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Topic Detail Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Detailed information about specific DSCR loan topics for each city.
              </p>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">URL Pattern:</div>
                <div className="text-sm font-mono">/states/[state]/[city]/[topic]</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources */}
      <section className="space-y-6">
        <h2>Additional Resources</h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="mb-3">External DSCR Resources</h3>
                <div className="space-y-2">
                  <a href="https://dscrloanapproval.com" target="_blank" rel="noopener" className="block text-sm text-primary hover:underline">
                    DSCR Loan Approval Process
                  </a>
                  <a href="https://dscrloandownpayment.com" target="_blank" rel="noopener" className="block text-sm text-primary hover:underline">
                    DSCR Down Payment Requirements
                  </a>
                  <a href="https://dscrqualifier.com" target="_blank" rel="noopener" className="block text-sm text-primary hover:underline">
                    DSCR Loan Qualifier
                  </a>
                  <a href="https://dscrqualify.com" target="_blank" rel="noopener" className="block text-sm text-primary hover:underline">
                    DSCR Qualification Guidelines
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="mb-3">Rate and Shopping Resources</h3>
                <div className="space-y-2">
                  <a href="https://dscrrater.com" target="_blank" rel="noopener" className="block text-sm text-primary hover:underline">
                    DSCR Rate Comparisons
                  </a>
                  <a href="https://dscrshop.info" target="_blank" rel="noopener" className="block text-sm text-primary hover:underline">
                    DSCR Loan Shopping Guide
                  </a>
                  <a href="https://dscrunderwriting.com" target="_blank" rel="noopener" className="block text-sm text-primary hover:underline">
                    DSCR Underwriting Guidelines
                  </a>
                  <a href="https://dscruw.com" target="_blank" rel="noopener" className="block text-sm text-primary hover:underline">
                    DSCR UW Resources
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer Note */}
      <section>
        <div className="bg-muted/30 p-6 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            This sitemap represents the complete structure of our DSCR loan requirements website. 
            All pages contain unique, helpful content focused on helping real estate investors 
            understand and secure DSCR loan financing for their investment properties.
          </p>
          <div className="mt-4">
            <a 
              href="https://www.shopdscrloans.com" 
              target="_self"
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              Ready to get started? See your DSCR loan options →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}