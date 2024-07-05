import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import FooterTwo from "../../components/Layouts/FooterTwo";
import MainContent from "../../components/Services/MainContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Products"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Product"
        imgClass="/images/page-title-bg.png"
      />

      <MainContent />

      <FooterTwo />
    </>
  );
}
