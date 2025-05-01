"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock, CheckCircle, Users, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section id="book-call" className="py-20 md:py-32 overflow-hidden relative">
      {/* Balinese-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D3C21] to-[#1A5F35]/80 overflow-hidden">
        {/* Rice terraces pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/rice-terraces.svg')] bg-repeat bg-center"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-15 w-32 h-32 bg-[url('/images/balinese-ornament.svg')] bg-no-repeat bg-contain"></div>
        <div className="absolute bottom-20 right-10 opacity-15 w-24 h-24 rotate-90 bg-[url('/images/balinese-ornament.svg')] bg-no-repeat bg-contain"></div>
        
        {/* Light rays */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#FFD36E]/5 mix-blend-overlay"></div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute bottom-10 md:bottom-20 left-5 md:left-20 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, 0, -10, 0],
          }}
          style={{ transformOrigin: "center bottom" }}
        >
          🌺
        </motion.div>
        
        <motion.div 
          className="absolute top-1/4 right-10 md:right-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Leaf size={64} className="text-[#F2C858]" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Balinese decorative border */}
        <div className="absolute -inset-4 md:-inset-12 border-2 border-[#F2C858]/10 rounded-3xl hidden md:block"></div>
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
            Ready to Transform Your <span className="text-[#F2C858]">Motherhood Brand</span>?
          </h2>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Book your free 30-minute Clarity Call with Ikke today
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="flex items-start">
                <div className="mt-1 bg-[#F2C858]/20 p-2 rounded-full text-[#F2C858]">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-white">30-Minute Strategy Session</h3>
                  <p className="text-white/70">No obligation, just valuable insights for your brand</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-white/20 p-2 rounded-full text-white">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-white">Personalized Recommendations</h3>
                  <p className="text-white/70">Get actionable advice tailored to your brand</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-[#F2C858]/20 p-2 rounded-full text-[#F2C858]">
                  <Users className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-white">Meet Ikke, Your Strategist</h3>
                  <p className="text-white/70">Connect with the expert who will handle your account</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-6 p-2 border border-[#F2C858]/30 rounded-xl">
                <p className="text-sm text-white/80 italic flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#F2C858]" />
                  <span>Limited spots available each month from our Bali studio</span>
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="backdrop-blur-md bg-white/90 border-none shadow-xl rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F2C858] via-[#F2C858]/50 to-[#F2C858]"></div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-display">Schedule Your Clarity Call</CardTitle>
                <CardDescription>Fill out this form and we'll be in touch within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name
                      </label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company name
                    </label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="target-audience" className="text-sm font-medium">
                      Target audience
                    </label>
                    <Input id="target-audience" placeholder="Describe your ideal customer" />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#1A5F35] hover:bg-[#0D3C21] text-white rounded-xl py-6 relative overflow-hidden group">
                  <span className="relative z-10">Schedule My Free Call</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#F2C858]/20 via-transparent to-[#F2C858]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
        <p className="text-center text-sm text-white/70 mt-6">
          Your information is secure and will never be shared. By booking a call, you agree to our privacy policy.
        </p>
      </div>
    </section>
  );
};

export default CallToAction; 