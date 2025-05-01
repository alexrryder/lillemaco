"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Clock, 
  CheckCircle, 
  User, 
  Sparkles, 
  CalendarDays, 
  ArrowRight, 
  ShieldCheck,
  Star,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section id="book-call" className="py-20 md:py-32 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D3C21] to-[#1A5F35] overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F2C858_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F2C858]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 text-4xl hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          style={{ transformOrigin: "center bottom" }}
        >
          ✨
        </motion.div>
        
        <motion.div 
          className="absolute bottom-40 right-20 text-4xl hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, -5, 0, 5, 0],
          }}
          style={{ transformOrigin: "center bottom" }}
        >
          ✨
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Gold border */}
        <div className="absolute -inset-4 md:-inset-12 border-2 border-[#F2C858]/20 rounded-3xl hidden md:block"></div>
        
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex mb-5 bg-[#F2C858]/20 px-6 py-2.5 rounded-full text-[#F2C858] font-semibold text-sm shadow-sm">
            Let's work together
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white">
            Transform Your <span className="text-[#F2C858]">Mom-Focused</span> Brand Today
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Book your complimentary 30-minute strategy call and discover how we can help your brand connect authentically with mothers
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left column - Value proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Top section - What you'll get */}
            <div className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">During Your Free Strategy Call:</h3>
              
              <div className="flex items-start">
                <div className="mt-1 bg-[#F2C858]/20 p-2 rounded-full text-[#F2C858]">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-white">Customized Strategy Insights</h4>
                  <p className="text-white/70">Get tailored recommendations specific to your motherhood brand</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-[#F2C858]/20 p-2 rounded-full text-[#F2C858]">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-white">Content Gap Analysis</h4>
                  <p className="text-white/70">Uncover hidden opportunities in your current social approach</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-[#F2C858]/20 p-2 rounded-full text-[#F2C858]">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-white">90-Day Action Plan</h4>
                  <p className="text-white/70">A clear roadmap to elevate your social media presence</p>
                </div>
              </div>
            </div>
            
            {/* Meet the strategist */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#F2C858]/50">
                    <Image 
                      src="/images/strategist.jpg" 
                      alt="Social Media Strategist" 
                      width={80} 
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#F2C858] text-[#0D3C21] p-1 rounded-full">
                    <Star className="h-4 w-4" fill="#0D3C21" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white">Meet Ikke, Your Strategist</h3>
                  <p className="text-white/70 text-sm">Motherhood content specialist with 8+ years experience crafting social strategies for mom-focused brands</p>
                </div>
              </div>
            </div>
            
            {/* Social proof */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center border border-white/10">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-[#F2C858]" fill="#F2C858" />
                ))}
              </div>
              <p className="text-white/90 text-center italic font-light">
                "Lille Ma & Co transformed our approach to reaching mothers. Our engagement increased by 215% in just 3 months."
              </p>
              <div className="mt-4 text-sm text-white/70">
                — Sarah Williams, Founder at Mother's Little Helper
              </div>
              
              <div className="w-full border-t border-white/10 mt-6 pt-6 flex justify-center">
                <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full ml-2">
                  <span className="text-sm">🇸🇬</span>
                  <span className="text-xs font-medium text-white/80">Singapore</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full ml-2">
                  <span className="text-sm">🇦🇺</span>
                  <span className="text-xs font-medium text-white/80">Australia</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full ml-2">
                  <span className="text-sm">🇳🇿</span>
                  <span className="text-xs font-medium text-white/80">New Zealand</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="backdrop-blur-md bg-white/95 border-none shadow-2xl rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F2C858] via-[#F2C858]/50 to-[#F2C858]"></div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl font-display text-[#0D3C21]">Book Your Free Strategy Call</CardTitle>
                  <div className="hidden md:block bg-[#1A5F35]/10 px-3 py-1 rounded-full text-xs font-semibold text-[#1A5F35]">
                    30 min • No obligation
                  </div>
                </div>
                <CardDescription className="text-[#0D3C21]/70">
                  Complete this form and we'll contact you within 24 hours to schedule your call.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-[#0D3C21]">
                        First Name *
                      </label>
                      <Input 
                        id="first-name" 
                        placeholder="Your first name" 
                        className="border-[#1A5F35]/20 focus:border-[#1A5F35] focus:ring-[#1A5F35]/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-[#0D3C21]">
                        Last Name *
                      </label>
                      <Input 
                        id="last-name" 
                        placeholder="Your last name" 
                        className="border-[#1A5F35]/20 focus:border-[#1A5F35] focus:ring-[#1A5F35]/20"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#0D3C21]">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="you@company.com" 
                      className="border-[#1A5F35]/20 focus:border-[#1A5F35] focus:ring-[#1A5F35]/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-[#0D3C21]">
                      Company Name *
                    </label>
                    <Input 
                      id="company" 
                      placeholder="Your brand or company name" 
                      className="border-[#1A5F35]/20 focus:border-[#1A5F35] focus:ring-[#1A5F35]/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="challenges" className="text-sm font-medium text-[#0D3C21]">
                      What are your biggest social media challenges?
                    </label>
                    <Textarea 
                      id="challenges" 
                      placeholder="Tell us about the specific challenges you'd like to discuss on our call"
                      className="border-[#1A5F35]/20 focus:border-[#1A5F35] focus:ring-[#1A5F35]/20 min-h-[80px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="audience" className="text-sm font-medium text-[#0D3C21]">
                      Describe your ideal mom customer
                    </label>
                    <Input 
                      id="audience" 
                      placeholder="e.g., First-time moms, working mothers, etc." 
                      className="border-[#1A5F35]/20 focus:border-[#1A5F35] focus:ring-[#1A5F35]/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0D3C21]">
                      How soon are you looking to get started? *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="asap" name="timeline" className="text-[#1A5F35]" required />
                        <label htmlFor="asap" className="text-sm text-[#0D3C21]/80">ASAP</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="month" name="timeline" className="text-[#1A5F35]" />
                        <label htmlFor="month" className="text-sm text-[#0D3C21]/80">Within a month</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="exploring" name="timeline" className="text-[#1A5F35]" />
                        <label htmlFor="exploring" className="text-sm text-[#0D3C21]/80">Just exploring</label>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              
              <CardFooter className="flex flex-col">
                <Button 
                  className="w-full bg-[#F2C858] hover:bg-[#F2C858]/90 text-[#0D3C21] font-bold rounded-xl py-6 text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book My Free Strategy Call
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#F2C858]/40 via-transparent to-[#F2C858]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                </Button>
                
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#0D3C21]/60">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Your information is secure and will never be shared</span>
                </div>
              </CardFooter>
            </Card>
            
            <div className="text-center mt-4 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4 text-[#F2C858]" />
                <span className="text-sm text-white/90">Limited to 5 free strategy calls per week</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 