import Link from "next/link";
import { NavbarLogo } from "./NavbarLogo";
import { LINKS } from "@/constants";

export const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 bg-transparent z-50 flex justify-center items-center gap-32">
      <NavbarLogo />
      <nav className="flex justify-center items-center gap-4">
        {Object.entries(LINKS).map(([name, href]) => (
          <Link
            key={name}
            href={href}
            className="text-white mx-4 py-6 hover:text-gray-400 transition-colors font-[axiforma] font-semibold"
          >
            {" "}
            {name}{" "}
          </Link>
        ))}
      </nav>
    </header>
  );
};
