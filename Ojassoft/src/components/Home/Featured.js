"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Featured = () => {
  return (
    <>
      <div className="featured-solutions-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our featured services and solutions</h2>
            <p>
            We provide comprehensive solutions for all departments across various technologies.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-featured-solutions">
                <Image
                  src="/images/solutions/1.png"
                  alt="image"
                  width={210}
                  height={196}
                />

                <h3>Departments</h3>
                <p>
                
                 Our services encompass patient management, appointment scheduling, billing, electronic health records (EHR), and more, ensuring efficient and effective hospital operations.
                </p>
                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="flaticon-add"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-featured-solutions">
                <Image
                  src="/images/solutions/2.png"
                  alt="image"
                  width={210}
                  height={196}
                />

                <h3>Industries</h3>
                <p>
               
                Our services include workflow management, resource planning, data analytics, and more, ensuring efficient and effective operations in any sector..
                </p>
                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="flaticon-add"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-featured-solutions">
                <Image
                  src="/images/solutions/3.png"
                  alt="image"
                  width={210}
                  height={196}
                />

                <h3>Technology</h3>
                <p>
                
                  Our services include software development, system integration, cloud computing, and more, ensuring efficient and effective technological operations.
                </p>
                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="flaticon-add"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
