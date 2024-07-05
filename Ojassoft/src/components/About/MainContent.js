"use client";

import React from "react";
import Image from "next/image";

const MainContent = () => {
  return (
    <>
      <div className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span>About Us</span>
                <h2>We&apos;ve Been Thriving in 12+ Years The Tech Area</h2>
                <p>
                We are a team of healthcare technology innovators dedicated to transforming the way 
                hospitals and clinics operate. Our Hospital Management System is designed to streamline administrative,
                 financial, and clinical processes, 
                enabling healthcare providers to focus on delivering exceptional patient care.
                </p>
                <p>
                With a deep understanding of the challenges faced by medical institutions, 
                we have developed a comprehensive, user-friendly solution that integrates all aspects of hospital management. Our software enhances 
                efficiency, ensures data security, and supports real-time decision-making, ultimately improving healthcare outcomes.
                </p>
                <p>
                Our mission is to empower healthcare providers with the tools they need to succeed in an ever-evolving industry. 
                By leveraging the latest technologies and maintaining a patient-centric approach, we strive to create a more connected
                 and efficient healthcare ecosystem.
                 Join us on our journey to revolutionize healthcare management and experience the difference our solutions can make.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/3.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                  Our journey began in 2012, when a group of healthcare professionals and technology experts 
                  came together with a shared vision: to address the inefficiencies and challenges faced by 
                  hospitals and clinics in managing their operations.
                  </p>

                  <i className="flaticon-house"></i>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                  To deliver a comprehensive Hospital Management System that automates administrative,
                   financial, and clinical processes, empowering healthcare institutions to improve patient outcomes, 
                   reduce operational costs, and ensure data security and compliance with industry standards.
                  </p>

                  <i className="flaticon-insurance"></i>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who we are</h3>
                  <p>
                  We are a dedicated team of healthcare technology enthusiasts committed to transforming the way
                   hospitals and clinics manage their operations. With extensive expertise in healthcare,
                    software development, and data security, we understand the unique challenges faced by medical institutions.
                    
                  </p>

                  <i className="flaticon-box"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
