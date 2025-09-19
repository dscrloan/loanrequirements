import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CTASection } from '../cta-section';
import { FAQSection } from '../faq-section';
import { LocalInsights } from '../local-insights';
import { Badge } from '../ui/badge';
import { PageData, CITIES, STATES } from '../../utils/router';
import { MapPin, TrendingUp, DollarSign, FileText } from 'lucide-react';

interface StatePageProps {
  pageData: PageData;
}

export function StatePage({ pageData }: StatePageProps) {
  const stateName = STATES[pageData.params.state as keyof typeof STATES];
  const cities = CITIES[pageData.params.state as keyof typeof CITIES] || [];

  const stateInfo = getStateInfo(pageData.params.state || '');
  
  const faqs = [
    {
      question: `What are the DSCR loan requirements in ${stateName}?`,
      answer: `DSCR loan requirements in ${stateName} typically include a minimum credit score of 620-640, a down payment of 20-25%, and 2-6 months of mortgage reserves. The property must generate enough rental income to achieve a DSCR of at least 1.0, though most lenders prefer 1.2 or higher for better terms.`
    },
    {
      question: `What types of properties qualify for DSCR loans in ${stateName}?`,
      answer: `In ${stateName}, DSCR loans are available for single-family rental homes, condos, townhomes, and 2-4 unit multifamily investment properties. Some lenders also offer DSCR financing for short-term rental properties in popular vacation markets.`
    },
    {
      question: `How long does it take to close a DSCR loan in ${stateName}?`,
      answer: `DSCR loans in ${stateName} typically close in 30-45 days. The streamlined process is possible because there's no employment or income verification required - the focus is entirely on the property's rental income potential.`
    },
    {
      question: `What are current DSCR loan rates in ${stateName}?`,
      answer: `DSCR loan rates in ${stateName} typically range from 6.5% to 8.5% depending on credit score, down payment, DSCR ratio, and loan amount. Rates are generally 0.5-1% higher than traditional investment property loans due to the no-doc nature of DSCR loans.`
    },
    {
      question: `Do I need to be a ${stateName} resident to get a DSCR loan?`,
      answer: `No, you don't need to be a ${stateName} resident to get a DSCR loan for investment property in the state. Many out-of-state investors use DSCR loans to build rental portfolios in ${stateName}'s attractive markets.`
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Badge variant="secondary">State Guide</Badge>
          <h1>{pageData.h1}</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive guide to DSCR loan requirements, rates, and qualified lenders in {stateName}. 
            Get the information you need to secure investment property financing across the state's top markets.
          </p>
        </div>

        <CTASection 
          title="Get DSCR Loan Quotes in {stateName}"
          description="Connect with qualified DSCR lenders serving {stateName} and get competitive rate quotes for your investment property."
        />
      </section>

      {/* State Overview */}
      <section className="space-y-8">
        <h2>DSCR Loans in {stateName}: Market Overview</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p>
              {stateName} offers excellent opportunities for real estate investors seeking DSCR loan financing. 
              The state's {stateInfo.marketDescription} make it an attractive destination for both local and out-of-state investors 
              looking to build rental property portfolios.
            </p>
            
            <p>
              DSCR loans in {stateName} follow standard industry guidelines while adapting to local market conditions. 
              Lenders evaluate properties based on rental income potential, which varies significantly across the state's diverse markets. 
              {stateInfo.specificInsight}
            </p>

            <div className="space-y-4">
              <h3>Key Investment Markets in {stateName}</h3>
              <p>
                The most active DSCR loan markets in {stateName} include major metropolitan areas and emerging secondary markets. 
                Each market offers unique opportunities for different investment strategies, from traditional long-term rentals to short-term vacation properties.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Min Credit Score:</span>
                  <span className="font-medium">620-640</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Min Down Payment:</span>
                  <span className="font-medium">20-25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Min DSCR Ratio:</span>
                  <span className="font-medium">1.0-1.2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Typical Closing:</span>
                  <span className="font-medium">30-45 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Rate Range:</span>
                  <span className="font-medium">6.5%-8.5%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Local Insights */}
      <section className="space-y-8">
        <h2>Investment Insights for {stateName}</h2>
        <LocalInsights 
          stateName={stateName}
          insights={stateInfo.insights}
        />
      </section>

      {/* Cities Grid */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h2>DSCR Loan Markets in {stateName}</h2>
          <p className="text-muted-foreground">
            Explore detailed DSCR loan information for major cities and markets across {stateName}. 
            Each market has unique characteristics that affect loan requirements and investment strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => {
            const cityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            return (
              <Card key={city} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5" />
                    {cityName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Comprehensive DSCR loan requirements, rates, and lender information for {cityName} investment properties.
                  </p>
                  <a 
                    href={`/states/${pageData.params.state}/${city}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View {cityName} Guide →
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Requirements Section */}
      <section className="space-y-8">
        <h2>DSCR Loan Requirements in {stateName}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Standard Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-1">Credit Score</h4>
                  <p className="text-sm text-muted-foreground">
                    Minimum 620-640 FICO score, though 680+ gets better rates and terms.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Down Payment</h4>
                  <p className="text-sm text-muted-foreground">
                    20-25% minimum down payment, with better rates available at 25%+.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Reserves</h4>
                  <p className="text-sm text-muted-foreground">
                    2-6 months of mortgage payments in reserves, varies by loan amount.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                DSCR Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-1">Minimum DSCR</h4>
                  <p className="text-sm text-muted-foreground">
                    1.0 minimum ratio, though 1.2+ provides access to better rates.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Income Calculation</h4>
                  <p className="text-sm text-muted-foreground">
                    Based on market rent analysis or existing lease agreements.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Property Types</h4>
                  <p className="text-sm text-muted-foreground">
                    Single-family, condo, townhome, and 2-4 unit properties qualify.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Closing Costs */}
      <section className="space-y-8">
        <h2>DSCR Loan Closing Costs in {stateName}</h2>
        
        <Card>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3>Typical Closing Costs</h3>
                <p className="text-muted-foreground">
                  DSCR loan closing costs in {stateName} are generally comparable to traditional investment property loans, 
                  typically ranging from 2-4% of the loan amount. However, some fees may be higher due to the specialized nature of DSCR lending.
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Origination Fee:</span>
                    <span className="text-sm font-medium">0.5% - 1.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Appraisal:</span>
                    <span className="text-sm font-medium">$500 - $800</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Title Insurance:</span>
                    <span className="text-sm font-medium">0.5% - 1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Processing/Underwriting:</span>
                    <span className="text-sm font-medium">$500 - $1,200</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3>State-Specific Considerations</h3>
                <p className="text-muted-foreground">
                  {stateInfo.closingCostInfo}
                </p>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Pro Tip:</strong> Get detailed closing cost estimates from multiple lenders to compare total costs, 
                    not just interest rates. Some lenders offer lower rates but higher fees, while others have more competitive fee structures.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title={`DSCR Loan FAQs for ${stateName}`} />

      {/* Final CTA */}
      <CTASection 
        title={`Get DSCR Loan Quotes in ${stateName}`}
        description={`Ready to secure DSCR financing for your ${stateName} investment property? Connect with our network of qualified lenders for competitive rates and expert guidance.`}
      />
    </div>
  );
}

function getStateInfo(state: string) {
  const stateInfoMap: Record<string, any> = {
    florida: {
      marketDescription: "strong rental markets, growing population, and diverse property types",
      specificInsight: "Florida's popularity as a vacation destination also creates opportunities for short-term rental investments, though lenders may have specific requirements for these properties.",
      closingCostInfo: "Florida has relatively moderate closing costs compared to other states, with no state income tax making it attractive for out-of-state investors. Recording fees and documentary stamps are typical additional costs.",
      insights: [
        {
          icon: <TrendingUp className="h-5 w-5 text-green-600" />,
          title: "Growing Markets",
          description: "Florida's population growth and tourism industry create strong rental demand across multiple markets."
        },
        {
          icon: <MapPin className="h-5 w-5 text-blue-600" />,
          title: "Diverse Opportunities",
          description: "From Miami condos to Orlando vacation rentals, Florida offers diverse DSCR loan opportunities."
        },
        {
          icon: <DollarSign className="h-5 w-5 text-purple-600" />,
          title: "Tax Benefits",
          description: "No state income tax makes Florida attractive for real estate investors building rental portfolios."
        }
      ]
    },
    texas: {
      marketDescription: "robust job growth, business-friendly environment, and strong population growth",
      specificInsight: "Texas's no state income tax and business-friendly policies attract many companies and residents, creating consistent rental demand across major metropolitan areas.",
      closingCostInfo: "Texas has competitive closing costs with no state income tax. Transfer taxes are generally lower than many other states, though title insurance costs can vary by region.",
      insights: [
        {
          icon: <TrendingUp className="h-5 w-5 text-green-600" />,
          title: "Economic Growth",
          description: "Texas's strong job market and business growth drive consistent rental demand across major cities."
        },
        {
          icon: <MapPin className="h-5 w-5 text-blue-600" />,
          title: "Multiple Markets",
          description: "Dallas, Houston, Austin, and San Antonio each offer unique investment opportunities."
        },
        {
          icon: <DollarSign className="h-5 w-5 text-purple-600" />,
          title: "Investor Friendly",
          description: "No state income tax and landlord-friendly laws make Texas attractive for investors."
        }
      ]
    }
  };

  return stateInfoMap[state] || {
    marketDescription: "growing economy and attractive rental markets",
    specificInsight: "The state offers various opportunities for real estate investors seeking DSCR loan financing across different market segments.",
    closingCostInfo: "Closing costs typically include standard fees such as origination, appraisal, title insurance, and state-specific transfer taxes or recording fees.",
    insights: [
      {
        icon: <TrendingUp className="h-5 w-5 text-green-600" />,
        title: "Market Growth",
        description: "Strong economic fundamentals support rental property investment opportunities."
      },
      {
        icon: <MapPin className="h-5 w-5 text-blue-600" />,
        title: "Local Markets",
        description: "Multiple markets offer diverse investment strategies and property types."
      },
      {
        icon: <DollarSign className="h-5 w-5 text-purple-600" />,
        title: "Investment Potential",
        description: "Favorable conditions for building and growing rental property portfolios."
      }
    ]
  };
}