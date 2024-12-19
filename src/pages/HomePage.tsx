import BrandSection from "@/components/shared/BrandSection";
import Carousel from "@/components/shared/Carousel";
import HorizontalRuler from "@/components/shared/HorizontalRuler";
import Navbar from "@/components/shared/Navbar";
import OfferSection from "@/components/shared/OfferSection";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Carousel />
      <OfferSection />
      <HorizontalRuler />
      <BrandSection />
    </div>
  );
};

export default HomePage;
