import Image from "next/image";
import Link from "next/link";
import { Github, Link2 } from "lucide-react";
import { Project } from "@/lib/interfaces";
import ToolBadge from "./tool-badge";

export default function CardProject({ project }: { project: Project }) {
  return (
    <article className="mt-[30%] flex max-w-4xl flex-col items-center gap-8 rounded-lg bg px-6 py-4 shadow-md transition-all md:mt-4 md:flex-row mx-auto bg-black/50 ">
      <section className="relative -mt-[35%] w-full shrink-0 overflow-hidden rounded-lg md:mt-0 md:w-1/2 md:h-48 object-cover object-center">
        <Image
          title={project.title}
          alt={project.title}
          src={project.img}
          width={544}
          height={300}
          priority
          className="transition-all duration-300 mx-auto rounded-xl object-cover w-full md:-mt-[12%] lg:-mt-[15%]"
        />
      </section>

      <section className="flex flex-col justify-start gap-3">
        <h1 className="font-bold capitalize text-neutral-200">
          {project.title}
        </h1>
        <p className="truncate-2 text-sm text-neutral-400">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-1">
          {project.tools.map((tool) => (
            <ToolBadge key={tool.id} tool={tool} />
          ))}
        </div>

        <footer className="mt-auto flex w-fit items-center gap-4 py-2">
          {project.repo && (
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-blue-950 flex gap-2 border-white/10 border bg-primary px-3 py-2 rounded-lg"
            >
              <Github className="h-6 w-6 transition-all" /> <p>Repo</p>
            </Link>
          )}

          {project.demo && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={project.demo}
              className="hover:bg-blue-950 flex gap-2 border-white/10 border bg-primary px-3 py-2 rounded-lg"
            >
              <Link2 className="h-6 w-6 transition-all" /> <p>Demo</p>
            </Link>
          )}
        </footer>
      </section>
    </article>
  );
}
