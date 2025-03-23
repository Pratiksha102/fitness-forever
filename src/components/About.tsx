"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center text-center p-8 pt-20 overflow-hidden z-0">
      {/* Background gradient animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      
      {/* Animated Content */}
      <motion.div 
        className="max-w-3xl relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.p 
          className="text-lg text-gray-300 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          At <span className="text-yellow-400 font-semibold">FitLife</span>, we believe in empowering individuals to achieve their fitness goals through expert guidance,
          community support, and cutting-edge technology.
        </motion.p>

        <motion.p 
          className="text-lg text-gray-300 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Our team of certified trainers, nutritionists, and wellness experts are dedicated to helping you build
          sustainable habits that lead to a healthier lifestyle.
        </motion.p>

        <motion.p 
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Join our thriving community and take the first step towards a <span className="text-yellow-400 font-semibold">stronger, healthier you</span>. Your fitness
          journey starts here!
        </motion.p>
      </motion.div>
    </section>
  );
}
