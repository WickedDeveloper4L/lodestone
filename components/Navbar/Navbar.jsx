"use client";
import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Image from "next/image";
import LOGO from "../../assets/logoo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    const nav = document.querySelector("#nav");
    scroll > 5 && nav.classList.add("bluenav");
    scroll <= 5 && nav.classList.remove("bluenav");
  }, [scroll]);
  return (
    <div id="nav" className="navbar">
      <div className="first">
        <Link href="/">
          <Image
            className="logo"
            src={LOGO}
            width={150}
            height={150}
            alt="lodestone medicals"
          />
        </Link>
      </div>
      <div className="second">
        <Link href="/contact-us" className="link req">
          <BsTelephone className="icon" />
          CONTACT US
        </Link>
        <Link href="/services" className="link search">
          OUR SERVICES
        </Link>
        <span className="link" onClick={() => setToggle(true)}>
          <GiHamburgerMenu className="icon" />
          <span className="menutext">MENU</span>
        </span>
      </div>
      {toggle && (
        <div className="sidebar">
          <MdOutlineClose onClick={() => setToggle(false)} className="close" />
          <div className="sidelinks">
            <Link
              onClick={() => setToggle(false)}
              href="/"
              className="sidelink"
            >
              Home
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/services"
              className="sidelink"
            >
              Our services
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/private-patients"
              className="sidelink"
            >
              Private patients
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/patients"
              className="sidelink"
            >
              For patients
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/community"
              className="sidelink"
            >
              Community Diagnostics Center
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/about"
              className="sidelink"
            >
              About us
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/contact-us"
              className="sidelink"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
