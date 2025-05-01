"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden relative">
      {/* Balinese-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A5F35] to-[#0D3C21] overflow-hidden">
        {/* Rice terraces pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/rice-terraces.svg')] bg-repeat bg-center"></div>
        
        {/* Temple silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-[url('/images/bali-temple-silhouette.png')] bg-repeat-x bg-bottom opacity-20"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 opacity-20 w-32 h-32 md:w-48 md:h-48 bg-[url('/images/balinese-ornament.svg')] bg-no-repeat bg-contain"></div>
        <div className="absolute bottom-10 left-10 opacity-20 w-32 h-32 rotate-180 bg-[url('/images/balinese-ornament.svg')] bg-no-repeat bg-contain"></div>
      </div>
      
      {/* Animated jungle elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top foliage */}
        <div className="absolute -top-5 inset-x-0 h-40 bg-[url('/images/tropical-foliage-top.png')] bg-repeat-x bg-top"></div>
        
        {/* Side palms */}
        <div className="absolute top-1/4 -left-20 w-64 h-96 bg-[url('/images/palm-left.png')] bg-no-repeat bg-contain opacity-70"></div>
        <div className="absolute top-1/3 -right-20 w-64 h-96 bg-[url('/images/palm-right.png')] bg-no-repeat bg-contain opacity-70"></div>
        
        {/* Animated elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4 text-4xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
          }}
        >
          🦜
        </motion.div>
        
        <motion.div 
          className="absolute top-2/3 left-1/5 text-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -30, -10, -40, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
          }}
        >
          🐒
        </motion.div>
        
        {/* Light rays */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#FFD36E]/10 mix-blend-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Balinese inspired decorative border */}
        <div className="absolute inset-0 border-4 border-[#F2C858]/20 rounded-3xl m-4 hidden md:block"></div>
        <div className="absolute inset-0 border-[1px] border-[#F2C858]/30 rounded-3xl m-8 hidden md:block"></div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text content */}
            <div className="order-2 md:order-1 text-white">
              <motion.div 
                className="inline-flex mb-6 bg-[#F2C858]/20 px-4 py-2 rounded-full text-white font-medium text-sm border border-[#F2C858]/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Meet the founder
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                From the <span className="text-[#F2C858]">tropical paradise</span> of Bali
              </motion.h2>
              
              <motion.p 
                className="text-xl text-white/90 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Hi, I'm Ikke, founder and lead strategist at Lille Ma & Co. Based in the lush jungles and serene beaches of Bali, 
                I bring the island's creative energy and tranquil wisdom to motherhood-focused brands.
              </motion.p>
              
              <motion.p 
                className="text-lg text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                After becoming a mother myself, I discovered a disconnect between brand marketing and authentic motherhood experiences. 
                Surrounded by Bali's nurturing environment and spiritual traditions, I created Lille Ma & Co to help brands forge 
                meaningful connections with mothers around the world.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-[#F2C858] hover:bg-[#F2C858]/90 text-[#0D3C21] text-lg font-semibold rounded-full px-8 py-6 shadow-lg shadow-black/20 transition-all relative overflow-hidden group"
                >
                  <Link href="#book-call" className="flex items-center gap-2">
                    <span className="relative z-10">Schedule a Call With Me</span>
                    <Sparkles className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            {/* Founder image */}
            <div className="order-1 md:order-2 flex justify-center">
              {/* Decorative frame inspired by Balinese carvings */}
              <div className="relative">
                <motion.div 
                  className="absolute -inset-3 md:-inset-6 bg-[#F2C858]/20 rounded-full rotate-45 z-0"
                  animate={{ rotate: 45, scale: [1, 1.05, 1] }}
                  transition={{ duration: 10, repeat: Infinity }}
                ></motion.div>
                
                <motion.div 
                  className="absolute -inset-3 md:-inset-6 border-4 border-[#F2C858]/30 rounded-full rotate-12 z-0"
                  animate={{ rotate: [12, 45, 12] }}
                  transition={{ duration: 20, repeat: Infinity }}
                ></motion.div>
                
                <motion.div 
                  className="absolute -inset-4 md:-inset-8 border-[1px] border-white/20 rounded-full blur-sm z-0"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 15, repeat: Infinity }}
                ></motion.div>
                
                {/* Profile image container */}
                <motion.div 
                  className="relative z-10 w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-full border-8 border-white/20 shadow-2xl">
                    {/* Replace with actual founder image when available */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A5F35]/80 to-[#0D3C21] flex items-center justify-center">
                      <span className="text-3xl font-medium text-white">Ikke</span>
                    </div>
                    
                    {/* Tropical flower overlay */}
                    <div className="absolute -top-5 -right-5 w-24 h-24 bg-[url('/images/frangipani-flower.png')] bg-no-repeat bg-contain"></div>
                    
                    {/* Location indicator */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <motion.div 
                        className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <span className="text-sm font-medium text-white flex items-center gap-1">
                          🇮🇩 Bali, Indonesia
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 