"use client";

import { ServicesCard } from "@/types/Services";
import { IconView } from "../common/IconView";
import { motion } from "framer-motion";

/* Service Card */
export const Card = ({ card, index }: ServicesCard) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="bg-[#181B25] p-7 rounded-2xl border border-(--primary-color)/50 hover:border-(--primary-color)/80 group flex flex-col h-full transition-colors"
  >
    <div className="p-3 bg-(--primary-color)/10 group-hover:bg-(--primary-color)/20 rounded-2xl w-fit transition-colors">
      <IconView icon={card.icon} className="w-5 h-5 text-(--primary-color)" />
    </div>
    <h4 className="pt-3 text-white text-xl font-semibold font-(--plus-jakarta-sans)">
      {card.title}
    </h4>
    <span className="text-[#7E96A3] pt-2 block text-sm font-(--plus-jakarta-sans) flex-1">
      {card.description}
    </span>
  </motion.div>
);
