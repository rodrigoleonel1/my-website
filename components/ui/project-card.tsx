import Image from "next/image";

import { ExternalLinkIcon, GithubIcon } from "../svg";
import { Project } from "@/libs/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="p-6 flex flex-col place-items-center gap-6 border-2 border-gray-100 rounded-md shadow-md sm:flex-row dark:bg-zinc-900 dark:border-zinc-900">
      <Image
        className="h-48 w-1/2 hidden object-cover rounded-md sm:block"
        width={544}
        height={300}
        src={project.img}
        alt={project.title}
        priority
      />
      <main className="flex flex-col justify-start gap-2 sm:w-1/2">
        <h3 className="font-semibold text-2xl dark:text-white">
          {project.title}
        </h3>
        <Image
          className="w-auto object-cover rounded-md sm:hidden"
          width={180}
          height={180}
          src={project.img}
          alt={project.title}
          priority
        />
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-1">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-1 bg-black/90 text-xs text-white dark:text-zinc-200"
            >
              {tool}
            </span>
          ))}
        </div>
        <footer className="flex items-center gap-2 text-emerald-500">
          <a
            href={project.repo}
            target={"_blank"}
            rel={"noreferrer"}
            aria-label="See the repository for this project on github."
          >
            <GithubIcon
              size={32}
              className="cursor-pointer hover:text-black/80 dark:hover:text-white/80"
            />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target={"_blank"}
              rel={"noreferrer"}
              aria-label="See this project website."
            >
              <ExternalLinkIcon
                size={32}
                className="cursor-pointer hover:text-black/80 dark:hover:text-white/80"
              />
            </a>
          )}
        </footer>
      </main>
    </article>
  );
}
