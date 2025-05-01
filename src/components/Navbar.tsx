"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

interface NavbarProps {
  scrolled?: boolean;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#pain-points", label: "Challenges" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#process", label: "Process" },
    { href: "#about", label: "About" },
  ];

  return (
    <nav className={`py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="#" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Lille Ma & Co Logo" 
              width={220} 
              height={220} 
              priority
              className="h-28 w-auto py-2"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild className={cn(
                    navigationMenuTriggerStyle(),
                    "text-charcoal hover:text-coral bg-transparent hover:bg-transparent"
                  )}>
                    <Link href={item.href}>
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Button asChild className="bg-coral hover:bg-coral/90 rounded-full ml-2">
                  <Link href="#book-call">Book a Clarity Call</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu using Sheet */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-charcoal">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-6 mb-8">
                <Image 
                  src="/logo.png" 
                  alt="Lille Ma & Co Logo" 
                  width={180} 
                  height={180} 
                  priority
                  className="h-24 w-auto"
                />
              </div>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="text-charcoal hover:text-coral px-2 py-2 rounded-md"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="bg-coral hover:bg-coral/90 rounded-full w-full mt-4">
                  <Link href="#book-call">Book a Clarity Call</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 