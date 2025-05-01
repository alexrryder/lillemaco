"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock, CheckCircle, Users } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="book-call" className="py-20 md:py-32 bg-gradient-to-r from-peach to-coral/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">Ready to Transform Your Motherhood Brand's Social Media?</h2>
          <p className="text-lg mb-8 text-charcoal/80 max-w-2xl mx-auto">
            Book your free 30-minute Clarity Call today
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 bg-lavender/10 p-2 rounded-full text-lavender">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">30-Minute Strategy Session</h3>
                  <p className="text-charcoal/70">No obligation, just valuable insights for your brand</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-coral/10 p-2 rounded-full text-coral">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Personalized Recommendations</h3>
                  <p className="text-charcoal/70">Get actionable advice tailored to your brand</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-sage/10 p-2 rounded-full text-sage">
                  <Users className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Meet Your Strategist</h3>
                  <p className="text-charcoal/70">Connect with the expert who will handle your account</p>
                </div>
              </div>
              
              <p className="text-sm text-charcoal/60 mt-8 italic">
                Limited spots available each month. We maintain a small client roster to ensure quality service.
              </p>
            </div>
          </div>
          
          <Card className="border-none shadow-xl rounded-xl">
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
              <Button className="w-full bg-lavender hover:bg-lavender/90 text-white rounded-full">Schedule My Free Call</Button>
            </CardFooter>
          </Card>
        </div>
        <p className="text-center text-sm text-charcoal/60 mt-6">
          Your information is secure and will never be shared. By booking a call, you agree to our privacy policy.
        </p>
      </div>
    </section>
  );
};

export default CallToAction; 