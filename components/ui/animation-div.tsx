"use client";

import * as motion from "motion/react-client";
import { ReactNode } from "react";

export default function AnimationDiv({
  element,
  className,
}: {
  element: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={className}
    >
      {element}
    </motion.div>
  );
}
