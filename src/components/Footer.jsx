import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-8 pb-5 border-t border-gray-300 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 text-xs">
          {/* Left Section */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between">
            {/* Company Name */}
            <p className="text-gray-600">Ali Fils</p>

            {/* Address */}
            <div className="text-center md:text-left">
              <p className="text-gray-600">243 WEST 28TH STREET</p>
              <p className="text-gray-600">NEW YORK, NY 10001</p>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <p>
                <a
                  href="tel:1.830.660.5089"
                  className="text-gray-600 hover:text-gray-900"
                >
                  1.830.660.5089
                </a>
              </p>
              <a
                href="mailto:FILS@ALIFILS.COM"
                className="text-gray-600 hover:text-gray-900 uppercase block"
              >
                fils@alifils.com
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end space-y-2">
            {/* Social Links */}
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

            {/* Copyright */}
            <p className="text-gray-600 text-center md:text-right">
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
