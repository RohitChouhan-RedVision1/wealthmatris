import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Alternate Investment Funds",
    description: "Unlock tailored Alternate Investment Funds to grow and safeguard your wealth according to your unique financial objectives.",
};

const AlternateInvestmentFunds = () => {
    return (
        <div className="container mx-auto px-4 lg:px-32 py-18">
            {/* Heading and Subheading */}
            <div className="text-center pt-[80px] pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">Tailored Alternate Investment Funds</h1>
                <div  className="em_bar mx-auto">
              <div className="em_bar_bg" />
            </div>
                <p className="text-xl text-gray-600 mt-2">Grow and Protect Your Wealth, Your Way</p>
            </div>

             {/* Introduction with Image */}
                        <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                            <div className="lg:w-1/2">
                            <p className="text-lg text-gray-700 text-justify items-center">
                    Unlock tailored Alternate Investment Funds (AIFs) to grow and safeguard your wealth according to your unique financial objectives. AIFs provide an alternative investment route beyond traditional asset classes, offering exposure to diverse strategies such as private equity, venture capital, hedge funds, and more.
                </p>
                <p className="text-lg text-gray-700 items-center text-justify">
                    AIFs are professionally managed investment funds that cater to high-net-worth individuals and institutional investors. These funds aim to generate superior returns through specialized strategies that include private investments, structured finance, and hedge fund techniques.
                </p>
                            </div>
                            <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                                <Image src="/Services/aif-1.jpg" alt="Investment Growth" width={500} height={400} className="rounded-lg shadow-lg" />
                            </div>
                        </div>
            
                        {/* Product Description with Image
                        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start mt-2.5">
                            <div className="md:w-1/2 md:pr-8 flex justify-center mb-6 md:mb-0">
                                <Image src="/Services/aif-2.jpg" alt="Fund Management" width={400} height={300} className="rounded-lg shadow-lg" />
                            </div>
                            <div className="md:w-1/2">
                            
                            </div>
                        </div> */}

           

            {/* Categories of AIFs */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Categories of Alternate Investment Funds</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <h3 className="font-semibold text-gray-800">Category I AIFs</h3>
                        <p className="text-gray-700">Invest in startups, social ventures, small and medium enterprises (SMEs), and other early-stage companies with high growth potential.</p>
                    </li>
                    <li>
                        <h3 className="font-semibold text-gray-800">Category II AIFs</h3>
                        <p className="text-gray-700">Include private equity funds, debt funds, and other funds that do not leverage investments but provide long-term capital growth opportunities.</p>
                    </li>
                    <li>
                        <h3 className="font-semibold text-gray-800">Category III AIFs</h3>
                        <p className="text-gray-700">Employ complex trading strategies, including hedge funds and derivatives, to generate higher returns.</p>
                    </li>
                </ul>
            </div>

            {/* Features of AIFs */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features of Alternate Investment Funds</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700">Diversified Investment Opportunities: Access to non-traditional assets for portfolio diversification.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">High Return Potential: Specialized strategies aimed at delivering superior returns.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Professional Fund Management: Managed by experienced investment professionals.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Long-Term Growth: Ideal for investors looking for sustained capital appreciation.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Regulated Framework: Governed by SEBI guidelines ensuring transparency and investor protection.</p>
                    </li>
                </ul>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Discover the power of Alternate Investment Funds and take advantage of innovative investment opportunities tailored to your financial aspirations. Invest in AIFs today to optimize your portfolio and achieve long-term financial success.
                </p>
                <Link href="/contactus" className='text-white'>
                    <Button className=" bg-[#2d5579] text-white rounded-2xl pl-8 pr-8 text-xl">Start Investing in AIFs Today!</Button>
                </Link>
            </div>
        </div>
    );
};

export default AlternateInvestmentFunds;
