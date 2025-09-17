"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Star, Users, Trophy, TrendingUp } from "lucide-react";

const clients = [
  {
    name: "TechGlobal Inc.",
    logo: "TG",
    industry: "Technology",
    project: "AI-Powered Analytics Platform",
    result: "300% increase in data processing speed",
    testimonial: "ShiftPoint transformed our data infrastructure completely. Their innovative approach exceeded all expectations."
  },
  {
    name: "FinanceForward",
    logo: "FF",
    industry: "Financial Services",
    project: "Blockchain Payment System",
    result: "50% reduction in transaction costs",
    testimonial: "The security and efficiency of their blockchain solution revolutionized our payment processing."
  },
  {
    name: "HealthTech Solutions",
    logo: "HT",
    industry: "Healthcare",
    project: "IoT Health Monitoring",
    result: "95% patient satisfaction rate",
    testimonial: "Their IoT solutions enabled real-time patient monitoring that saves lives daily."
  },
  {
    name: "EcoEnergy Corp",
    logo: "EE",
    industry: "Renewable Energy",
    project: "Smart Grid Management",
    result: "40% energy efficiency improvement",
    testimonial: "ShiftPoint's smart grid technology optimized our energy distribution beyond our wildest dreams."
  },
  {
    name: "RetailRev",
    logo: "RR",
    industry: "E-commerce",
    project: "AI-Driven Personalization",
    result: "200% increase in conversion rates",
    testimonial: "Their AI personalization engine transformed our customer experience and skyrocketed our sales."
  },
  {
    name: "ManufactureMax",
    logo: "MM",
    industry: "Manufacturing",
    project: "Automated Production Line",
    result: "75% reduction in production time",
    testimonial: "The automation solutions provided by ShiftPoint revolutionized our entire manufacturing process."
  }
];

const stats = [
  { icon: Users, number: "500+", label: "Clients Served" },
  { icon: Trophy, number: "98%", label: "Success Rate" },
  { icon: TrendingUp, number: "10x", label: "Average ROI" },
  { icon: Star, number: "4.9", label: "Client Rating" }
];

const ClientsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0iZ3JhZCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzNiODJmNiIgc3RvcC1vcGFjaXR5PSIwLjEiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjM2I4MmY2IiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9InVybCgjZ3JhZCkiLz4KPHN2Zz4K')] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Delivering exceptional results for forward-thinking companies across the globe
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="text-3xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Testimonials Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative perspective-1000"
            >
              {/* Card */}
              <div className="relative h-full bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 overflow-hidden hover:border-gray-600 transition-all duration-300">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Client Logo */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {client.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                    <p className="text-sm text-gray-400">{client.industry}</p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-6">
                  <h4 className="text-blue-400 font-medium mb-2">{client.project}</h4>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-3"
                  />
                  <p className="text-green-400 font-semibold text-sm">{client.result}</p>
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-300 text-sm italic leading-relaxed relative z-10">
                  "{client.testimonial}"
                </blockquote>

                {/* Rating Stars */}
                <div className="flex mt-4 relative z-10">
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.div
                      key={starIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + starIndex * 0.1 }}
                    >
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Start Your Project</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Animation Elements */}
      {windowSize.width > 0 && [...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          animate={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </section>
  );
};

export default ClientsSection;
