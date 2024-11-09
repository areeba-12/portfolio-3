import React from "react";
import ServicesCards from "../components/ServicesCards";
import Link from "next/link";
import "boxicons/css/boxicons.min.css";
const Services = () => {
  return (
    <>
      <div className="services-wrapper">
        <div className="services-section">
          <p className="services-badge">What I Offer</p>
          <h1 className="services-main-heading">
            Comprehensive <span>Services</span>
            <br />
            to Build Your Online Presence.<i className="bx bx-globe"></i>
          </h1>

          <div className="services-des-section">
            <p className="services-des">
              I take the time to understand your unique needs and goals,
              crafting tailored web solutions that bring your Vision to life.
              Whether you are looking to build a modern, responsive website or
              enhance your digital presence, my services are designed to reflect
              your brand and deliver results that exceed expectations.⋆｡°✩
            </p>
            <div className="services-quote">
              <i>
                <b>
                  Your Vision, brought to life through innovative and bespoke
                  web solutions.
                </b>
              </i>
              💙
            </div>
          </div>
        </div>
        <div className="services-bottom">
          <div className="services-cards">
            <ServicesCards
              title="React Website"
              num="01"
              description="A modern React website built with powerful components to deliver high performance and user experience.★"
            />
          </div>
          <div className="services-cards ">
            <ServicesCards
              title="Next Js Website"
              num="02"
              description="A Next.JS website providing server-side rendering and optimized performance for fast-loading applications.★"
            />
          </div>
          <div className="services-cards">
            <ServicesCards
              title="Frontend Website"
              num="03"
              description="Build a beautifull, responsive frontend website using the latest technologies for a seamless user experience.★"
            />
          </div>
          <div className="services-cards">
            <ServicesCards
              title="Node Js Website"
              num="04"
              description="A Node.Js-powered website offering robust backend solutions for scaleable and efficient web application.★"
            />
          </div>
          <div className="services-cards">
            <ServicesCards
              title="Javascript Website"
              num="05"
              description="Crafting interactive, dynamic websites using pure Javascript, tailored to provide fast and efficient results.★"
            />
          </div>
          <div className="services-cards">
            <ServicesCards
              title="Typescript Website"
              num="06"
              description="Develop a strongly-types, bug-free website using Typescript for enhanced code quality and reliable applications.★"
            />
          </div>
        </div>
        <div className="services-button-section">
          <button className="services-button">
            <Link href="/contact"> Contact Me</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
