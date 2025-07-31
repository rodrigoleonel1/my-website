"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimationDiv({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
