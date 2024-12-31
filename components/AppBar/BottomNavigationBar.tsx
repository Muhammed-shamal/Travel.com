'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle,FaCar } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';

const BottomNavigation = () => {
  const theme: string | undefined = useTheme()?.theme;
  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollTop = useRef<number>(0);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop.current) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }

    lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationButtons: { path: string; icon: React.ReactNode; label: string }[] = [
    { path: '/', icon: <FaHome size={24} />, label: 'Home' },
    { path: '/about', icon: <FaInfoCircle size={21} />, label: 'About Us' },
    { path: '/products', icon: <FaCar size={21} />, label: 'Cars' },
    { path: '/contact', icon: <MdContactPage size={21} />, label: 'Contact' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 right-0 bg-stroke dark:bg-blackho border-t border-gray-200 dark:border-tertiary shadow-lg flex justify-around items-center py-2 md:hidden"
    >
      {/* Navigation buttons */}
      {navigationButtons.map(({ path, icon, label }) => (
        <motion.button
          key={path}
          whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push(path)}
          className={`flex flex-col items-center transition-transform duration-300 ${
            pathname === path && theme == 'light' ? 'text-textlight border-b-2 border-borderlight' : 'text-textdark border-borderdark'
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
