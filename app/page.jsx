'use client';

import { Fragment, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Hero from "@/components/Hero/Hero";
import CustomComponent from "@/components/Custom/CustomCompo";
import Features from "@/components/Features/Features";
import TopDestinations from "@/components/TopDestinations/TopDestinations";
import FAQSection from "@/components/Faqs/Faqs";
import Description from "@/components/Description/Description";
import Packages from "@/components/Packages/Packages";

export default function Home() {
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  //disable right click in website
  //   useEffect(() => {
  //     const handleContextmenu = e => {
  //         e.preventDefault()
  //     }
  //     document.addEventListener('contextmenu', handleContextmenu)
  //     return function cleanup() {
  //         document.removeEventListener('contextmenu', handleContextmenu)
  //     }
  // }, [])

  return (
    <main>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <ClipLoader color="#6F00EE" size={60} />
        </div>
      ) : (
        // Render the main content after loading is done
        <Fragment>
          <Hero />
          <Description />
          <Features />
          <CustomComponent />
          <TopDestinations />
          <Packages />
          {/* <TrustedCustomerUI /> */}
          <FAQSection />
        </Fragment>
      )}

    </main>
  );
}
