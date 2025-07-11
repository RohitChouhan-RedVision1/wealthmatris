import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { getServiceData, getSiteData } from "@/lib/functions";
import InnerBanner from "@/components/InnerBanner/InnerBanner";

export const metadata = {
  title: "GIFT City Funds",
  description:
    "Explore tax-efficient global investment options via GIFT City Funds. Invest in international markets through India's financial gateway.",
};

const GiftCityFunds = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();

  return (
    <div>
      <InnerBanner pageName="GIFT City Funds" />
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="space-y-6 md:sticky top-24 self-start h-fit">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-[--rv-primary] mb-4">
                Our Service
              </h3>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center border-b pb-2 hover:text-[--rv-primary] group"
                  >
                    <Link
                      href={`/service/${service.link}`}
                      className="flex-1 transition-colors duration-300"
                    >
                      + {service.name}
                    </Link>
                    <span className="text-xl -rotate-45 transition-transform duration-300 group-hover:rotate-0">
                      →
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="rounded-xl overflow-hidden mb-6">
              <Image
                src="/service/gift-city-funds.webp"
                alt="GIFT City Funds"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Global Investing via GIFT City Made Simple
            </h2>

            <p className="mb-4">
              <strong className="text-[--rv-primary] text-lg">G</strong>IFT
              (Gujarat International Finance Tec-City) is India’s gateway to
              global investing. It offers a regulated and tax-efficient route
              for Indian investors to access international funds, bonds, and
              securities — all without violating foreign exchange laws.
            </p>

            <p className="mb-4">
              At <strong>{sitedata.websiteName}</strong>, we simplify GIFT City
              investments, giving you access to global mutual funds, ETFs, and
              fixed-income products while enjoying exemptions on capital gains
              and dividends.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Invest in Global Markets via India
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Tax-Free Capital Gains & Dividends
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                No LRS (Liberalized Remittance Scheme) Required
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Lower Transaction & Forex Costs
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Access to Global Mutual Funds & ETFs
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Regulated by IFSCA for Investor Safety
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact-us">
                <Button className="bg-[var(--rv-primary)] text-white sm:text-lg md:text-lg font-bold px-5 py-2 rounded-lg hover:bg-[var(--rv-primary)] transition-all cursor-pointer">
                  Invest via GIFT City Today!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCityFunds;
