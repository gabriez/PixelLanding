"use client";
import React from "react";
import { ScheduleButton } from "../ScheduleButton";
import { LINKS } from "@/constants";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id={LINKS.Contacto}
      className="radial-background w-full relative py-24 px-7"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5, once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2
          className="text-3xl md:text-4xl text-center 2xl:text-5xl wrap-break-word
           font-bold text-white mb-6"
        >
          ¿Listo para llevar tu marca al{" "}
          <span className="text-gradient wrap-break-word">siguiente nivel</span>
          ?
        </h2>
        <p className="text-center text-(--muted-foreground) text-base lg:text-lg 2xl:text-2xl font-medium w-fit md:max-w-2xl block mx-auto mb-10">
          Agenda una asesoría gratuita y descubrí cómo podemos transformar tu
          presencia digital en resultados reales para tu negocio.
        </p>
        <ScheduleButton />
      </motion.div>
    </section>
  );
};
