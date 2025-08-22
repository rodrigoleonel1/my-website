import React from "react";

export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <article className="flex flex-col gap-2 justify-center items-center pt-12 relative z-50">
      <div className="relative">
        <h2 className="relative animate-in fade-in slide-in-from-top-4 delay-150 duration-700 text-4xl tracking-tighter font-bold sm:text-5xl z-10">
          {title}
        </h2>
        <span className="block absolute -bottom-1 left-0 w-full h-6 bg-blue-950 -skew-y- origin-left" />
        <svg
          width="75"
          height="62"
          viewBox="0 0 75 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute hidden sm:block top-6 -right-22"
        >
          <path
            d="M1 1C6.24431 1.21626 11.5365 2.05428 16.6516 3.13955C28.7596 5.70848 41.2898 9.45859 51.3287 17.0631C61.1747 24.5214 66.3737 34.4703 69.1034 46.2597C70.3557 51.6681 70.3959 56.1136 70.6176 61.434"
            stroke="#D4D4D4"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeDasharray="4 4"
          ></path>
          <path
            d="M63 57.185C65.135 58.2982 67.2076 59.4555 69.2541 60.7235C70.1813 61.2979 70.997 62.1916 71.624 60.9045C72.5057 59.0948 73.0026 57.3294 74.5536 56"
            stroke="#D4D4D4"
            strokeWidth="0.5"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
      <p className="text-neutral-400 px-6 text-center">{subtitle}</p>
    </article>
  );
}
