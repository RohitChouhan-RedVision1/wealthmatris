import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "US Stocks Investing",
    description: "Invest in US stocks to diversify your portfolio and gain exposure to top global companies like Apple, Amazon, and Tesla.",
};

const USStocksInvesting = () => {
    return (
        <div className="container mx-auto px-4 lg:px-32 py-18">
            {/* Heading and Subheading */}
            <div className="text-center pt-[80px] pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">US Stocks Investing</h1>
                <div  className="em_bar mx-auto">
              <div className="em_bar_bg" />
            </div>
                <p className="text-xl text-gray-600 mt-2">Invest in the World's Leading Companies</p>
            </div>

            {/* Introduction with Image */}
            <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2">
                    <p className="text-lg text-gray-700 lg:mt-20 text-justify">
                        Investing in US stocks allows you to own shares in top global companies like Apple, Microsoft, Amazon, and Tesla. 
                        Gain access to a stable and high-growth market with strong financial regulations and innovation-driven industries.
                    </p>
                </div>
                <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                    <Image src="/Services/US-Stocks-Investing-1.jpg" alt="US Stock Market" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Benefits of US Stocks Investing */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Invest in US Stocks?</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700">Global Market Leaders: Own shares in world-renowned companies with strong growth potential.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Diversification: Reduce risk by spreading investments across different sectors and industries.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Strong Regulations: Benefit from a well-regulated and transparent market environment.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Currency Advantage: Earn in US dollars, one of the most stable global currencies.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Access to Innovation: Invest in companies driving technological advancements and industry disruptions.</p>
                    </li>
                </ul>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Start your journey in US stock investing today and take advantage of opportunities in the world's largest economy. 
                    Diversify your portfolio with global giants and emerging tech leaders.
                </p>
                <Link href="/contactus" className='text-white'>
                    <Button className=" bg-[#2d5579] text-white rounded-2xl pl-8 pr-8 text-xl">Start Investing in US Stocks!</Button>
                </Link>
            </div>
        </div>
    );
};

export default USStocksInvesting;