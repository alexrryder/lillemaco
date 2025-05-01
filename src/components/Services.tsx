"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, Video, Calendar, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Social Media Strategy",
      description: "Custom content strategies that speak directly to moms. We help you build community, foster engagement, and grow your audience authentically.",
      icon: <MessageSquare className="h-10 w-10" />,
      color: "bg-coral/10 text-coral"
    },
    {
      title: "Video Editing",
      description: "Professional video editing that transforms your raw footage into polished, emotional content that resonates with your target audience.",
      icon: <Video className="h-10 w-10" />,
      color: "bg-lavender/10 text-lavender"
    },
    {
      title: "Content Calendar",
      description: "Never wonder what to post with our detailed content calendars. We plan your content strategy weeks in advance, so you're always prepared.",
      icon: <Calendar className="h-10 w-10" />,
      color: "bg-sage/10 text-sage"
    },
    {
      title: "Analytics & Insights",
      description: "Data-driven decisions that boost your ROI. We analyze what's working and optimize your strategy for better engagement and conversion.",
      icon: <BarChart3 className="h-10 w-10" />,
      color: "bg-coral/10 text-coral"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">What We Offer</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Specialized social media marketing services designed to help mom-focused brands grow their audience and connect authentically.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow rounded-xl">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg mb-4 ${service.color}`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl md:text-2xl font-display">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-charcoal/80">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 