// src/app/press/page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { pressItems } from "../data/pressItems";

export default function Press() {
  // Function to generate slug from title
  const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {pressItems.map((item) => (
            <Link
              href={`/press/${generateSlug(item.title)}`}
              key={item.id}
              className="group hover:opacity-95 transition-opacity"
            >
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
                  <h3 className="text-sm font-medium tracking-wide group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm">{item.subtitle}</p>
                  {item.date && (
                    <p className="text-sm text-gray-600">{item.date}</p>
                  )}
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
