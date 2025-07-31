import { ExternalLinkIcon } from "../svg";
import { Project } from "@/lib/interfaces";
import { ToolBox } from "./tool-box";

export default function ProjectMinicard({ project }: { project: Project }) {
  return (
    <div
      className="py-4 px-6 rounded-md shadow-md transition cursor-pointer
      bg-[url(/noise.png)] bg-slate-800 hover:-translate-y-1 h-full"
    >
      <a href={project.demo!} target="_blank" rel="noopener noreferrer">
        <article className="flex flex-col justify-between h-full gap-1 sm:gap-0">
          <header className="flex justify-between">
            <h3 className="font-bold text-xl">{project.title}</h3>
            <ExternalLinkIcon size={26} />
          </header>
          <p className="text-sm text-zinc-400">{project.description}</p>
          <footer className="flex flex-wrap items-center gap-1">
            <ToolBox tools={project.tools} />
          </footer>
        </article>
      </a>
    </div>
  );
}
