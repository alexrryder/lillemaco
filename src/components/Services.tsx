"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { MessageSquare, Video, Calendar, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const services = [
    {
      title: "Social Media Strategy",
      description: "Comprehensive content strategy tailored specifically for connecting with mothers. We analyze your brand, audience, and competition to create a roadmap for authentic engagement.",
      benefits: [
        "Custom strategy focusing on motherhood values",
        "Competitor analysis and positioning",
        "Platform-specific optimization"
      ],
      icon: <MessageSquare className="h-10 w-10" />,
      color: "bg-[#F2C858]/10 text-[#F2C858]",
      borderColor: "border-[#F2C858]/30"
    },
    {
      title: "Short-form Video Editing",
      description: "Professional editing that transforms your raw content into emotionally resonant stories that speak directly to mothers. Optimized for Reels, TikTok, and short-form engagement.",
      benefits: [
        "Emotional storytelling with motherhood focus",
        "Platform-specific optimizations",
        "Music and trend integration"
      ],
      icon: <Video className="h-10 w-10" />,
      color: "bg-[#1A5F35]/10 text-[#1A5F35]",
      borderColor: "border-[#1A5F35]/30"
    },
    {
      title: "Content Calendar & Planning",
      description: "Never wonder what to post with our detailed content calendars. We research motherhood topics, seasonal trends, and plan your strategy weeks in advance.",
      benefits: [
        "Monthly content themes aligned with mom interests",
        "Seasonal campaign planning",
        "Caption writing and hashtag research"
      ],
      icon: <Calendar className="h-10 w-10" />,
      color: "bg-[#F2C858]/10 text-[#F2C858]",
      borderColor: "border-[#F2C858]/30"
    },
    {
      title: "Analytics & Growth Strategy",
      description: "Data-driven decisions that focus on metrics that matter for mom-focused brands. We analyze what resonates with mothers and optimize your strategy for authentic connections and conversions.",
      benefits: [
        "Mom audience behavior insights",
        "Engagement rate optimization",
        "Monthly performance reports"
      ],
      icon: <BarChart3 className="h-10 w-10" />,
      color: "bg-[#1A5F35]/10 text-[#1A5F35]",
      borderColor: "border-[#1A5F35]/30"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[40%] h-[50%] bg-[#1A5F35]/5 rounded-full blur-3xl -translate-y-1/3 -translate-x-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[30%] h-[40%] bg-[#F2C858]/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 md:mb-20 max-w-3xl mx-auto transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex mb-5 bg-[#1A5F35]/20 px-6 py-2.5 rounded-full text-[#1A5F35] font-semibold text-sm shadow-sm">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-[#0D3C21]">
            Specialized Services for <span className="text-[#F2C858]">Mom-Focused</span> Brands
          </h2>
          <p className="text-xl text-[#0D3C21]/80 max-w-2xl mx-auto leading-relaxed">
            We help brands like yours create authentic connections with mothers through strategic content that resonates with their unique journey.
          </p>
        </div>
        
        <div className={`grid md:grid-cols-2 gap-8 mb-16 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 1s ease-in-out' }}>
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms`, transitionDuration: '0.7s' }}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color.includes('[#F2C858]') ? 'from-[#F2C858] to-[#F2C858]/70' : 'from-[#1A5F35] to-[#0D3C21]'}`}></div>
              <CardHeader className={`pb-2`}>
                <div className={`inline-flex p-4 rounded-full mb-4 ${service.color}`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl md:text-3xl font-display mb-3 text-[#0D3C21]">{service.title}</CardTitle>
                <CardDescription className="text-base text-[#0D3C21]/90 font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="mt-4 space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-[#1A5F35]" />
                      <p className="text-[#0D3C21]/80">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start border-t border-gray-100 mt-6 pt-6">
                <Button 
                  asChild 
                  variant="outline" 
                  className={`rounded-full border ${service.borderColor} text-[#0D3C21] hover:bg-gray-50 w-full justify-center group`}
                >
                  <Link href="#book-call" className="flex items-center gap-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center max-w-2xl mx-auto mt-16 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl font-medium text-[#0D3C21] mb-8">
            Want to learn more about our services?
          </p>
          <Button 
            asChild 
            size="lg" 
            className="relative bg-[#F2C858] hover:bg-[#F2C858]/90 text-[#0D3C21]
              font-semibold text-lg rounded-full px-10 py-7
              shadow-[0_8px_20px_-3px_rgba(242,200,88,0.6),0_2px_3px_-2px_rgba(0,0,0,0.1)]
              hover:shadow-[0_10px_25px_-3px_rgba(242,200,88,0.7),0_4px_6px_-2px_rgba(0,0,0,0.05)]
              transition-all duration-300 overflow-hidden group border border-[#F2C858]/20"
          >
            <Link href="#book-call" className="flex items-center gap-3">
              <span className="relative z-10">Book a Clarity Call</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-[#0D3C21]/60">
            Let's discuss how we can help your brand connect with mothers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services; 