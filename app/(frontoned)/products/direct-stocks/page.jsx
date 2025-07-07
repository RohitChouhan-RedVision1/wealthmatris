import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Direct Stocks",
    description: "Invest directly in publicly traded companies and build your portfolio with high-quality stocks.",
};

const DirectStocks = () => {
    return (
        <div className="container mx-auto px-4 lg:px-32 py-18">
            {/* Heading and Subheading */}
            <div className="text-center pt-[80px] pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">Invest in Direct Stocks</h1>
                <div  className="em_bar mx-auto">
              <div className="em_bar_bg" />
            </div>
                <p className="text-xl text-gray-600 mt-2">Own Shares in Leading Public Companies</p>
            </div>

            {/* Introduction with Image */}
            <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2">
                    <p className="text-lg text-gray-700 text-justify mb-2">
                        Direct stock investments allow you to own shares in publicly traded companies, giving you voting rights and the opportunity to participate in their financial growth. Investing in stocks provides liquidity, transparency, and potential capital appreciation.
                    </p>
                    <p className="text-lg text-gray-700 text-justify">
                        Investing in direct stocks enables you to build a customized portfolio based on your financial goals. Whether you aim for long-term wealth accumulation, dividend income, or capital appreciation, stock investments offer diverse opportunities across various industries and sectors.
                    </p>
                </div>
                <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                    <Image src="/Services/direct-stocks.jpg" alt="Stock Market" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Product Description with Image */}
            {/* <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 flex justify-center mb-6 md:mb-0">
                    <Image src="/investment-strategy.jpg" alt="Investment Strategy" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                  
                </div>
            </div> */}

            {/* Benefits of Direct Stock Investments */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Investing in Direct Stocks</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700">Ownership: Directly own shares in public companies and benefit from their success.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Liquidity: Stocks can be bought and sold easily on the stock market.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Potential for High Returns: Benefit from long-term capital appreciation.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Dividend Income: Earn passive income through dividends from profitable companies.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Diversification: Spread risk by investing in multiple sectors and industries.</p>
                    </li>
                </ul>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Start building your wealth by investing in direct stocks today. Take advantage of market opportunities and secure your financial future with a well-structured stock portfolio.
                </p>
                <Link href="/contactus" className='text-white'>
                    <Button className=" bg-[#2d5579] text-white rounded-2xl pl-8 pr-8 text-xl">Start Investing in Direct Stocks Today!</Button>
                </Link>
            </div>
        </div>
    );
};

export default DirectStocks;
