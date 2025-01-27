"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Notable Sales", href: "/notable-sales" },
  { name: "Publications", href: "/publications" },
  { name: "Press", href: "/press" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 sm:py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo Section */}
          <Link href="/" className="block mb-4">
            <Image
              src="/assets/logo.png"
              alt="Gallery Logo"
              width={100}
              height={120}
              priority
              className="w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Navigation Links */}
          <div className={`${isMenuOpen ? "block" : "hidden"} sm:block w-full`}>
            <ul className="flex flex-col sm:flex-row items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm tracking-wide">
              {navigation.map((item) => (
                <li key={item.name} className="w-full sm:w-auto text-center">
                  <Link
                    href={item.href}
                    className={`block py-2 sm:py-0 hover:underline ${
                      pathname === item.href ? "underline" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
