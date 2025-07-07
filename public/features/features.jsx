"use client"
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const features = [
  {
    id: 1,
    icon: '/icons/feature1.png',
    image: '/images/feature1.png',
    title: 'Feature 1',
    description: 'This is the first feature description.',
    buttons: [
      { text: 'Button 1', bgImage: '/buttons/button1.png' },
      { text: 'Button 2', bgImage: '/buttons/button2.png' }
    ]
  },
  {
    id: 2,
    icon: '/icons/feature2.png',
    image: '/images/feature2.png',
    title: 'Feature 2',
    description: 'This is the second feature description.',
    buttons: [
      { text: 'Button 1', bgImage: '/buttons/button1.png' },
      { text: 'Button 2', bgImage: '/buttons/button2.png' }
    ]
  },
  {
    id: 3,
    icon: '/icons/feature3.png',
    image: '/images/feature3.png',
    title: 'Feature 3',
    description: 'This is the third feature description.',
    buttons: [
      { text: 'Button 1', bgImage: '/buttons/button1.png' },
      { text: 'Button 2', bgImage: '/buttons/button2.png' }
    ]
  },
  {
    id: 4,
    icon: '/icons/feature4.png',
    image: '/images/feature4.png',
    title: 'Feature 4',
    description: 'This is the fourth feature description.',
    buttons: [
      { text: 'Button 1', bgImage: '/buttons/button1.png' },
      { text: 'Button 2', bgImage: '/buttons/button2.png' }
    ]
  }
];

export default function FeatureSection() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <div>
        <div className='max-w-5xl mx-auto'>
        <div className="flex gap-8">
      <div className="flex flex-col gap-6">
        {features.map(feature => (
          <button
            key={feature.id}
            onClick={() => setSelectedFeature(feature)}
            className={`p-4 rounded-full ${selectedFeature.id === feature.id ? 'bg-gray-300' : ''}`}
          >
            <Image src={feature.icon} alt={feature.title} width={50} height={50} />
          </button>
        ))}
      </div>

      <Card className="w-full max-w-md p-6">
        <CardContent>
          <Image src={selectedFeature.image} alt={selectedFeature.title} width={300} height={300} />
          <h2 className="text-2xl font-bold mt-4">{selectedFeature.title}</h2>
          <p className="mt-2">{selectedFeature.description}</p>
          <div className="flex gap-4 mt-4">
            {selectedFeature.buttons.map((btn, index) => (
              <button
                key={index}
                className="text-white px-6 py-2 rounded-lg"
                style={{ backgroundImage: `url(${btn.bgImage})`, backgroundSize: 'cover' }}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
        </div>
    </div>
  );
}
