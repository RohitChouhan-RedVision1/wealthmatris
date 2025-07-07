import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Corporate Fixed Deposits (FDs)",
  description:
    "Invest in Corporate Fixed Deposits (FDs) for attractive interest rates and stable returns with leading financial institutions.",
};

const CorporateFDs = () => {
  return (
    <div className="container mx-auto px-4 lg:px-32 py-18">
      {/* Heading and Subheading */}
      <div className="text-center pt-[80px] pb-[50px]">
        <h1 className="text-3xl font-bold text-gray-800">
          Bank Fixed Deposits & Corporate Fixed Deposits (FDs)
        </h1>
        <div className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </div>
        <p className="text-xl text-gray-600 mt-2">
          Secure and High-Yield Investment Options
        </p>
      </div>

      {/* Introduction with Image */}
      <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 mt-10 text-justify">
            Bank and Corporate Fixed Deposits (FDs) are term deposit instruments
            offered by banks and non-banking financial companies (NBFCs)
            respectively. They are considered safe and reliable investment
            options, providing stable returns over a fixed tenure. While Bank
            FDs are known for their security and trust, Corporate FDs often
            offer higher interest rates, making both suitable based on your
            investment goals and risk appetite.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/Services/corporate-fds-1.jpg"
            alt="Corporate FD"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Benefits of Corporate FDs */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Benefits of Investing in Bank & Corporate FDs
        </h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <p className="text-gray-700">
              Stable Returns: Both Bank and Corporate FDs provide fixed returns
              over a defined period, making them reliable investment options.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              Flexible Tenure: Choose from a variety of deposit durations to
              align with your financial goals.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              Safety & Credit Ratings: Bank FDs are backed by banks and may be
              insured, while Corporate FDs often come with credit ratings to
              help assess risk.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              Interest Payout Options: Opt for monthly, quarterly, or cumulative
              interest payouts depending on your income needs.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              Portfolio Diversification: Combine both types of FDs to balance
              risk and optimize returns within your investment portfolio.
            </p>
          </li>
        </ul>
      </div>

      {/* Conclusion and CTA */}
      <div className="text-center mt-8">
  <p className="text-lg text-gray-700 mb-4">
    Secure your financial future with Bank and Corporate FDs that offer a blend of safety, stability, and attractive interest rates. Start investing today!
  </p>
  <Link href="/contactus" className="text-white">
    <Button className="bg-[#2d5579] text-white rounded-2xl pl-8 pr-8 text-xl">
      Start Your FD Investment Now!
    </Button>
  </Link>
</div>

    </div>
  );
};

export default CorporateFDs;
