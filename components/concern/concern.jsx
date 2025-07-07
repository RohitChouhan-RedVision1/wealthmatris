"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const data = [
  { question: `"I Earn Well, But I’m Not Sure If I’m Investing Right."`, answer: `We design a personalized investment strategy aligned with your income, goals, and risk appetite—ensuring your money grows the way you want.` },
  { question: `"My money is just sitting in my savings account."`, answer: `Inflation erodes savings. We help you shift to smart investments that protect and grow your wealth.` },
  { question: `"There are too many investment options—I’m overwhelmed."`, answer: `We simplify investing with clear, unbiased strategies tailored to your goals, cutting through the market noise.` },
  { question: `"I want to invest, but I fear losing money."`, answer: `We balance risk and reward with a mix of secure and high-growth investments, ensuring sustainable wealth creation.` },
  { question: `"I have long-term goals, but no clear plan."`, answer: `From home ownership to retirement, we build a structured roadmap to help you reach financial milestones stress-free.` },
  { question: `"I’ve invested, but I don’t know if I’m on track."`, answer: `We provide ongoing monitoring and rebalancing to keep your portfolio optimized for changing markets and goals.` },
  { question: `"I don’t have time to manage my investments."`, answer: `We handle everything—from research to execution—so you can focus on what truly matters.` },
];

const CustomArrow = ({ onClick, direction }) => (
  <Button
    onClick={onClick}
    className={`absolute ${direction === 'prev' ? 'left-[-6px]' : 'right-[-6px]'} top-1/2 transform -translate-y-1/2 text-[var(--rv-primary)] bg-[var(--rv-secondary)] p-3 rounded-full z-10`}
  >
    {direction === "prev" ? "\u2B9C" : "\u2B9E"}
  </Button>
);

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

export default function Concern() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ],
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  return (
    <div className=" bg-white ">
      <div className="max-w-screen-xl mx-auto main_section">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={0}
          className="topheading text-[var(--rv-primary)] text-center"
        >
          YOUR CONCERN
        </motion.h2>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={1}
          className="subheading text-[var(--rv-primary)] mb-4 text-center"
        >
          How Wealth Matrix Finserv LLP <br />
          Solves Real Investor Concerns
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={2}
          className="text-lg font-semibold mb-4 text-center"
        >
          At Wealth Matrix Finserv LLP, we go beyond basic advice—we solve genuine financial concerns through
          tailored, actionable strategies that empower you to invest confidently and grow consistently.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={3}
          className="em_bar mx-auto"
        >
          <div className="em_bar_bg" />
        </motion.div>
        <div className="max-w-screen-xl md:max-w-screen-xl px-10 mx-auto items-center">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                key={index}
                className="p-4"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`h-64 md:h-96 lg:h-72 rounded-lg shadow-lg p-4 text-center transition-all border border-[var(--rv-primary)] duration-300 ease-in-out bg-[var(--rv-primary)] text-white`}
                >
                  <h1 className="text-xl font-extrabold mb-4">{item.question}</h1>
                  <p className="text-lg">{item.answer}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
