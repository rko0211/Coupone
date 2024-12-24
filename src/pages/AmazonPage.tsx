import AmazonPageHeader from "@/components/AmazonPageComponents/AmazonPageHeader";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";
const AmazonPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AmazonPageHeader />
      <Footer />
    </div>
  );
};

export default AmazonPage;
