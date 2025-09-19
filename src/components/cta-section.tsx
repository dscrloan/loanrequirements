import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  className?: string;
}

export function CTASection({ 
  title = "Ready to Get Started?", 
  description = "Connect with experienced DSCR loan specialists who can guide you through the process and help you secure competitive rates for your investment property.",
  className = ""
}: CTASectionProps) {
  return (
    <Card className={`bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 ${className}`}>
      <CardContent className="p-8 text-center">
        <h2 className="mb-4">{title}</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-green-600" />
            No obligation consultation
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-green-600" />
            Multiple lender options
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-green-600" />
            Expert guidance
          </div>
        </div>

        <Button 
          size="lg" 
          asChild 
          className="bg-primary hover:bg-primary/90 px-8"
        >
          <a 
            href="https://www.shopdscrloans.com" 
            target="_self"
            rel="noopener"
            className="inline-flex items-center gap-2"
          >
            See My DSCR Options
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}