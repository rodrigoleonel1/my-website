import { Project } from "@/lib/interfaces";
import { ExternalLink } from "lucide-react";
import React from "react";
import ToolBadge from "./tool-badge";

export default function CardMini({ project }: { project: Project }) {
  return (
    <article className="py-4 px-6 rounded-lg shadow-lg transition cursor-pointer bg-black/50 hover:-translate-y-1 h-full w-full">
      <a
        href={project.demo!}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col justify-between h-full gap-1 sm:gap-0"
      >
        <header className="flex justify-between">
          <h3 className="font-bold text-xl">{project.title}</h3>
          <ExternalLink size={24} />
        </header>
        <p className="text-sm text-zinc-400">{project.description}</p>
        <div className="flex flex-wrap items-center gap-1">
          {project.tools.map((tool) => (
            <ToolBadge key={tool.id} tool={tool} />
          ))}
        </div>
      </a>
    </article>
  );
}
