"use client";
import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Image from "next/image";
import LOGO from "../../assets/logoo.png";
import { BsCalendar4, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
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
            alt="lodestone medicals"
          />
        </Link>
      </div>
      <div className="second">
        <span className="link req">
          <BsCalendar4 className="icon" />
          REQUEST SCAN
        </span>
        <span className="link search">
          <BsSearch className="icon" />
          SEARCH
        </span>
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
              href="/"
              className="sidelink"
            >
              For patients
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/"
              className="sidelink"
            >
              For clinicians
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/"
              className="sidelink"
            >
              For referrers
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/"
              className="sidelink"
            >
              Community diagnostic centres
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/"
              className="sidelink"
            >
              Private patients
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/"
              className="sidelink"
            >
              Find a centre
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/"
              className="sidelink"
            >
              Request a scan
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/"
              className="sidelink"
            >
              About us
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/"
              className="sidelink"
            >
              Join us
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href="/"
              className="sidelink"
            >
              For graduates
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
