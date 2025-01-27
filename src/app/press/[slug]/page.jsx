// src/app/press/[slug]/page.jsx
"use client";
import { Suspense } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { pressContent } from "../../data/pressContent";
import Link from "next/link";

function PressItemContent({ slug }) {
  const article = pressContent[slug];

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-semibold mb-4">Article Not Found</h1>
        <Link href="/press" className="text-blue-600 hover:underline">
          Back to Press
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="mb-16">
        <h1 className="text-lg font-medium tracking-wide mb-2">
          {article.title}
        </h1>
        <h2 className="text-base text-gray-800 mb-2">{article.subtitle}</h2>
        <div className="flex flex-col space-y-2">
          {article.date && (
            <p className="text-sm text-gray-600">{article.date}</p>
          )}
          {article.author && (
            <p className="text-sm text-gray-600">{article.author}</p>
          )}
        </div>
        {/* Line Separator */}
        <div className="border-t border-gray-200 my-8"></div>
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-72">
          {/* Content Column */}
          <div className="w-full md:w-7/12 order-2 md:order-1 space-y-8">
            {/* Intro */}
            {article.intro && (
              <p className="text-sm text-gray-800 leading-relaxed">
                {article.intro}
              </p>
            )}
            {/* Interview Format */}
            {article.content &&
              article.content.some((item) => item.question) && (
                <div className="space-y-8">
                  {article.content.map((section, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="text-sm font-medium">
                        {section.question}
                      </h3>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        {section.answer}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            {/* Article Format */}
            {article.content && article.content.some((item) => item.text) && (
              <div className="space-y-6">
                {article.content.map((section, index) => (
                  <div key={index}>
                    {section.text && (
                      <p className="text-sm text-gray-800 leading-relaxed">
                        {section.text}
                      </p>
                    )}
                    {section.imageCaption && (
                      <p className="text-sm text-gray-600 italic mt-4">
                        {section.imageCaption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Image Column */}
          <div className="w-full md:w-5/12 order-1 md:order-2">
            <div className="relative aspect-square">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PressItem() {
  const { slug } = useParams();

  return (
    <main className="container mx-auto px-4 py-12">
      <Suspense fallback={<div>Loading...</div>}>
        <PressItemContent slug={slug} />
      </Suspense>
    </main>
  );
}
