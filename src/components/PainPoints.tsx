"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Compass, Video } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      icon: <Clock className="h-10 w-10" />,
      title: "No Time for Content Creation",
      description: "Balancing business operations with consistent social media presence feels impossible."
    },
    {
      icon: <Compass className="h-10 w-10" />,
      title: "Unclear What Resonates",
      description: "You know mothers are your audience, but struggle to create content that truly connects."
    },
    {
      icon: <Video className="h-10 w-10" />,
      title: "Reels & TikToks Are Overwhelming",
      description: "Short-form video drives growth, but requires expertise you don't have in-house."
    }
  ];

  return (
    <section id="pain-points" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex mb-4 bg-peach/60 px-4 py-2 rounded-full text-coral font-medium text-sm">
            The struggle is real
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Struggling to <span className="relative inline-block">
              <span className="relative z-10">Connect</span>
              <span className="absolute bottom-1 left-0 w-full h-4 bg-coral/20 -z-0"></span>
            </span> with Your Motherhood Audience?
          </h2>
          <p className="text-xl text-charcoal/70">
            We understand the unique challenges of marketing to the motherhood community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="border-none overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all rounded-xl">
              <div className="h-2 bg-gradient-to-r from-coral to-lavender"></div>
              <div className="p-8">
                <div className="inline-flex p-4 rounded-xl mb-6 bg-peach/50 text-coral">
                  {point.icon}
                </div>
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
                  <p className="text-lg text-charcoal/70">{point.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints; 