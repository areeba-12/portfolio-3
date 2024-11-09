import React from "react";
import TypeWriterEffect from "./helper/TypeWritter";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-left-side">
          <div className="hero-grid">
            <div className="hero-order">
              <div className="hero-content-section">
                <p className="hero-badge">Welcome To My Portfolio</p>
              </div>
              <div className="">
                <h1 className="hero-main-heading">
                  Myself <span>Syeda Areeba</span>
                </h1>
                <TypeWriterEffect />
              </div>
              <p className="hero-des">
                I am <b>Syeda Areeba</b>, a creative web developer with a passion for
                crafting beautiful and functional websites. With a strong
                foundation in
                <b> Next.Js </b>
                <b>Custom CSS </b> and modern web technologies I specialize in
                creating responsive and dynamic applications that not only look
                great but also deliver an intuitive user experience.✦
              </p>
              <div className="hero-qoute">
                <i>
                  <b>Building Ideas one line of code at a time.</b>
                </i>
                💻
              </div>
              <div className="hero-button-wrapper">
                <button className="hero-button">
                  <Link href="/contact">
                    <span>Hire Me</span>
                  </Link>
                </button>
                <button className="hero-button">
                  
                </button>
              </div>
            </div>
            <div className="hero-right-side">
              <Image
                src="/profile.png"
                alt="hero"
                width={400}
                height={400}
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
