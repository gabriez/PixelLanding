import { LINKS } from "@/constants";
import Link from "next/link";

export const NavbarDesktop = () => {
  return (
    <nav className="hidden md:flex justify-center items-center gap-4 pr-8">
      {Object.entries(LINKS).map(([name, href]) => (
        <Link
          key={name}
          href={"#" + href}
          className={`text-(--muted-foreground) hover:text-(--primary-color) mx-4 py-6 2xl:text-lg transition-colors font-medium font-(--font-plus-jakarta-sans)`}
        >
          {" "}
          {name}{" "}
        </Link>
      ))}
    </nav>
  );
};
