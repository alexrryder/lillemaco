"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Linkedin, Pin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", url: "#", icon: <Instagram className="h-5 w-5" /> },
    { name: "Facebook", url: "#", icon: <Facebook className="h-5 w-5" /> },
    { name: "LinkedIn", url: "#", icon: <Linkedin className="h-5 w-5" /> },
    { name: "Pinterest", url: "#", icon: <Pin className="h-5 w-5" /> }
  ];

  const navGroups = [
    {
      title: "Services",
      links: [
        { name: "Strategy", url: "#services" },
        { name: "Content Creation", url: "#content" },
        { name: "Community Management", url: "#community" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", url: "#about" },
        { name: "Blog", url: "#blog" },
        { name: "Career", url: "#career" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "FAQ", url: "#faq" },
        { name: "Privacy", url: "#privacy" },
        { name: "Terms", url: "#terms" }
      ]
    }
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and newsletter */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold">
                <span className="text-coral">Lille</span> Ma & Co
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Social Media Experts for Mom-Focused Brands
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium mb-2">Join our newsletter</h3>
              <p className="text-sm text-white/70 mb-4">
                Tips & insights for marketing to mothers
              </p>
              <div className="flex gap-2">
                <Input className="bg-white/10 border-white/20 text-white" placeholder="Your email" />
                <Button className="bg-coral hover:bg-coral/90">Subscribe</Button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-7 md:col-start-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {navGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-medium mb-4">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.links.map((link) => (
                      <li key={link.name}>
                        <Link href={link.url} className="text-white/70 hover:text-coral transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Lille Ma & Co. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#privacy" className="text-sm text-white/60 hover:text-white">Privacy Policy</Link>
            <Link href="#terms" className="text-sm text-white/60 hover:text-white">Terms of Service</Link>
            <Link href="#cookies" className="text-sm text-white/60 hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 