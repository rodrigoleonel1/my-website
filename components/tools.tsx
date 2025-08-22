import Image from "next/image";
import SectionHeader from "./ui/section-header";
import { TOOLS } from "@/lib/tools";

export default function Tools() {
  return (
    <section
      id="habilidades"
      className="bg-gradient-to-t from-blue-950 to-black"
    >
      <SectionHeader
        title="TECNOLOGÍAS QUE USO"
        subtitle="Estas son algunas de las tecnologías con las que tengo experiencia."
      />
      <section className="grid grid-cols-2 gap-3 sm:gap-2 sm:grid-cols-3 transition-all max-w-4xl mx-auto pt-6 pb-12 px-6 lg:px-0">
        {Object.values(TOOLS).map((skill) => (
          <article
            key={skill.id}
            className="py-2 px-3 sm:px-6 flex items-center justify-between rounded-md border border-gray-700/80 bg-black/50 transition-all duration-200 ease-out transform"
          >
            <Image
              width={100}
              height={100}
              className={`${skill.invert ? "invert" : ""} h-8 w-8 rounded-md`}
              src={skill.image}
              alt={skill.name}
            />
            <span className="font-medium text-sm text-white">{skill.name}</span>
          </article>
        ))}
      </section>
    </section>
  );
}
