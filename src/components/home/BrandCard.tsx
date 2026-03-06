"use client";
import { motion } from "framer-motion";

export const BrandCard = ({
  brandName,
  delay,
}: {
  brandName: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, type: "spring" }}
      viewport={{ amount: 0.7, once: true }}
      className="bg-(image:--gradient-card) py-6.5 px-6 border border-(--primary-color)/20 hover:border-(--primary-color)/80 rounded-xl transition"
    >
      <span className="text-(--muted-foreground) text-base font-medium block text-center">
        {brandName}
      </span>
    </motion.div>
  );
};
