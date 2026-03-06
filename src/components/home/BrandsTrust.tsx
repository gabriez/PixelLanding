"use client";
import { Star } from "lucide-react";
import { BrandsCardsData } from "../data/Brands";
import { BrandCard } from "./BrandCard";
import { motion } from "framer-motion";

export const BrandsTrust = () => {
  return (
    <section className="radial-background w-full relative py-24 px-7">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5, once: true }}
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star
                key={index}
                className="fill-(--primary-color) text-(--primary-color)"
                size={24}
              />
            ))}
        </div>
        <h2 className="text-center text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-white font-(--plus-jakarta-sans) mb-6">
          Marcas que <span className="text-gradient">confían</span> en nosotros
        </h2>
        <p className="text-center text-(--muted-foreground) text-base lg:text-lg 2xl:text-2xl font-medium w-fit md:max-w-4xl block mx-auto mb-12">
          Desde startups hasta empresas consolidadas, ayudamos a negocios de
          todos los tamaños a alcanzar su máximo potencial digital.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto sm:px-[10%]">
        {BrandsCardsData.map((brand, i) => (
          <BrandCard delay={i * 0.15} key={i + brand} brandName={brand} />
        ))}
      </div>
    </section>
  );
};
//
