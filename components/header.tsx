"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import NavItem from "./ui/nav-item";

const navItems = [
  { name: "Inicio", url: "#inicio" },
  { name: "Proyectos", url: "#proyectos" },
  { name: "Tecnologías", url: "#tecnologias" },
];

export default function Header({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(navItems[0].name);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      let current = navItems[0].name;

      for (const item of navItems) {
        const section = document.querySelector(item.url) as HTMLElement;
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            current = item.name;
            break;
          }
        }
      }

      if (current !== activeTab) {
        setActiveTab(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-5 z-40 overflow-hidden px-4 max-w-4xl mx-auto rounded-md",
        className
      )}
    >
      <nav className="mx-auto flex h-[60px] items-center justify-between backdrop-blur-sm transition-all duration-300 rounded-md px-2">
        <article className="overflow-hidden rounded-full bg-[url(/noise.png)] bg-slate-800">
          <img
            className="max-h-10"
            src="/avatar.png"
            alt="Rodrigo Alarcón avatar"
          />
        </article>

        <motion.div layout className="flex transition-all duration-300">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              name={item.name}
              url={item.url}
              isActive={activeTab === item.name}
              onClick={() => setActiveTab(item.name)}
            />
          ))}
        </motion.div>
      </nav>
    </header>
  );
}
