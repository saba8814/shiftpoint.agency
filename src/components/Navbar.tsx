"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      } navbar-root ${mounted ? 'navbar-enter' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="ShiftPoint Logo"
                  className="w-12 h-12 object-contain"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ShiftPoint
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation (Centered) */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 2.2 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-gray-300 hover:text-white transition-colors duration-200 group px-3 py-2 font-semibold text-base"
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex flex-shrink-0" style={{ marginRight: '1rem' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 2.8 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-base relative overflow-hidden group shadow-lg"
              >
                <span className="relative z-10">Get Started</span>
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

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 2.8 }}
            className="md:hidden flex items-center"
          >
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? "auto" : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800 overflow-hidden"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : -30 
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              x: isOpen ? 0 : -30 
            }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
            className="pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
