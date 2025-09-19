import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CTASection } from '../cta-section';
import { FAQSection } from '../faq-section';
import { Badge } from '../ui/badge';
import { PageData, STATES } from '../../utils/router';
import { Calculator, TrendingUp, Building, FileText, Users, DollarSign } from 'lucide-react';

interface TopicPageProps {
  pageData: PageData;
}

export function TopicPage({ pageData }: TopicPageProps) {
  const stateName = STATES[pageData.params.state as keyof typeof STATES];
  const cityName = pageData.params.city?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const topic = pageData.params.topic || '';
  
  const topicInfo = getTopicContent(topic, cityName || '', stateName);
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Badge variant="secondary">{topicInfo.category}</Badge>
          <h1>{pageData.h1}</h1>
          <p className="text-lg text-muted-foreground">
            {topicInfo.description}
          </p>
        </div>

        <CTASection 
          title={topicInfo.ctaTitle}
          description={topicInfo.ctaDescription}
        />
      </section>

      {/* Main Content */}
      <section className="space-y-8">
        <h2>{topicInfo.mainHeading}</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {topicInfo.contentSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3>{section.heading}</h3>
                <p>{section.content}</p>
                {section.bulletPoints && (
                  <ul className="space-y-2">
                    {section.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {topicInfo.sidebar && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {topicInfo.sidebar.icon}
                    {topicInfo.sidebar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topicInfo.sidebar.items.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">{item.label}:</span>
                        <span className="font-medium text-sm">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
            
            {topicInfo.calculator && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Quick Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-muted-foreground">Monthly Rent:</label>
                      <div className="font-medium">{topicInfo.calculator.sampleRent}</div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Monthly Payment:</label>
                      <div className="font-medium">{topicInfo.calculator.samplePayment}</div>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between">
                        <span className="font-medium">DSCR Result:</span>
                        <span className="font-bold text-green-600">{topicInfo.calculator.result}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="space-y-8">
        <h2>{topicInfo.guidelinesHeading}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {topicInfo.guidelines.map((guideline, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {guideline.icon}
                  {guideline.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {guideline.description}
                </p>
                {guideline.points && (
                  <ul className="space-y-2">
                    {guideline.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process or Tips Section */}
      <section className="space-y-8">
        <h2>{topicInfo.processHeading}</h2>
        
        <Card>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {topicInfo.processSteps.slice(0, Math.ceil(topicInfo.processSteps.length / 2)).map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                {topicInfo.processSteps.slice(Math.ceil(topicInfo.processSteps.length / 2)).map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      {Math.ceil(topicInfo.processSteps.length / 2) + index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Local Considerations */}
      <section className="space-y-8">
        <h2>Local Considerations for {cityName}</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {topicInfo.localConsiderations.map((consideration, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{consideration.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {consideration.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={topicInfo.faqs} title={`${topicInfo.shortTitle} FAQs for ${cityName}`} />

      {/* Final CTA */}
      <CTASection 
        title={topicInfo.finalCtaTitle}
        description={topicInfo.finalCtaDescription}
      />
    </div>
  );
}

function getTopicContent(topic: string, cityName: string, stateName: string) {
  const baseContent = {
    'dscr-loan': {
      category: 'DSCR Loans',
      description: `Complete guide to DSCR loan requirements, process, and benefits for investment properties in ${cityName}, ${stateName}.`,
      ctaTitle: `Get DSCR Loan Quotes in ${cityName}`,
      ctaDescription: `Connect with qualified DSCR loan specialists familiar with ${cityName} investment properties.`,
      mainHeading: `Understanding DSCR Loans in ${cityName}`,
      shortTitle: 'DSCR Loans',
      contentSections: [
        {
          heading: 'What Are DSCR Loans?',
          content: `DSCR (Debt Service Coverage Ratio) loans are investment property loans that qualify borrowers based on the property's rental income rather than personal income verification. In ${cityName}, these loans have become increasingly popular among real estate investors looking to expand their portfolios without the constraints of traditional income documentation.`
        },
        {
          heading: 'How DSCR Loans Work in ${cityName}',
          content: `When applying for a DSCR loan in ${cityName}, lenders focus primarily on the property's ability to generate rental income that covers the mortgage payment. The process involves analyzing local market rents, property condition, and the borrower's overall financial capacity to manage the investment.`,
          bulletPoints: [
            'No employment verification required',
            'Qualification based on property cash flow',
            'Market rent analysis determines income potential',
            'Credit score and reserves still important factors'
          ]
        },
        {
          heading: 'Benefits for ${cityName} Investors',
          content: `DSCR loans offer several advantages for ${cityName} real estate investors, particularly those looking to scale their portfolios quickly or who have non-traditional income sources.`,
          bulletPoints: [
            'Faster qualification process',
            'No tax return verification needed',
            'Ideal for self-employed investors',
            'Portfolio expansion without income limitations'
          ]
        }
      ],
      sidebar: {
        icon: <Building className="h-5 w-5" />,
        title: 'DSCR Loan Basics',
        items: [
          { label: 'Min Credit Score', value: '620-640' },
          { label: 'Min Down Payment', value: '20-25%' },
          { label: 'Min DSCR Ratio', value: '1.0-1.2' },
          { label: 'Max LTV', value: '80%' },
          { label: 'Typical Rate', value: '6.5%-8.5%' }
        ]
      },
      calculator: {
        sampleRent: '$2,400',
        samplePayment: '$2,000',
        result: '1.20'
      },
      guidelinesHeading: 'DSCR Loan Guidelines for ${cityName}',
      guidelines: [
        {
          icon: <FileText className="h-5 w-5" />,
          title: 'Documentation Requirements',
          description: 'While DSCR loans require less documentation than traditional loans, certain documents are still necessary.',
          points: [
            'Credit report and score verification',
            'Bank statements showing reserves',
            'Property purchase contract or refinance docs',
            'Rent roll or market rent analysis'
          ]
        },
        {
          icon: <DollarSign className="h-5 w-5" />,
          title: 'Financial Requirements',
          description: 'Financial qualifications ensure borrowers can manage the investment property successfully.',
          points: [
            '2-6 months mortgage payment reserves',
            'Debt-to-income considerations for other properties',
            'Cash available for down payment and closing costs',
            'Property taxes and insurance calculations'
          ]
        }
      ],
      processHeading: 'DSCR Loan Process in ${cityName}',
      processSteps: [
        {
          title: 'Property Identification',
          description: 'Find investment property in ${cityName} that meets DSCR loan criteria and market standards.'
        },
        {
          title: 'Rent Analysis',
          description: 'Lender conducts market rent analysis to determine property income potential in local market.'
        },
        {
          title: 'DSCR Calculation',
          description: 'Calculate debt service coverage ratio using rental income and proposed mortgage payment.'
        },
        {
          title: 'Credit and Financial Review',
          description: 'Lender reviews credit score, bank statements, and overall financial capacity.'
        },
        {
          title: 'Property Appraisal',
          description: 'Professional appraisal determines property value and confirms investment viability.'
        },
        {
          title: 'Final Approval and Closing',
          description: 'Final loan approval and closing process, typically completed in 30-45 days.'
        }
      ],
      localConsiderations: [
        {
          title: 'Market Rents',
          description: `Local rent levels in ${cityName} directly impact DSCR calculations and loan approval. Understanding neighborhood rent trends is crucial.`
        },
        {
          title: 'Property Types',
          description: `Different property types in ${cityName} may have varying DSCR loan requirements and market acceptance among lenders.`
        },
        {
          title: 'Economic Factors',
          description: `Local economic conditions, employment trends, and population growth in ${stateName} affect rental demand and property values.`
        }
      ],
      faqs: [
        {
          question: `What credit score do I need for a DSCR loan in ${cityName}?`,
          answer: `Most lenders require a minimum credit score of 620-640 for DSCR loans in ${cityName}, though scores of 680+ typically qualify for better rates and terms.`
        },
        {
          question: `How is rental income calculated for ${cityName} properties?`,
          answer: `Rental income is determined through market rent analysis or existing lease agreements. Lenders use local ${cityName} rent comps to establish realistic income projections.`
        },
        {
          question: `Can I use projected rents for new construction in ${cityName}?`,
          answer: `Some lenders allow projected rents for new construction based on market analysis, though seasoned rental properties with established income history are generally preferred.`
        },
        {
          question: `Are there property type restrictions for DSCR loans in ${cityName}?`,
          answer: `DSCR loans in ${cityName} typically work for single-family homes, condos, townhomes, and 2-4 unit properties. Some lenders have restrictions on certain property types or locations.`
        }
      ],
      finalCtaTitle: `Ready to Apply for DSCR Loans in ${cityName}?`,
      finalCtaDescription: `Get connected with experienced DSCR loan specialists who understand the ${cityName} market and can help you secure competitive financing.`
    },
    'dscr-rates': {
      category: 'Interest Rates',
      description: `Current DSCR loan rates, rate factors, and strategies for getting the best rates on investment properties in ${cityName}, ${stateName}.`,
      ctaTitle: `Compare DSCR Rates in ${cityName}`,
      ctaDescription: `Get personalized rate quotes from multiple DSCR lenders serving ${cityName} investors.`,
      mainHeading: `DSCR Loan Rates in ${cityName}`,
      shortTitle: 'DSCR Rates',
      contentSections: [
        {
          heading: 'Current DSCR Loan Rates',
          content: `DSCR loan rates in ${cityName} typically range from 6.5% to 8.5%, depending on borrower qualifications and property characteristics. These rates are generally 0.5% to 1% higher than traditional investment property loans due to the reduced documentation requirements.`
        },
        {
          heading: 'Rate Factors for ${cityName} Properties',
          content: `Several factors influence DSCR loan rates for properties in ${cityName}. Understanding these factors can help investors position themselves for the best possible rates.`,
          bulletPoints: [
            'Credit score (680+ gets best rates)',
            'DSCR ratio (1.3+ preferred for top rates)',
            'Down payment amount (25%+ improves rates)',
            'Loan amount and property type',
            'Market conditions and lender appetite'
          ]
        },
        {
          heading: 'Rate Comparison Strategies',
          content: `Getting the best DSCR loan rates in ${cityName} requires comparing offers from multiple lenders and understanding how different loan structures affect overall costs.`
        }
      ],
      sidebar: {
        icon: <TrendingUp className="h-5 w-5" />,
        title: 'Current Rate Ranges',
        items: [
          { label: 'Excellent Credit (740+)', value: '6.5%-7.2%' },
          { label: 'Good Credit (680-739)', value: '7.0%-7.8%' },
          { label: 'Fair Credit (620-679)', value: '7.5%-8.5%' },
          { label: 'High DSCR (1.3+)', value: '-0.25% discount' },
          { label: '25%+ Down', value: '-0.125% discount' }
        ]
      },
      guidelinesHeading: 'Rate Optimization for ${cityName} Investors',
      guidelines: [
        {
          icon: <TrendingUp className="h-5 w-5" />,
          title: 'Credit Score Impact',
          description: 'Credit score has the largest impact on DSCR loan rates, with significant rate breaks at key score thresholds.',
          points: [
            '740+ credit scores get top-tier pricing',
            '680-739 scores qualify for good rates',
            '620-679 scores face rate premiums',
            'Below 620 typically not eligible'
          ]
        },
        {
          icon: <Calculator className="h-5 w-5" />,
          title: 'DSCR Ratio Benefits',
          description: 'Higher DSCR ratios can result in rate discounts and better loan terms.',
          points: [
            '1.3+ DSCR may qualify for rate discounts',
            '1.2-1.29 DSCR gets standard pricing',
            '1.0-1.19 DSCR may have rate premiums',
            'Below 1.0 DSCR typically not acceptable'
          ]
        }
      ],
      processHeading: 'How to Get the Best DSCR Rates in ${cityName}',
      processSteps: [
        {
          title: 'Improve Credit Score',
          description: 'Work on improving credit score before applying, as this has the biggest impact on rates.'
        },
        {
          title: 'Maximize Down Payment',
          description: 'Consider larger down payments (25%+) which can improve rates and loan terms.'
        },
        {
          title: 'Shop Multiple Lenders',
          description: 'Compare rates from various DSCR lenders serving ${cityName} to find best terms.'
        },
        {
          title: 'Optimize DSCR Ratio',
          description: 'Choose properties with strong rental income to achieve higher DSCR ratios.'
        }
      ],
      localConsiderations: [
        {
          title: 'Local Market Rates',
          description: `Interest rates in ${cityName} may vary slightly based on local market conditions and lender competition in the area.`
        },
        {
          title: 'Property Location',
          description: `Properties in prime ${cityName} locations may qualify for slightly better rates due to lower perceived risk.`
        },
        {
          title: 'Seasonal Factors',
          description: `Rate availability and pricing may fluctuate based on broader economic conditions and lending market cycles.`
        }
      ],
      faqs: [
        {
          question: `What's the average DSCR loan rate in ${cityName}?`,
          answer: `DSCR loan rates in ${cityName} typically range from 6.5% to 8.5%, with qualified borrowers (740+ credit, 1.3+ DSCR, 25%+ down) getting rates in the lower end of this range.`
        },
        {
          question: `How do DSCR rates compare to conventional investment loans?`,
          answer: `DSCR rates are typically 0.5% to 1% higher than conventional investment property loans due to the reduced documentation and underwriting requirements.`
        },
        {
          question: `Can I get rate quotes without affecting my credit?`,
          answer: `Many lenders offer preliminary rate quotes based on basic information without pulling credit. Formal applications with credit checks should be done within a 14-45 day window to minimize credit impact.`
        },
        {
          question: `Do ${cityName} DSCR rates change frequently?`,
          answer: `Yes, DSCR loan rates can change daily based on market conditions, just like other mortgage rates. It's important to lock rates once you're ready to proceed.`
        }
      ],
      finalCtaTitle: `Get Your Best DSCR Rate in ${cityName}`,
      finalCtaDescription: `Compare personalized rate quotes from multiple qualified DSCR lenders and secure the best financing for your ${cityName} investment property.`
    }
  };

  // Add more topic types with similar structure
  const defaultContent = {
    category: 'DSCR Information',
    description: `Learn about ${topic.replace('-', ' ')} for investment properties in ${cityName}, ${stateName}.`,
    ctaTitle: `Get DSCR Help in ${cityName}`,
    ctaDescription: `Connect with DSCR loan specialists serving ${cityName} investors.`,
    mainHeading: `${topic.replace('-', ' ')} in ${cityName}`,
    shortTitle: topic.replace('-', ' '),
    contentSections: [
      {
        heading: `Understanding ${topic.replace('-', ' ')}`,
        content: `This guide covers everything you need to know about ${topic.replace('-', ' ')} for investment properties in ${cityName}, ${stateName}.`
      }
    ],
    sidebar: {
      icon: <Building className="h-5 w-5" />,
      title: 'Quick Reference',
      items: [
        { label: 'Min Credit Score', value: '620+' },
        { label: 'Min Down Payment', value: '20%' },
        { label: 'Min DSCR', value: '1.0' }
      ]
    },
    guidelinesHeading: `${topic.replace('-', ' ')} Guidelines`,
    guidelines: [
      {
        icon: <FileText className="h-5 w-5" />,
        title: 'Requirements',
        description: `Key requirements for ${topic.replace('-', ' ')} in ${cityName}.`,
        points: ['Credit score 620+', 'Property cash flow positive', 'Adequate reserves']
      }
    ],
    processHeading: `${topic.replace('-', ' ')} Process`,
    processSteps: [
      {
        title: 'Initial Review',
        description: `Review ${topic.replace('-', ' ')} requirements and qualifications.`
      },
      {
        title: 'Application',
        description: 'Submit application with required documentation.'
      },
      {
        title: 'Approval',
        description: 'Receive approval and proceed to closing.'
      }
    ],
    localConsiderations: [
      {
        title: 'Local Market',
        description: `${cityName} market conditions affecting ${topic.replace('-', ' ')}.`
      },
      {
        title: 'Property Types',
        description: `Common property types for ${topic.replace('-', ' ')} in ${cityName}.`
      },
      {
        title: 'Investment Strategy',
        description: `How ${topic.replace('-', ' ')} fits into ${cityName} investment strategies.`
      }
    ],
    faqs: [
      {
        question: `What are the requirements for ${topic.replace('-', ' ')} in ${cityName}?`,
        answer: `Requirements include minimum credit score, down payment, and debt service coverage ratio that meets lender guidelines.`
      },
      {
        question: `How long does the ${topic.replace('-', ' ')} process take?`,
        answer: `The process typically takes 30-45 days from application to closing.`
      }
    ],
    finalCtaTitle: `Get Started with ${topic.replace('-', ' ')} in ${cityName}`,
    finalCtaDescription: `Connect with qualified specialists to learn more about ${topic.replace('-', ' ')} options.`
  };

  return baseContent[topic as keyof typeof baseContent] || defaultContent;
}