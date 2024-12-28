import BrandSection from "@/components/homePageComponents/BrandSection";
// import CarouselComponent from "@/components/homePageComponents/CarouselComponent";
import CashBackOffer from "@/components/homePageComponents/CashBackOffer";
import Faq from "@/components/homePageComponents/Faq";
import Footer from "@/components/shared/Footer";
import HorizontalRuler from "@/components/homePageComponents/HorizontalRuler";
import Navbar from "@/components/shared/Navbar";
import OfferSection from "@/components/homePageComponents/OfferSection";
import PopularOffer from "@/components/homePageComponents/PopularOffer";
import ReviewSection from "@/components/homePageComponents/ReviewSection";
import TrabdingProduct from "@/components/homePageComponents/TrabdingProduct";
import React from "react";
// import ListPage from "./ListPage";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      {/* <CarouselComponent /> */}

      <OfferSection />
      <HorizontalRuler />
      <BrandSection />
      <TrabdingProduct />
      <PopularOffer />
      <CashBackOffer />
      <ReviewSection />
      <Faq />

      <Footer />
    </div>
  );
};

export default HomePage;
