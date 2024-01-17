import { ExternalLinkIcon } from "../svg";
import { MiniProject } from "@/libs/types";

export default function ProjectMiniCard({ project }: { project: MiniProject }) {
  return (
    <a
      key={project.title}
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="py-4 px-6 border-2 border-gray-100 rounded-md shadow-md transition cursor-pointer dark:border-zinc-900 dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-gray-100 hover:-translate-y-1"
    >
      <article className="flex flex-col gap-2">
        <header className="flex justify-between">
          <h3 className="font-bold text-xl dark:text-white">{project.title}</h3>
          <ExternalLinkIcon
            size={28}
            className="cursor-pointer text-emerald-500 hover:text-black/80 dark:hover:text-white/80"
          />
        </header>
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
      </article>
    </a>
  );
}
