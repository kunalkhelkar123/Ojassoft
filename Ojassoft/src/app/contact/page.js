import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import FooterTwo from "../../components/Layouts/FooterTwo";
import ContactForm from "../../components/Contact/ContactForm";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        imgClass="/images/page-title-bg.png"
      />

      <div className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <span>Contact Us</span>
            <h2>Drop us Message for any Query</h2>
            <p>
            We provide comprehensive solutions for all departments across various technologies.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4">
              <div className="contact-image">
                <Image
                  src="/images/contact.png"
                  alt="image"
                  width={310}
                  height={350}
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-8">
              {/* ContactForm */}
              <ContactForm />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="bx bx-envelope"></i>
                </div>

                <h3>Email Here</h3>
                <p>
                  <a href="mailto:admin@opstar.com">ojassoftech.com</a>
                </p>
                <p>
                  <a href="mailto:info@opstar.com">ojassoftechnologies.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="bx bx-map"></i>
                </div>

                <h3>Location Here</h3>
                <p>
                202, 4th Floor, Mount Vert Spectra, <br></br> Baner - Pashan Link Rd, Pune, Maharashtra 411052
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>

                <h3>Call Here</h3>
                <p>
                  <a href="tel:1234567890">+91 78369 05995</a>
                </p>
                {/* <p>
                  <a href="tel:2414524526">+241 452 4526</a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
}
