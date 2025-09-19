import React, { useEffect, useState } from 'react';
import { parseRoute, PageData } from './utils/router';
import { SEOHead } from './components/seo-head';
import { Header } from './components/header';
import { SidebarNav } from './components/sidebar-nav';
import { Footer } from './components/footer';
import { HomePage } from './components/pages/home-page';
import { StatePage } from './components/pages/state-page';
import { CityPage } from './components/pages/city-page';
import { TopicPage } from './components/pages/topic-page';
import { SitemapPage } from './components/pages/sitemap-page';
import { XMLSitemap } from './components/xml-sitemap';

export default function App() {
  const [pageData, setPageData] = useState<PageData | null>(null);

  useEffect(() => {
    // Parse current route
    const currentPath = window.location.pathname;
    let data: PageData;
    
    // Handle XML sitemap
    if (currentPath === '/sitemap.xml') {
      data = {
        title: 'XML Sitemap',
        metaDescription: 'XML Sitemap for DSCR Loan Requirements',
        h1: 'XML Sitemap',
        canonical: 'https://dscrloanrequirements.com/sitemap.xml',
        breadcrumbs: [],
        type: 'xml-sitemap' as const,
        params: {}
      };
    } 
    // Handle sitemap page
    else if (currentPath === '/sitemap') {
      data = {
        title: 'DSCR Loan Requirements - Complete Site Map',
        metaDescription: 'Complete sitemap of all DSCR loan requirements, rates, and lender information pages. Find investment property financing info by state and city.',
        h1: 'DSCR Loan Requirements - Site Map',
        canonical: 'https://dscrloanrequirements.com/sitemap',
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Sitemap', href: '/sitemap' }
        ],
        type: 'sitemap' as const,
        params: {}
      };
    } else {
      data = parseRoute(currentPath);
    }
    
    setPageData(data);

    // Update document title and meta
    document.title = data.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', data.metaDescription);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', data.canonical);

    // Handle browser navigation
    const handlePopState = () => {
      const newPath = window.location.pathname;
      let newData: PageData;
      
      if (newPath === '/sitemap.xml') {
        newData = {
          title: 'XML Sitemap',
          metaDescription: 'XML Sitemap for DSCR Loan Requirements',
          h1: 'XML Sitemap',
          canonical: 'https://dscrloanrequirements.com/sitemap.xml',
          breadcrumbs: [],
          type: 'xml-sitemap' as const,
          params: {}
        };
      } else if (newPath === '/sitemap') {
        newData = {
          title: 'DSCR Loan Requirements - Complete Site Map',
          metaDescription: 'Complete sitemap of all DSCR loan requirements, rates, and lender information pages. Find investment property financing info by state and city.',
          h1: 'DSCR Loan Requirements - Site Map',
          canonical: 'https://dscrloanrequirements.com/sitemap',
          breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Sitemap', href: '/sitemap' }
          ],
          type: 'sitemap' as const,
          params: {}
        };
      } else {
        newData = parseRoute(newPath);
      }
      
      setPageData(newData);
      document.title = newData.title;
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle internal navigation
  useEffect(() => {
    const handleInternalLinks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href !== window.location.pathname) {
          window.history.pushState({}, '', href);
          
          let newData: PageData;
          if (href === '/sitemap.xml') {
        newData = {
          title: 'XML Sitemap',
          metaDescription: 'XML Sitemap for DSCR Loan Requirements',
          h1: 'XML Sitemap',
          canonical: 'https://dscrloanrequirements.com/sitemap.xml',
          breadcrumbs: [],
          type: 'xml-sitemap' as const,
          params: {}
        };
      } else if (href === '/sitemap') {
            newData = {
              title: 'DSCR Loan Requirements - Complete Site Map',
              metaDescription: 'Complete sitemap of all DSCR loan requirements, rates, and lender information pages. Find investment property financing info by state and city.',
              h1: 'DSCR Loan Requirements - Site Map',
              canonical: 'https://dscrloanrequirements.com/sitemap',
              breadcrumbs: [
                { label: 'Home', href: '/' },
                { label: 'Sitemap', href: '/sitemap' }
              ],
              type: 'sitemap' as const,
              params: {}
            };
          } else {
            newData = parseRoute(href);
          }
          
          setPageData(newData);
          document.title = newData.title;
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleInternalLinks);
    return () => document.removeEventListener('click', handleInternalLinks);
  }, []);

  if (!pageData) {
    return <div className="min-h-screen bg-background" />;
  }

  const renderPage = () => {
    switch (pageData.type) {
      case 'home':
        return <HomePage />;
      case 'state':
        return <StatePage pageData={pageData} />;
      case 'city':
        return <CityPage pageData={pageData} />;
      case 'topic':
        return <TopicPage pageData={pageData} />;
      case 'sitemap':
        return <SitemapPage />;
      case 'xml-sitemap':
        return <XMLSitemap />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead pageData={pageData} />
      <Header pageData={pageData} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1 min-w-0">
            {renderPage()}
          </div>
          
          <div className="hidden lg:block flex-shrink-0">
            <SidebarNav pageData={pageData} />
          </div>
        </div>
        
        {/* Mobile sidebar - could be implemented as a drawer */}
        <div className="lg:hidden mt-8">
          <SidebarNav pageData={pageData} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}