import React from 'react';
import { Separator } from './ui/separator';
import { STATES } from '../utils/router';

export function Footer() {
  const resourceDomains = [
    { name: 'DSCR Loan Approval', url: 'https://dscrloanapproval.com', description: 'Learn about the DSCR loan approval process' },
    { name: 'DSCR Down Payment', url: 'https://dscrloandownpayment.com', description: 'Understand DSCR loan down payment requirements' },
    { name: 'DSCR Qualifier', url: 'https://dscrqualifier.com', description: 'Check if you qualify for DSCR loans' },
    { name: 'DSCR Qualify', url: 'https://dscrqualify.com', description: 'Qualification guidelines for DSCR loans' },
    { name: 'DSCR Rater', url: 'https://dscrrater.com', description: 'Compare DSCR loan rates' },
    { name: 'DSCR Shop', url: 'https://dscrshop.info', description: 'Shop for the best DSCR loan options' },
    { name: 'DSCR Underwriting', url: 'https://dscrunderwriting.com', description: 'DSCR loan underwriting guidelines' },
    { name: 'DSCR UW', url: 'https://dscruw.com', description: 'DSCR underwriting resources' }
  ];

  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">DR</span>
              </div>
              <span className="font-bold">DSCR Requirements</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your comprehensive guide to DSCR loan requirements, rates, and qualified lenders across the United States.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4>Resources</h4>
            <nav className="space-y-2">
              {resourceDomains.slice(0, 4).map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.name}
                </a>
              ))}
            </nav>
          </div>

          {/* More Resources */}
          <div className="space-y-4">
            <h4>Additional Resources</h4>
            <nav className="space-y-2">
              {resourceDomains.slice(4).map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.name}
                </a>
              ))}
            </nav>
          </div>

          {/* States */}
          <div className="space-y-4">
            <h4>Popular States</h4>
            <nav className="space-y-2">
              {Object.entries(STATES).slice(0, 6).map(([key, name]) => (
                <a
                  key={key}
                  href={`/states/${key}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <a href="/sitemap" className="hover:text-foreground transition-colors">
              Sitemap
            </a>
            <span>•</span>
            <span>© DSCR Requirements</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center sm:text-right">
            Educational content only. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}