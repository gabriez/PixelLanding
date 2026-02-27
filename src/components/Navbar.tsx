"use client";
import Link from "next/link";
import { NavbarLogo } from "./NavbarLogo";
import { useScroll } from "@/hooks/useScroll";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar = () => {
  const scroll = useScroll();

  return (
    <header
      className={
        (scroll > 0 ? "glassmorphism-navbar " : " ") +
        "w-full fixed top-0 left-0 bg-transparent z-50 flex justify-between items-center transition-all "
      }
    >
      <Link href="#hero" className="flex items-center py-2.5 md:py-0">
        <NavbarLogo />
      </Link>
      <NavbarDesktop />
      <NavbarMobile />
    </header>
  );
};
