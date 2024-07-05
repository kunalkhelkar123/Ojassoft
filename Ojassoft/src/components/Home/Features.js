"use client";

import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className="features-area ptb-110 bg-f7f9fc">
        <div className="container">
          <div className="overview-box">
            <div
              className="image"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <Image src="/images/1.png" alt="image" width={488} height={360} />
            </div>

            <div
              className="content"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <h3>Make your business more competitive and sustainable.</h3>
              <p>
              We provide comprehensive solutions for all departments across various technologies.
              </p>

              <ul className="features-list">
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
              </ul>
            </div>
          </div>

          <div className="overview-box">
            <div
              className="content"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <h3>
                Do what matters and we&apos;ll handle the back office routine.
              </h3>
              <p>
              We provide comprehensive solutions for all departments across various technologies.
              </p>

              <ul className="features-list">
                <li>
                  <span>
                    <i className="bx bx-check-double"></i> Fully Support
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check-double"></i> Reliable & Cost
                    Effective
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check-double"></i> Dedicated Developers
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check-double"></i> 100% Customer
                    Satisfaction
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="image"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <Image src="/images/2.png" alt="image" width={458} height={350} />
            </div>
          </div>
        </div>

        <div className="rectangle-shape1">
          <Image
            src="/images/rectangle-shape1.png"
            alt="image"
            width={294}
            height={277}
          />
        </div>
        <div className="rectangle-shape2">
          <Image
            src="/images/rectangle-shape2.png"
            alt="image"
            width={270}
            height={266}
          />
        </div>
      </div>
    </>
  );
};

export default Features;
