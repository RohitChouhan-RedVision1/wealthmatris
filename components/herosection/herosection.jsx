"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
const MotionButton = motion(Button);

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay },
  }),
};

const itemVariants1 = {
  hidden: { opacity: 0, x: -50, zoom: 1.5 },
  visible: (delay) => ({
    opacity: 1,
    x: 0,
    zoom: 1,
    transition: { duration: 0.5, delay },
  }),
};
const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 1 } },
};

export const HeroSection = ({sitedata}) => {
  const [gifSrc, setGifSrc] = useState("/hero2.gif");

  useEffect(() => {
    // First visit — bust cache to force playback
    setGifSrc(`/hero2.gif?cb=${Date.now()}`);
    sessionStorage.setItem("gifPlayed", "true");
  }, []);

  return (
    <div className="">
      <div className="max-w-9xl  mx-auto ">
        <section
          className="flex min-h-180 flex-col  items-center text-center  bg-cover bg-center text-white pt-20"
          style={{ backgroundImage: "url('/banner1.jpg')" }}
        >
          <div className="">
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center z-10 p-4"
            >
              {/* <div>
                <h1 className="bannerheading  mb-10 relative">
                  <motion.span variants={itemVariants} custom={0.1}>
                    Wealth 
                  </motion.span>{" "}
                  <motion.span variants={itemVariants} custom={0.3}>
                    +
                  </motion.span>{" "}
                  <motion.span variants={itemVariants} custom={0.5}>
                    Matrix 
                  </motion.span>{" "}
                  <motion.span variants={itemVariants} custom={0.7}>
                    ={" "}
                  </motion.span>
                  <motion.span
                    variants={itemVariants}
                    custom={0.9}
                    className="inline-block w-[300px] h-[100px] md:w-[300px] md:h-[100px]"
                  >
                    <img
                      src={gifSrc}
                      alt="Animated background"
                      className="h-[180px] object-cover"
                      unoptimized
                    />
                  </motion.span>
                  <motion.span variants={itemVariants1} custom={0.9} className="text-[var(--rv-primary)] beyondheading">Happiness</motion.span>
                </h1>
              </div> */}

              <motion.p
                variants={itemVariants}
                custom={1.1}
                className="hero-title-main mt-20"
              >
                Let’s Complete Your Wealth Equation.
              </motion.p>
              <motion.p
                variants={itemVariants}
                custom={1.3}
                className="mt-4 text-sm md:text-lg max-w-2xl text-center mb-4 "
              >
                At {sitedata?.websiteName} , we believe true wealth is created when your financial resources are paired with strategic thinking, personalized planning, and informed decision-making — that’s the Matrix.
              </motion.p>

              <MotionButton
                variants={buttonVariants}
                className="mt-6 font-bold bg-[var(--rv-secondary)] px-4 py-2 rounded-lg"
              >
                <Link href="/contactus" className="pointer text-[var(--rv-primary)] font-bold text-xl">
                  Begin Your Journey
                </Link>
              </MotionButton>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};
