"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 