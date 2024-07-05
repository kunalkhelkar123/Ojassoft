"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Feedback = () => {
  return (
    <>
      <div className="feedback-area">
        <div className="container">
          <div className="section-title">
            <h2>Trusted by over 250,000 business owners</h2>
            <p>
            Read our reviews and feedbacks to see how our Hospital Management System has positively impacted healthcare institutions, 
            enhancing efficiency and patient care. Discover why our clients trust us for their hospital management needs..
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="single-feedback-item">
                <div className="feedback-desc">
                  <p>
                  I have been using Ojassoft suite of Hospital, Dental, Radiology, Lab and Pharmacy Management Software for 
                  last 6 months. It's easy to use and efficient patient record management helped us in better patient flow
                   and care. I would
                    recommend Ojassoft for any OP clinic to multispeciality hospitals.

                      Thanks Ojassoft Team! All the best!
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src="/images/author1.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>David Luis</h3>
                  {/* <span>Founder & CEO</span> */}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <div className="feedback-desc">
                  <p>
                  I was using a high cost HMS for 4 years before I switched to Ojassoft Orthopedic Practice Management Software. 
                  Ojassoft is easy to use, has complete EMR, PACS integratio which helps my Ortho practice 
                  more efficiently. My existing patient data migration was seamlessly taken care during Ezovion implementation. <br></br>Thanks Ojassoft Team
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src="/images/author2.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Steven Smith</h3>
                  {/* <span>Developer</span> */}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <div className="feedback-desc">
                  <p>
                  I have been using Ojassoft Orthopedic Practice Management Software integrated with Ojassoft PACS.
                  Ojassoft Medical Imaging Solution saves money and improves efficiency, their OP module helps manage 
                  my appointments better. Thanks Ojassoft Team for your innovative and cost-effective PACS solution.
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src="/images/author3.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Sarah Lucy</h3>
                  {/* <span>Designer</span> */}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <div className="feedback-desc">
                  <p>
                  I have been using Ojassoft suite of Hospital, Dental, Radiology, Lab and Pharmacy Management Software for 
                  last 6 months. It's easy to use and efficient patient record management helped us in better patient flow
                   and care. I would
                    recommend Ojassoft for any OP clinic to multispeciality hospitals.

                      Thanks Ojassoft Team! All the best!
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src="/images/author4.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>James Anderson</h3>
                  {/* <span>Manager</span> */}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="feedback-shape">
          <Image src="/images/white-shape2.png" alt="image" width={1920} height={124}/>
        </div>
        <div className="shape-rectangle">
          <Image src="/images/1.png" alt="image" width={488} height={360} />
        </div>
      </div>
    </>
  );
};

export default Feedback;
