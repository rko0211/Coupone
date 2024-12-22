import BrandSection from "@/components/shared/BrandSection";
import Carousel from "@/components/shared/Carousel";
import CashBackOffer from "@/components/shared/CashBackOffer";
import Faq from "@/components/shared/Faq";
import Footer from "@/components/shared/Footer";
import HorizontalRuler from "@/components/shared/HorizontalRuler";
import Navbar from "@/components/shared/Navbar";
import OfferSection from "@/components/shared/OfferSection";
import PopularOffer from "@/components/shared/PopularOffer";
import ReviewSection from "@/components/shared/ReviewSection";
// import TrabdingProduct from "@/components/shared/TrabdingProduct";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Carousel />
      <OfferSection />
      <HorizontalRuler />
      <BrandSection />
      {/* <TrabdingProduct /> */}
      <PopularOffer />
      <ReviewSection />
      <CashBackOffer />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
