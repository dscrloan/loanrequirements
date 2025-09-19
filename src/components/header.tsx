import React from 'react';
import { Button } from './ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb';
import { PageData } from '../utils/router';

interface HeaderProps {
  pageData: PageData;
}

export function Header({ pageData }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">DR</span>
              </div>
              <span className="hidden font-bold sm:inline-block">DSCR Requirements</span>
            </a>
          </div>
          
          <Button 
            asChild 
            className="bg-primary hover:bg-primary/90"
          >
            <a 
              href="https://www.shopdscrloans.com" 
              target="_self"
              rel="noopener"
            >
              See My DSCR Options →
            </a>
          </Button>
        </div>
        
        <div className="pb-3">
          <Breadcrumb>
            <BreadcrumbList>
              {pageData.breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  <BreadcrumbItem>
                    {index === pageData.breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < pageData.breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </header>
  );
}