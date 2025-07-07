import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Will Formation",
    description: "Secure your legacy with professional Will Formation services, ensuring your assets are distributed as per your wishes.",
};

const WillFormation = () => {
    return (
        <div className="container mx-auto px-4 lg:px-32 py-18">
            {/* Heading and Subheading */}
            <div className="text-center pt-[80px] pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">Will Formation Services</h1>
                <div  className="em_bar mx-auto">
              <div className="em_bar_bg" />
            </div>
                <p className="text-xl text-gray-600 mt-2">Ensure Your Legacy and Secure Your Loved Ones' Future</p>
            </div>

            {/* Introduction with Image */}
            <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2">
                    <p className="text-lg text-gray-700 text-justify lg:mt-10">
                        Creating a will is an essential step in estate planning, ensuring that your wealth and assets are distributed according to your wishes. Our professional Will Formation services provide peace of mind, guiding you through the legal process with ease and clarity.
                    </p>
                </div>
                <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                    <Image src="/Services/will-formation-1.jpg" alt="Will Signing" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Benefits of Will Formation */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Create a Will?</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700">Protect Your Family: Ensure your loved ones receive their rightful inheritance without legal complications.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Avoid Legal Disputes: A legally binding will prevents conflicts and uncertainties regarding asset distribution.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Appoint Executors: Choose trusted individuals to manage your estate and carry out your wishes.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Plan for Future Generations: Safeguard your legacy by outlining financial provisions for children and dependents.</p>
                    </li>
                </ul>
            </div>

            {/* Process of Will Formation */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Steps to Create Your Will</h2>
                <ol className="list-decimal pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700">Assess Your Assets: List your properties, financial holdings, and other valuables.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Choose Beneficiaries: Decide who will inherit your estate and in what proportions.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Appoint an Executor: Select a trusted person to oversee the execution of your will.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Consult Legal Experts: Work with professionals to ensure your will is legally valid.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Sign and Store Safely: Finalize your will with witnesses and store it in a secure location.</p>
                    </li>
                </ol>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Ensure your legacy is protected and your loved ones are taken care of. Get expert assistance in drafting your will today.
                </p>
                <Link href="/contactus">
                    <Button className="bg-[#2d5579] text-white rounded-2xl pl-8 pr-8 text-xl">Start Your Will Formation Today!</Button>
                </Link>
            </div>
        </div>
    );
};

export default WillFormation;