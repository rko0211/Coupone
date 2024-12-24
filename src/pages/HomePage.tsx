import BrandSection from "@/components/HomePageComponent/BrandSection";
import CarouselComponent from "@/components/HomePageComponent/CarouselComponent";
// import CashBackOffer from "@/components/HomePageComponent/CashBackOffer";
import Faq from "@/components/HomePageComponent/Faq";
import Footer from "@/components/shared/Footer";
import HorizontalRuler from "@/components/HomePageComponent/HorizontalRuler";
import Navbar from "@/components/shared/Navbar";
import OfferSection from "@/components/HomePageComponent/OfferSection";
import PopularOffer from "@/components/HomePageComponent/PopularOffer";
// import ReviewSection from "@/components/HomePageComponent/ReviewSection";
import TrabdingProduct from "@/components/HomePageComponent/TrabdingProduct";
import React from "react";
// import ListPage from "./ListPage";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <CarouselComponent />

      <OfferSection />
      <HorizontalRuler />
      <BrandSection />
      <TrabdingProduct />
      <PopularOffer />
      {/* <ReviewSection /> */}
      {/* <CashBackOffer /> */}
      <Faq />

      <Footer />
    </div>
  );
};

export default HomePage;
