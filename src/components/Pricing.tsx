"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, Shield, ArrowRight, Zap, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const FeatureItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.li 
      className="flex items-start mb-4"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="mr-3 mt-1">
        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#1A5F35] to-[#0D3C21] flex items-center justify-center shadow-sm">
          <Check className="h-3 w-3 text-white" />
        </div>
      </div>
      <span className="text-[#0D3C21]/90">{children}</span>
    </motion.li>
  );
};

const PricingCard = ({ tier, isPopular }: { tier: any; isPopular: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: isPopular ? 0.2 : 0 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className={`h-full rounded-3xl border-2 ${tier.color} overflow-hidden relative ${isPopular ? 'shadow-xl shadow-[#F2C858]/20' : 'shadow-lg'}`}>
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8F8FC] opacity-40"></div>
        {isPopular && (
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#F2C858]/10 to-transparent"></div>
        )}
        
        {/* Recommendation badge */}
        {isPopular && (
          <div className="absolute top-0 right-0">
            <div className="bg-[#F2C858] text-[#0D3C21] font-bold text-xs px-4 py-1.5 rounded-bl-lg rounded-tr-xl flex items-center gap-1 shadow-md">
              <Star className="h-3 w-3" />
              MOST POPULAR
            </div>
          </div>
        )}
        
        <div className="p-8 flex flex-col h-full">
          {/* Card header */}
          <div className="mb-6">
            <motion.h3 
              className={`text-2xl md:text-3xl font-display font-bold mb-2 ${isPopular ? 'text-[#1A5F35]' : 'text-[#0D3C21]'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {tier.name}
            </motion.h3>
            
            <motion.div 
              className="flex items-baseline mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span className={`text-4xl md:text-5xl font-bold ${isPopular ? 'text-[#F2C858]' : 'text-[#1A5F35]'}`}>{tier.price}</span>
              <span className="text-lg text-[#0D3C21]/70 ml-1"> / month</span>
            </motion.div>
            
            <motion.p 
              className="text-[#0D3C21]/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {tier.description}
            </motion.p>
          </div>
          
          {/* Features list */}
          <div className="flex-grow mb-6">
            <ul>
              {tier.features.map((feature: string, i: number) => (
                <FeatureItem key={i}>{feature}</FeatureItem>
              ))}
            </ul>
          </div>
          
          {/* CTA Button */}
          <div>
            <motion.div
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.02 }}
            >
              <Button 
                asChild 
                className={`w-full py-6 rounded-xl ${tier.buttonClass} text-base font-semibold relative group overflow-hidden`}
              >
                <Link href="#book-call" className="flex items-center justify-center gap-2">
                  {/* Button glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {tier.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "Essential Social Strategy",
      price: "$750",
      description: "Perfect for brands seeking expert guidance, with content execution handled in-house",
      features: [
        "Comprehensive Social Media Strategy",
        "30 Mother-Focused Content Ideas Monthly",
        "Caption & Hashtag Recommendations",
        "Expert Feedback on 10 Content Pieces",
        "Dedicated Strategy Workspace",
        "Weekly Email Support"
      ],
      cta: "Get Started",
      color: "border-[#1A5F35]/30",
      buttonClass: "bg-gradient-to-r from-[#1A5F35] to-[#0D3C21] text-white",
      popular: false
    },
    {
      name: "Complete Growth Package",
      price: "$1,500",
      description: "Our signature service combining strategy with professional video production",
      features: [
        "All Essential Strategy Features",
        "Professional Editing of 12 Short-Form Videos",
        "Custom Mother-Focused Storytelling",
        "Captions & Text Overlay Design",
        "Royalty-Free Music Selection",
        "48-Hour Turnaround On Edits",
        "Priority Support & Strategy Calls"
      ],
      cta: "Book a Clarity Call",
      color: "border-[#F2C858]",
      buttonClass: "bg-[#F2C858] text-[#0D3C21]",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1A5F35]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F2C858]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex mb-5 bg-[#1A5F35]/10 px-6 py-2.5 rounded-full text-[#1A5F35] font-semibold text-sm shadow-sm">
            Simple, transparent pricing
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-[#0D3C21]">
            Tailored Packages for <span className="text-[#F2C858]">Mom-Focused</span> Brands
          </h2>
          <p className="text-xl text-[#0D3C21]/80 max-w-2xl mx-auto">
            Strategic support and content creation designed specifically for connecting with motherhood audiences
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-2">
          {tiers.map((tier, index) => (
            <PricingCard 
              key={index}
              tier={tier}
              isPopular={tier.popular}
            />
          ))}
        </div>
        
        {/* Additional info */}
        <motion.div 
          className="mt-16 bg-[#F8F8FC] rounded-2xl p-8 max-w-4xl mx-auto border border-[#F2C858]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#0D3C21] mb-2">Need something custom?</h3>
              <p className="text-[#0D3C21]/70">
                We offer custom packages tailored to your specific needs. Let's discuss how we can help your brand.
              </p>
            </div>
            <Button 
              asChild
              className="bg-white hover:bg-[#F2C858]/10 text-[#0D3C21] border border-[#F2C858]/30 whitespace-nowrap"
            >
              <Link href="#book-call" className="flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
        
        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div 
            className="flex items-center justify-center gap-3 bg-white p-4 rounded-xl border border-[#1A5F35]/10 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Shield className="h-5 w-5 text-[#1A5F35]" />
            <span className="text-sm font-medium text-[#0D3C21]">30-day satisfaction guarantee</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-3 bg-white p-4 rounded-xl border border-[#F2C858]/10 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Zap className="h-5 w-5 text-[#F2C858]" />
            <span className="text-sm font-medium text-[#0D3C21]">No long-term contracts required</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-3 bg-white p-4 rounded-xl border border-[#1A5F35]/10 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Sparkles className="h-5 w-5 text-[#1A5F35]" />
            <span className="text-sm font-medium text-[#0D3C21]">Free strategy session included</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 