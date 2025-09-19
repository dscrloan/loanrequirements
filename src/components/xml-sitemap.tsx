import React, { useEffect } from 'react';
import { generateSitemapXML } from '../utils/sitemap-generator';

export function XMLSitemap() {
  useEffect(() => {
    // Set the content type to XML
    document.head.querySelector('meta[name="description"]')?.remove();
    
    // Generate and serve XML
    const xml = generateSitemapXML();
    document.open();
    document.write(xml);
    document.close();
  }, []);

  return null;
}