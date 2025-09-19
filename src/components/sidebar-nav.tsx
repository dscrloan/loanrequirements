import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { PageData, STATES, CITIES, TOPICS } from '../utils/router';
import { MapPin, Building, Calculator } from 'lucide-react';

interface SidebarNavProps {
  pageData: PageData;
}

export function SidebarNav({ pageData }: SidebarNavProps) {
  const { type, params } = pageData;

  if (type === 'home') {
    return (
      <aside className="w-full lg:w-80 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Browse by State
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              {Object.entries(STATES).map(([key, name]) => (
                <a
                  key={key}
                  href={`/states/${key}`}
                  className="block px-3 py-2 rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {name}
                </a>
              ))}
            </nav>
          </CardContent>
        </Card>
      </aside>
    );
  }

  if (type === 'state' && params.state) {
    const cities = CITIES[params.state as keyof typeof CITIES] || [];
    const stateName = STATES[params.state as keyof typeof STATES];
    
    return (
      <aside className="w-full lg:w-80 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Cities in {stateName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              {cities.map((city) => {
                const cityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                return (
                  <a
                    key={city}
                    href={`/states/${params.state}/${city}`}
                    className="block px-3 py-2 rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {cityName}
                  </a>
                );
              })}
            </nav>
          </CardContent>
        </Card>
      </aside>
    );
  }

  if (type === 'city' && params.state && params.city) {
    const cityName = params.city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return (
      <aside className="w-full lg:w-80 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              DSCR Topics in {cityName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              {TOPICS.map((topic) => {
                const topicLabel = topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                return (
                  <a
                    key={topic}
                    href={`/states/${params.state}/${params.city}/${topic}`}
                    className="block px-3 py-2 rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {topicLabel}
                  </a>
                );
              })}
            </nav>
          </CardContent>
        </Card>
      </aside>
    );
  }

  if (type === 'topic' && params.state && params.city) {
    const cityName = params.city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const currentTopic = params.topic;
    
    return (
      <aside className="w-full lg:w-80 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Related Topics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              {TOPICS.filter(topic => topic !== currentTopic).slice(0, 8).map((topic) => {
                const topicLabel = topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                return (
                  <a
                    key={topic}
                    href={`/states/${params.state}/${params.city}/${topic}`}
                    className="block px-3 py-2 rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {topicLabel}
                  </a>
                );
              })}
            </nav>
            <div className="mt-4 pt-4 border-t">
              <a
                href={`/states/${params.state}/${params.city}`}
                className="block px-3 py-2 rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
              >
                ← Back to {cityName} Overview
              </a>
            </div>
          </CardContent>
        </Card>
      </aside>
    );
  }

  return null;
}