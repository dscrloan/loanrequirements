import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TrendingUp, Building2, Users } from 'lucide-react';

interface LocalInsight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface LocalInsightsProps {
  cityName?: string;
  stateName?: string;
  insights?: LocalInsight[];
}

export function LocalInsights({ cityName, stateName, insights }: LocalInsightsProps) {
  const defaultInsights: LocalInsight[] = [
    {
      icon: <TrendingUp className="h-5 w-5 text-green-600" />,
      title: "Market Trends",
      description: cityName 
        ? `${cityName} shows strong rental demand with growing investor interest in residential properties.`
        : "Strong rental markets create favorable conditions for DSCR loan qualification."
    },
    {
      icon: <Building2 className="h-5 w-5 text-blue-600" />,
      title: "Property Types",
      description: cityName
        ? `Single-family homes and small multifamily properties are popular DSCR loan choices in ${cityName}.`
        : "Single-family and small multifamily properties typically qualify for DSCR loans."
    },
    {
      icon: <Users className="h-5 w-5 text-purple-600" />,
      title: "Investor Tips",
      description: stateName
        ? `${stateName} investors often benefit from local market knowledge and rental comps when applying for DSCR loans.`
        : "Local market expertise helps investors identify properties that meet DSCR requirements."
    }
  ];

  const displayInsights = insights || defaultInsights;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {displayInsights.map((insight, index) => (
        <Card key={index} className="h-full">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              {insight.icon}
              {insight.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground">
              {insight.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}