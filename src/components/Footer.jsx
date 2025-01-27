// src/components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-8 pb-5 border-t border-gray-300 mt-10">
      <div className="container mx-auto px-4">
        <div className="w-full flex items-baseline justify-between text-xs">
          <div className="w-1/2 flex justify-between">
            {/* Left */}
            <p className="text-gray-600">Ali Fils</p>

            {/* Center */}
            <div>
              <p className="text-gray-600">243 WEST 28TH STREET</p>
              <p className="text-gray-600">NEW YORK, NY 10001</p>
            </div>

            <div>
              <p>
                <a
                  href="tel:1.830.660.5089"
                  className="text-gray-600 hover:text-gray-900"
                >
                  1.830.660.5089
                </a>
              </p>
              <a
                href="mailto:COLE@COLEHARRELL.COM"
                className="text-gray-600 hover:text-gray-900 uppercase block"
              >
                fils@alifils.COM
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="w-1/3 flex flex-col items-end space-y-2">
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                LinkedIn
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                Instagram
              </a>
            </div>
            <p className="text-gray-600">
              © Ali Fils Gallery ·{" "}
              <Link href="/site-index" className="hover:text-gray-900">
                Site Index
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
