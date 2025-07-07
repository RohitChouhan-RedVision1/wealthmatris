"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa6";

export function Footer({ sitedata, service, arn, socialMedia }) {
  console.log(arn);
  const socialIconMap = {
    Facebook: <FaFacebook className="text-2xl" />,
    Instagram: <FaInstagram className="text-2xl"/>,
    Linkedin: <FaLinkedin className="text-2xl"/>,
    Youtube: <FaYoutube className="text-2xl"/>,
    Twitter: <FaTwitter className="text-2xl"/>,
    Whatsapp: <FaWhatsapp className="text-2xl"/>,
  };
  const amfisabilinks = [
    { title: "Privacy Policy", link: "/footer-page/privacy-policy" },
    { title: "Commission Disclosures", link: "/commission-disclosures" },
  { title: "Risk Factors", link: "/footer-page/risk-factors" },
  { title: "Terms & Conditions", link: "/footer-page/terms-conditions" },
  { title: "SID/SAI/KIM", link: "https://www.sebi.gov.in/filings/mutual-funds.html", target: "_blank" },
  { title: "Code of Conduct", link: "/AMFI_Code-of-Conduct1.pdf", target: "_blank" },
  { title: "Investor Grievance Redressal", link: "/footer-page/investor-grievance-redressal" },
  { title: "Important links", link: "/footer-page/important-links" },
  { title: "SEBI Circulars", link: "https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListingAll=yes&search=Mutual+Funds", target: "_blank" },
];
  return (
    <div>
      <footer className="max-w-[1900px] mx-auto relative text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:shadow-[0px_-10px_13px_rgba(0,0,0,0.33)] lg:h-[980px] md:h-[820px]  bg-[var(--rv-primary)] lg:transform lg:rounded-t-full"
        >
          <div className="lg:relative lg:top-50 lg:max-w-screen-xl lg:mx-auto lg:items-center text-center p-10 lg:p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
              <div>
                <h4 className="font-semibold text-xl mb-5">Services</h4>
                <ul>
                  {service.map((service, index) => (
                    <li key={index} className="mb-2 text-lg">
                      <Link href={`/service/${service.link}`}>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Image
                  src="/logo.png"
                  alt="Footer Logo"
                  width={200}
                  height={200}
                  className="mx-auto mb-5"
                />
                <h4 className="font-semibold text-2xl mb-5">Contact</h4>
                <p>
                  <Link
                    href={`tel:${sitedata.mobile}`}
                    className="mb-2 text-lg"
                  >
                    {sitedata.mobile}
                  </Link>
                </p>

                {sitedata.alternateMobile && (
                  <p>
                    <Link
                      href={`tel:${sitedata.alternateMobile}`}
                      className="mb-2 text-lg"
                    >
                      {sitedata.alternateMobile}
                    </Link>
                  </p>
                )}

                <p>
                  <Link
                    href={`mailto:${sitedata.email}`}
                    className="mb-2 text-lg"
                  >
                    {sitedata.email}
                  </Link>
                </p>
                <p className="mb-2 text-lg">
                  <a
                    href="https://maps.app.goo.gl/6wDFJyskBiGzymA27"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {sitedata.address}
                  </a>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-2xl mb-5">Quick Links</h4>
                <ul>
                  <li className="mb-2 text-lg">
                    <Link href="/about-us">About us</Link>
                  </li>
                  <li className="mb-2 text-lg">
                    <Link href="/contactus">Contact us</Link>
                  </li>
                  {/* <li className="mb-2 text-lg">
                    <Link href="/blogs">Blogs</Link>
                  </li> */}
                  <li className="mb-2 text-lg">
                    <Link href="/tools/calculators">Financial Calculator</Link>
                  </li>
                   <li className="mb-2 text-lg">
                    <Link href="/tools/financial-health">Financial Health</Link>
                  </li>
                  <li className="mb-2 text-lg">
                    <Link href="/tools/useful-links">Useful Links</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
                {socialMedia?.map((item, index) => (
                  <div key={index}>
                    <Link href={item.url} className="cursor-pointer">
                      {socialIconMap[item.title] ?? null}
                    </Link>
                  </div>
                ))}
              
            </div>

            <div className="w-full border-t border-gray-300/20 rounded-full my-4 mt-5"></div>

            <div className="disclaimer-sec text-center">
              <div className="content-b">
                <p className="p-2 text-white/90 flex flex-wrap items-center justify-center gap-1">
      {amfisabilinks.map((item, index) => (
        <span key={index}>
          <Link
            href={item.link}
            target={item.target || "_self"}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            download={item.link.endsWith(".pdf") ? true : undefined}
          >
            {item.title}
          </Link>
          {index !== amfisabilinks.length - 1 && <span> | </span>}
        </span>
      ))}
    </p>
                <p className="">
                  <b>{sitedata.websiteName}</b> is an AMFI Registered Mutual Fund
                  Distributor.
                </p>
                <p>
                  Disclaimer: Mutual fund investments are subject to market
                  risks. Please read the scheme information and other related
                  documents carefully before investing. Past performance is not
                  indicative of future returns. Please consider your specific
                  investment requirements before choosing a fund, or designing a
                  portfolio that suits your needs.
                </p>
                <p>
                  <b>{sitedata.websiteName}</b> makes no warranties or representations,
                  express or implied, on products offered through the platform
                  of <b>{sitedata.websiteName}</b>. It accepts no liability for any
                  damages or losses, however, caused, in connection with the use
                  of, or on the reliance of its product or related services.
                  Terms and conditions of the website are applicable.
                  Investments in Securities markets are subject to market risks,
                  read all the related documents carefully before investing.
                </p>

                <div className="footer-content pb-4 flex gap-10 items-center justify-center mt-2">
                  <div className="footer-list flex flex-col items-center md:flex-row gap-2">
                    <div className="image ">
                      <Image
                        src="/amfi.jpg"
                        height={100}
                        width={100}
                        alt="AMFI"
                      />
                    </div>
                    <div className="contentb">
                      <p>AMFI Registered</p>
                      <p>ARN - {arn[0]?.arn}</p>
                      <p>EUIN - {arn[0]?.euins[0]?.euin}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-gray-300/20 rounded-full my-2 mt-2"></div>
            <div className="flex flex-col md:flex-row justify-between">
               <div >
              <p>
                © Copyright 2025 - <strong className="text-white/90 bold">{sitedata.websiteName}</strong>. All Right Reserved
              </p>
            </div>
            <div >
             <Link
                target="_blank"
                href="https://www.redvisiontechnologies.com/"
                className="hover:underline me-4 md:me-6"
              >
                <p>Designed & Developed by REDVision Global Technologies</p>
              </Link>
            </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
