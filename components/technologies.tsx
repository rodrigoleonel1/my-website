import Image from "next/image";

import { SKILLS } from "@/libs/constants";
import { ToolsIcon } from "@/components/svg";

export default function Technologies() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-semibold mb-6 flex place-items-center gap-2">
        <ToolsIcon size={32} className="text-emerald-400" /> Tecnologías
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3">
        {SKILLS.map((skill) => (
          <article
            key={skill.name}
            className="py-2 px-3 sm:px-6 flex items-center justify-between rounded-md shadow-md hover:bg-gray-50 border-2 border-gray-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:bg-zinc-900 dark:border-zinc-900"
          >
            <Image
              width={100}
              height={100}
              className={`${
                skill?.invert ? "dark:invert" : ""
              } h-8 w-8 rounded-md`}
              src={skill.src}
              alt={skill.name}
            />
            <span className="font-medium text-sm text-teal-600 dark:text-white">
              {skill.name}
            </span>
          </article>
        ))}
      </div>
      <div className="mt-4 text-center text-xl font-semibold md:mt-6">
        ...y muchas otras!
      </div>
    </section>
  );
}
