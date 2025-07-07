import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Bonds & NCDs",
    description: "Explore secure investment options with Bonds & Non-Convertible Debentures (NCDs) for stable returns and capital protection.",
};

const BondsNCDs = () => {
    return (
        <div className="container mx-auto px-4 lg:px-32 py-18">
            {/* Heading and Subheading */}
            <div className="text-center pt-[80px] pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">Bonds & NCDs</h1>
                <div  className="em_bar mx-auto">
              <div className="em_bar_bg" />
            </div>
                <p className="text-xl text-gray-600 mt-2">Secure Investments with Stable Returns</p>
            </div>

            {/* Introduction with Image */}
            <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2">
                    <p className="text-lg text-gray-700 text-justify lg:mt-10">
                        Bonds and Non-Convertible Debentures (NCDs) provide investors with secure and predictable income. These fixed-income securities offer periodic interest payments and are ideal for those looking for lower-risk investments.
                    </p>
                </div>
                <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                    <Image src="/Services/Bonds-NCDs-1.jpg" alt="Bonds Investment" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Benefits of Investing in Bonds/NCDs */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Invest in Bonds & NCDs?</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700">Stable Returns: Bonds and NCDs offer fixed interest payouts, ensuring steady income.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Lower Risk: Compared to equities, these investments carry lower volatility and capital protection.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Diverse Options: Choose from government bonds, corporate bonds, and secured/unsecured NCDs.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Tax Benefits: Certain bonds offer tax-free returns, enhancing post-tax earnings.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Liquidity: Some bonds and NCDs are tradable on stock exchanges, offering exit options.</p>
                    </li>
                </ul>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Looking for secure investment options? Bonds and NCDs provide financial stability with consistent returns. Start investing today to build a safer financial future.
                </p>
                <Link href="/contactus" className='text-white'>
                    <Button className=" bg-[#2d5579] text-white rounded-2xl pl-8 pr-8 text-xl">Invest in Bonds & NCDs Now!</Button>
                </Link>
            </div>
        </div>
    );
};

export default BondsNCDs;