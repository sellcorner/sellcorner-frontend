"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "/", label: "Home" },
    { href: "/business-trick", label: "Business Trick" },
    { href: "/health-and-fitness-tips", label: "Health & Fitness" },
    { href: "/lifestyle-tips", label: "Lifestyle" },
    { href: "/travels-and-nature", label: "Travels & Nature" },
    { href: "/specifications", label: "Specifications" },
    { href: "/software-products", label: "Software Products" },
    { href: "/products-reviews", label: "Product Reviews" },
    { href: "/jobs-circular", label: "Jobs Circular" },
  ];
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between h-16 px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Image
            src="/logo.svg"
            alt="SellCorner logo"
            width={32}
            height={32}
            priority
          />
          SellCorner
        </Link>
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>
        <nav
          className={`${
            open ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-primary md:bg-transparent md:static md:block`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-4 p-4 md:p-0">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-secondary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

