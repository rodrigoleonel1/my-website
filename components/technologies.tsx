import React from "react";
import AnimationDiv from "./ui/animation-div";
import Accent from "./ui/accent";
import Image from "next/image";
import { TOOLS } from "@/lib/constants";

export default function Technologies() {
  return (
    <section
      id="tecnologias"
      className="flex flex-col justify-center max-w-4xl p-6 pt-24"
    >
      <AnimationDiv
        element={
          <h2 className="font-bold text-5xl tracking-tighter -ml-0.5 mb-8">
            <Accent>Skills.</Accent>
          </h2>
        }
      />
      <section className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 transition-all">
        {TOOLS.map((skill) => (
          <AnimationDiv
            key={skill.name}
            element={
              <article className="py-2 px-3 sm:px-6 flex items-center justify-between rounded-md border border-gray-700 bg-[url(/noise.png)] bg-slate-800 transition-all duration-200 ease-out transform hover:translate-x-0.5 hover:translate-y-0.5 shadow-brut hover:shadow-[0px_0px_0px_0px_#000000]">
                <Image
                  width={100}
                  height={100}
                  className={`${
                    skill?.invert ? "invert" : ""
                  } h-8 w-8 rounded-md`}
                  src={skill.image}
                  alt={skill.name}
                />
                <span className="font-medium text-sm text-white">
                  {skill.name}
                </span>
              </article>
            }
          />
        ))}
      </section>
      <AnimationDiv
        element={
          <footer className="mt-4 text-center text-xl font-semibold md:mt-6">
            ...y muchas otras!
          </footer>
        }
      />
    </section>
  );
}
