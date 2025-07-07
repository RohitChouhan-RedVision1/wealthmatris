import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaEnvelope, FaMapLocation, FaPhone } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";
import { getServiceData, getSiteData } from "@/lib/functions";
import InnerBanner from "@/components/InnerBanner/InnerBanner";

export const metadata = {
  title: "Financial Freedom (FIRE)",
  description:
    "Achieve Financial Independence and Retire Early with our expert-guided FIRE strategies and investment tools.",
};

const FinancialFreedom = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();

  return (
    <div>
      <InnerBanner pageName="Financial Freedom (FIRE)" />
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
                src="/services/financial-freedom.webp"
                alt="Financial Freedom FIRE"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Achieve Financial Independence & Retire Early
            </h2>

            <p className="mb-4">
              <strong className="text-[--rv-primary] text-lg">F</strong>inancial
              Independence, Retire Early (FIRE) is a movement built on the
              principles of disciplined saving, smart investing, and intentional
              living. At <strong>{sitedata.websiteName}</strong>, we provide you
              with the tools and strategies to help you build wealth, reduce
              dependency on 9-to-5 jobs, and gain the freedom to live life on
              your terms.
            </p>

            <p className="mb-4">
              Whether you're starting your journey or already investing, our
              FIRE-aligned portfolio recommendations and planning resources are
              designed to accelerate your path to financial freedom.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Customized FIRE Investment Roadmaps
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Expense Optimization & Budgeting Tools
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Early Retirement Planning Support
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Passive Income & Tax Efficiency Guidance
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Long-Term Wealth Creation Framework
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Access to FIRE-Focused Mutual Funds
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact-us">
                <Button className="bg-[var(--rv-primary)] text-white sm:text-lg md:text-lg font-bold px-5 py-2 rounded-lg hover:bg-[var(--rv-primary)] transition-all cursor-pointer">
                  Start Your FIRE Journey Today!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialFreedom;
