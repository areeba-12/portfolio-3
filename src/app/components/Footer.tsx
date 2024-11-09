import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-left-side">
          <div className="">
            <div className="footer-logo-wrapper">
              <span className="footer-logo">
                Syeda
                <span>Areeba</span>
              </span>
            </div>
            <h1 className="footer-des">
              Thank you for visiting my portfolio! I specialize in creating
              modern, responsive websites that help businesses establish a strong
              online presence. Feel free to explore my work and reach out for
              any inquiries or collaboration opportunities. Let&apos;s build
              something amazing together! 🌐
            </h1>
            <p className="footer-email">haptez45@gmail.com</p>
          </div>
          <div className="footer-links-wrapper">
            <h1 className="footer-heading">
              <i>Quick Links</i>
            </h1>
            <Link className="footer-link" href="/">
              Home
            </Link>
            <Link className="footer-link" href="/about">
              About
            </Link>
            <Link className="footer-link" href="/services">
              Services
            </Link>
            <Link className="footer-link" href="/skills">
              Skills
            </Link>
            <Link className="footer-link" href="/projects">
              Projects
            </Link>
            <Link className="footer-link" href="/contact">
              Contact
            </Link>
          </div>
          <div className="footer-right-side">
            <h1 className="footer-right-heading">
              <i>Address</i>
            </h1>
            <div className="footer-right-content">
              <MapIcon className="footer-map-icon" />
              <p className="footer-address">Karachi, Pakistan</p>
            </div>
            <div className="footer-envelop-section">
              <EnvelopeIcon className="footer-envelop-icon" />
              <p className="footer-envelop-email">haptez45@gmail.com</p>
            </div>
            <div className="footer-phoneIcon-section">
              <PhoneIcon className="footer-phone-icon" />
              <p className="footer-number">0331-3013890</p>
            </div>
            <div className="footer-social-links">
              <a
                href="https://github.com/areeba-12"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <FaGithub className="footer-social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/syeda-areeba-bb52202ba/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin className="footer-social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">&copy; Copyright Syeda Areeba 2024</div>
      </div>
    </>
  );
};

export default Footer;
