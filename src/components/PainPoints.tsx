"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Compass, Video, Check, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PainPoints = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('pain-points');
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

  const painPoints = [
    {
      icon: <Clock className="h-12 w-12 text-[#F2C858]" />,
      title: "No Time for Content Creation",
      description: "Running your business leaves little time for crafting the <strong>consistent, quality content</strong> modern social platforms demand.",
      solution: "We create high-quality content while you focus on your business",
      color: "from-[#F2C858] to-[#F2C858]/80"
    },
    {
      icon: <Compass className="h-12 w-12 text-[#F2C858]" />,
      title: "Unclear What Resonates",
      description: "You understand mothers are your audience, but <strong>creating authentic content</strong> that truly connects and converts feels elusive.",
      solution: "Our proven frameworks identify what truly resonates with mothers",
      color: "from-[#1A5F35] to-[#0D3C21]"
    },
    {
      icon: <Video className="h-12 w-12 text-[#F2C858]" />,
      title: "Short-form Video Overwhelm",
      description: "Reels and TikToks are driving growth, but require <strong>specialized expertise</strong> and time investment you simply don't have in-house.",
      solution: "Get expertly crafted videos that convert without the learning curve",
      color: "from-[#1A5F35] to-[#0D3C21]"
    }
  ];

  return (
    <section id="pain-points" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-[#1A5F35]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-[#F2C858]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 max-w-3xl mx-auto transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex mb-5 bg-[#1A5F35]/10 px-6 py-2.5 rounded-full text-[#1A5F35] font-semibold text-sm shadow-md">
            The struggle is real
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight text-[#0D3C21]">
            Is Your Brand <span className="relative inline-block">
              <span className="relative z-10">Disconnected</span>
              <span className={`absolute bottom-1 left-0 w-full h-4 bg-[#F2C858]/30 -z-0 rounded-sm ${isVisible ? 'animate-draw-marker' : 'w-0'}`}
                style={{ 
                  clipPath: 'polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)',
                  transform: 'skew(-2deg)'
                }}></span>
            </span> From Your <br /> Motherhood Audience?
          </h2>
          <p className="text-xl md:text-2xl text-[#0D3C21]/80 leading-relaxed font-light">
            We understand the unique challenges of marketing to mothers.
            <span className="text-[#1A5F35] font-semibold"> You're not alone.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {painPoints.map((point, index) => (
            <Card 
              key={index} 
              className={`border-none overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-xl transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`h-3 bg-gradient-to-r ${point.color}`}></div>
              <div className="p-8">
                <div className="inline-flex p-4 rounded-full mb-6 bg-[#F2C858]/20 text-[#1A5F35] shadow-md">
                  {point.icon}
                </div>
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-[#0D3C21]">{point.title}</h3>
                  <p className="text-lg text-[#0D3C21]/70 leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: point.description }}></p>
                  <div className="flex items-start mt-6 border-t border-gray-100 pt-4">
                    <Check className="text-[#1A5F35] h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium text-[#0D3C21]/90">{point.solution}</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className={`mb-12 text-center max-w-2xl mx-auto transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-sm uppercase tracking-wider text-[#0D3C21]/60 font-medium mb-4">Trusted by 30+ motherhood brands</p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <span className="bg-[#F2C858]/30 px-4 py-2 rounded-full text-sm font-medium text-[#0D3C21]">Baby Essentials Co.</span>
            <span className="bg-[#1A5F35]/20 px-4 py-2 rounded-full text-sm font-medium text-[#0D3C21]">MomLife Apparel</span>
            <span className="bg-[#F2C858]/30 px-4 py-2 rounded-full text-sm font-medium text-[#0D3C21]">Tiny Treasures</span>
            <span className="bg-[#1A5F35]/20 px-4 py-2 rounded-full text-sm font-medium text-[#0D3C21]">Mother's Helper</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center max-w-2xl mx-auto mt-12 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl font-medium text-[#0D3C21] mb-8">
            Ready to overcome these challenges and <span className="font-semibold text-[#1A5F35]">connect authentically</span> with your audience?
          </p>
          <Button 
            asChild 
            size="lg" 
            className="relative bg-[#F2C858] hover:bg-[#F2C858]/90 text-[#0D3C21]
              font-semibold text-lg rounded-full px-10 py-7
              shadow-[0_8px_20px_-3px_rgba(242,200,88,0.6),0_2px_3px_-2px_rgba(0,0,0,0.1)]
              hover:shadow-[0_10px_25px_-3px_rgba(242,200,88,0.7),0_4px_6px_-2px_rgba(0,0,0,0.05)]
              transition-all duration-300 overflow-hidden group"
          >
            <Link href="#services" className="flex items-center gap-3">
              <span className="relative z-10">See How We Solve These Challenges</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-[#0D3C21]/60">
            No obligation consultation • 24-hour response time
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints; 