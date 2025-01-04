"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { MdContactPage, MdTravelExplore } from "react-icons/md";

const BottomNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);

  const handleScroll = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop.current) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }

    lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationButtons = [
    { path: "/", icon: <FaHome size={24} />, label: "Home" },
    { path: "/about", icon: <FaInfoCircle size={21} />, label: "About Us" },
    { path: "/destinations", icon: <MdTravelExplore size={21} />, label: "Destinations" },
    { path: "/contact", icon: <MdContactPage size={21} />, label: "Contact" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-blackho border-t border-gray-200 dark:border-tertiary shadow-lg flex justify-around items-center py-2 md:hidden"
    >
      {/* Navigation buttons */}
      {navigationButtons.map(({ path, icon, label }) => (
        <motion.button
          key={path}
          whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push(path)}
          className={`flex flex-col items-center transition-transform duration-300 ${pathname === path ? 'text-primary border-b-2 border-primary' : 'text-secondary border-secondary'
            }`}
        >
          {icon}
          <span className="text-xs mt-1">{label}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default BottomNavigation;
