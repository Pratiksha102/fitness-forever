"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-black backdrop-blur-xl p-2 rounded-t-lg shadow-sm border-t border-white/10 flex flex-col items-center text-gray-300">
      <p className="text-xs font-light tracking-wide">
        Designed & Developed by  
        <a href="mailto:pratiksha.gupta15@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition duration-300 ease-in-out ml-1">
         Pratiksha💛
        </a>
      </p>
      <div className="flex gap-3 mt-1 text-[10px]">

        <a href="mailto:pratiksha.gupta15@gmail.com" className="hover:text-white transition duration-300 ease-in-out">
          Contact
        </a>
        <a href="https://www.linkedin.com/in/pratiksha-/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300 ease-in-out">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
