"use client";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogPanel, Popover, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav aria-label="Global" className="nav">
        <div className="header-logo-wrapper">
          <span className="header-logo">
            Syeda 
            <span>Areeba</span>
          </span>
        </div>
        <div className="header-menu-wrapper">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="header-menu-button"
          >
            <span className="sr-only"></span>
            <Bars3Icon aria-hidden="true" className="header-bar-icon" />
          </button>
        </div>
        <PopoverGroup className="header-popoverGroup">
          <Popover className="header-popover"></Popover>

          <Link href="/" className="header-link">
            Home
          </Link>
          <Link href="/about" className="header-link">
            About
          </Link>
          <Link href="/services" className="header-link">
            Services
          </Link>
          <Link href="/skills" className="header-link">
            Skills
          </Link>
          <Link href="/projects" className="header-link">
            Projects
          </Link>
      
          <Link href="contact" className="header-link">
            Contact
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="header-dialog"
      >
        <div className="header-DialogPanel-wrapper" />
        <DialogPanel className="header-DialogPanel">
          <div className="header-mob-wrapper">
            <a href="#" className="-m-1.5 p-1.5">
              <div className="header-mob-logo">
                <span className="header-mob-logo-text">
                  Syeda
                  <span>Areeba</span>
                </span>
              </div>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="header-mob-button"
            >
              <span className="sr-only"></span>
              <XMarkIcon aria-hidden="true" className="header-mob-bar-icon" />
            </button>
          </div>
          <div className=" flow-root">
            <div className="">
              <div className="header-mob-links">
                <Link href="/" className="header-mob-link">
                  Home
                </Link>
                <Link href="/about" className="header-mob-link">
                  About
                </Link>
                <Link href="/services" className="header-mob-link">
                  Services
                </Link>
              </div>
              <div className="other-mob-link">
                <Link href="/skills" className="header-mob-link2">
                  Skills
                </Link>
                <Link href="/projects" className="header-mob-link2">
                  Projects
                </Link>
                
                <Link href="contact" className="header-mob-link2">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
