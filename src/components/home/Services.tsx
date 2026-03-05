"use client";

import {
  servicesCardData,
  servicesPresenceData,
  agencyData,
} from "../data/Services";
import { CheckCircle, XCircle } from "lucide-react";
import { LINKS } from "@/constants";
import { Card } from "./ServicesCard";
import { AgencyCard } from "./AgencyCard";
import { motion } from "framer-motion";

const iconClass = "w-5 h-5 shrink-0";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export const Services = () => {
  return (
    <section className="radial-background pt-20 pb-25" id={LINKS.Servicios}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-center pt-17 text-2xl md:text-3xl font-semibold px-4">
          <span className="text-white">Tu negocio merece más que</span>
          <span className="text-gradient bg-clip-text text-transparent pl-2">
            presencia digital
          </span>
        </h1>
        <h3 className="text-center text-sm text-(--muted-foreground) px-[15%] font-(--plus-jakarta-sans) pt-1.5">
          Muchas empresas invierten en digital sin ver resultados. Nosotros
          cambiamos eso con estrategia, diseño y tecnología que funcionan.
        </h3>
      </motion.article>

      {/* Cards */}
      <article className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-[10%] mt-12">
        {servicesPresenceData.map((card, cardIndex) => (
          <motion.div
            key={`section-cards-${cardIndex}`}
            custom={cardIndex}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl bg-[#181B25] border border-(--primary-color)/50 hover:border-(--primary-color)/80 p-6 transition-colors"
          >
            <ul className="flex flex-col gap-3">
              {card.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-3">
                  {item.type === "error" ? (
                    <XCircle className={`text-orange-600 ${iconClass}`} />
                  ) : (
                    <CheckCircle className={`text-purple-700 ${iconClass}`} />
                  )}
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </article>

      {/* Services marketing */}
      <section className=" pt-20 pb-5 md:pb-10 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-center pt-17 text-3xl md:text-4xl px-4 font-semibold ">
            <span className="text-white">Servicios de</span>
            <span className="text-gradient pl-2">marketing digital</span>
            <span className="text-white pl-2">y desarrollo</span>
          </h2>
          <h3 className="text-center text-gray-500 px-[15%] font-normal pt-5 md:pt-1.5">
            Todo lo que tu marca necesita para crecer, en un solo lugar.
          </h3>
        </motion.div>
      </section>
      <article className="px-[10%] mt-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {servicesCardData.map((card, index) => (
            <Card key={card.id} card={card} index={index} />
          ))}
        </div>
      </article>
      {/* Agency Section */}
      <section className="flex flex-col md:flex-row px-[10%] pt-37 pb-5 items-center gap-10 justify-center">
        {/* Texto — entra desde la izquierda */}
        <motion.article
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="basis-1/2 shrink-0 mr-2 text-center md:text-left"
        >
          <h2 className="text-4xl text-white font-bold">
            No somos una <span className="text-gradient">agencia más</span>
          </h2>
          <p className="w-full md:w-[80%] text-[#7E96A3] pt-2 font-medium">
            En Pixel combinamos visión estratégica, creatividad y tecnología
            para construir marcas que impactan. No ejecutamos tareas: diseñamos
            caminos de crecimiento.
          </p>
        </motion.article>

        {/* Cards — entran desde la derecha, escalonadas */}
        <article className="w-full md:w-auto">
          <div className="flex flex-col flex-1 gap-4">
            {agencyData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <AgencyCard agencyCard={item} />
              </motion.div>
            ))}
          </div>
        </article>
      </section>
    </section>
  );
};
