// components/Navigation.js
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <Link href="/">
      <Image
        src="/assets/logo.png"
        alt="Gallery Logo"
        width={100}
        height={120}
        priority
      />
    </Link>
  );
}
