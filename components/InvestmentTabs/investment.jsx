"use client"
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./investment.css"
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useScreenSize } from "@/hooks/usewindowsize";



const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

export default function InvestmentTabs({service}) {
  // console.log(service)
  const screenWidth = useScreenSize();


  let useSlider = false;
  if (screenWidth < 768) {
    useSlider = service.length > 1;
  } else if (screenWidth < 1024) {
    useSlider = service.length > 2;
  } else {
    useSlider = service.length > 3;
  }

  const settings = {
    dots: true,
    infinite: service.length >= 4,
    speed: 500,
    slidesToShow: Math.min(3, service.length),
    slidesToScroll: 1,
    autoplay: service.length >= 4,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, service.length),
          slidesToScroll: 1,
          dots: service.length >= 2,
          infinite: service.length >= 2,
          autoplay: service.length >= 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: service.length > 1,
          autoplay: service.length > 1,
        }
      }
    ]
  };
  

  return (
    <div className=" bg-[#b2b2b21f]">
      <div className="max-w-screen-xl mx-auto main_section ">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={0}
          className="topheading text-[var(--rv-primary)] text-center">
          PRODUCT OFFERINGS
        </motion.h2>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={1}
          className="subheading text-[var(--rv-primary)] text-center">
          Tailored solutions for your <br /> financial growth
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={2}
          className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </motion.div>
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={3}
          className="flex flex-wrap justify-center space-x-4 mb-4">
          {Object.keys(tabData).map((tab) => (
            <Button
              key={tab}
              className={`px-4 py-4 rounded-lg mb-4 cursor-pointer section3cardheading ${
                activeTab === tab ? "bg-[var(--rv-primary)] text-white" : "bg-[#1e3b4a] text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </motion.div> */}

        {useSlider  ? (
          <Slider {...settings}>
            {service.map((card, index) => (
              <div key={index} className="p-4">
                <Link href={card.link}>
                  <div className="relative rounded-lg overflow-hidden">
                    <Image width={400} height={400} src={`/${card?.imageSrc}`} alt={card.name} className="w-full h-[400px] object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[var(--rv-primary)] p-5 text-center section3cardheading text-white font-semibold">
                      {card.name}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 justify-items-center">

            {service.map((card, index) => (
              <div key={index} className="p-4 justify-center items-center h-[400px] max-w-[335px]">
                <Link href={card.link}>
                  <div className="relative rounded-lg overflow-hidden">
                    <Image width={400} height={400} src={`/${card?.imageSrc}`} alt={card.name} className="w-full h-[400px] object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[var(--rv-primary)] p-5 text-center text-2xl section3cardheading text-white font-semibold">
                      {card.name}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
