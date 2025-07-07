import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Real Estate Investment",
    description: "Explore lucrative real estate investment opportunities to grow and diversify your portfolio with premium properties.",
};

const RealEstate = () => {
    return (
        <div className="container mx-auto px-4 lg:px-32 py-18">
            {/* Heading and Subheading */}
            <div className="text-center pt-[80px] pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">Real Estate Investment</h1>
                <div  className="em_bar mx-auto">
              <div className="em_bar_bg" />
            </div>
                <p className="text-xl text-gray-600 mt-2">Secure Your Future with Strategic Property Investments</p>
            </div>

            {/* Introduction with Image */}
            <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2">
                    <p className="text-lg text-gray-700 text-justify lg:mt-10">
                        Investing in real estate offers financial security, passive income, and long-term wealth accumulation. Whether you are looking for residential, commercial, or rental properties, real estate remains one of the most stable and rewarding investments.
                    </p>
                </div>
                <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                    <Image src="/Services/real-estate-1.jpg" alt="Real Estate Investment" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Benefits of Real Estate Investment */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Invest in Real Estate?</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li><p className="text-gray-700">Steady Cash Flow: Earn passive income through rental properties.</p></li>
                    <li><p className="text-gray-700">Appreciation: Real estate values tend to increase over time.</p></li>
                    <li><p className="text-gray-700">Tax Benefits: Enjoy deductions on mortgage interest and property taxes.</p></li>
                    <li><p className="text-gray-700">Diversification: Strengthen your portfolio with tangible assets.</p></li>
                    <li><p className="text-gray-700">Leverage: Use financing to maximize your investment potential.</p></li>
                </ul>
            </div>

            {/* Real Estate Options */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Real Estate Investment Options</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li><p className="text-gray-700">Residential Properties: Invest in apartments, houses, and townhomes.</p></li>
                    <li><p className="text-gray-700">Commercial Properties: Office spaces, retail shops, and industrial buildings.</p></li>
                    <li><p className="text-gray-700">REITs (Real Estate Investment Trusts): Passive real estate investment opportunities.</p></li>
                    <li><p className="text-gray-700">Vacation Rentals: Short-term rental properties in prime locations.</p></li>
                    <li><p className="text-gray-700">Land Investment: Buy and hold land for future development.</p></li>
                </ul>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Explore the world of real estate investments to build wealth and secure financial freedom. Whether you are a first-time investor or a seasoned professional, our team is here to guide you toward the best opportunities.
                </p>
                <Link href="/contactus">
                    <Button className="bg-[#2d5579] text-white rounded-2xl pl-8 pr-8 text-xl">Start Your Real Estate Investment Today!</Button>
                </Link>
            </div>
        </div>
    );
};

export default RealEstate;