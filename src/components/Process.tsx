"use client";

import { Search, FileText, PenTool, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Process = () => {
  const steps = [
    {
      number: "1",
      icon: <Search className="h-6 w-6" />,
      title: "Clarity Call",
      description: "We learn about your brand, audience, and goals.",
      color: "bg-charcoal text-white"
    },
    {
      number: "2",
      icon: <FileText className="h-6 w-6" />,
      title: "Custom Strategy",
      description: "We develop your tailored motherhood content approach.",
      color: "bg-lavender text-white"
    },
    {
      number: "3",
      icon: <PenTool className="h-6 w-6" />,
      title: "Content Development",
      description: "We deliver your monthly content plan and edits.",
      color: "bg-coral text-white"
    },
    {
      number: "4",
      icon: <BarChart className="h-6 w-6" />,
      title: "Measure & Refine",
      description: "We analyze performance and optimize strategy.",
      color: "bg-sage text-white"
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-peach">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">Our Streamlined Process</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            From sign-up to first deliverables in just 2 weeks
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all relative"
              >
                <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-charcoal/80 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white rounded-full px-6 py-2">
            <Link href="#book-call">Start Your Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process; 