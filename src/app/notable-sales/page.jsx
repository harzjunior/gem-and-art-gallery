"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { galleryItems } from "../data/galleryItems";

export default function NotableSales() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const previousItem = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <main className="relative min-h-screen">
      {/* Content Container */}
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Image and Navigation Container */}
            <div className="relative w-full">
              <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] mb-4 sm:mb-8">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-contain"
                />

                {/* Navigation Overlay */}
                <div className="absolute inset-0 flex items-center justify-between -mx-2 sm:-mx-12 md:-mx-16">
                  <button
                    onClick={previousItem}
                    className="hover:bg-white/80 hover:bg-white rounded-full p-2 hover:text-gray-600 transition-all z-10"
                    aria-label="Previous artwork"
                  >
                    <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
                  </button>
                  <button
                    onClick={nextItem}
                    className="hover:bg-white/80 hover:bg-white rounded-full p-2 hover:text-gray-600 transition-all z-10"
                    aria-label="Next artwork"
                  >
                    <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center space-y-1 text-sm w-full px-2 sm:px-4">
              <p className="mb-2 text-base sm:text-sm">{currentItem.title}</p>
              <p className="text-base sm:text-sm">{currentItem.artist}</p>
              <p className="text-sm">{currentItem.materials}</p>
              <p className="text-sm">{currentItem.dimensions}</p>

              {currentItem.provenance && (
                <>
                  <p className="mt-6 mb-2 font-medium">PROVENANCE</p>
                  {currentItem.provenance.map((item, index) => (
                    <p
                      key={index}
                      className="text-xs sm:text-xs leading-relaxed"
                    >
                      {item}
                    </p>
                  ))}
                </>
              )}

              {currentItem.exhibitions && (
                <>
                  <p className="mt-6 mb-2 font-medium">EXHIBITIONS</p>
                  {Array.isArray(currentItem.exhibitions) ? (
                    currentItem.exhibitions.map((item, index) => (
                      <p
                        key={index}
                        className="text-xs sm:text-xs leading-relaxed"
                      >
                        {item}
                      </p>
                    ))
                  ) : (
                    <p className="text-xs sm:text-xs leading-relaxed">
                      {currentItem.exhibitions}
                    </p>
                  )}
                </>
              )}

              {currentItem.literature && (
                <>
                  <p className="mt-6 mb-2 font-medium">LITERATURE</p>
                  {Array.isArray(currentItem.literature) ? (
                    currentItem.literature.map((item, index) => (
                      <p
                        key={index}
                        className="text-xs sm:text-xs leading-relaxed"
                      >
                        {item}
                      </p>
                    ))
                  ) : (
                    <p className="text-xs sm:text-xs leading-relaxed">
                      {currentItem.literature}
                    </p>
                  )}
                </>
              )}

              {currentItem.cf && (
                <>
                  <p className="mt-6 mb-2 font-medium">CF</p>
                  {Array.isArray(currentItem.cf) ? (
                    currentItem.cf.map((item, index) => (
                      <p
                        key={index}
                        className="text-xs sm:text-xs leading-relaxed"
                      >
                        {item}
                      </p>
                    ))
                  ) : (
                    <p className="text-xs sm:text-xs leading-relaxed">
                      {currentItem.cf}
                    </p>
                  )}
                </>
              )}

              {currentItem.sold && (
                <p className="mt-6 text-xs sm:text-xs">{currentItem.sold}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
