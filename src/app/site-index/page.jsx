// src/app/site-index/page.jsx
import Link from "next/link";

export default function SiteIndex() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-5xl text-sm mx-auto space-y-4">
        {/* Skip to content link */}
        <div className="mb-8">
          <Link
            href="#main"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Skip to content
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-6">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Homepage
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/notable-sales"
                className="text-gray-600 hover:text-gray-900"
              >
                Notable Sales
              </Link>
            </li>

            {/* Publications with nested items */}
            <li className="space-y-2">
              <Link
                href="/publications"
                className="text-gray-600 hover:text-gray-900"
              >
                Publications
              </Link>
              <ul className="pl-6 space-y-2">
                <li>
                  <Link
                    href="/publications/femme"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    FEMME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/publications/souls-ames"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    SOULS | ÂMES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/publications/past-is-prologue-2"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    PAST IS PROLOGUE II
                  </Link>
                </li>
                <li>
                  <Link
                    href="/publications/past-is-prologue"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    PAST IS PROLOGUE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/publications/iii"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    III
                  </Link>
                </li>
              </ul>
            </li>

            {/* Press with nested items */}
            <li className="space-y-2">
              <Link href="/press" className="text-gray-600 hover:text-gray-900">
                Press
              </Link>
              <ul className="pl-6 space-y-2">
                <li>
                  <Link
                    href="/press/friend-of-the-artist"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    FRIEND OF THE ARTIST
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press/forbes"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    FORBES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press/business-times"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Business Times
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press/apollo-art"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Apollo Art
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press/architectural-digest"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Architectural Digest
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press/valavanis-bonsai-blog"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Valavanis Bonsai Blog
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
