"use client";
import Image from "next/image";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-12 lg:space-x-16">
          {/* Image Container - Full width on mobile, 1/3 on desktop */}
          <div className="w-full md:w-[32%] mb-8 md:mb-0">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/assets/ali_fils.png"
                alt="Ali Fils"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 32vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content - Full width on mobile, 2/3 on desktop */}
          <div className="w-full md:w-2/3 space-y-8">
            {/* About Section */}
            <div className="space-y-4">
              {/* <h2 className="text-lg font-medium mb-4">ABOUT</h2> */}
              <p className="leading-relaxed text-sm">
                Welcome to Art and Gem— the treasures emporium for exquisite
                gemstones, mineral specimens, fine art pieces, rare objects,
                artifacts and rare earth materials. Art and Gem is also a human
                capital vessel and philanthropy inclined with passion and keen
                interest in human capacity development among other acts of hope
                and support for less privileges.
              </p>
              <p className="leading-relaxed text-sm">
                Additionally, it's a space endowed with needful-nuggets of
                wisdom for guidance and chutzpah one could need to navigate and
                get the best out of this voyage called LIFE.
              </p>
              <p className="leading-relaxed text-sm italic">— M. Ali</p>
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium mb-4">SERVICES</h2>
              <p className="leading-relaxed text-sm mb-2">
                Our specialty includes sourcing, curating and supplying of:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Top Grade gem rough and faceted gemstones for gem cutters,
                    lapidarists, and jewelers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Mineral Specimens for collectors, connoisseurs, museums,
                    galleries, institutions, etc.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Investment Grade gemstones, mineral specimens, jewelry, fine
                    arts, artifacts and rare objects, for collectors and
                    connoisseurs alike.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Highest Vibrational Stone (Phenakite or Phenacite for
                    metaphysical crystals shops and light-workers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Industrial and Economic Minerals
                    (rare-earth-concentrated-stones required for tech metals and
                    green energy) such as ETHICALLY MINED tantalite, beryllium,
                    spodumene, Monazite, Ferror Silicon etc.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
