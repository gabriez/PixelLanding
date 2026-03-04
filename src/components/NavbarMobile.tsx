import { LINKS } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative max-md:flex items-center hidden self-stretch">
      {!isOpen && (
        <Menu
          onClick={handleOpen}
          color="white"
          className="cursor-pointer mr-5"
        />
      )}
      <nav
        className={
          (isOpen ? "right-0" : "-right-37.5") +
          " flex flex-col absolute top-0 w-fit h-screen z-50 glassmorphism-navbar items-center transition-all"
        }
      >
        <X onClick={handleOpen} color="white" className="cursor-pointer mt-5" />
        {Object.entries(LINKS).map(([name, href]) => (
          <Link
            key={name}
            href={"#" + href}
            onClick={handleOpen}
            className={`text-(--muted-foreground) hover:text-(--primary-color) mx-4 py-6 transition-colors font-medium font-(--font-plus-jakarta-sans)`}
          >
            {" "}
            {name}{" "}
          </Link>
        ))}
      </nav>
    </div>
  );
};
