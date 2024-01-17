import { FEATURED_PROJECTS, PROJECTS } from "@/libs/constants";
import { ProjectIcon } from "@/components/svg";
import ProjectCard from "./ui/project-card";
import ProjectMiniCard from "./ui/project-minicard";

export default function Projects() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-semibold mb-6 flex place-items-center gap-2">
        <ProjectIcon size={32} className="text-emerald-400" /> Proyectos
      </h2>
      <section className="mx-auto flex flex-col justify-center place-items-center gap-6">
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectMiniCard key={project.title} project={project} />
        ))}
      </section>
    </section>
  );
}
