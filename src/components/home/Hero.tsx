"use client";
import { HeroButtons } from "./HeroButtons";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-40 pb-32  px-10  bg-linear-[140deg] from-[#1D0843] from-[28.57%] via-[#09061D] via-[48.68%] to-[#0C1830] to-[66.75%]"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ amount: 0.15, once: true }}
        className="flex flex-col items-start justify-start gap-4 "
      >
        <div
          className={`flex items-center  border border-(--primary-color)/20 bg-(--primary-color)/10 rounded-full px-4 py-2.5 text-sm 2xl:text-base font-medium`}
        >
          <span className={`text-[#7430e8] `}>
            🚀 Agencia de Marketing Digital
          </span>
        </div>
        <h1 className=" text-white font-(--font-plus-jakarta-sans) font-[600] w-fit md:w-3xl lg:w-4xl 2xl:w-5xl text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight mb-2">
          Impulsamos marcas con diseño, tecnología y marketing que{" "}
          <span className="text-gradient"> convierten</span>
        </h1>
        <p className="block w-fit md:w-3xl text-(--muted-foreground) text-lg 2xl:text-2xl font-medium">
          En Pixel Agencia Creativa transformamos ideas en experiencias
          digitales que generan resultados reales.
        </p>
        <HeroButtons />
      </motion.div>
    </section>
  );
};
