"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      {/* Artificial Intelligence (AI) */}
                    </span>
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      Work smarter, together.
                    </h1>

                    <h4><p  data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"><b className="fs-5">Leading Hospital Management
                    Software in India</b></p>
                    </h4>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      We are Hospital Management Software in India is a comprehensive solution with OPD, IPD, daycare, lab, radiology, pharmacy, and tele-consulting all under one roof.
<br></br>
                      We provide comprehensive solutions for all departments across various technologies.
                      Our services include software development, system integration, cloud computing, and
                      more, ensuring efficient and effective technological operations..


                    </p>

                    <Link
                      href="/contact"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div
                    className="main-banner-image"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1200"
                  >
                    <Image
                      src="/images/banner-img1.png"
                      alt="image"
                      width={755}
                      height={660}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="banner-shape">
          <Image
            src="/images/white-shape.png"
            alt="image"
            width={1920}
            height={124}
          />
        </div>
        <div className="shape1">
          <Image
            src="/images/shape/2.png"
            alt="image"
            width={220}
            height={213}
          />
        </div>
        <div className="shape2">
          <Image
            src="/images/shape/3.png"
            alt="image"
            width={300}
            height={195}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
