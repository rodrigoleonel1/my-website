import Image from "next/image";
import { ExternalLinkIcon, GithubIcon } from "../svg";
import { Project } from "@/lib/interfaces";
import { ToolBox } from "./tool-box";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="p-6 overflow-hidden rounded-md bg-[url(/noise.png)] bg-slate-800 flex flex-col place-items-center gap-4 sm:gap-6 sm:flex-row">
      <Image
        className="object-cover rounded-md w-full sm:w-1/2 sm:h-48"
        width={544}
        height={300}
        src={project.img}
        alt={project.title}
        priority
      />

      <main className="flex flex-col justify-start gap-4 sm:w-1/2">
        <h3 className="font-semibold text-2xl dark:text-white">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-400">{project.description}</p>

        <footer className="flex justify-between gap-2 text-blue-400 sm:flex-col md:flex-row">
          <div className="flex flex-wrap items-center gap-1">
            <ToolBox tools={project.tools} />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver repositorio en GitHub"
              className="btn-icon transition-transform hover:scale-105"
            >
              <GithubIcon size={24} />
              <p>Repo</p>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label="Ver sitio del proyecto"
                className="btn-icon transition-transform hover:scale-105"
              >
                <ExternalLinkIcon size={24} />
                <p>Demo</p>
              </a>
            )}
          </div>
        </footer>
      </main>
    </article>
  );
}
