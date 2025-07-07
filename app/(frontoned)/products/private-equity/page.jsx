import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Private Equity",
    description: "Unlock tailored Private Equity investment opportunities to grow and safeguard your wealth according to your unique financial objectives.",
};

const PrivateEquity = () => {
    return (
        <div className="container mx-auto px-4 lg:px-32 py-18">
            {/* Heading and Subheading */}
            <div className="text-center pt-[80px] pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">Exclusive Private Equity Opportunities</h1>
                <div  className="em_bar mx-auto">
              <div className="em_bar_bg" />
            </div>
                <p className="text-xl text-gray-600 mt-2">Invest in High-Growth Private Companies</p>
            </div>

             {/* Introduction with Image */}
                        <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                            <div className="lg:w-1/2">
                            <p className="text-lg text-gray-700 text-justify mb-2">
                    Private Equity (PE) investments provide access to privately held companies with high growth potential. These investments allow investors to participate in long-term value creation through strategic management, operational improvements, and capital restructuring.
                </p>
                <p className="text-lg text-gray-700 text-justify">
                    Private Equity funds invest in companies that are not publicly traded, offering a hands-on approach to maximizing business performance. PE investments typically include buyouts, venture capital, and growth equity opportunities, providing investors with the potential for significant returns.
                </p>
                            </div>
                            <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                                <Image src="/Services/private-equity-1.jpg" alt="Investment Growth" width={500} height={300} className="rounded-lg shadow-lg" />
                            </div>
                        </div>
            
                        {/* Product Description with Image */}
                        {/* <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
                            <div className="md:w-1/2 md:pr-8 flex justify-center mb-6 md:mb-0">
                                <Image src="/fund-management.jpg" alt="Fund Management" width={500} height={300} className="rounded-lg shadow-lg" />
                            </div>
                            <div className="md:w-1/2">
                           
                            </div>
                        </div> */}

            {/* Types of Private Equity Investments */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Private Equity Investments</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <h3 className="font-semibold text-gray-800">Venture Capital</h3>
                        <p className="text-gray-700">Invest in early-stage startups with high growth potential, helping them scale and innovate.</p>
                    </li>
                    <li>
                        <h3 className="font-semibold text-gray-800">Growth Equity</h3>
                        <p className="text-gray-700">Provide capital to established companies looking to expand operations and accelerate growth.</p>
                    </li>
                    <li>
                        <h3 className="font-semibold text-gray-800">Leveraged Buyouts (LBOs)</h3>
                        <p className="text-gray-700">Acquire mature businesses through a combination of debt and equity, optimizing efficiency and profitability.</p>
                    </li>
                </ul>
            </div>

            {/* Features of Private Equity Investments */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features of Private Equity</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700">Access to High-Growth Companies: Invest in promising private enterprises.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Long-Term Capital Appreciation: Generate substantial returns over time.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Active Management: Influence business strategies and operational improvements.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Diversification Benefits: Reduce risk by investing in various sectors and geographies.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Exclusive Investment Opportunities: Gain access to deals not available in public markets.</p>
                    </li>
                </ul>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Private Equity investments offer the potential for high returns and strategic involvement in companies poised for growth. Explore our exclusive Private Equity opportunities and take your investment portfolio to the next level.
                </p>
                <Link href="/contactus" className='text-white'>
                    <Button className=" bg-[#2d5579] text-white rounded-2xl pl-8 pr-8 sm:text-lg md:text-xl">Start Investing in Private Equity Today!</Button>
                </Link>
            </div>
        </div>
    );
};

export default PrivateEquity;
