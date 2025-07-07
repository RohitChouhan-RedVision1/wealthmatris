import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { getServiceData, getSiteData } from "@/lib/functions";
import InnerBanner from "@/components/InnerBanner/InnerBanner";

export const metadata = {
  title: "Invest in US Stocks",
  description:
    "Diversify your portfolio with US stocks. Access global giants like Apple, Amazon, and Tesla through a secure investment platform.",
};

const UsStocks = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();

  return (
    <div>
      <InnerBanner pageName="Invest in US Stocks" />
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
                src="/services/us-investing.webp"
                alt="Invest in US Stocks"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Global Exposure with US Stock Investments
            </h2>

            <p className="mb-4">
              <strong className="text-[--rv-primary] text-lg">U</strong>S Stocks
              open the doors to investing in the world's largest and most
              innovative companies — like Apple, Amazon, Microsoft, and Tesla.
              At <strong>{sitedata.websiteName}</strong>, we simplify global
              investing for Indian investors by providing seamless access to US
              markets.
            </p>

            <p className="mb-4">
              Whether you're looking to diversify your portfolio, hedge against
              currency fluctuations, or participate in global growth, we offer a
              secure, paperless platform to start investing in US equities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Invest in Global Giants like Apple, Google, Tesla
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Dollar Diversification for Currency Hedge
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Zero Paperwork, 100% Digital Process
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Fractional Investing Options
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Research & Advisory Support
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Compliant with RBI LRS Guidelines
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact-us">
                <Button className="bg-[var(--rv-primary)] text-white sm:text-lg md:text-lg font-bold px-5 py-2 rounded-lg hover:bg-[var(--rv-primary)] transition-all cursor-pointer">
                  Start Investing in US Stocks Today!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsStocks;
