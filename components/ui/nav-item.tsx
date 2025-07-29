"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NavItemProps = {
  name: string;
  url: string;
  isActive: boolean;
  onClick: () => void;
};

export default function NavItem({
  name,
  url,
  isActive,
  onClick,
}: NavItemProps) {
  return (
    <Link
      href={url}
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer text-sm font-semibold px-2 py-2 rounded-full transition-colors",
        "text-foreground/80 hover:text-primary",
        isActive && "text-primary"
      )}
    >
      <div className="relative overflow-hidden">
        <span className="block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {name}
        </span>
        <span className="absolute inset-0 transform translate-y-0 group-hover:-translate-y-full transition-transform duration-500 ease-out">
          {name}
        </span>
      </div>
      {isActive && (
        <motion.div
          layoutId="lamp"
          className="absolute inset-0 w-full bg-blur rounded-full -z-10"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 50,
          }}
        >
          <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full bg-gradient-to-r from-gray-700 via-white to-gray-700">
            <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
            <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
            <div className="absolute -bottom-4 left-1/2 size-5 -translate-x-1/2 rounded-[4px] bg-primary blur" />
          </div>
        </motion.div>
      )}
    </Link>
  );
}
