

import Hero from "@/components/Hero/Hero";
import CustomComponent from "@/components/Custom/CustomCompo";
import Features from "@/components/Features/Features";
import TopDestinations from "@/components/TopDestinations/TopDestinations";
import FAQSection from "@/components/Faqs/Faqs";


export default function Home() {
  return (
     <div>
      <Hero />
      <Features />
      <CustomComponent />
      <TopDestinations />
      <FAQSection />
     </div>
  );
}
