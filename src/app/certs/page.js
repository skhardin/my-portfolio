"use client";
import { useState } from 'react';
import CertCard from '@/components/CertCard';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const Carousel = ({ items }) => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % items.length);
    const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
        <ArrowLeftIcon className="h-6 w-6" />
      </button>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((card, i) => (
          <div key={i} className="min-w-full w-full flex-shrink-0 p-6">
            <CertCard {...card} />
          </div>
        ))}
      </div>

      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
        <ArrowRightIcon className="h-6 w-6" />
      </button>
    </div>
    );
}
const certs = [
    {
        title: "AWS Certified Cloud Practitioner",
        date: "January 2023",
        credlyUrl: ""
    },
    {
        title: "Microsoft Certified: Azure Fundamentals",
        date: "December 2023",
        credlyUrl: ""
    },
    {
        title: "Microsoft Certified: Azure Fundamentals",
        date: "April 2026",
        credlyUrl: ""
    }
];

export default function Certs() {
    return (
        <div id="certs" className="min-h-screen bg-gray-300">
            <div className="bg-white shadow-lg px-15 py-15">
                <h1 className="text-4xl font-bold">Certifications</h1>
            </div>
            <Carousel items={certs} />
        </div>
    );
}