"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-sage/90 to-sage text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="inline-flex mb-6 bg-white/20 px-4 py-2 rounded-full text-white font-medium text-sm">
              Meet the founder
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              The <span className="relative inline-block">
                <span className="relative z-10">creative secret</span>
                <span className="absolute bottom-1 left-0 w-full h-4 bg-white/20 -z-0"></span>
              </span> behind mom-focused brands
            </h2>
            
            <p className="text-xl text-white/90 mb-6">
              Hi, I'm Emma, founder and lead strategist at Lille Ma & Co. With over a decade of experience in digital marketing and a background in maternal psychology, I've helped dozens of motherhood-focused brands create authentic connections with their audiences.
            </p>
            
            <p className="text-lg text-white/90 mb-8">
              After becoming a mother myself in 2018, I noticed a significant gap between how brands marketed to mothers and what actually resonated with us. This insight led me to create Lille Ma & Co, named after my daughter.
            </p>
            
            <Button asChild size="lg" className="bg-white text-sage hover:bg-white/90 text-lg rounded-full px-8 py-6 shadow-lg transition-all">
              <Link href="#book-call">Schedule a Call With Me</Link>
            </Button>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-lavender/20 rounded-full blur-xl"></div>
            <div className="relative z-10 w-72 h-72 overflow-hidden">
              <div className="w-full h-full rounded-[2rem] overflow-hidden border-8 border-white/30 shadow-2xl flex items-center justify-center bg-white/20">
                <span className="text-xl font-medium text-white/60">Founder Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 