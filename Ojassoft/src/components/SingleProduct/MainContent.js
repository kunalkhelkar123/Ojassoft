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

{/* <div className="features-area ptb-110 bg-f7f9fc">
        <div className="container"> */}

<div className="section-title" >
            <h2 >Services We Provided</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>
          <div className="overview-box">
            <div
              className="image"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <Image src="/images/Department.avif" alt="image" width={488} height={360} />
            </div>

            <div
              className="content"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <h3>Departments</h3>
              <p>
              Our departments provide comprehensive services including patient management, appointment
              scheduling, billing, and electronic health records (EHR). We ensure efficient and effective
              hospital operations through coordinated patient care, seamless scheduling, transparent
              billing, and secure digital health records. Our emergency services offer prompt medical 
              attention, while our laboratory services provide accurate diagnostic tests. Additionally,
              our on-site pharmacy ensures safe and effective medication management, enhancing overall
              patient care and satisfaction.

              </p>

              {/* <ul className="features-list">
                <li>
                  <span>
                    <i className="bx bx-check-double"></i> Influencing Sales
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check-double"></i> Generating Insights
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check-double"></i> Engaging Customer
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check-double"></i> Boosting Operations
                  </span>
                </li>
              </ul> */}
            </div>
          </div>



          <div className="overview-box">
            <div
              className="image"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <Image src="/images/Industry.avif" alt="image" width={488} height={360} />
            </div>

            <div
              className="content"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <h3>Industries</h3>
              <p>
              Our services span multiple sectors, including healthcare, pharmaceuticals, biotechnology, 
              and medical research. We provide advanced workflow management, resource planning, data 
              analytics, and more, ensuring efficient and effective operations tailored to each industry’s
              unique needs. Hospitals and clinics benefit from streamlined patient management and EHR 
              systems, while pharmaceutical companies rely on our precise billing and appointment scheduling
              solutions. Biotechnology firms and medical researchers leverage our robust data management 
              and secure health records for compliant and insightful research. Our comprehensive solutions 
              enhance productivity and innovation across these critical industries.
              </p>

             
            </div>
          </div>




          <div className="overview-box">
            <div
              className="image"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <Image src="/images/Technology.avif" alt="image" width={488} height={360} />
            </div>

            <div
              className="content"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <h3>Technology</h3>
              <p>
              Our technology services include software development, system integration, cloud computing, 
              and more. These solutions ensure efficient and effective technological operations across 
              various sectors. We provide tailored solutions that enhance workflow management, resource 
              planning, and data analytics, empowering organizations to optimize their processes and drive 
              innovation. Whether in healthcare, pharmaceuticals, biotechnology, or medical research, our 
              comprehensive technological expertise supports organizations in achieving their operational 
              and strategic goals.


              </p>

              
            </div>
          </div>

    </>
  );
};

export default MainContent;
