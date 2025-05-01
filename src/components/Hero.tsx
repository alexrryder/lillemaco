"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Video, 
  Instagram, 
  Calendar, 
  SunMedium, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  BarChart,
  Globe,
  MousePointer,
  Heart,
  Award,
  Zap,
  Users,
  Clock,
  ThumbsUp,
  Target
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Social proof counter animation component
const StatCounter = ({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-col items-center"
    >
      <div className="text-[#F2C858] mb-1">{icon}</div>
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</h3>
      <p className="text-xs text-white/70">{label}</p>
    </motion.div>
  );
};

// Client logos with hover effect
const ClientLogos = () => {
  const clients = [
    { id: 1, name: "MomTech", letter: "M" },
    { id: 2, name: "BabyBrands", letter: "B" },
    { id: 3, name: "NurtureCo", letter: "N" },
    { id: 4, name: "MamaLife", letter: "ML" },
    { id: 5, name: "ParentPlus", letter: "P" },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="flex items-center justify-center gap-3 flex-wrap"
    >
      <span className="text-xs text-white/70 mr-1">Trusted by:</span>
      {clients.map((client, index) => (
        <motion.div
          key={client.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 0 15px rgba(242, 200, 88, 0.5)" 
          }}
          className="h-8 w-8 rounded-full bg-black/30 border border-[#F2C858]/30 flex items-center justify-center cursor-pointer group"
        >
          <span className="text-xs font-semibold text-white/80 group-hover:text-[#F2C858] transition-colors">
            {client.letter}
          </span>
          <motion.div
            className="absolute whitespace-nowrap text-xs bg-[#0D3C21] text-[#F2C858] px-2 py-1 rounded pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: -30 }}
            transition={{ duration: 0.2 }}
          >
            {client.name}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Enhanced feature badge component with pulse effect
const FeatureBadge = () => {
  // Animation sequence for the notification dot
  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  // Hover animation for the badge
  const hoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(242, 200, 88, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover="hover"
      variants={hoverVariants}
      transition={{ duration: 0.5 }}
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F2C858] bg-white/95 shadow-lg mb-8 max-w-fit cursor-pointer"
    >
      <motion.div
        variants={pulseVariants}
        animate="pulse"
        className="absolute -inset-1 rounded-full bg-[#F2C858]/20 -z-10"
      />
      <div className="flex items-center justify-center bg-[#F2C858] rounded-sm p-1.5">
        <Video className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-[9px] font-semibold text-[#1A5F35] uppercase">Just launched</span>
        <span className="text-xs font-bold text-[#0D3C21]">Short-form video editing service</span>
      </div>
      <motion.div 
        variants={pulseVariants}
        animate="pulse"
        className="absolute -top-1 -right-1 bg-[#F2C858] text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full"
      >
        +
      </motion.div>
      
      {/* Tooltip that appears on hover */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        whileHover={{ opacity: 1, y: -5, scale: 1 }}
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-[#0D3C21] text-white text-xs px-3 py-2 rounded shadow-lg whitespace-nowrap z-20 pointer-events-none"
      >
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#0D3C21] rotate-45"></div>
        Click to learn more about our new service
      </motion.div>
    </motion.div>
  );
};

// Enhanced testimonial ticker animation
const TestimonialTicker = () => {
  const testimonials = [
    {
      quote: "Our engagement rate increased by 215% in just 8 weeks",
      author: "Sarah Johnson",
      company: "MomTech",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Finally, someone who understands how to connect with mothers authentically",
      author: "Emily Chen",
      company: "NurtureCo",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      quote: "We now have a waitlist of customers thanks to their social media strategy",
      author: "Jessica Smith",
      company: "BabyBrands",
      avatar: "https://randomuser.me/api/portraits/women/17.jpg"
    },
    {
      quote: "Their focus on motherhood brands made all the difference for us",
      author: "Michelle Torres",
      company: "MamaLife",
      avatar: "https://randomuser.me/api/portraits/women/89.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-auto overflow-hidden mt-3 mb-6 bg-black/20 backdrop-blur-sm px-5 py-3 rounded-lg border border-[#F2C858]/30">
      <div className="flex items-center gap-1 mb-1">
        {testimonials.map((_, index) => (
          <motion.div 
            key={index}
            className={`h-1 rounded-full cursor-pointer ${
              index === currentIndex ? 'w-8 bg-[#F2C858]' : 'w-2 bg-white/20'
            }`}
            animate={{
              width: index === currentIndex ? 32 : 8,
              backgroundColor: index === currentIndex ? '#F2C858' : 'rgba(255,255,255,0.2)'
            }}
            transition={{ duration: 0.3 }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="flex items-start gap-3">
            <div className="relative flex-shrink-0">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-[#F2C858]">
                <Image 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#1A5F35] rounded-full p-1">
                <Star className="w-3 h-3 text-[#F2C858] fill-[#F2C858]" />
              </div>
            </div>
            
            <div className="flex-1">
              <p className="text-sm text-white mb-1.5">
                <span className="italic font-light">"{testimonials[currentIndex].quote}"</span>
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#F2C858]">{testimonials[currentIndex].author}</p>
                  <p className="text-[10px] text-white/60">{testimonials[currentIndex].company}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#F2C858] fill-[#F2C858]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Floating element with parallax effect
const FloatingElement = ({ 
  className, 
  children,
  delayOffset = 0,
  scale = false
}: { 
  className: string, 
  children: React.ReactNode,
  delayOffset?: number,
  scale?: boolean
}) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 + delayOffset }}
  >
    <motion.div
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 5, 0, -5, 0],
        scale: scale ? [1, 1.1, 1] : [1, 1, 1]
      }}
      transition={{ 
        duration: 8 + delayOffset * 2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// Service badge with hover effect
const ServiceBadge = ({ 
  icon, 
  label,
  delay
}: { 
  icon: React.ReactNode, 
  label: string,
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="flex items-center gap-2 bg-black/20 hover:bg-black/30 backdrop-blur-sm px-3.5 py-2.5 rounded-full text-white border border-white/5 shadow-lg"
  >
    <div className="text-[#F2C858]">{icon}</div>
    <span className="text-xs font-medium whitespace-nowrap">{label}</span>
  </motion.div>
);

// Mouse-follow parallax effect
const MouseParallax = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Update mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    // Update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  // Calculate center position relative to window
  const centerX = windowSize.width / 2;
  const centerY = windowSize.height / 2;
  
  // Calculate offset from center (normalized between -1 and 1)
  const offsetX = (mousePosition.x - centerX) / centerX;
  const offsetY = (mousePosition.y - centerY) / centerY;
  
  return (
    <motion.div
      style={{
        x: offsetX * 20,
        y: offsetY * 20,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 50,
        restDelta: 0.001
      }}
    >
      {children}
    </motion.div>
  );
};

// Animated circular progress
const CircularProgress = ({ 
  percentage, 
  size = 120, 
  strokeWidth = 8,
  color = "#F2C858"
}: { 
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string; 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      initial={{ rotate: -90 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth={strokeWidth}
      />
      
      {/* Progress circle */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        strokeLinecap="round"
      />
      
      {/* Center content placeholder */}
      <foreignObject
        x={strokeWidth}
        y={strokeWidth}
        width={size - strokeWidth * 2}
        height={size - strokeWidth * 2}
      >
        <div className="h-full w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-center"
          >
            <p className="text-xl font-bold text-white">{percentage}%</p>
            <p className="text-[8px] uppercase tracking-wider text-white/70">Results</p>
          </motion.div>
        </div>
      </foreignObject>
    </motion.svg>
  );
};

// Main Hero component
const Hero = () => {
  // Typed text effect for the tagline
  const [displayText, setDisplayText] = useState("");
  const fullText = "Authentic content that truly connects";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  // Scroll animation reference
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values based on scroll position
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  // Stats data for the counter
  const stats = [
    { 
      value: "215%", 
      label: "Average Engagement Increase", 
      icon: <TrendingUp className="w-5 h-5" /> 
    },
    { 
      value: "48h", 
      label: "First Content Delivery", 
      icon: <Calendar className="w-5 h-5" /> 
    },
    { 
      value: "30+", 
      label: "Mom Brands Served", 
      icon: <BarChart className="w-5 h-5" /> 
    }
  ];
  
  // Interactive elements state
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  // Features list for interactive selection
  const features = [
    { 
      id: 1, 
      name: "Strategy", 
      icon: <Target className="w-4 h-4" />,
      description: "Tailored social media strategies for motherhood brands"
    },
    { 
      id: 2, 
      name: "Content", 
      icon: <Video className="w-4 h-4" />,
      description: "Authentic content creation that resonates with moms"
    },
    { 
      id: 3, 
      name: "Community", 
      icon: <Users className="w-4 h-4" />,
      description: "Building engaged communities of mothers and caregivers"
    },
    { 
      id: 4, 
      name: "Growth", 
      icon: <TrendingUp className="w-4 h-4" />,
      description: "Proven techniques to grow your motherhood-focused audience"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex flex-col justify-center"
    >
      {/* Background with animated gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A5F35] to-[#0D3C21]">
          {/* Enhanced pattern overlay with movement */}
          <motion.div 
            animate={{ 
              backgroundPosition: ['0px 0px', '20px 20px'] 
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#F2C858_1px,transparent_1px)] bg-[length:20px_20px]"
          ></motion.div>
        </div>
        
        {/* Enhanced top light effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(242, 200, 88, 0.4) 0%, transparent 70%)"
          }}
          className="absolute top-0 left-0 right-0 h-[40vh]"
        />
        
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      
      {/* Animated decorative elements with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement className="top-[15%] left-[8%] text-[#F2C858]/30 text-4xl" delayOffset={0.1}>
          ✿
        </FloatingElement>
        <FloatingElement className="bottom-[20%] right-[10%] text-[#F2C858]/40 text-5xl" delayOffset={0.4} scale>
          ❂
        </FloatingElement>
        <FloatingElement className="top-[25%] right-[12%] text-[#F2C858]/30 text-3xl" delayOffset={0.7}>
          <SunMedium strokeWidth={1} />
        </FloatingElement>
        <FloatingElement className="bottom-[30%] left-[12%] text-[#F2C858]/30 text-4xl" delayOffset={0.2}>
          <Sparkles strokeWidth={1} />
        </FloatingElement>
        <FloatingElement className="top-[45%] left-[25%] text-[#F2C858]/20 text-2xl" delayOffset={0.5}>
          ✺
        </FloatingElement>
        <FloatingElement className="bottom-[45%] right-[20%] text-[#F2C858]/20 text-3xl" delayOffset={0.3}>
          ✧
        </FloatingElement>
        
        {/* Add some particles effect in the background */}
        {[...Array(15)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-[#F2C858]/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Main content with scroll animation */}
      <motion.div 
        style={{ opacity: heroOpacity, y: heroY }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column: Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Main headline with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="leading-tight mb-3"
                >
                  Authentic Social Media
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="leading-tight mb-2"
                >
                  For
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-[#F2C858] relative inline-block leading-tight"
                >
                  Mom-Focused
                  <motion.div 
                    className="absolute bottom-1 left-0 h-2 bg-[#F2C858]/20 w-full" 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="leading-tight mt-2"
                >
                  Brands
                </motion.div>
              </h1>
            </motion.div>
            
            {/* Feature badge moved inline with the headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-8"
            >
              <FeatureBadge />
            </motion.div>
            
            {/* Animated tagline with typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-lg md:text-xl text-[#F2C858]/90 font-light mb-1">
                {displayText}<span className="animate-pulse">|</span>
              </h2>
            </motion.div>
            
            {/* Value proposition with hover effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-black/20 backdrop-blur-sm px-6 py-4 rounded-xl border border-[#F2C858]/20 mb-8 shadow-xl relative overflow-hidden"
            >
              {/* Subtle background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F2C858]/10 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 8,
                  ease: "linear",
                }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <p className="text-white/90 md:text-lg">
                  We hired the <span className="text-[#F2C858] font-semibold">top 1%</span> of motherhood-focused social media strategists so you don't have to. Get your first content ideas within <span className="text-[#F2C858] font-semibold">48 hours</span>.
                </p>
              </div>
            </motion.div>
            
            {/* Interactive feature selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                  className={`flex flex-col items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeFeature === feature.id 
                      ? 'bg-[#F2C858] text-[#0D3C21]' 
                      : 'bg-black/20 text-white hover:bg-black/30'
                  }`}
                >
                  <div className={`mb-2 ${
                    activeFeature === feature.id ? 'text-[#0D3C21]' : 'text-[#F2C858]'
                  }`}>
                    {feature.icon}
                  </div>
                  <p className="text-xs font-semibold">{feature.name}</p>
                  
                  {/* Description appears when active */}
                  <AnimatePresence>
                    {activeFeature === feature.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-[10px] text-center mt-2 overflow-hidden"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA buttons with enhanced hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#F2C858]/30 via-[#F2C858]/70 to-[#F2C858]/30 rounded-xl opacity-0 filter blur-md"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                />
                <Button
                  asChild
                  className="bg-[#F2C858] hover:bg-[#F2C858] text-[#0D3C21] font-bold rounded-xl px-8 py-6 shadow-lg relative overflow-hidden group"
                >
                  <Link href="#book-call" className="flex items-center justify-center gap-2">
                    <span className="relative z-10">Book Free Strategy Call</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#F2C858]/0 via-[#F2C858]/50 to-[#F2C858]/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></span>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#F2C858]/50 text-[#F2C858] hover:bg-[#F2C858]/10 rounded-xl px-8 py-6 shadow-lg"
                >
                  <Link href="#services" className="flex items-center justify-center gap-2">
                    <span>Explore Our Services</span>
                    <Sparkles className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right column - enhanced with mouse parallax */}
          <div className="relative">
            {/* Main image with mouse parallax effect */}
            <MouseParallax>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#F2C858]/30 via-transparent to-[#F2C858]/30 rounded-2xl blur-xl opacity-40"></div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <Image
                      src="/images/mother_with_baby.png"
                      alt="Mother holding baby illustration"
                      width={900}
                      height={900}
                      className="w-full h-auto"
                      priority
                    />
                  </motion.div>
                  
                  {/* Animated progress circle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="absolute top-6 left-6 z-20"
                  >
                    <CircularProgress percentage={87} size={80} />
                  </motion.div>
                </div>
                
                {/* Stats moved below the image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ y: -5 }}
                  className="grid grid-cols-3 gap-2 bg-black/30 backdrop-blur-md p-4 rounded-xl mt-4 border border-white/5 shadow-xl"
                >
                  {stats.map((stat, index) => (
                    <StatCounter
                      key={index}
                      value={stat.value}
                      label={stat.label}
                      icon={stat.icon}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </MouseParallax>
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-xs text-white/50 mb-2">Scroll to explore</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-10 rounded-full border border-white/20 flex items-center justify-center"
        >
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;