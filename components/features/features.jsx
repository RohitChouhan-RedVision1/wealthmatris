"use client"
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: '/portfolio-analysis 1.png',
    image: '/Robo App Client.png',
    title: 'Portfolio Analysis',
    description: 'You can download the complete portfolio report including mutual funds & other assets. Get the historical performance of your portfolio easily & track the portfolio at your fingertips. ',
    buttons: [
      { text: '', bgImage: '/39b88f14cdc5676566129cf5b4f6f949.png',link:"https://play.google.com/store/apps/details?id=com.alpha72wealth.alpha72wealth" },
      { text: '', bgImage: '/9312b60a647a22eb1fb128574201d5f6.png',link:"https://apps.apple.com/in/app/alpha72/id6743615202" }
    ]
  },
  {
    id: 2,
    icon: '/stock.png',
    image: '/app-screen2.webp',
    title: 'Invest Online',
    description: 'We offer a 100% paperless process of investment. It takes a few seconds to register a SIP or Purchase an ELSS.',
    buttons: [
      { text: '', bgImage: '/39b88f14cdc5676566129cf5b4f6f949.png',link:"https://play.google.com/store/apps/details?id=com.alpha72wealth.alpha72wealth" },
      { text: '', bgImage: '/9312b60a647a22eb1fb128574201d5f6.png',link:"https://apps.apple.com/in/app/alpha72/id6743615202" }
    ]
  },
  {
    id: 3,
    icon: '/customer 1.png',
    image: '/app-screen3.webp',
    title: 'Goal Tracker',
    description: 'Give purpose to your investments, you can map all your investments with the goal like child education, marriage or retirement.',
    buttons: [
      { text: '', bgImage: '/39b88f14cdc5676566129cf5b4f6f949.png',link:"https://play.google.com/store/apps/details?id=com.alpha72wealth.alpha72wealth" },
      { text: '', bgImage: '/9312b60a647a22eb1fb128574201d5f6.png',link:"https://apps.apple.com/in/app/alpha72/id6743615202" }
    ]
  },
  {
    id: 4,
    icon: '/target 1.png',
    image: '/app-screen4.webp',
    title: 'Research',
    description: 'Invest in well researched cherry-picked perfectly balanced portfolio.',
    buttons: [
      { text: '', bgImage: '/39b88f14cdc5676566129cf5b4f6f949.png',link:"https://play.google.com/store/apps/details?id=com.alpha72wealth.alpha72wealth" },
      { text: '', bgImage: '/9312b60a647a22eb1fb128574201d5f6.png',link:"https://apps.apple.com/in/app/alpha72/id6743615202" }
    ]
  }
];

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function FeatureSection() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedFeature(prevFeature => {
        const currentIndex = features.findIndex(f => f.id === prevFeature.id);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='main_section relative overflow-x-hidden'>
        <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInFromLeft}
       className='max-w-5xl mx-auto'>
        <h2 className="topheading   text-[var(--rv-primary)] text-center">FEATURES</h2>
          <h2 className="subheading  text-[var(--rv-primary)] text-center  mb-4">
          Investing is made super easy
          </h2>
          <div className="em_bar mx-auto">
            <div className="em_bar_bg" />
          </div>
        <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex flex-row lg:flex-col items-center justify-center gap-6">
        {features.map(feature => (
          <button
            key={feature.id}
            onClick={() => setSelectedFeature(feature)}
            className={`p-4 rounded-full ${selectedFeature.id === feature.id ? 'bg-[var(--rv-primary)]' : 'bg-[var(--rv-secondary)]'}`}
          >
            <Image src={feature.icon} alt={feature.title} width={50} height={50} />
          </button>
        ))}
      </div>

      <div className="w-full flex flex-col md:flex-row items-center md:px-10 ">
  {/* Image Component Here */}
  <Image src={selectedFeature.image} alt={selectedFeature.title} width={220} height={220} />
  <div className="flex flex-col sm:justify-center sm:items-center md:items-start p-5 md:p-10 md:pl-20 w-full">
    <h2 className="text-4xl text-[var(--rv-primary)] font-bold mt-4">{selectedFeature.title}</h2>
    <p className="mt-2 line-clamp-4 overflow-hidden">{selectedFeature.description}</p>
    
    {/* Bigger Buttons */}
    <div className="flex flex-col lg:flex-row gap-6 mt-6">
      {selectedFeature.buttons.map((btn, index) => (
      <Link key={index} href={btn.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <button
            className="text-white text-2xl font-semibold px-10 py-6 rounded-2xl cursor-pointer"
            style={{
              backgroundImage: `url(${btn.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minWidth: "200px", // Ensures button width increases
            }}
          >
            {btn.text}
          </button>
        </Link>
      ))}
    </div>
  </div>
</div>



    </div>
        </motion.div>
        <Image src="/Vector (1).png"  alt="Invest" height={200} width={200} className="absolute bottom-0 -z-20"/>
    </div>
  );
}
