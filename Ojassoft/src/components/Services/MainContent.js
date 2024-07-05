"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainContent = () => {
  return (
    <>
      {/* <div className="services-area ptb-110 bg-fafafa">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <Link href="/single-services/">Machine Learning</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/images/services/drone.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/single-services/">Robotics And Drones</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <Link href="/single-services/">Image Processing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <Link href="/single-services/">AI For Cloud Services</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <Link href="/single-services/">Virtual Reality</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <Link href="/single-services/">Deep Learning</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>
                <a href="#" className="page-numbers">
                  1
                </a>
                <span className="page-numbers current" aria-current="page">
                  2
                </span>
                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="page-numbers">
                  4
                </a>
                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
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
      </div> */}

<div className="services-area ptb-110 bg-fafafa pb-0">
        <div className="container">
          <div className="section-title">
            <h2>See wide range of our products and services </h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
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
                  <Link href="/services/details">Outpatient Management (OPD Module) 
                  </Link>
                </h3>
                <p>
                With our OPD Module, one login can manage hospitals, and clinic chains of any size across multiple 
                geographical locations. 
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
                  <Link href="/services/details">Inpatient Management (IPD Module) 
                  </Link>
                </h3>
                <p>
                Ojassoft IP management is a leading platform in India for managing end-to-end IP operations 
                 with flexibility, automation, intelligent tools with management experience. 

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
                  <Link href="/services/details">Pharmacy Management 
                  </Link>
                </h3>
                <p>
                Pharmacy management software like Ezovion helps manage sales, financial data,
                 and distribution for pharmacies in India. 
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
                  <Link href="/services/details">Healthcare Revenue Management
Cycle / TPA system 
</Link>
                </h3>
                <p>
                Ojassoft Hospital Management software offers a Healthcare Revenue Management
                 Cycle/TPA system.  

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
                  <Link href="/services/details">Operation Theater Management </Link>
                </h3>
                <p>
                  The opertaion theater module handle operation theater scheduling and planning surgery team management.
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
                  <Link href="/services/details">Workforce Management</Link>
                </h3>
                <p>
                For a seamless and organised workflow within the healthcare institution. 
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

export default MainContent;
