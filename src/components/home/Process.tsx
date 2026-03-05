"use client";
import { motion } from "framer-motion";
import { IconView } from "../common/IconView";
import { processData } from "../data/Process";

export const Process = () => (
  <section id="process" className="radial-background py-20">
    {/* Título */}
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-center text-4xl font-bold text-white font-(--plus-jakarta-sans)">
        Nuestro <span className="text-gradient">proceso</span> de trabajo
      </h2>
      <p className="text-center text-sm text-[#7E96A3] pt-4 font-(--plus-jakarta-sans)">
        Un método claro y eficiente que garantiza resultados en cada etapa.
      </p>
    </motion.article>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-[10%] mt-12">
      {processData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-3 items-center text-center group"
        >
          <div className="p-4 bg-[#24203B] border border-(--primary-color)/20 group-hover:border-(--primary-color)/50 rounded-2xl w-fit transition-colors">
            <IconView
              icon={item.icon}
              className="w-6 h-6 text-(--primary-color)"
            />
          </div>
          <span className="text-(--primary-color) font-medium text-sm font-(--plus-jakarta-sans)">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h4 className="text-white text-lg font-semibold font-(--plus-jakarta-sans)">
            {item.title}
          </h4>
          <span className="text-[#7E96A3] text-sm font-medium font-(--plus-jakarta-sans)">
            {item.description}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);
