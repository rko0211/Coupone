import Carousel from "@/components/shared/Carousel";
import HorizontalRuler from "@/components/shared/HorizontalRuler";
import OfferSection from "@/components/shared/OfferSection";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Carousel />
      <OfferSection />
      <HorizontalRuler />
    </div>
  );
};

export default HomePage;
