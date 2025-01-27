"use client";
import { Suspense } from "react";
import Image from "next/image";
import { notableSales } from "../data/notableSales";

function GalleryContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {notableSales.map((item) => (
        <div key={item.id} className="group">
          <div className="flex flex-col space-y-4">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] bg-gray-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium tracking-wide">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              {item.date && (
                <p className="text-sm text-gray-600">{item.date}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <GalleryContent />
        </Suspense>
      </div>
    </main>
  );
}
