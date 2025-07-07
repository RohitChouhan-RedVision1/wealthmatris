import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { getServiceData, getSiteData } from "@/lib/functions";
import InnerBanner from "@/components/InnerBanner/InnerBanner";

export const metadata = {
  title: "Travel Planning",
  description:
    "Plan and fund your dream vacations with tailored investment strategies that turn travel goals into reality.",
};

const TravelPlanning = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();

  return (
    <div>
      <InnerBanner pageName="Travel Planning" />
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
                src="/Services/travel-planning.webp"
                alt="Travel Planning"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Fund Your Dream Getaways, Stress-Free
            </h2>

            <p className="mb-4">
              <strong className="text-[--rv-primary] text-lg">T</strong>ravel is
              one of life's most enriching experiences — and with smart
              financial planning, your dream destinations don’t have to remain a
              dream. At <strong>{sitedata.websiteName}</strong>, we help you
              build a dedicated travel fund through disciplined investing and
              goal-based savings.
            </p>

            <p className="mb-4">
              Whether it’s an international vacation, a honeymoon, or a family
              adventure, we help you stay financially ready with zero
              last-minute stress. Save consistently and travel freely!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Travel Goal-Based SIPs & Lumpsum
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Currency Inflation-Proof Investment Plans
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Destination Cost Estimation Tools
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Tax-Efficient Saving Instruments
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Dedicated Travel Corpus Strategy
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Peace of Mind for Every Journey
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact-us">
                <Button className="bg-[var(--rv-primary)] text-white sm:text-lg md:text-lg font-bold px-5 py-2 rounded-lg hover:bg-[var(--rv-primary)] transition-all cursor-pointer">
                  Start Your Travel Fund Today!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPlanning;
