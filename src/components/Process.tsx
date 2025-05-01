"use client";

import { Search, FileText, PenTool, BarChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    {
      number: "1",
      icon: <Search className="h-6 w-6" />,
      title: "Discovery Call",
      description: "We learn about your motherhood brand, audience, and goals through a focused strategy session.",
      color: "bg-[#1A5F35] text-white"
    },
    {
      number: "2",
      icon: <FileText className="h-6 w-6" />,
      title: "Custom Strategy",
      description: "We develop your tailored content approach specifically designed to resonate with mothers.",
      color: "bg-[#F2C858] text-[#0D3C21]"
    },
    {
      number: "3",
      icon: <PenTool className="h-6 w-6" />,
      title: "Content Creation",
      description: "We deliver your monthly content plan and professionally edited videos within 48 hours.",
      color: "bg-[#1A5F35] text-white"
    },
    {
      number: "4",
      icon: <BarChart className="h-6 w-6" />,
      title: "Measure & Optimize",
      description: "We analyze what content resonates with mothers and refine our approach for continuous growth.",
      color: "bg-[#F2C858] text-[#0D3C21]"
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-[#1A5F35]/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-[#F2C858]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex mb-5 bg-[#1A5F35]/10 px-6 py-2.5 rounded-full text-[#1A5F35] font-semibold text-sm shadow-sm">
            Our proven approach
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-[#0D3C21]">
            From <span className="text-[#F2C858]">Strategy</span> to <span className="text-[#1A5F35]">Success</span>
          </h2>
          <p className="text-lg text-[#0D3C21]/80 max-w-2xl mx-auto">
            A streamlined four-step process designed to transform your motherhood brand's social media presence
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-[#F2C858]/30 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all relative border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`${step.color} w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-5 shadow-md`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0D3C21]">{step.title}</h3>
                <p className="text-[#0D3C21]/80">{step.description}</p>
                <div className="absolute top-6 right-6 text-[#F2C858] font-bold text-4xl opacity-40">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-[#0D3C21]/80 mb-6 max-w-2xl mx-auto">
            Ready to transform your brand's connection with motherhood audiences? Our proven process delivers results in as little as two weeks.
          </p>
          <Button 
            asChild 
            className="bg-[#F2C858] hover:bg-[#F2C858]/90 text-[#0D3C21] rounded-full px-8 py-6 font-medium text-lg shadow-md"
          >
            <Link href="#book-call" className="flex items-center gap-2">
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process; 