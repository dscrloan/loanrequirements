import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { CTASection } from '../cta-section';
import { FAQSection } from '../faq-section';
import { Calculator, FileText, TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';

export function HomePage() {
  const features = [
    {
      icon: <Calculator className="h-6 w-6 text-blue-600" />,
      title: "DSCR Calculator",
      description: "Calculate your debt service coverage ratio to determine loan eligibility"
    },
    {
      icon: <FileText className="h-6 w-6 text-green-700" />,
      title: "Requirements Guide",
      description: "Complete breakdown of DSCR loan requirements by state and lender"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      title: "Current Rates",
      description: "Up-to-date DSCR loan rates from top investment property lenders"
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-600" />,
      title: "Qualified Lenders",
      description: "Directory of verified DSCR loan specialists in your area"
    }
  ];

  const benefits = [
    "No personal income verification required",
    "Rates as low as 6.5% for qualified borrowers",
    "Up to 80% LTV available",
    "Close in 30-45 days",
    "Single-family and small multifamily properties",
    "Cash-out refinancing available"
  ];

  const faqs = [
    {
      question: "What is a DSCR loan?",
      answer: "A DSCR (Debt Service Coverage Ratio) loan is an investment property loan that qualifies borrowers based on the property's rental income rather than personal income. The loan approval is based on whether the property generates enough rental income to cover the mortgage payments."
    },
    {
      question: "What DSCR ratio do I need to qualify?",
      answer: "Most lenders require a minimum DSCR of 1.0, meaning the property's gross rental income equals or exceeds the mortgage payment (PITIA). However, many lenders prefer to see a DSCR of 1.2 or higher for better rates and terms."
    },
    {
      question: "Do I need to verify my personal income?",
      answer: "No, DSCR loans are \"no-doc\" or \"bank statement\" loans that don't require traditional income verification like W-2s or tax returns. The focus is entirely on the investment property's cash flow potential."
    },
    {
      question: "What types of properties qualify for DSCR loans?",
      answer: "DSCR loans typically work for single-family rental homes, condos, townhomes, and small multifamily properties (2-4 units). Some lenders also offer DSCR loans for short-term rental properties like Airbnb investments."
    },
    {
      question: "How long does it take to close a DSCR loan?",
      answer: "DSCR loans typically close in 30-45 days, which is often faster than traditional investment property loans because there's no employment or income verification required."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="mb-4">Investment Property Financing</Badge>
          <h1>DSCR Loan Requirements: Your Complete Guide to Investment Property Financing</h1>
          <p className="text-lg text-muted-foreground">
            Get qualified for DSCR loans with no income verification. Our comprehensive guide covers requirements, rates, and connects you with top lenders nationwide.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-700" />
              <span>No income docs required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-700" />
              <span>Rates from 6.5%</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-700" />
              <span>Up to 80% LTV</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-700" />
              <span>Fast 30-day closing</span>
            </div>
          </div>

          <CTASection 
            title="Get Your DSCR Loan Quote"
            description="Connect with experienced DSCR loan specialists and get pre-qualified in minutes."
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2>Everything You Need to Know About DSCR Loans</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get comprehensive information about DSCR loan requirements, rates, and qualified lenders to make informed investment decisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* DSCR Overview */}
      <section className="space-y-8">
        <h2>What is a DSCR Loan?</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p>
              A DSCR (Debt Service Coverage Ratio) loan is a revolutionary financing option for real estate investors that qualifies borrowers based on the investment property's rental income potential rather than personal income verification. This makes it an ideal solution for investors who want to expand their portfolio without the constraints of traditional income documentation.
            </p>
            
            <p>
              The DSCR calculation is simple: divide the property's gross monthly rental income by the monthly mortgage payment (including principal, interest, taxes, insurance, and association fees). A DSCR of 1.0 means the rental income exactly covers the mortgage payment, while anything above 1.0 indicates positive cash flow.
            </p>

            <div className="space-y-4">
              <h3>Key Benefits of DSCR Loans</h3>
              <div className="grid gap-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-700 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                DSCR Calculation Example
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Monthly Rental Income:</span>
                  <span className="font-medium">$3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Monthly Mortgage Payment:</span>
                  <span className="font-medium">$2,400</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span className="font-medium">DSCR Ratio:</span>
                    <span className="font-bold text-green-700">1.25</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                This property qualifies for DSCR financing with a healthy 1.25 ratio, indicating strong cash flow potential.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="space-y-8">
        <h2>DSCR Loan Requirements</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Borrower Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Minimum credit score of 620-640 (varies by lender)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">2-6 months of mortgage reserves required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Down payment of 20-25% minimum</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Property must be investment/rental property</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">No employment verification required</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Property Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Single-family homes, condos, townhomes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">2-4 unit multifamily properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Minimum DSCR of 1.0 (preferably 1.2+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Professional appraisal required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Market rent analysis for income verification</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="space-y-8">
        <h2>DSCR Loan Process</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: 1, title: "Property Analysis", description: "Lender analyzes rental income potential and property value" },
            { step: 2, title: "Credit Review", description: "Credit score and financial capacity review (no income docs)" },
            { step: 3, title: "DSCR Calculation", description: "Property income vs. mortgage payment ratio calculation" },
            { step: 4, title: "Loan Approval", description: "Final approval and closing in 30-45 days" }
          ].map((item) => (
            <Card key={item.step} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mb-2">
                  {item.step}
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <CTASection 
        title="Ready to Get Started with DSCR Loans?"
        description="Connect with our network of qualified DSCR loan specialists who can help you secure competitive rates and terms for your investment property financing needs."
      />
    </div>
  );
}