"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Rocket,
  Code,
  Cpu,
  Database
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions that transform data into actionable insights and automate complex processes.",
    features: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable cloud infrastructure designed for performance, security, and cost-effectiveness.",
    features: ["AWS/Azure/GCP", "Microservices", "DevOps", "Serverless"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced security frameworks protecting your digital assets from emerging threats.",
    features: ["Penetration Testing", "Security Audits", "Compliance", "Zero Trust"],
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications with stunning user experiences.",
    features: ["React Native", "Flutter", "iOS", "Android"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into powerful business intelligence and strategic insights.",
    features: ["Big Data", "Real-time Analytics", "Data Visualization", "Business Intelligence"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Bespoke software solutions tailored to your unique business requirements.",
    features: ["Web Applications", "APIs", "Integration", "Legacy Modernization"],
    color: "from-indigo-500 to-purple-500"
  }
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {windowSize.width > 0 && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
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
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"
          >
            <Rocket className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge technology solutions designed to propel your business into the future
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 overflow-hidden hover:border-gray-600 transition-all duration-300">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Floating Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 relative z-10`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`} />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Explore All Services</span>
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

      {/* Tech Icons Floating Animation */}
      <div className="absolute top-20 right-10 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Cpu className="w-12 h-12 text-blue-500" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-20 left-10 opacity-20">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Database className="w-12 h-12 text-purple-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
