import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Unlisted Stocks",
    description: "Explore exclusive Unlisted Stock investment opportunities to grow and diversify your wealth with high-potential private companies.",
};

const UnlistedStocks = () => {
    return (
        <div className="container mx-auto px-4 lg:px-32 py-18">
            {/* Heading and Subheading */}
            <div className="text-center pt-[80px] pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">Exclusive Unlisted Stock Investments</h1>
                <div  className="em_bar mx-auto">
              <div className="em_bar_bg" />
            </div>
                <p className="text-xl text-gray-600 mt-2">Invest in High-Potential Private Companies</p>
            </div>

 {/* Introduction with Image */}
            <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 text-justify mb-2">
                    Unlisted Stocks provide investors access to privately held companies before they go public. These investments offer opportunities for high growth potential and diversification beyond traditional stock markets.
                </p>
                <p className="text-lg text-gray-700 text-justify">
                    Investing in unlisted stocks allows investors to get in early on promising businesses, gaining exposure to industries poised for significant expansion. These stocks are not traded on public exchanges, providing exclusive investment opportunities.
                </p>
                </div>
                <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                    <Image src="/Services/unlisted-securities-1.jpg" alt="Investment Growth" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Product Description with Image */}
            {/* <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2 lg:pr-8 flex justify-center mb-6 lg:mb-0">
                    <Image src="/fund-management.jpg" alt="Fund Management" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-1/2">
                
                </div>
            </div> */}

            {/* Benefits of Unlisted Stock Investments */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Investing in Unlisted Stocks</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700">Early-Stage Investment: Gain early access to high-growth companies before they go public.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Diversification: Add unique assets to your portfolio that are not correlated with public markets.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Potential for High Returns: Benefit from the rapid growth of emerging businesses.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Exclusive Opportunities: Invest in companies not available to retail investors on the stock exchange.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Strategic Investment Options: Participate in pre-IPO opportunities for well-established firms.</p>
                    </li>
                </ul>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Investing in unlisted stocks can provide unique opportunities for substantial wealth creation. Take advantage of these exclusive investments to enhance your portfolio and gain early access to the next big market leaders.
                </p>
                <Link href="/contactus" className='text-white'>
                    <Button className=" bg-[#2d5579] text-white rounded-2xl pl-8 pr-8 text-xl">Start Investing in Unlisted Stocks Today!</Button>
                </Link>
            </div>
        </div>
    );
};

export default UnlistedStocks;
