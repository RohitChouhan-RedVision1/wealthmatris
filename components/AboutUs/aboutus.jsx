"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay) => ({ opacity: 1, x: 0, transition: { duration: 0.5, delay } }),
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <div className="bg-white">
      <div className=" max-w-screen-xl mx-auto main_section">
        <section className="  flex flex-col lg:flex-row gap-5 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={imageVariants}
            className="w-full pt-10 lg:pt-0 lg:w-[50%] lg:px-5 lg:ml-5 rounded-lg flex flex-col"
          >
            <div className="rounded-lg">
              <Image src="/Group 8.png" alt="Team" width={550} height={400} className=" rounded-lg" />
            </div>
            <div className="mt-5  flex rounded-lg">
              <div className="w-[60%]">
                <Image width={500} height={200} src="/new-generation-businessmen-who-are-working (2).png" alt="Team" className="w-full h-[220px] rounded-lg" loading="lazy"/>
              </div>
              <div className="w-[40%]">
                <Image width={500} height={200}  src="/Group 235.svg" alt="Team" className="w-full h-[220px] object-contain" loading="lazy"/>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-[50%] flex flex-col"
          >
            <motion.h2 variants={textVariants} custom={0.1} className="topheading text-[var(--rv-primary)]">
              ABOUT US
            </motion.h2>
            <motion.h3 variants={textVariants} custom={0.3} className="subheading text-[var(--rv-primary)]">
              Who We Are
            </motion.h3>
            <motion.div variants={textVariants} custom={0.5} className="em_bar">
              <div className="em_bar_bg" />
            </motion.div>
            <motion.div variants={textVariants} custom={0.7} className="max-w-4xl text-black leading-relaxed text-justify">
              <motion.p variants={textVariants} custom={0.9} className=" font-[20px]">
              At Wealth Matrix, we believe true wealth goes beyond numbers, it’s about designing a life of freedom, security, and impact.
              </motion.p>
              <motion.p variants={textVariants} custom={1.1} className=" font-[20px] mt-2">
              Our client-first approach means every strategy we build is tailored to your unique goals whether that’s growing your wealth, securing your family’s future, or leaving a legacy that lasts generations.
              </motion.p>
              <motion.p variants={textVariants} custom={1.3} className=" font-[20px] mt-2">
              With over 15 years of trusted experience, we combine evidence based financial planning with cutting edge technology, giving you clarity and confidence in every decision. From smart investments and tax optimisation to estate planning and retirement readiness, our holistic solutions give you a 360° view of your financial life.
              </motion.p>
              <motion.p variants={textVariants} custom={1.5} className=" font-[20px] mt-2">
              Most importantly, we help you prosper with purpose. Because managing money well is not just about growth, it’s about creating time, freedom, and peace of mind for what truly matters.
              </motion.p>
            </motion.div>
          </motion.div>

          
        </section>
      </div>
    </div>
  );
};
