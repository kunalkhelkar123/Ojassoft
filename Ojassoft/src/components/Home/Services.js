"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="services-area ptb-110 bg-fafafa pb-0">
        <div className="container">
          <div className="section-title">
            <h2>See wide range of our products and services </h2>
            <p>
            We provide comprehensive solutions for all departments across various technologies.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/images/services/plug.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Meditech </Link>
                </h3>
                <p>
                Comprehensive HMS software for healthcare institutions.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/images/services/plug.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Epic Systems</Link>
                </h3>
                <p>
                Integrated electronic medical records and hospital management.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/images/services/sensor.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Allscripts </Link>
                </h3>
                <p>
                Solutions for electronic health records, practice management, and more.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/images/services/database.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Infor Healthcare</Link>
                </h3>
                <p>
                Offers a suite of hospital management and healthcare solutions.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/images/services/augmented-reality.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/services/details">TheraNest </Link>
                </h3>
                <p>
                Practice management and EHR software for mental health providers.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/images/services/deep.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/services/details">CureMD</Link>
                </h3>
                <p>
                Cloud-based EHR and practice management.
                </p>
              </div>
            </div>
          </div>
          
        </div>

        <div className="services-shape">
          <Image
            src="/images/services-shape.png"
            alt="image"
            width={524}
            height={558}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
