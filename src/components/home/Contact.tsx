import React from "react";
import { ScheduleButton } from "../ScheduleButton";
import { LINKS } from "@/constants";

export const Contact = () => {
  return (
    <section
      id={LINKS.Contacto}
      className="radial-background w-full relative py-24 px-7"
    >
      <h2 className="text-center text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-white font-(--plus-jakarta-sans) mb-6">
        ¿Listo para llevar tu marca al{" "}
        <span className="text-gradient">siguiente nivel</span>?
      </h2>
      <p className="text-center text-(--muted-foreground) text-base lg:text-lg 2xl:text-2xl font-medium w-fit md:max-w-4xl block mx-auto mb-6">
        Agenda una asesoría gratuita y descubrí cómo podemos transformar tu
        presencia digital en resultados reales para tu negocio.
      </p>
      <ScheduleButton />
    </section>
  );
};
