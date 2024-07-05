"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterTwo = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/white-logo1.png"
                      alt="image"
                      width={146}
                      height={37}
                    />
                  </Link>
                  <p>
                  We are Hospital Management Software in India is a comprehensive solution with OPD, IPD, daycare, 
                  lab, radiology, pharmacy, and tele-consulting all under one roof.
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://facebook.com/" target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter-black-shape"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/" target="_blank">
                      <i className="flaticon-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>Services</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/services/details/">Product Engineering</Link>
                  </li>
                  <li>
                    <Link href="/services/details/">UX/UI Design</Link>
                  </li>
                  <li>
                    <Link href="/services/details/">Big Data Analysis</Link>
                  </li>
                  <li>
                    <Link href="/services/details/">Desktop Applications</Link>
                  </li>
                  <li>
                    <Link href="/services/details/">Mobile Applications</Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>Quick Links</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  {/* <li>
                    <Link href="/blog">Blog</Link>
                  </li> */}
                  {/* <li>
                    <Link href="/services">Services</Link>
                  </li> */}
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  {/* <li>
                    <Link href="/contact">Support</Link>
                  </li> */}
                  {/* <li>
                    <Link href="/contact">Applications</Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>Contacts</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span> 202, 4th Floor, Mount Vert Spectra, <br></br>
                    Baner - Pashan Link Rd, Pune, Maharashtra 411052
                  </li>
                  <li>
                    <span>Email:</span> <a href="#">ojassoft@gmail.com</a>
                  </li>
                  <li>
                    <span>Phone:</span> <a href="#">+91 78369 05995</a>
                  </li>
                  <li>
                    <span>Fax:</span> <a href="#">+44 785 4578964</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>Copyright @{currentYear}  Ojassoft. All Rights Reserved.</p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <Image
            src="/images/circle-map.png"
            alt="image"
            width={370}
            height={292}
          />
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
