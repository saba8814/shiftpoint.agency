"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github,
  ArrowUp,
  Zap
} from "lucide-react";

const footerLinks = {
  services: [
    "AI & Machine Learning",
    "Cloud Architecture", 
    "Cybersecurity",
    "Mobile Development",
    "Data Analytics",
    "Custom Software"
  ],
  company: [
    "About Us",
    "Our Team",
    "Careers",
    "Blog",
    "Case Studies",
    "Partners"
  ],
  resources: [
    "Documentation",
    "API Reference",
    "Tutorials",
    "Webinars",
    "White Papers",
    "Support"
  ]
};

const socialLinks = [
  { icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
  { icon: Github, href: "#", color: "hover:text-gray-300" }
];

const Footer = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0iZ3JhZCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzNiODJmNiIgc3RvcC1vcGFjaXR5PSIwLjIiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjM2I4MmY2IiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjZ3JhZCkiLz4KPHN2Zz4K')] opacity-30" />
        
        {/* Floating particles */}
        {windowSize.width > 0 && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * 200,
            }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * 200,
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ShiftPoint
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Pioneering the future through innovative technology solutions and strategic consulting excellence.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  hello@shiftpoint.agency
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  San Francisco, CA
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#60a5fa" }}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#60a5fa" }}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#60a5fa" }}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h5 className="text-white font-medium mb-3">Stay Updated</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-l-lg text-white text-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-r-lg text-white text-sm font-medium"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ShiftPoint Agency. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`text-gray-400 ${social.color} transition-colors`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" 
              }}
              whileTap={{ scale: 0.9 }}
              className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg z-50 md:relative md:bottom-auto md:right-auto"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6 mt-4 pt-4 border-t border-gray-800"
          >
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ color: "#60a5fa" }}
                className="text-gray-500 text-xs hover:text-blue-400 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </footer>
  );
};

export default Footer;
