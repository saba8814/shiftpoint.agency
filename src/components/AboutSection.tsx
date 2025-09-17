"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Lightbulb, Award, Zap, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technology and creative solutions"
  },
  {
    icon: Target,
    title: "Precision",
    description: "Delivering exact solutions tailored to your unique business needs"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining the highest standards in every project we undertake"
  },
  {
    icon: Zap,
    title: "Agility",
    description: "Rapid adaptation and implementation in today's fast-paced world"
  }
];

const team = [
  {
    name: "Alex Chen",
    role: "Chief Technology Officer",
    specialty: "AI & Machine Learning",
    experience: "15+ years",
    image: "AC"
  },
  {
    name: "Sarah Johnson",
    role: "Lead Cloud Architect",
    specialty: "Cloud Infrastructure",
    experience: "12+ years",
    image: "SJ"
  },
  {
    name: "Marcus Rodriguez",
    role: "Cybersecurity Director",
    specialty: "Security & Compliance",
    experience: "18+ years",
    image: "MR"
  },
  {
    name: "Emily Zhang",
    role: "Head of Innovation",
    specialty: "Digital Transformation",
    experience: "10+ years",
    image: "EZ"
  }
];

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), 
                                radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%), 
                                radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)`
             }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main About Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"
            >
              <Globe className="w-8 h-8 text-white" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Pioneering the Future
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-6 leading-relaxed"
            >
              At ShiftPoint, we're not just consultants—we're digital architects of tomorrow. 
              For over a decade, we've been transforming ambitious visions into technological reality.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              Our team of world-class experts combines deep technical expertise with strategic 
              business acumen, delivering solutions that don't just meet today's challenges—they 
              anticipate tomorrow's opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold"
              >
                Our Story
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-blue-500 rounded-full text-blue-400 font-semibold hover:bg-blue-500/10 transition-colors"
              >
                Meet the Team
              </motion.button>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700">
              {/* Floating Tech Icons */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -360]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-16 right-12 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-12 left-16 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center"
              >
                <Lightbulb className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 25, 0],
                  x: [0, -10, 0]
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
              >
                <Award className="w-7 h-7 text-white" />
              </motion.div>

              {/* Central Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          ref={valuesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Core Values
            </h3>
            <p className="text-gray-400 text-lg">
              The principles that drive our innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          ref={teamRef}
          initial={{ opacity: 0, y: 50 }}
          animate={teamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meet Our Experts
            </h3>
            <p className="text-gray-400 text-lg">
              World-class professionals driving innovation forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-gray-600 transition-all duration-300">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4"
                  >
                    {member.image}
                  </motion.div>

                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-3">{member.specialty}</p>
                  <div className="text-xs text-gray-500 bg-gray-700/50 rounded-full px-3 py-1 inline-block">
                    {member.experience}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
