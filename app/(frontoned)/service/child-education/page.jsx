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
  title: "Child Education Planning",
  description:
    "Secure your child's future with smart education planning. Invest early to fund higher education without financial stress.",
};

const ChildEducation = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();

  return (
    <div>
      <InnerBanner pageName="Child Education Planning" />
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
                src="/services/child-education.webp"
                alt="Child Education Planning"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Invest Early for a Brighter Academic Future
            </h2>

            <p className="mb-4">
              <strong className="text-[--rv-primary] text-lg">C</strong>hild education planning ensures your child has the resources to pursue higher education without financial constraints. At <strong>{sitedata.websiteName}</strong>, we help you design a step-by-step investment roadmap based on future costs, inflation, and your income capacity.
            </p>

            <p className="mb-4">
              By starting early, you can take advantage of compounding, tax benefits, and disciplined SIP investments that grow steadily and meet your education funding goals when the time comes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Goal-Based Education Planning
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Child-Specific Mutual Fund Portfolios
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                SIP with Long-Term Growth Focus
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Inflation-Adjusted Goal Mapping
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Tax Benefits Under 80C & 10(10D)
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                Peace of Mind for Every Parent
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact-us">
                <Button className="bg-[var(--rv-primary)] text-white sm:text-lg md:text-lg font-bold px-5 py-2 rounded-lg hover:bg-[var(--rv-primary)] transition-all cursor-pointer">
                  Start Planning for Your Child’s Future
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildEducation;
