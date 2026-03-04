import { LINKS } from "@/constants";
import Link from "next/link";
import { Fragment } from "react";

export const Footer = () => {
  return (
    <div className="border-t border-(--muted-foreground)/40 w-screen px-4 text-white pt-12">
      <div className="flex flex-col">
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-5 pb-6 items-center justify-between">
          <div>
            <h4>
              Pixel{" "}
              <span className="text-gradient font-medium">
                Agencia Creativa
              </span>
            </h4>
            <p className="text-(--muted-foreground) text-sm mt-2">
              Marketing digital, diseño y desarrollo web orientado a resultados.
            </p>
          </div>
          <div>
            {Object.entries(LINKS).map(([name, href]) => {
              if (name === "Nosotros") return <Fragment key={9999} />;
              return (
                <Link
                  key={name}
                  href={"#" + href}
                  className={`text-(--muted-foreground) hover:text-(--primary-color) mx-4 py-6 transition-colors text-sm font-(--font-plus-jakarta-sans)`}
                >
                  {" "}
                  {name}{" "}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="border-t border-(--muted-foreground)/40 w-screen">
          <span className="block text-center text-[13px] text-(--muted-foreground) pt-5 pb-10">
            © 2026 Pixel Agencia Creativa. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </div>
  );
};
