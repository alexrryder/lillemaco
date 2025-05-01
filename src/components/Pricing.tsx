"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  const tiers = [
    {
      name: "Essentials Strategy Package",
      price: "$750",
      description: "Ideal for businesses with in-house production capabilities seeking expert direction",
      features: [
        "Comprehensive Onboarding & Strategy Session",
        "30 Tailored Content Ideas & Prompts Monthly",
        "Niche-Specific Angles & Format Recommendations",
        "Expert Feedback on up to 10 Content Pieces",
        "Dedicated Notion Collaboration Workspace"
      ],
      cta: "Get Started",
      color: "border-sage",
      buttonClass: "bg-sage hover:bg-sage/90 text-white",
      popular: false
    },
    {
      name: "Complete Support Package",
      price: "$1,500",
      description: "Ideal for businesses seeking full strategic support plus video production",
      features: [
        "All Essentials Strategy Package Features",
        "Professional Editing of 12 Short-Form Videos Monthly",
        "Streamlined Video Production Workflow",
        "Caption Generation & Text Overlays",
        "Royalty-Free Music Selection",
        "Option to Add Extra Videos ($75 each)"
      ],
      cta: "Book a Clarity Call",
      color: "border-coral",
      buttonClass: "bg-coral hover:bg-coral/90 text-white",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">Choose Your Level of Support</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Structured monthly packages tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative border-2 ${tier.color} shadow-xl h-full flex flex-col rounded-xl`}
            >
              {tier.popular && (
                <span className="absolute top-0 right-0 bg-coral text-white px-3 py-1 text-sm font-bold rounded-bl-lg rounded-tr-lg">
                  RECOMMENDED
                </span>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-display">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-lg text-charcoal/70"> / month</span>
                </div>
                <CardDescription className="mt-4 text-base">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-sage mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className={`w-full rounded-full ${tier.buttonClass}`}>
                  <Link href="#book-call">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 