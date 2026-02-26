import Link from "next/link";
import { NavbarLogo } from "./NavbarLogo";
import { LINKS, mutedForeground } from "@/constants";

export const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 bg-transparent z-50 flex justify-between items-center ">
      <NavbarLogo />
      <nav className="flex justify-center items-center gap-4 pr-8">
        {Object.entries(LINKS).map(([name, href]) => (
          <Link
            key={name}
            href={href}
            className={`text-[${mutedForeground}] mx-4 py-6 hover:text-gray-400 transition-colors font-medium font-(--font-plus-jakarta-sans)`}
          >
            {" "}
            {name}{" "}
          </Link>
        ))}
      </nav>
    </header>
  );
};
