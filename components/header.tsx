"use client";

import { useState, useRef, useEffect } from "react";
import Logo from "./ui/logo";
import { NavItem } from "./ui/nav-item";

const navItems = [
  { name: "Inicio", url: "#top" },
  { name: "Proyectos", url: "#proyectos" },
  { name: "Habilidades", url: "#habilidades" },
];

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("inicio");
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeIndex = navItems.findIndex((item) => {
    const sectionId = item.url === "#top" ? "inicio" : item.url.slice(1);
    return sectionId === activeSection;
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;

      if (scrollY < window.innerHeight * 0.5) {
        setActiveSection("inicio");
      } else {
        const sections = navItems
          .filter((item) => item.url !== "#top")
          .map((item) => item.url.slice(1));

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { top, height } = element.getBoundingClientRect();
            const elementTop = top + window.scrollY;
            if (
              scrollY >= elementTop - 200 &&
              scrollY < elementTop + height - 200
            ) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTabStyle = (index: number) => {
    const element = tabRefs.current[index];
    return element
      ? { left: `${element.offsetLeft}px`, width: `${element.offsetWidth}px` }
      : {};
  };

  return (
    <header className="fixed top-0 w-full h-12 flex items-center justify-center pt-8 px-6 inset-0 z-100">
      <div className="backdrop-blur-sm bg-white/10 rounded-full py-3 px-6 border border-white/30 flex items-center justify-between w-full max-w-4xl mx-auto">
        <Logo />
        <nav className="relative">
          <div
            className="absolute h-[30px] transition-all duration-300 ease-out bg-white/20 rounded-md"
            style={{
              ...getTabStyle(hoveredIndex ?? activeIndex),
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
          />
          <div
            className="absolute -bottom-1 h-[2px] bg-white transition-all duration-300 ease-out"
            style={getTabStyle(activeIndex)}
          />
          <div className="relative flex ">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                item={item}
                isActive={index === activeIndex}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
