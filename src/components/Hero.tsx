"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useEffect, useState } from "react";

const PhoneMockup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-[280px] h-[580px] bg-white rounded-[40px] shadow-xl overflow-hidden border-8 border-charcoal/10">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-6 bg-black rounded-b-xl z-20"></div>
      {/* Screen */}
      <div className="w-full h-full relative overflow-hidden bg-black rounded-[32px]">
        {children}
      </div>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-peach relative overflow-hidden">
      {/* Abstract decorative shapes */}
      <div className="absolute top-0 right-0 w-[40%] h-[70%] bg-coral/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-lavender/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            {/* Improved badge design */}
            <div className="inline-block mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-coral/30 to-lavender/30 rounded-full blur-sm"></div>
              <div className="relative bg-white/90 px-5 py-3 rounded-full border border-coral/30 shadow-lg flex items-center gap-3">
                <Badge variant="secondary" className="bg-coral/20 text-coral font-semibold rounded-full px-4 py-1.5 text-sm shadow-sm">
                  New
                </Badge>
                <span className="text-sm text-charcoal/90 font-medium">Social media strategy for mom brands</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
              Social Media <br />
              <span className="relative inline-block">
                <span className="relative z-10">Expertise</span>
                {/* Animated marker-style underline */}
                <span 
                  className={`absolute bottom-0 left-0 h-6 bg-coral/40 -z-0 rounded-sm ${isVisible ? 'animate-draw-marker' : 'w-0'}`}
                  style={{ 
                    clipPath: 'polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)',
                    transform: 'skew(-2deg)'
                  }}
                ></span>
              </span> for <br />
              {/* Make "Mom-Focused Brands" stand out */}
              <span className="relative inline-block text-coral bg-gradient-to-r from-coral to-lavender bg-clip-text text-transparent drop-shadow-sm">
                Mom-Focused Brands
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-charcoal/80 max-w-xl mx-auto md:mx-0">
              Strategy + Execution that speaks to mothers authentically. Transform your brand's connection with the motherhood community.
            </p>
            
            <div className="flex flex-col items-center md:items-start gap-6">
              {/* Larger, more prominent button with enhanced depth */}
              <Button 
                asChild 
                size="lg" 
                className="relative bg-gradient-to-r from-coral to-coral/90 hover:from-coral hover:to-coral text-white 
                  font-semibold text-xl rounded-full px-10 py-8 
                  shadow-[0_8px_20px_-3px_rgba(255,138,91,0.6),0_2px_3px_-2px_rgba(0,0,0,0.1)] 
                  hover:shadow-[0_10px_25px_-3px_rgba(255,138,91,0.7),0_4px_6px_-2px_rgba(0,0,0,0.05)]
                  transition-all duration-300 overflow-hidden group border border-white/20"
              >
                <Link href="#book-call" className="flex items-center gap-2">
                  {/* Button glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-full"></span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-coral/20 to-coral/5 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span>
                  <span className="relative z-10">Book Your Clarity Call</span>
                </Link>
              </Button>
              
              {/* "Trusted by..." text moved below button */}
              <div className="text-center md:text-left">
                <p className="text-sm font-medium text-charcoal/70 mb-1">Trusted by 30+ motherhood brands across</p>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="inline-flex items-center gap-1 bg-white/30 px-3 py-1 rounded-full shadow-sm">
                    <span className="text-lg">🇦🇺</span> 
                    <span className="text-sm font-medium">Australia</span>
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white/30 px-3 py-1 rounded-full shadow-sm">
                    <span className="text-lg">🇸🇬</span> 
                    <span className="text-sm font-medium">Singapore</span>
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white/30 px-3 py-1 rounded-full shadow-sm">
                    <span className="text-lg">🇪🇺</span> 
                    <span className="text-sm font-medium">Europe</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
            <div className="relative flex">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-lavender/30 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-coral/30 rounded-full"></div>
              
              {/* Main phone */}
              <div className="relative z-20">
                <PhoneMockup>
                  <div className="w-full h-full bg-gradient-to-br from-coral/20 via-lavender/30 to-sage/20 flex items-center justify-center">
                    <span className="text-lg font-medium text-white/70">Video Demo</span>
                  </div>
                </PhoneMockup>
              </div>
              
              {/* Second phone (partially visible) */}
              <div className="absolute -right-20 top-10 z-10 scale-90 opacity-80 rotate-6">
                <PhoneMockup>
                  <div className="w-full h-full bg-gradient-to-tr from-sage/30 via-coral/20 to-lavender/20 flex items-center justify-center">
                    <span className="text-lg font-medium text-white/70">Before/After</span>
                  </div>
                </PhoneMockup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;