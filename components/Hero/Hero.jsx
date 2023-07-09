"use client";
import styles from "./hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import Image from "next/image";
import photo1 from "../../app/assets/pexels-evg-kowalievska-1170979.jpg";
import photo2 from "../../app/assets/pexels-yunus-tuğ-14580770.jpg";
import photo3 from "../../app/assets/pexels-mart-production-7089392.jpg";
import photo4 from "../../app/assets/pexels-gustavo-fring-3985299.jpg";
import { roboto_mono } from "@/app/layout";

const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        loop={true}
        speed={2000}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="swiper"
      >
        <SwiperSlide className="swiperSlide">
          <Image src={photo1} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="intro">
                <p className={roboto_mono.className}>PUTTING PATIENTS FIRST</p>
              </div>
              <div className="line"></div>
              <div className="heading">
                <h1>Private patient scans, on-demand</h1>
              </div>
              <div className="desc">
                <p>
                  Our private patient service offers you quality, speed, and
                  reliability. Get the scans you need, when you need them, at a
                  price that suits. We offer daily appointments slots at 30+
                  locations and deliver our reports in 24-48 hours.
                </p>
              </div>
              <div className="buttons">
                <button className={roboto_mono.className}>
                  PRICES AND MORE
                </button>
                <button className={roboto_mono.className}>REQUEST SCAN</button>
              </div>
            </div>
            <div className="empty"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image src={photo2} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="intro">
                <p className={roboto_mono.className}>PUTTING PATIENTS FIRST</p>
              </div>
              <div className="line"></div>
              <div className="heading">
                <h1>Your trusted partner for Community Diagnostic Centres</h1>
              </div>
              <div className="desc">
                <p>
                  We're a leading medical imaging partner for over 100 NHS
                  trusts. We created the UK’s first CDC and have delivered 9
                  multi-modality CDCs. These are successfully reducing waiting
                  lists and improving patient pathways. Discover more about our
                  CDC solutions.
                </p>
              </div>
              <div className="buttons">
                <button className={roboto_mono.className}>LEARN MORE</button>
                <button className={roboto_mono.className}>FIND A CENTER</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image src={photo3} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="intro">
                <p className={roboto_mono.className}>PUTTING PATIENTS FIRST</p>
              </div>
              <div className="line"></div>
              <div className="heading">
                <h1>National contract holder for PET-CT</h1>
              </div>
              <div className="desc">
                <p>
                  We deliver NHS PET-CT services to 80% of England, lead the
                  Molecular Imaging Collaborative Network and manufacture and
                  distribute SPECT & PET radiopharmaceuticals at 5 UK sites.
                  Additionally, we're investing in and improving access to
                  digital PET-CT.
                </p>
              </div>
              <div className="buttons">
                <button className={roboto_mono.className}>
                  PET/CT CENTERS
                </button>
                <button className={roboto_mono.className}>REQUEST SCAN</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image src={photo4} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="intro">
                <p className={roboto_mono.className}>PUTTING PATIENTS FIRST</p>
              </div>
              <div className="line"></div>
              <div className="heading">
                <h1>Dedicated to diagnostics</h1>
              </div>
              <div className="desc">
                <p>
                  Alliance Medical are leading the way in high-quality
                  diagnostic imaging. For over 30 years, our experts have
                  combined service excellence and innovation to improve patient
                  access, experiences and outcomes. Request a scan or find your
                  nearest centre.
                </p>
              </div>
              <div className="buttons">
                <button className={roboto_mono.className}>FIND A CENTER</button>
                <button className={roboto_mono.className}>REQUEST SCAN</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default Hero;
