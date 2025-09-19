import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CTASection } from '../cta-section';
import { FAQSection } from '../faq-section';
import { LocalInsights } from '../local-insights';
import { Badge } from '../ui/badge';
import { PageData, STATES, TOPICS } from '../../utils/router';
import { Building, TrendingUp, MapPin, Calculator } from 'lucide-react';

interface CityPageProps {
  pageData: PageData;
}

export function CityPage({ pageData }: CityPageProps) {
  const stateName = STATES[pageData.params.state as keyof typeof STATES];
  const cityName = pageData.params.city?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const cityInfo = getCityInfo(pageData.params.state || '', pageData.params.city || '');
  
  const faqs = [
    {
      question: `What are DSCR loan requirements in ${cityName}?`,
      answer: `DSCR loan requirements in ${cityName} include a minimum credit score of 620-640, down payment of 20-25%, and 2-6 months of reserves. The property must generate sufficient rental income to achieve a DSCR of at least 1.0, though 1.2+ is preferred for better rates.`
    },
    {
      question: `What types of rental properties work for DSCR loans in ${cityName}?`,
      answer: `In ${cityName}, DSCR loans work well for single-family homes, condos, townhomes, and small multifamily properties (2-4 units). ${cityInfo.propertyTypes} are particularly popular investment choices in the local market.`
    },
    {
      question: `How much rental income do I need for a DSCR loan in ${cityName}?`,
      answer: `The rental income needed depends on the mortgage payment. For a DSCR of 1.2 in ${cityName}, your monthly rent should be 20% higher than your total monthly payment (PITIA). ${cityInfo.rentExample}`
    },
    {
      question: `Are there specific lenders for DSCR loans in ${cityName}?`,
      answer: `Many national DSCR lenders serve ${cityName}, including both national banks and specialized investment property lenders. Local market knowledge can be valuable for accurate rent estimates and property valuations.`
    },
    {
      question: `What's the typical timeline for DSCR loans in ${cityName}?`,
      answer: `DSCR loans in ${cityName} typically close in 30-45 days. The process can be faster than traditional investment loans since there's no employment verification required - just property income analysis and credit review.`
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Badge variant="secondary">City Guide</Badge>
          <h1>{pageData.h1}</h1>
          <p className="text-lg text-muted-foreground">
            Complete guide to DSCR loan requirements, rates, and qualified lenders in {cityName}, {stateName}. 
            Get local market insights and connect with experienced investment property specialists.
          </p>
        </div>

        <CTASection 
          title={`Get DSCR Loan Quotes in ${cityName}`}
          description={`Connect with DSCR loan specialists familiar with the ${cityName} market and get competitive quotes for your investment property.`}
        />
      </section>

      {/* Market Overview */}
      <section className="space-y-8">
        <h2>DSCR Loans in {cityName}: Local Market Insights</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p>
              {cityName} offers {cityInfo.marketDescription} for real estate investors seeking DSCR loan financing. 
              The local rental market characteristics make it {cityInfo.investmentAppeal} for both new and experienced investors 
              looking to expand their portfolios with debt service coverage ratio loans.
            </p>
            
            <p>
              {cityInfo.marketSpecific} This creates opportunities for investors to find properties that meet DSCR requirements 
              while generating positive cash flow in {cityName}'s diverse neighborhoods and property segments.
            </p>

            <div className="space-y-4">
              <h3>Investment Property Landscape</h3>
              <p>
                {cityInfo.propertyLandscape} Local market knowledge is essential for accurate rent estimates, 
                which directly impact DSCR calculations and loan approval odds.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Market Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Median Rent:</span>
                  <span className="font-medium">{cityInfo.medianRent}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Popular Property Types:</span>
                  <span className="font-medium text-right text-xs">{cityInfo.propertyTypes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Rental Demand:</span>
                  <span className="font-medium">{cityInfo.rentalDemand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Investment Appeal:</span>
                  <span className="font-medium">{cityInfo.investmentGrade}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Local Insights */}
      <section className="space-y-8">
        <h2>Investment Insights for {cityName}</h2>
        <LocalInsights 
          cityName={cityName}
          stateName={stateName}
          insights={cityInfo.insights}
        />
      </section>

      {/* Topics Grid */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h2>DSCR Loan Topics in {cityName}</h2>
          <p className="text-muted-foreground">
            Explore detailed information about DSCR loan requirements, rates, lenders, and calculators 
            specifically for {cityName} investment properties.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPICS.map((topic) => {
            const topicInfo = getTopicInfo(topic);
            return (
              <Card key={topic} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {topicInfo.icon}
                    {topicInfo.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {topicInfo.description.replace('{cityName}', cityName || '')}
                  </p>
                  <a 
                    href={`/states/${pageData.params.state}/${pageData.params.city}/${topic}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn More →
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* DSCR Requirements */}
      <section className="space-y-8">
        <h2>DSCR Loan Requirements in {cityName}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Local Market Considerations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-1">Rent Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Lenders use local rent comps and market analysis to determine rental income potential in {cityName}.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Property Values</h4>
                  <p className="text-sm text-muted-foreground">
                    {cityInfo.propertyValueInsight}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Seasonal Factors</h4>
                  <p className="text-sm text-muted-foreground">
                    {cityInfo.seasonalFactors}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Investment Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-1">Neighborhood Selection</h4>
                  <p className="text-sm text-muted-foreground">
                    {cityInfo.neighborhoodTip}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Property Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Consider local property management costs when calculating DSCR, typically 8-12% of rent in {cityName}.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Growth Potential</h4>
                  <p className="text-sm text-muted-foreground">
                    {cityInfo.growthPotential}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* DSCR Example */}
      <section className="space-y-8">
        <h2>DSCR Calculation Example for {cityName}</h2>
        
        <Card>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3>Sample Property Analysis</h3>
                <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <span>Property Value:</span>
                    <span className="font-medium">{cityInfo.exampleProperty.value}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Rent:</span>
                    <span className="font-medium">{cityInfo.exampleProperty.rent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Payment (PITIA):</span>
                    <span className="font-medium">{cityInfo.exampleProperty.payment}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span className="font-medium">DSCR Ratio:</span>
                    <span className="font-bold text-green-600">{cityInfo.exampleProperty.dscr}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3>Analysis</h3>
                <p className="text-muted-foreground">
                  This example shows a typical {cityName} investment property that would qualify for DSCR financing. 
                  {cityInfo.exampleAnalysis}
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Local Tip:</strong> {cityInfo.localTip}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title={`DSCR Loan FAQs for ${cityName}`} />

      {/* Final CTA */}
      <CTASection 
        title={`Ready to Invest in ${cityName}?`}
        description={`Get connected with DSCR loan specialists who understand the ${cityName} market and can help you secure competitive financing for your investment property.`}
      />
    </div>
  );
}

function getTopicInfo(topic: string) {
  const topicMap: Record<string, any> = {
    'dscr-loan': {
      icon: <Building className="h-5 w-5" />,
      title: 'DSCR Loans',
      description: 'Complete guide to DSCR loan requirements and process in {cityName}'
    },
    'dscr-lender': {
      icon: <MapPin className="h-5 w-5" />,
      title: 'DSCR Lenders',
      description: 'Find qualified DSCR loan lenders serving {cityName} investors'
    },
    'dscr-rates': {
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'DSCR Rates',
      description: 'Current DSCR loan rates and rate factors for {cityName} properties'
    },
    'dscr-calculator': {
      icon: <Calculator className="h-5 w-5" />,
      title: 'DSCR Calculator',
      description: 'Calculate your debt service coverage ratio for {cityName} properties'
    }
  };

  return topicMap[topic] || {
    icon: <Building className="h-5 w-5" />,
    title: topic.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: `Learn about ${topic.replace('-', ' ')} for {cityName} investment properties`
  };
}

function getCityInfo(state: string, city: string) {
  // This would normally come from a database or API
  const defaultInfo = {
    marketDescription: "attractive rental yields and growing demand",
    investmentAppeal: "an appealing market",
    marketSpecific: "The local rental market shows consistent demand across different property types and price ranges.",
    propertyLandscape: "The city offers a mix of single-family homes, condos, and small multifamily properties suitable for DSCR loans.",
    medianRent: "$1,800-2,500",
    propertyTypes: "SFH, Condos",
    rentalDemand: "Strong",
    investmentGrade: "Good",
    propertyValueInsight: "Property values have shown steady appreciation, supporting strong loan-to-value ratios for investors.",
    seasonalFactors: "Rental demand remains relatively stable year-round with minor seasonal variations.",
    neighborhoodTip: "Focus on areas with good schools, low crime, and proximity to employment centers for best rental performance.",
    growthPotential: "The area shows potential for continued rental growth based on local economic indicators.",
    rentExample: "For example, a $400k property should rent for at least $2,400/month for a 1.2 DSCR with a typical loan.",
    exampleProperty: {
      value: "$350,000",
      rent: "$2,200",
      payment: "$1,850",
      dscr: "1.19"
    },
    exampleAnalysis: "With a DSCR just under 1.2, this property would qualify for most DSCR loan programs, though a slightly higher rent or lower payment would improve terms.",
    localTip: "Consider properties near major employers or universities for more stable rental income in this market.",
    insights: undefined // Will use default insights
  };

  // You could expand this with specific city data
  const citySpecificInfo: Record<string, any> = {
    'miami': {
      marketDescription: "vibrant rental markets driven by tourism and international investment",
      investmentAppeal: "one of the most dynamic markets",
      propertyTypes: "Condos, SFH",
      medianRent: "$2,800-4,200",
      localTip: "Short-term rental potential is high in Miami, but verify local regulations before assuming Airbnb income in DSCR calculations."
    },
    'austin': {
      marketDescription: "strong tech job growth and university-driven rental demand",
      investmentAppeal: "a highly attractive market",
      propertyTypes: "SFH, Condos",
      medianRent: "$2,200-3,500",
      localTip: "Properties near UT campus or major tech employers typically command premium rents and stable occupancy."
    }
  };

  return { ...defaultInfo, ...citySpecificInfo[city] };
}