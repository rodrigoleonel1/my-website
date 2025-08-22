"use client";

import Link from "next/link";

interface NavItemProps {
  item: { name: string; url: string };
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  ref: (el: HTMLDivElement | null) => void;
}

export function NavItem({
  item,
  isActive,
  onMouseEnter,
  onMouseLeave,
  ref,
}: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!item.url.startsWith("#")) return;

    e.preventDefault();

    if (item.url === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.getElementById(item.url.substring(1));
    targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      ref={ref}
      className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${
        isActive ? "text-white" : "text-gray-300"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        href={item.url}
        onClick={handleClick}
        className="text-sm flex items-center justify-center h-full font-semibold"
      >
        {item.name}
      </Link>
    </div>
  );
}
