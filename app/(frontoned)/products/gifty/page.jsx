import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "GIFT City Funds for NRIs & Foreign Nationals",
    description: "Invest in GIFT City funds for tax-efficient and globally accessible investment opportunities tailored for NRIs and foreign nationals.",
};

const GiftCityFunds = () => {
    return (
        <div className="container mx-auto px-4 lg:px-32 py-18">
            {/* Heading and Subheading */}
            <div className="text-center pt-[80px] pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">GIFT City Funds for NRIs & Foreign Nationals</h1>
                <div  className="em_bar mx-auto">
              <div className="em_bar_bg" />
            </div>
                <p className="text-xl text-gray-600 mt-2">Global Investment Opportunities with Tax Efficiency</p>
            </div>

            {/* Introduction with Image */}
            <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2">
                    <p className="text-lg text-gray-700 text-justify lg:mt-10">
                        GIFT City (Gujarat International Finance Tec-City) provides a strategic platform for NRIs and foreign nationals to invest in India’s rapidly growing economy. These funds offer tax advantages, regulatory benefits, and seamless global accessibility.
                    </p>
                </div>
                <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                    <Image src="/Services/GIFT-City-Funds-1.jpg" alt="GIFT City" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Key Benefits */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Invest in GIFT City Funds?</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li><p className="text-gray-700">Tax Efficiency: Enjoy tax benefits on capital gains and dividends.</p></li>
                    <li><p className="text-gray-700">Global Access: Invest from anywhere in the world with seamless transactions.</p></li>
                    <li><p className="text-gray-700">Regulatory Ease: Benefit from a well-regulated, investor-friendly ecosystem.</p></li>
                    <li><p className="text-gray-700">Diverse Asset Classes: Gain exposure to equities, bonds, and alternative investments.</p></li>
                    <li><p className="text-gray-700">Strategic Location: India’s first International Financial Services Centre (IFSC) offering global investment opportunities.</p></li>
                </ul>
            </div>

            {/* Investment Process with Image */}
            <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2 lg:pr-8 flex justify-center mb-6 lg:mb-0">
                    <Image src="/Services/GIFT-City-Funds-2.jpg" alt="Investment Process" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Invest?</h2>
                    <p className="text-lg text-gray-700">Investing in GIFT City funds is simple and accessible for NRIs & foreign nationals:</p>
                    <ul className="list-disc pl-5 space-y-4 mt-4">
                        <li><p className="text-gray-700">Open an investment account with an IFSC-registered fund house.</p></li>
                        <li><p className="text-gray-700">Choose from equity, debt, and alternative investment funds.</p></li>
                        <li><p className="text-gray-700">Invest seamlessly with digital KYC and online transactions.</p></li>
                        <li><p className="text-gray-700">Monitor and manage your investments with real-time insights.</p></li>
                    </ul>
                </div>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Unlock new investment opportunities with GIFT City funds. Diversify your portfolio, enjoy tax benefits, and invest in India’s thriving financial hub.
                </p>
                <Link href="/contactus" className='text-white'>
                    <Button className=" bg-[#2d5579] text-white rounded-2xl pl-8 pr-8 text-xl">Start Investing in GIFT City Funds!</Button>
                </Link>
            </div>
        </div>
    );
};

export default GiftCityFunds;