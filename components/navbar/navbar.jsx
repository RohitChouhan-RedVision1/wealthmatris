"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const megaMenuData = {
  "Investment Solutions": [
    { title: "Mutual Funds", img: "/e99bcb1216d8f72fbded048efa204254.jpg", link: "/products/mutual-funds" },
    { title: "PMS (Portfolio Management Services)", img: "/9c7bc39aeed96a3d20917fa2fd2a40b1.jpg", link: "/products/pms" },
    { title: "AIFs (Alternate Investment Funds)", img: "/88172b9b7f068ba2153faf120334979e.jpg", link: "/products/Aifs" },
    { title: "Private Equity", img: "/670fb45544016d6d9393635be575d711.jpg", link: "/products/private-equity" },
    { title: "Unlisted Securities", img: "/sequrities.jpeg", link: "/products/unlisted-stocks" },
    { title: "Direct stocks", img: "/stocks.jpg", link: "/products/direct-stocks" },
    { title: "US Stocks Investing", img: "/usstock.webp", link: "/products/us-stocks" },
    { title: "GIFT City Funds for NRIs & Foreign Nationals", img: "/gifty.jpg", link: "/products/gifty" }
  ],
  "Wealth Preservation & Fixed Income": [
    { title: " Bank FDs/Corporate FDs ", img: "/9c7bc39aeed96a3d20917fa2fd2a40b1.jpg", link: "/products/coprate-fds" },
    { title: "Bonds/NCDs", img: "/670fb45544016d6d9393635be575d711.jpg", link: "/products/bonds" },
    { title: "Insurance (Life and Health)", img: "/e99bcb1216d8f72fbded048efa204254.jpg", link: "/products/insurance" },
  ],
  "Tax & Estate Planning": [
    { title: "Tax Planning", img: "/88172b9b7f068ba2153faf120334979e", link: "/products/tax-planning" },
    { title: "Will Formation ", img: "/9c7bc39aeed96a3d20917fa2fd2a40b1.jpg", link: "/products/will-formation" }
  ],
  "Legacy Planning": [
    { title: "Real Estate", img: "/88172b9b7f068ba2153faf120334979e", link: "/products//real-estate" }
  ]
};

const Navbar = ({service}) => {
  // console.log(service)
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const logoVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { delay: 0.6, duration: 0.5 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.8 + i * 0.2, duration: 0.3 },
    }),
  };

  const links = [
    { href: "/", text: "Home", target:"" },

    { href: "/about-us", text: "About us", target:"" },
    { href: "#", text: "Services", target:"", isNotLinkable: true, isDropdown: true },
    { href: "/tools", text: "Tools", target:"" },
    // { href: "/insights", text: "Alpha Insights", target:"" },
    // { href: "/blogs", text: "Blogs" },
    // { href: "/login", text: "Login", target:"" },
    { href: "/contactus", text: "Contact us", target:"" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      <motion.div
        className="bg-transparent relative flex justify-center"
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <nav
          className={`w-full max-w-screen-xl bg-[var(--rv-primary)] bg-opacity-90 shadow-md p-2 lg:px-15 z-50 flex justify-between items-center rounded-b-4xl transition-all duration-300 ${
            isSticky ? "fixed top-0" : "fixed top-0"
          }`}
        >
          <motion.div variants={logoVariants}>
            <Link href="/" className="logocontainer">
              <Image
                src="/logo.png"
                alt="Alpha 72 Logo"
                width={150}
                height={200}
                className="cursor-pointer"
              />
            </Link>
          </motion.div>

          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-white text-xl">
              {links.map((link, index) => (
                <motion.li
                  key={link.href}
                  custom={index}
                  variants={linkVariants}
                  className="relative py-4"
                  onMouseEnter={() =>
                    link.text === "Services" && setIsMegaMenuOpen(true)
                  }
                  onMouseLeave={() =>
                    link.text === "Services" && setIsMegaMenuOpen(false)
                  }
                >
                  {link.isNotLinkable ? (
                    <span className="cursor-default flex items-center gap-1">
                      {link.text}
                      <FaChevronDown className="text-sm mt-1" />
                    </span>
                  ) : (
                    <Link href={link.href} target={link.target} className="cursor-pointer items-center">{link.text}</Link>
                  )}

                  {link.text === "Services" && isMegaMenuOpen && (
                    <div className="absolute left-0 top-15">
                      <div className="relative top-full flex flex-col justify-between gap-2  bg-[var(--rv-primary)]  p-5  text-white  shadow-lg w-full border-t-2 border-white">
                        {service.map(
                          (service,index) => (
                            <div className="w-[300px]  " key={index}>
                              {/* <h4 className="font-bold text-[var(--rv-bg-primary)] h-16 mb-5">{category}</h4> */}
                              {/* {items.map((item) => ( */}
                                <Link
                                  href={`/service/${service.link}`}
                                  className="flex mb-2"
                                >
                                  {service.name}
                                </Link>
                              {/* ))} */}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>

        {/* Mobile Popup Menu */}
        {isOpen && (
          <div className="fixed top-20 left-0 w-full bg-[var(--rv-primary)] text-white flex flex-col items-center space-y-4 py-6 z-40 overflow-y-auto max-h-[80vh]">
            {links.map((link) => (
              <div key={link.text} className="w-full pl-4">
                {link.isDropdown ? (
                  <div>
                    <button 
                      onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                      className="text-lg flex   gap-1"
                    >
                      {link.text}
                      <FaChevronDown className="text-sm mt-1" />
                    </button>
                    {isMegaMenuOpen && (
  <div className="mt-2 bg-[#123456] p-4 rounded-md">
    {service.map((service,index) => (
      <div key={index} className="mb-2">
        {/* <h4 className="font-bold text-[var(--rv-bg-primary)] text-sm mb-1">{category}</h4> */}
        {/* {items.map((item) => ( */}
          <Link
            key={service.link}
            href={`/service`}
            className="block py-1 text-sm"
            onClick={() => {
              setIsOpen(false);
              setIsMegaMenuOpen(false);
            }}
          >
            {service.name}
          </Link>
        {/* ))} */}
      </div>
    ))}
  </div>
)}

                  </div>
                ) : (
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
