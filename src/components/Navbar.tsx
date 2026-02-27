"use client";
import Link from "next/link";
import { NavbarLogo } from "./NavbarLogo";
import { LINKS } from "@/constants";
import { useScroll } from "@/hooks/useScroll";

export const Navbar = () => {
  const scroll = useScroll();

  return (
    <header
      className={
        (scroll > 0 ? "glassmorphism-navbar " : " ") +
        "w-full fixed top-0 left-0 bg-transparent z-50 flex justify-between items-center transition-all "
      }
    >
      <Link href="#hero" className="flex items-center">
        <NavbarLogo />
      </Link>
      <nav className="flex justify-center items-center gap-4 pr-8">
        {Object.entries(LINKS).map(([name, href]) => (
          <Link
            key={name}
            href={href}
            className={`text-(--muted-foreground) mx-4 py-6 hover:text-gray-400 transition-colors font-medium font-(--font-plus-jakarta-sans)`}
          >
            {" "}
            {name}{" "}
          </Link>
        ))}
      </nav>
    </header>
  );
};
