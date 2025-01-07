'use client';

import { Fragment, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Hero from "@/components/Hero/Hero";
import CustomComponent from "@/components/Custom/CustomCompo";
import Features from "@/components/Features/Features";
import TopDestinations from "@/components/TopDestinations/TopDestinations";
import FAQSection from "@/components/Faqs/Faqs";

export default function Home() {
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // Stop loading after 2 seconds
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
          <Features />
          <CustomComponent />
          <TopDestinations />
          <FAQSection />
        </Fragment>
      )}

    </main>
  );
}
