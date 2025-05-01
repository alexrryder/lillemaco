"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly will we see results?",
      answer: "Most clients begin to see improvements in engagement within the first month. For significant follower growth and conversion increases, we typically see the best results after 2-3 months of consistent strategy implementation. We'll provide monthly analytics to track your progress."
    },
    {
      question: "Do you handle community management and comments?",
      answer: "Our primary focus is on strategy and content creation. While we provide guidance on community engagement best practices, direct community management (responding to comments/messages) is not included in our standard packages. However, we can discuss custom solutions if this is a need for your brand."
    },
    {
      question: "What makes your service different from a general social media agency?",
      answer: "Unlike general agencies, we exclusively work with brands targeting the motherhood market. This specialization means we have deep insights into the specific needs, language, and content that resonates with mothers at various stages. Our strategies are built on real-world understanding of the motherhood journey."
    },
    {
      question: "How do we provide you with video footage?",
      answer: "We've created a streamlined process for clients to share raw footage through our secure cloud platform. After signing up, you'll receive detailed guidelines on filming tips, recommended shots, and a content collection schedule to ensure we always have fresh material to work with."
    },
    {
      question: "Can we cancel or change our package?",
      answer: "Yes, all our services operate on a month-to-month basis with a simple 30-day notice period for cancellation. You can upgrade or downgrade your package at the end of any billing cycle. We don't believe in locking clients into long-term contracts."
    },
    {
      question: "Do you work with brands outside Australia/NZ/Singapore/Europe?",
      answer: "While we primarily serve clients in Australia, New Zealand, Singapore, and Western Europe due to cultural alignment and time zone compatibility, we do consider partnerships with motherhood brands in other regions on a case-by-case basis. Contact us to discuss your specific situation."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#1A5F35]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#F2C858]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex mb-5 bg-[#1A5F35]/10 px-6 py-2.5 rounded-full text-[#1A5F35] font-semibold text-sm shadow-sm">
            Questions answered
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-[#0D3C21]">
            Frequently Asked <span className="text-[#F2C858]">Questions</span>
          </h2>
          <p className="text-lg text-[#0D3C21]/80 max-w-2xl mx-auto">
            Everything you need to know about transforming your brand's connection with mothers
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#F2C858]/10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-[#1A5F35]/10 last:border-0">
                  <AccordionTrigger className="text-left text-lg font-medium text-[#0D3C21] hover:text-[#1A5F35] py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#0D3C21]/80 px-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-[#0D3C21]/80 mb-6">
            Still have questions? We're here to help you connect with your motherhood audience.
          </p>
          <Button 
            asChild 
            className="bg-[#1A5F35] hover:bg-[#0D3C21] text-white rounded-full px-6 py-5 font-medium"
          >
            <Link href="#book-call" className="flex items-center gap-2">
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 