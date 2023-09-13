"use client";
import "./hero.scss";
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
        speed={1000}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="swiper"
      >
        <SwiperSlide className="swiperSlide">
          <Image width={200} height={200} src={photo1} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="intro">
                <p className={roboto_mono.className}>PUTTING PATIENTS FIRST</p>
              </div>
              <div className="line"></div>
              <div className="heading">
                <h1 className={roboto_mono.className}>
                  Private patient scans on-demand
                </h1>
              </div>
              <div className="desc">
                <p>
                  Our exclusive patient service provides high standards,
                  efficiency, and dependability. Obtain the necessary scans
                  promptly and conveniently, all at a reasonable cost. We have
                  numerous appointment options available each day at over 10
                  different venues, and we guarantee delivery of our reports
                  within 24-48 hours.
                </p>
              </div>
              <div className="buttons">
                <button className={roboto_mono.className}>
                  PRICES AND MORE
                </button>
                <button className={roboto_mono.className}>LEARN MORE</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image width={200} height={200} src={photo2} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="intro">
                <p className={roboto_mono.className}>PUTTING PATIENTS FIRST</p>
              </div>
              <div className="line"></div>
              <div className="heading">
                <h1 className={roboto_mono.className}>
                  Your trusted partner for Community Diagnostic Centres
                </h1>
              </div>
              <div className="desc">
                <p>
                  As a leading medical imaging partner for over 100 NHS trusts,
                  we have created the UK's first CDC and delivered 9
                  multi-modality CDCs. These centers effectively reduce waiting
                  lists and enhance patient pathways. Discover our CDC
                  solutions.
                </p>
              </div>
              <div className="buttons">
                <button className={roboto_mono.className}>LEARN MORE</button>
                <button className={roboto_mono.className}>CONTACT US</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image width={200} height={200} src={photo3} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="intro">
                <p className={roboto_mono.className}>PUTTING PATIENTS FIRST</p>
              </div>
              <div className="line"></div>
              <div className="heading">
                <h1 className={roboto_mono.className}>
                  National contract holder for PET-CT
                </h1>
              </div>
              <div className="desc">
                <p>
                  Our organization is responsible for providing NHS PET-CT
                  services to 80% of England. We take the lead in the Molecular
                  Imaging Collaborative Network and operate five sites in the UK
                  where we manufacture and distribute SPECT & PET
                  radiopharmaceuticals. Furthermore, we are actively investing
                  in and enhancing the availability of digital PET-CT for
                  improved accessibility.
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
          <Image width={200} height={200} src={photo4} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="intro">
                <p className={roboto_mono.className}>PUTTING PATIENTS FIRST</p>
              </div>
              <div className="line"></div>
              <div className="heading">
                <h1 className={roboto_mono.className}>
                  Dedicated to diagnostics
                </h1>
              </div>
              <div className="desc">
                <p>
                  Affinity Hospitals are leading the way in high-quality
                  diagnostic imaging. For over 23 years, our experts have
                  combined service excellence and innovation to improve patient
                  access, experiences and outcomes. Request a scan or find your
                  nearest centre.
                </p>
              </div>
              <div className="buttons">
                <button className={roboto_mono.className}>CONTACT US</button>
                <button className={roboto_mono.className}>LEARN MORE</button>
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
